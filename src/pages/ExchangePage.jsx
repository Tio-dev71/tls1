import { Link, Navigate, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import Container from "../components/Container";
import SectionBadge from "../components/SectionBadge";
import Reveal from "../components/Reveal";
import { getExchangeBySlug } from "../data/exchangePages";

function StepList({ title, steps, referralCode, registerLabel, link }) {
  return (
    <div className="rounded-[2rem] border border-lime-400/20 bg-black/70 p-6 md:p-8">
      <h3 className="text-2xl font-black text-white">{title}</h3>
      <div className="mt-6 space-y-4">
        {steps.map((step, index) => (
          <Reveal key={step} delay={index * 90} className="hover-lift flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-400 font-black text-black">
              {index + 1}
            </div>
            <p className="text-zinc-200">{step}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-center" delay={200}>
        <div>
          <div className="mb-2 text-sm uppercase tracking-[0.2em] text-zinc-500">Mã giới thiệu</div>
          <div className="inline-flex rounded-2xl border border-dashed border-lime-400/60 px-5 py-3 text-lg font-black text-lime-300">
            {referralCode}
          </div>
        </div>
        <button
          type="button"
          onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
          className="button-glow rounded-2xl bg-lime-400 px-6 py-4 font-bold text-black transition hover:scale-[1.02]"
        >
          {registerLabel}
        </button>
      </Reveal>
    </div>
  );
}

export default function ExchangePage({ onOpenGuide }) {
  const { slug } = useParams();
  const exchange = useMemo(() => getExchangeBySlug(slug), [slug]);
  const [tab, setTab] = useState("new");

  if (!exchange) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <section className="pb-10 pt-12 md:pt-16">
        <Container>
          <Reveal className="card-sheen rounded-[2rem] border border-lime-400/20 bg-black/80 p-6 shadow-[0_0_40px_rgba(250,204,21,0.08)] md:p-8" duration={900}>
            <div className="grid gap-8 md:grid-cols-[1.35fr_0.65fr] md:items-center">
              <div>
                <Reveal>
                  <SectionBadge>{exchange.name}</SectionBadge>
                </Reveal>
                <Reveal as="h1" className="mt-4 text-4xl font-black md:text-6xl" delay={100}>
                  Nhận hoàn phí {exchange.name}
                </Reveal>
                <Reveal as="p" className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300" delay={180}>
                  {exchange.supportText}
                </Reveal>

                <Reveal className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-200" delay={250}>
                  {exchange.quickStats.map((item) => (
                    <div key={item} className="rounded-full border border-zinc-700 bg-zinc-950/70 px-4 py-2">
                      {item}
                    </div>
                  ))}
                </Reveal>

                <Reveal className="mt-8 flex flex-wrap gap-4" delay={320}>
                  <button
                    type="button"
                    onClick={() => onOpenGuide?.({ source: "exchange-hero-register", slug })}
                    className="button-glow rounded-2xl bg-lime-400 px-6 py-3.5 font-bold text-black transition hover:scale-[1.02]"
                  >
                    Nhận hỗ trợ
                  </button>
                  <Link
                    to="/"
                    className="hover-lift rounded-2xl border border-lime-400/40 px-6 py-3.5 font-semibold text-white transition hover:border-lime-300 hover:text-lime-300"
                  >
                    Về trang chủ
                  </Link>
                </Reveal>
              </div>

              <Reveal delay={220} variant="zoom" className="self-start rounded-[1.75rem] border border-lime-400/20 bg-black/60 p-6">
                <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                  <span className="text-zinc-400">Sàn</span>
                  <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-sm text-lime-300">
                    {exchange.name}
                  </span>
                </div>

                <div className="grid items-start gap-5 md:grid-cols-[1.1fr]">
                  <div className="w-full rounded-[1.75rem] border border-lime-400/20 bg-white/20 p-6">
                    <img src={exchange.logo} alt={exchange.name} className="h-full w-full transition duration-500 hover:scale-[1.03]" />
                  </div>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20 pt-8">
        <Container>
          <Reveal as="h2" className="text-3xl font-black md:text-5xl">
            {exchange.introTitle}
          </Reveal>

          <Reveal className="mt-8 rounded-[2rem] border border-lime-400/20 bg-black/75 p-4 md:p-6" delay={120} duration={850}>
            <div className="mb-6 flex flex-wrap gap-3">
              <button
                onClick={() => setTab("new")}
                className={`rounded-2xl px-5 py-3 font-semibold transition ${
                  tab === "new"
                    ? "bg-lime-400 text-black"
                    : "border border-zinc-700 bg-zinc-950/70 text-zinc-300 hover:border-lime-400/30 hover:text-lime-300"
                }`}
              >
                Chưa có tài khoản
              </button>
              <button
                onClick={() => setTab("old")}
                className={`rounded-2xl px-5 py-3 font-semibold transition ${
                  tab === "old"
                    ? "bg-lime-400 text-black"
                    : "border border-zinc-700 bg-zinc-950/70 text-zinc-300 hover:border-lime-400/30 hover:text-lime-300"
                }`}
              >
                Đã có tài khoản
              </button>
            </div>

            {tab === "new" ? (
              <StepList
                title={exchange.noAccountTitle}
                steps={exchange.noAccountSteps}
                referralCode={exchange.referralCode}
                registerLabel={exchange.registerLabel}
                link={exchange.link}
              />
            ) : (
              <StepList
                title={exchange.hasAccountTitle}
                steps={exchange.hasAccountSteps}
                referralCode={exchange.referralCode}
                registerLabel={exchange.registerLabel}
                link={exchange.link}
              />
            )}
          </Reveal>
        </Container>
      </section>
    </>
  );
}
