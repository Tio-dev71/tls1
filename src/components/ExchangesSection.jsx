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

        <Reveal className="overflow-hidden rounded-[2rem] border border-lime-400/20 bg-zinc-950/90 shadow-[0_0_40px_rgba(250,204,21,0.08)]" duration={850}>
          <div className="hidden grid-cols-4 border-b border-zinc-800 bg-lime-400/5 px-6 py-4 text-sm font-semibold text-zinc-300 md:grid">
            <div>Sàn giao dịch</div>
            <div></div>
            <div></div>
            <div className="text-right">Hành động</div>
          </div>

          <div className="divide-y divide-zinc-800">
            {exchangePages.map((item) => (
              <div key={item.name} className="px-6 py-5">
                <div className="grid grid-cols-[48px_1fr_auto] gap-4 items-center">
                  <img
                    src={item.logomini}
                    alt={item.name}
                    className="w-12 h-12 object-contain"
                  />

                  <div>
                    <div className="text-2xl font-bold text-white">{item.name}</div>
                    <div className="mt-1 text-zinc-400">
                      Giảm phí tối: {item.totalRebate}
                    </div>
                  </div>

                  <div className="text-3xl font-bold text-lime-300">
                    {item.totalRebate}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-[1fr_auto] items-center gap-3">
                  <div>
                    <div className="inline-flex rounded-full border border-zinc-700 px-5 py-3 text-white">
                      {item.referralCode}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-lime-400 px-6 py-3 font-semibold text-black"
                    >
                      Hoàn Phí Ngay
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
