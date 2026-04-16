import Container from "./Container";
import RobotCard from "./RobotCard";
import Reveal from "./Reveal";

export default function HeroSection({ onOpenGuide }) {
  return (
    <section id="gioi-thieu" className="relative pb-16 pt-16 lg:pt-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal className="mb-4 inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-1.5 text-sm text-lime-300" delay={80}>
              Chào mừng bạn tới với Traderlaso1
            </Reveal>

            <Reveal as="h1" className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl" delay={140}>
              <span className="text-lime-300">TRADERLASO1</span>
              <br />
              Hoàn lại đến 50% phí giao dịch mỗi ngày
            </Reveal>

            <Reveal as="p" className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300" delay={220}>
              Khi đăng ký hoàn phí trong hệ thống:
              <br />• 📊 Trade Crypto & Forex
              <br />• 🤖 Bot tự động ghi nhận phí
              <br />• 💸 Hoàn phí sau mỗi 23h hàng ngày
              <br />• 🎯 Tham gia cộng đồng & tín hiệu VIP - Bot trade VIP
            </Reveal>

            <Reveal className="mt-8 flex flex-wrap gap-4" delay={300}>
              <button
                type="button"
                onClick={() => onOpenGuide?.({ source: "hero-primary" })}
                className="button-glow rounded-full bg-lime-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
              >
                Bắt đầu hoàn phí ngay
              </button>
              <a
                href="#san"
                className="hover-lift rounded-full border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:border-lime-400/40 hover:text-lime-300"
              >
                Xem hệ thống
              </a>
            </Reveal>
          </div>

          <Reveal delay={220} duration={900} variant="zoom">
            <RobotCard />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
