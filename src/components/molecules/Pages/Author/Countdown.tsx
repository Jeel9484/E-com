type Item = { label: string; value?: string };

type CountdownStaticProps = {
  items?: Item[];
  className?: string;
};

export default function CountdownStatic({
  items = [
    { label: "Days", value: "00" },
    { label: "Hour", value: "00" },
    { label: "Mint", value: "00" },
    { label: "Sec",  value: "00" },
  ],
  className = "",
}: CountdownStaticProps) {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {items.map((it) => (
        <div
          key={it.label}
          className="w-[110px] h-[88px] rounded-md bg-white shadow-sm border border-black/5 flex flex-col items-center justify-center"
        >
          <div className="text-3xl font-semibold leading-none tracking-tight">
            {it.value ?? "00"}
          </div>
          <div className="text-sm text-black/60 mt-1">{it.label}</div>
        </div>
      ))}
    </div>
  );
}
