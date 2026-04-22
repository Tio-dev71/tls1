import { useEffect, useState } from "react";

const socialLinks = [
  {
    name: "Zalo",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" fill="none" />
        <path d="M16.5 10.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-4.5 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-4.5 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z" opacity=".3" />
        <text x="50%" y="50%" textAnchor="middle" fill="white" fontSize="7" fontWeight="900" dy=".3em" fontFamily="Arial">Zalo</text>
      </svg>
    ),
    color: "bg-[#0084FF]",
    href: "https://zalo.me/0377333096",
  },
  {
    name: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    color: "bg-[#1877F2]",
    href: "https://www.facebook.com/traderlaso1official",
  },
  {
    name: "Telegram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.891 7.021l-2.022 9.539c-.15.676-.551.844-1.117.525l-3.078-2.27-1.485 1.428c-.164.164-.302.302-.619.302l.221-3.136 5.711-5.158c.248-.221-.053-.344-.383-.125l-7.059 4.444-3.041-.951c-.661-.207-.674-.661.138-.978l11.884-4.582c.551-.207 1.033.125.844.761z" />
      </svg>
    ),
    color: "bg-[#0088CC]",
    href: "https://t.me/baotran_tls1",
  },
  {
    name: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
    color: "bg-[#25D366]",
    href: "#",
  },
];

export default function FloatingButtons({ onOpenGuide }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-center gap-3">
      {/* Social Links Stack */}
      <div className={`flex flex-col gap-3 transition-all duration-500 ease-in-out ${isExpanded ? "mb-0 opacity-100 translate-y-0" : "mb-[-100%] opacity-0 translate-y-10 pointer-events-none"}`}>
        {socialLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${link.color}`}
            style={{ transitionDelay: `${(socialLinks.length - 1 - index) * 50}ms` }}
            title={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Main Support Toggle Button */}
      <div className="group relative">
        {!isExpanded && (
          <div className="absolute bottom-full right-0 mb-4 invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-1">
            <div className="relative rounded-xl bg-neon-400 px-4 py-2.5 text-[13px] font-bold text-black whitespace-nowrap shadow-xl">
              Hỗ Trợ Nhanh
              <div className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 bg-neon-400"></div>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex h-14 w-14 items-center justify-center rounded-full bg-neon-400 text-black shadow-[0_0_30px_rgba(163,230,53,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(163,230,53,0.5)] active:scale-95 ${isExpanded ? "rotate-90 scale-105" : ""}`}
          aria-label="Mở hỗ trợ"
        >
          {isExpanded ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-neon-400 shadow-xl transition-all duration-500 hover:scale-110 active:scale-95 ${showScrollTop ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-50 pointer-events-none"
          }`}
        aria-label="Quay lại đầu trang"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  );
}
