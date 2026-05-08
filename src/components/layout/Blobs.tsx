export function Blobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="animate-blob absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/20 blur-3xl" />
      <div
        className="animate-blob absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="animate-blob absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full bg-chart-3/30 blur-3xl"
        style={{ animationDelay: "-12s" }}
      />
    </div>
  );
}
