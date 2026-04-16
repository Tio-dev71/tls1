import { useEffect, useState } from "react";
import { submitLeadForm } from "../lib/submitLeadForm";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  telegram: "",
};

export default function GuideModal({ isOpen, onClose, context = {} }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setForm(initialForm);
      setStatus("idle");
      setMessage("");
    }
  }, [isOpen]);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name.trim()) {
      setStatus("error");
      setMessage("Bạn nhập tên trước nhé.");
      return;
    }

    if (!form.email.trim() && !form.phone.trim() && !form.telegram.trim()) {
      setStatus("error");
      setMessage("Bạn cần để lại ít nhất 1 cách liên hệ: email, số điện thoại hoặc Telegram.");
      return;
    }

    setStatus("loading");
    setMessage("Đang gửi thông tin...");

    try {
      await submitLeadForm({
        ...form,
        source: context.source || "website",
        exchange: context.slug || "homepage",
        pageTitle: document.title,
        pageUrl: window.location.href,
      });

      setStatus("success");
      setMessage("Đã nhận thông tin. Đội ngũ sẽ liên hệ bạn sớm nhất.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Gửi thất bại. Bạn kiểm tra lại endpoint lưu form nhé.");
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8">
      <button
        aria-label="Đóng form"
        className="modal-backdrop absolute inset-0 bg-black/80 backdrop-blur-[2px]"
        onClick={onClose}
        type="button"
      />

      <div className="modal-panel relative z-10 w-full max-w-[520px] rounded-[2rem] border border-lime-400/30 bg-black px-5 py-6 shadow-[0_0_80px_rgba(250,204,21,0.12)] md:px-8 md:py-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-4 text-3xl leading-none text-lime-300 transition hover:scale-110"
        >
          ×
        </button>

        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">Tư Vấn Giao Dịch</h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-8 text-zinc-300 md:text-lg">
            Hãy để lại thông tin liên hệ của bạn. Đội ngũ của chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
          </p>
        </div>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <Input
            placeholder="Tên Của Bạn"
            value={form.name}
            onChange={handleChange("name")}
            autoComplete="name"
          />
          <Input
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            autoComplete="email"
          />
          <Input
            placeholder="Số Điện Thoại"
            type="tel"
            value={form.phone}
            onChange={handleChange("phone")}
            autoComplete="tel"
          />
          <Input
            placeholder="Telegram Username (Nếu Có)"
            value={form.telegram}
            onChange={handleChange("telegram")}
            autoComplete="off"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="button-glow w-full rounded-full bg-lime-400 px-6 py-4 text-lg font-bold text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Đang Gửi..." : "Đăng Ký Ngay"}
          </button>
        </form>

        <div className="mt-6 min-h-6 text-center text-sm">
          {message ? (
            <span className={status === "error" ? "text-red-400" : status === "success" ? "text-lime-300" : "text-zinc-400"}>
              {message}
            </span>
          ) : null}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://t.me/baotran_tls1"
            target="_blank"
            rel="noreferrer"
            className="button-glow rounded-full bg-[linear-gradient(180deg,#f7d446,#e6c34a)] px-8 py-4 text-xl font-semibold text-black transition hover:scale-[1.02]"
          >
            Tham gia nhóm Trading
          </a>
        </div>
      </div>
    </div>
  );
}

function Input({ value, onChange, type = "text", placeholder, autoComplete }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className="h-14 w-full rounded-full border border-transparent bg-white px-5 text-lg text-black outline-none transition placeholder:text-zinc-500 focus:border-lime-300 focus:ring-2 focus:ring-lime-300/40"
    />
  );
}
