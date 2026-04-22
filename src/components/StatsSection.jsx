import Container from "./Container";
import Reveal from "./Reveal";

export default function StatsSection() {
  const customStats = [
    { label: "Trader tham gia", value: "12,000+" },
    { label: "Đã hoàn phí", value: "$2.3M+" },
    { label: "Sàn giao dịch", value: "6+" }
  ];

  return (
    <section className="py-20 border-t border-zinc-900 bg-black">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-around gap-12 md:gap-4 text-center">
          {customStats.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 100}
              className="flex-1 border-r border-zinc-900 last:border-r-0"
            >
              <div className="text-5xl md:text-6xl font-black text-white mb-2">{item.value}</div>
              <div className="text-zinc-500 font-medium tracking-wide uppercase text-sm">{item.label}</div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
