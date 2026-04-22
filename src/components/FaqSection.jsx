import Container from "./Container";
import Reveal from "./Reveal";
import { faqs } from "../data/siteData";

export default function FaqSection() {
  return (
    <section id="faq" className="py-16">
      <Container className="max-w-3xl">
        <Reveal className="mb-12 text-center text-sm font-medium text-neon-400 tracking-widest uppercase">
          FAQ
        </Reveal>
        <Reveal className="mb-14 text-center">
          <h2 className="text-3xl font-black md:text-5xl text-white">Chúng tôi có câu trả lời</h2>
        </Reveal>

        <div className="space-y-0">
          {faqs.map((item, index) => (
            <Reveal key={item.q} delay={index * 70}>
              <details className="group border-b border-zinc-900 py-6 transition duration-300">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-white tracking-wide">
                  {item.q}
                  <span className="text-zinc-500 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-relaxed text-zinc-400 pr-12 whitespace-pre-line">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
