import Container from "./Container";
import SectionBadge from "./SectionBadge";
import Reveal from "./Reveal";
import { features } from "../data/siteData";

export default function FeaturesSection() {
  return (
    <section className="py-16">
      <Container>
        <Reveal className="mb-10 max-w-3xl">
          <SectionBadge>Điểm mạnh của TLS1</SectionBadge>
          <h2 className="text-3xl font-black md:text-5xl">
            🤖 Server sử dụng Bot hiện tại tự động duy nhất.
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {features.map((item, index) => (
            <Reveal key={item.title} delay={index * 90} className="hover-lift rounded-[1.75rem] border border-zinc-800 bg-zinc-950/80 p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-lime-300">✦</div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
