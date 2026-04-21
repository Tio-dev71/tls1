import { useRef } from "react";
import Container from "./Container";
import SectionBadge from "./SectionBadge";
import Reveal from "./Reveal";
import { exchangePages } from "../data/exchangePages";

export default function ExchangesSection() {
  const scrollRef = useRef(null);

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
        <Reveal className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionBadge>Bảng ưu đãi sàn giao dịch</SectionBadge>
            <h2 className="text-3xl font-black md:text-5xl">Bắt đầu nhận hoàn phí ngay </h2>
          </div>
        </Reveal>

        <Reveal duration={850}>
          <div
            ref={scrollRef}
            className="hide-scrollbar flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory md:gap-6"
          >
            {exchangePages.map((item) => (
              <div
                key={item.name}
                className="group relative h-full w-[calc(50%-6.5px)] flex-shrink-0 snap-start md:w-auto md:min-w-[380px]"
              >
                <div className="hover-lift relative flex h-full flex-col overflow-hidden rounded-3xl border border-lime-400/10 bg-zinc-900/40 p-4 transition-all duration-500 hover:border-lime-400/30 hover:bg-zinc-900/60 md:rounded-[2.5rem] md:p-8">
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-lime-400/10 blur-[60px] transition-all group-hover:bg-lime-400/20" />

                  <div className="mb-4 flex items-center justify-between md:mb-8">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800/50 p-2 ring-1 ring-white/5 transition-transform duration-500 group-hover:scale-110 md:h-16 md:w-16 md:rounded-2xl md:p-3">
                      <img
                        src={item.logomini}
                        alt={item.name}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="text-[10px] font-medium tracking-wider text-zinc-500 uppercase md:text-sm">
                      Code: {item.referralCode}
                    </div>
                  </div>

                  <div className="mb-4 md:mb-6">
                    <h3 className="text-xl font-bold text-white md:text-3xl">{item.name}</h3>
                    <p className="mt-1 text-[11px] text-zinc-400 md:mt-2 md:text-base">Tỷ lệ hoàn cao nhất</p>
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
                </div>
              </div>
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

            <div className="hidden gap-3 md:flex">
              <button
                onClick={() => scroll("left")}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/5 bg-zinc-900/50 text-white transition-all hover:border-lime-400/30 hover:bg-zinc-800 hover:text-lime-400"
                aria-label="Scroll left"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/5 bg-zinc-900/50 text-white transition-all hover:border-lime-400/30 hover:bg-zinc-800 hover:text-lime-400"
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
