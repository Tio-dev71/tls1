export default function RobotCard() {
  return (
    <div className="relative floating-soft">
      <div className="absolute inset-0 rounded-[2rem] bg-lime-400/10 blur-3xl" />
      <div className="card-sheen relative rounded-[2rem] border border-lime-400/20 bg-gradient-to-br from-lime-400/10 via-zinc-950 to-black p-6 shadow-[0_0_60px_rgba(163,230,53,0.12)]">
        <div className="mb-6 flex items-center justify-between rounded-2xl border border-white/5 bg-black/40 px-4 py-3">
          <div>
            <div className="text-sm text-zinc-400">Mascot thương hiệu</div>
            <div className="font-semibold text-lime-300">Robot đại diện TRADERLASO1</div>
          </div>
          <div className="rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-xs text-lime-300">
            Brand Identity
          </div>
        </div>

        <div className="grid items-start gap-5 md:grid-cols-[1.1fr_0.9fr]">
          <div className="self-start rounded-[1.75rem] border border-lime-400/20 bg-black/60 p-6">
            <img src="/bot.png" alt="botTLS1" className="h-full w-full scale-125 object-contain image-float" />
          </div>

          <div className="space-y-5">
            <div className="hover-lift rounded-[1.75rem] border border-zinc-800 bg-zinc-950/80 p-5">
              <div className="text-sm text-zinc-400">Tính cách thương hiệu</div>
              <div className="mt-2 text-lg font-bold text-white">💸 Đã hoàn $2.3M+ cho 12,000+ traders</div>
            </div>
            <div className="hover-lift rounded-[1.75rem] border border-zinc-800 bg-zinc-950/80 p-5">
              <div className="text-sm text-zinc-400">Thông điệp</div>
              <div className="mt-2 text-lg font-semibold text-lime-300">Biến chi phí giao dịch thành dòng tiền quay lại mỗi ngày.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
