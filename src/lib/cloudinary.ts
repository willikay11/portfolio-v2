/**
 * Cloudinary image optimization utility
 * 
 * Replace YOUR_CLOUD_NAME with your actual Cloudinary cloud name
 */

const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'drauzqmrk';

/**
 * Generate optimized Cloudinary URL for images
 * @param publicId - The path to the image (e.g., 'v1769516549/tukai/hero_cebuop')
 * @param options - Cloudinary transformation options
 */
export function getCloudinaryUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: number | 'auto';
    format?: string | 'auto';
    crop?: string;
    aspectRatio?: string;
    gravity?: string;
    effects?: string[];
  } = {}
): string {
  const {
    width,
    height,
    quality,
    format,
    crop = 'fill',
    aspectRatio,
    gravity = 'auto',
    effects = [],
  } = options;

  // Build transformation string
  const transformations: string[] = [];
  
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (aspectRatio) transformations.push(`ar_${aspectRatio}`);
  if (width || height || aspectRatio) transformations.push(`c_${crop}`);
//   if (gravity) transformations.push(`g_${gravity}`);
  effects.forEach(effect => transformations.push(`e_${effect}`));
  if (quality) transformations.push(`q_${quality}`);
  if (format) transformations.push(`f_${format}`);

  const transformString = transformations.join(',');

  // Remove .png, .jpg, etc. from publicId if present
  const cleanPublicId = publicId.replace(/\.(png|jpg|jpeg|webp|gif)$/i, '');

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformString}/${cleanPublicId}${format && format !== 'auto' ? '.' + format : ''}`;
}

/**
 * Convert local image path to Cloudinary public ID
 * @param localPath - Local path like '/images/projects/solgates/hero.png'
 */
export function localPathToCloudinaryId(localPath: string): string {
  // Remove leading slash and file extension
  return localPath
    .replace(/^\//, '')
    .replace(/\.(png|jpg|jpeg|webp|gif)$/i, '');
}

/**
 * Get optimized image URL from local path
 * @param localPath - Local path or Cloudinary public ID
 * @param options - Cloudinary transformation options
 */
export function getOptimizedImageUrl(
  localPath: string,
  options: {
    width?: number;
    height?: number;
    quality?: number | 'auto';
    format?: string | 'auto';
    aspectRatio?: string;
    gravity?: string;
    effects?: string[];
  } = {}
): string {
  // If it starts with v[number], it's already a Cloudinary ID
  const publicId = localPath.startsWith('v') ? localPath : localPathToCloudinaryId(localPath);
  return getCloudinaryUrl(publicId, options);
}

/**
 * Generate a blur placeholder data URL for LQIP
 * @param publicId - Cloudinary public ID
 */
export function getBlurDataUrl(publicId: string): string {
  return getCloudinaryUrl(publicId, {
    width: 40,
    quality: 30,
    format: 'jpg',
    crop: 'scale'
  });
}
