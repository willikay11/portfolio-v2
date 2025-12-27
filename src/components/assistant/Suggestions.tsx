type Props = {
  items: string[];
  onSelect: (text: string) => void;
};

export function Suggestions({ items, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item)}
          className="rounded-full border border-neutral-700 px-4 py-1.5 text-sm text-neutral-200 hover:bg-neutral-800 transition"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
