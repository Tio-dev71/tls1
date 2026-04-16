import Container from "./Container";
import SectionBadge from "./SectionBadge";
import Reveal from "./Reveal";
import { faqs } from "../data/siteData";

export default function FaqSection() {
  return (
    <section id="faq" className="py-16">
      <Container className="max-w-5xl">
        <Reveal className="mb-8 text-center">
          <SectionBadge>Câu hỏi thường gặp</SectionBadge>
          <h2 className="text-3xl font-black md:text-5xl">FAQ về Traderlaso1</h2>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <Reveal key={item.q} delay={index * 70}>
              <details className="group hover-lift rounded-[1.5rem] border border-zinc-800 bg-zinc-950/80 p-6 transition duration-300 open:border-lime-400/20 open:bg-zinc-950">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-white">
                  {item.q}
                  <span className="text-lime-300 transition group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-4 leading-8 text-zinc-400">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
