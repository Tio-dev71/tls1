export default function SectionBadge({ children }) {
  return (
    <div className="mb-3 inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-1 text-sm text-lime-300">
      {children}
    </div>
  );
}