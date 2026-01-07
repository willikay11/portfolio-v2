import { motion } from "framer-motion";

export function Profile() {
  return (
    <motion.div
      className="max-w-2xl space-y-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex gap-6 items-start">
        <div className="w-24 h-24 rounded-full bg-neutral-200 dark:bg-neutral-800 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
            WILLIAM KAMAU KAMUYU
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            I am a technical leader with extensive experience in software
            development methodologies and programming. I excel at managing
            complex projects and leading teams to deliver high-quality software
            solutions on time.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          I'm WILLIAM KAMAU KAMUYU, a Lead Software Engineer at Gapstack Limited
          based in Nairobi, Kenya. I have a strong passion for software
          engineering and enjoy collaborating with teams to create impactful
          software solutions. My core values include continuous learning and
          delivering quality results.
        </p>

        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          If you're curious about my professional background or specific
          projects I've worked on, feel free to ask! What interests you the most
          about software engineering?
        </p>
      </div>
    </motion.div>
  );
}
