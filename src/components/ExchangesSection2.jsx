import { useRef, useState } from "react";
import Container from "./Container";
import SectionBadge from "./SectionBadge";
import Reveal from "./Reveal";
import { exchangePages } from "../data/exchangePages";

export default function ExchangesSection2() {
  const scrollRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="san" className="py-16">
      <Container>
        <Reveal className="mb-12 flex flex-col items-center justify-center text-center gap-4">
          <div className="flex flex-col items-center">
            <SectionBadge>Bảng ưu đãi sàn giao dịch</SectionBadge>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">Chọn sàn & bắt đầu nhận hoàn phí</h2>
          </div>
        </Reveal>

        <Reveal duration={850}>
          <div
            ref={scrollRef}
            className="hide-scrollbar flex items-stretch gap-3 overflow-x-auto pt-4 pb-4 snap-x snap-mandatory md:gap-6"
          >
            {exchangePages.map((item, index) => (
              <Reveal
                key={item.name}
                delay={100}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group hover-glow-border relative h-full w-[calc(50%-6.5px)] flex-shrink-0 snap-start md:w-auto md:min-w-[380px] flex flex-col justify-between rounded-3xl border border-lime-400/25 bg-white/[0.02] backdrop-blur-xl p-4 transition-all duration-500 hover:border-lime-400/50 hover:bg-white/[0.05] md:rounded-[2.5rem] md:p-8 hover-panel ${
                  hoveredIndex === null && index === 0 ? "active-glow-border" : ""
                }`}
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-lime-400/10 blur-[60px] transition-all group-hover:bg-lime-400/20" />
                <div className="mb-4 w-full h-24 md:h-32 bg-white/[0.03] rounded-2xl border border-white/10 flex flex-col items-center justify-between relative overflow-hidden p-4 md:p-6 md:mb-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
                  <div className="flex-1 flex items-center justify-center w-full relative z-10">
                    <img
                      src={item.logotext}
                      alt={item.name}
                      style={{ transform: `scale(${item.logoScale || 1})` }}
                      className="h-9 md:h-14 w-auto max-w-[80%] object-contain"
                    />
                  </div>
                  <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-lime-400/10 to-transparent opacity-50"></div>
                  <div className="relative z-10 pt-1 md:pt-2 text-[10px] font-medium tracking-wider text-zinc-500 uppercase md:text-xs">
                    Code: <span className="text-lime-400">{item.referralCode}</span>
                  </div>
                </div>

                <div className="mb-4 md:mb-6 min-h-[60px] md:min-h-[100px]">
                  <h3 className="text-xl font-bold text-white md:text-3xl">{item.name}</h3>
                  <p className="mt-1 text-[11px] text-zinc-400 md:mt-2 md:text-base line-clamp-2">{item.sub}</p>
                </div>

                <div className="mb-4 mt-auto md:mb-8">
                  <div className="text-[9px] font-semibold uppercase tracking-widest text-lime-400/80 md:text-xs">
                    Hoàn phí lên đến
                  </div>
                  <div className="text-3xl font-black tracking-tight text-white md:text-7xl">
                    {item.totalRebate}
                  </div>
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="button-glow flex w-full items-center justify-center rounded-xl bg-lime-400 py-2.5 text-center text-xs font-bold text-black transition-all hover:scale-[1.02] active:scale-95 md:rounded-2xl md:py-4 md:text-base"
                >
                  Hoàn Phí
                </a>
              </Reveal>
            ))}
          </div>

          {/* Controls & Indicators */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="relative h-1 w-12 overflow-hidden rounded-full bg-zinc-800/50 md:w-16">
                <div className="animate-swipe-hint absolute h-full w-1/2 bg-lime-400/60" />
              </div>
              <span className="text-[10px] font-medium tracking-wide text-zinc-500 uppercase md:text-xs">
                Vuốt để xem thêm
              </span>
            </div>

            <div className="flex gap-2 md:gap-3">
              <button
                onClick={() => scroll("left")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-zinc-900/50 text-white transition-all hover:border-lime-400/30 hover:bg-zinc-800 hover:text-lime-400 md:h-12 md:w-12"
                aria-label="Scroll left"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-zinc-900/50 text-white transition-all hover:border-lime-400/30 hover:bg-zinc-800 hover:text-lime-400 md:h-12 md:w-12"
                aria-label="Scroll right"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
