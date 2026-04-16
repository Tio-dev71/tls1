import Container from "./Container";
import SectionBadge from "./SectionBadge";
import Reveal from "./Reveal";
import { benefits } from "../data/siteData";

export default function BenefitsSection() {
  return (
    <section id="loi-ich" className="py-12">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="card-sheen rounded-[2rem] border border-lime-400/20 bg-gradient-to-br from-lime-400/10 via-zinc-950 to-black p-8" duration={850}>
            <SectionBadge>Gói quyền lợi VIP</SectionBadge>
            <h2 className="text-3xl font-black md:text-4xl">Tín hiệu Bot h1 winrate 99%</h2>
            <p className="mt-4 leading-8 text-zinc-300">
              Được Admin hỗ trợ kiến thức 1:1. Tặng bộ tài liệu trading thực chiến trị giá 2000U. Các Plan độc quyền của VIP. Có cơ hội nhận được các giải thưởng Vol từ Admin.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://www.okx.com/join/HoanPhiTLS1" target="_blank" rel="noreferrer" className="button-glow rounded-full bg-lime-400 px-6 py-3 font-semibold text-black">Đăng ký VIP ngay</a>
              <button className="hover-lift rounded-full border border-zinc-700 px-6 py-3 font-semibold text-white">Xem chi tiết</button>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((item, index) => (
              <Reveal key={item} delay={index * 70} className="hover-lift rounded-[1.5rem] border border-zinc-800 bg-zinc-950/80 p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-lime-400 text-sm font-bold text-black">✓</div>
                  <p className="leading-7 text-zinc-300">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
