import type { Handler } from "@netlify/functions";
import { Resend } from "resend";

interface NetlifyFormPayload {
  payload: {
    form_name: string;
    data: Record<string, string>;
  };
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let email = "";
  try {
    const body: NetlifyFormPayload = JSON.parse(event.body || "{}");
    email = (body.payload?.data?.email || "").trim();
  } catch {
    return { statusCode: 400, body: "Invalid payload" };
  }

  if (!email) {
    return { statusCode: 400, body: "Missing email" };
  }

  const resendApiKey = process.env.RESEND_API_KEY || "";
  const resendFrom = process.env.RESEND_FROM || "";

  if (!resendApiKey || !resendFrom) {
    return { statusCode: 500, body: "Missing RESEND_API_KEY or RESEND_FROM" };
  }

  try {
    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      from: resendFrom,
      to: email,
      subject: "Konfirmasi Early Access miman.id",
      html: [
        "<p>Halo,</p>",
        "<p>Perkenalkan, saya Rifki Fauzi, Founder &amp; CEO miman.id.</p>",
        "<p>Terima kasih atas kepercayaan Anda dengan mendaftar early access <strong>miman.id</strong>. Kami sangat menghargai dukungan Anda terhadap visi kami untuk membantu online shop di Indonesia berjualan lebih cerdas melalui teknologi AI.</p>",
        "<p>Sebagai bentuk apresiasi atas kepercayaan Anda di tahap awal ini, kami akan memberikan <strong>akses gratis selama 1 bulan penuh</strong> saat miman.id resmi diluncurkan.</p>",
        "<p>Saat ini tim kami sedang mempersiapkan produk dengan sebaik mungkin agar Anda mendapatkan pengalaman yang optimal sejak hari pertama penggunaan. Setelah miman.id resmi tersedia, Anda akan menjadi salah satu yang pertama kami hubungi melalui email ini.</p>",
        "<p>Apabila Anda memiliki pertanyaan, masukan, atau ingin berdiskusi lebih lanjut, silakan membalas email ini. Saya akan dengan senang hati membacanya secara langsung.</p>",
        "<p>Terima kasih atas kepercayaan dan dukungan Anda.</p>",
        "<p>Salam hormat,<br/><strong>Rifki Fauzi</strong><br/>Founder &amp; CEO<br/>miman.id</p>",
      ].join(""),
    });
  } catch {
    return { statusCode: 502, body: "Failed to send confirmation email" };
  }

  return { statusCode: 200, body: "OK" };
};
