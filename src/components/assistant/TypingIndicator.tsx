export function TypingIndicator() {
  return (
    <div className="max-w-xs px-4 py-3">
      <div className="flex items-center gap-1">
        <Dot delay={0} />
        <Dot delay={150} />
        <Dot delay={300} />
      </div>
    </div>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <span
      className="h-2 w-2 rounded-full bg-neutral-600 dark:bg-neutral-400 animate-bounce"
      style={{ animationDelay: `${delay}ms` }}
    />
  );
}
