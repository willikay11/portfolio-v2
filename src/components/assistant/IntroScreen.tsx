"use client";

type IntroScreenProps = {
  onStart: () => void;
};

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-semibold">
        Hey, I’m williamkamau 👋
      </h1>

      <h2 className="text-7xl font-bold mt-4">
        Lead Software Engineer
      </h2>

      <div className="my-12">
        {/* avatar / illustration */}
      </div>

      <div className="w-full max-w-xl">
        <button
          onClick={onStart}
          className="w-full rounded-full border px-6 py-4 text-lg"
        >
          Ask me anything…
        </button>
      </div>

      <div className="flex gap-4 mt-8">
        {["Me", "Projects", "Skills", "Contact", "Resume"].map((label) => (
          <button
            key={label}
            onClick={() => onStart()}
            className="rounded-xl border px-6 py-4"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
