import Container from "./Container";
import SectionBadge from "./SectionBadge";
import Reveal from "./Reveal";
import { exchangePages } from "../data/exchangePages";

export default function ExchangesSection() {
  return (
    <section id="san" className="py-16">
      <Container>
        <Reveal className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionBadge>Bảng ưu đãi sàn giao dịch</SectionBadge>
            <h2 className="text-3xl font-black md:text-5xl">Bắt đầu nhận hoàn phí ngay</h2>
          </div>
        </Reveal>

        <Reveal duration={850}>
          <div className="hide-scrollbar flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory">
            {exchangePages.map((item) => (
              <div
                key={item.name}
                className="group relative h-full min-w-[300px] flex-shrink-0 snap-center md:min-w-[380px]"
              >
                <div className="hover-lift relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-lime-400/10 bg-zinc-900/40 p-8 transition-all duration-500 hover:border-lime-400/30 hover:bg-zinc-900/60">
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-lime-400/10 blur-[60px] transition-all group-hover:bg-lime-400/20" />

                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800/50 p-3 ring-1 ring-white/5 transition-transform duration-500 group-hover:scale-110">
                      <img
                        src={item.logomini}
                        alt={item.name}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="text-sm font-medium tracking-wider text-zinc-500 uppercase">
                      Code: {item.referralCode}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-white">{item.name}</h3>
                    <p className="mt-2 text-zinc-400">Tỷ lệ hoàn phí cao nhất thị trường</p>
                  </div>

                  <div className="mb-8 mt-auto">
                    <div className="text-xs font-semibold uppercase tracking-widest text-lime-400/80">
                      Hoàn phí lên đến
                    </div>
                    <div className="text-6xl font-black tracking-tight text-white md:text-7xl">
                      {item.totalRebate}
                    </div>
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="button-glow flex w-full items-center justify-center rounded-2xl bg-lime-400 py-4 text-center font-bold text-black transition-all hover:scale-[1.02] active:scale-95"
                  >
                    Hoàn Phí Ngay
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
