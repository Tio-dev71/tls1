export async function submitLeadForm(payload) {
  const response = await fetch("/api/lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload,
      pageTitle: payload.pageTitle || document.title || "",
      pageUrl: payload.pageUrl || window.location.href || "",
      submittedAt: new Date().toISOString(),
    }),
  });

  const result = await response.json();

  if (!response.ok || !result.ok) {
    throw new Error(result.message || "Gửi form thất bại");
  }

  return result;
}