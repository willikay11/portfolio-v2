type Props = {
  items: string[];
  onSelect: (text: string) => void;
};

export function Suggestions({ items, onSelect }: Props) {
  return (
    <div className="overflow-x-auto pb-2 -mx-1 px-1">
      <div className="flex gap-2">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => onSelect(item)}
            className="rounded-full border border-neutral-300 dark:border-neutral-700 px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition whitespace-nowrap flex-shrink-0"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
