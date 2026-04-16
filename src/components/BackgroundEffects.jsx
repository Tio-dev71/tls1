export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="background-orb absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-500/10 blur-3xl" />
      <div className="background-orb background-orb-delay absolute right-0 top-[30rem] h-80 w-80 rounded-full bg-lime-400/10 blur-3xl" />
      <div className="background-orb background-orb-slow absolute bottom-0 left-0 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(163,230,53,0.08),transparent_25%),linear-gradient(to_bottom,transparent,rgba(163,230,53,0.03),transparent)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:80px_80px]" />
    </div>
  );
}
