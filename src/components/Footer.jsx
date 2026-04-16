import Container from "./Container";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black/80">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <Reveal delay={40}>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-lime-400/30 bg-lime-400/10">
              <span className="text-xl">🤖</span>
            </div>
            <div>
              <div className="text-lg font-black tracking-wide text-lime-300">TRADERLASO1</div>
              <div className="text-xs text-zinc-500">Modern basic trading brand</div>
            </div>
          </div>
          <p className="mt-4 max-w-md leading-7 text-zinc-400">
            TLS1 là một cộng đồng trao đổi kiến thức và tin tức về thị trường Crypto. Ngoài ra còn là cộng đồng sở hữu Bot tín hiệu mạnh mẽ. Tin tức cập nhật 24/7.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mb-4 font-bold text-white">Trang chính</div>
          <div className="space-y-3 text-zinc-400">
            <div>Giới thiệu</div>
            <div>Sàn giao dịch</div>
            <div>Lợi ích</div>
            <div>Đánh giá</div>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mb-4 font-bold text-white">Hệ thống</div>
          <div className="space-y-3 text-zinc-400">
            <div>VIP Program</div>
            <div>Community</div>
            <div>Academy</div>
            <div>Smart Trader</div>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mb-4 font-bold text-white">Liên hệ</div>
          <div className="space-y-3 text-zinc-400">
            <div>Email: traderlaso1.vn@gmail.com</div>
            <div>Telegram: Founder @baotran_tls1</div>
            <div>Telegram: Dev @tiodev71</div>
            <div>X / TikTok / Discord</div>
          </div>
        </Reveal>
      </Container>
      <div className="border-t border-zinc-900 px-6 py-5 text-center text-sm text-zinc-500">
        © 2026 TRADERLASO1. All rights reserved.
      </div>
    </footer>
  );
}
