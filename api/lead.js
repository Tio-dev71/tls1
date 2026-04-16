export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      message: "Method not allowed",
    });
  }

  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      return res.status(500).json({
        ok: false,
        message: "Thiếu SUPABASE_URL hoặc SUPABASE_SERVICE_ROLE_KEY trên Vercel",
        hasUrl: !!supabaseUrl,
        hasKey: !!supabaseServiceRoleKey,
      });
    }

    const { createClient } = await import("@supabase/supabase-js");

    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    const body = req.body || {};

    const row = {
      name: body.name || "",
      email: body.email || "",
      phone: body.phone || "",
      telegram: body.telegram || "",
      exchange: body.exchange || "",
      source: body.source || "",
      page_title: body.pageTitle || "",
      page_url: body.pageUrl || "",
      submitted_at: body.submittedAt || new Date().toISOString(),
    };

    const { error } = await supabase.from("leads").insert(row);

    if (error) {
      return res.status(500).json({
        ok: false,
        message: error.message,
      });
    }

    return res.status(200).json({
      ok: true,
      message: "saved",
    });
  } catch (err) {
    console.error("API /api/lead error:", err);

    return res.status(500).json({
      ok: false,
      message: err.message || "Server error",
    });
  }
}