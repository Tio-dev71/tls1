import Container from "./Container";
import Reveal from "./Reveal";
import { stats } from "../data/siteData";

export default function StatsSection() {
  return (
    <section className="py-2">
      <Container>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 80}
              className="hover-lift rounded-[1.75rem] border border-lime-400/20 bg-zinc-950/80 p-6 shadow-[0_0_20px_rgba(163,230,53,0.06)]"
            >
              <div className="text-4xl font-black text-lime-300">{item.value}</div>
              <div className="mt-2 text-zinc-300">{item.label}</div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
