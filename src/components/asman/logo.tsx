type LogoMarkProps = {
  size?: "header" | "hero";
};

export function LogoMark({ size = "header" }: LogoMarkProps) {
  const compact = size === "header";
  return (
    <div
      className={compact ? "logo-mark logo-mark-header" : "logo-mark logo-mark-hero"}
      aria-label="Asman Associates"
    >
      <span className="logo-mark-aa" aria-hidden="true">
        <span className="a-left">A</span>
        <span className="a-right">A</span>
      </span>
      <span className="logo-mark-name">Asman Associates</span>
    </div>
  );
}
