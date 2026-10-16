/**
 * Optional Serverless Endpoint (Cloudflare Pages Function: /api/inquiry)
 * Performs strict server-side validation, field length enforcement, and anti-spam checks
 * before forwarding the inquiry to Web3Forms or Resend towards fagonlab@gmail.com.
 */

interface InquiryEnv {
  WEB3FORMS_ACCESS_KEY?: string;
  RESEND_API_KEY?: string;
}

const MAX_LENGTHS: Record<string, number> = {
  fullName: 120,
  contactEmail: 160,
  contactPhone: 40,
  audienceId: 40,
  serviceId: 80,
  description: 3000,
  referenceLink: 500,
  budget: 150,
  desiredDate: 30,
};

function sanitizeText(input: unknown, maxLen: number): string {
  if (typeof input !== 'string') return '';
  return input.trim().slice(0, maxLen);
}

export async function onRequestPost(context: { request: Request; env: InquiryEnv }): Promise<Response> {
  try {
    const body = (await context.request.json()) as Record<string, unknown>;

    // 1. Anti-spam Honeypot check
    if (typeof body.website_url_hp === 'string' && body.website_url_hp.trim() !== '') {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 2. Server-side validation & field length limits
    const fullName = sanitizeText(body.fullName, MAX_LENGTHS.fullName);
    const contactEmail = sanitizeText(body.contactEmail, MAX_LENGTHS.contactEmail);
    const contactPhone = sanitizeText(body.contactPhone, MAX_LENGTHS.contactPhone);
    const audienceId = sanitizeText(body.audienceId, MAX_LENGTHS.audienceId);
    const serviceId = sanitizeText(body.serviceId, MAX_LENGTHS.serviceId);
    const description = sanitizeText(body.description, MAX_LENGTHS.description);
    const referenceLink = sanitizeText(body.referenceLink, MAX_LENGTHS.referenceLink);
    const budget = sanitizeText(body.budget, MAX_LENGTHS.budget);
    const desiredDate = sanitizeText(body.desiredDate, MAX_LENGTHS.desiredDate);

    if (!fullName || !serviceId || description.length < 10) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Thiếu thông tin bắt buộc hoặc mô tả quá ngắn.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailOk = contactEmail && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(contactEmail);
    const phoneOk =
      contactPhone && /^\d{8,15}$/.test(contactPhone.replace(/[\s.\-+()]/g, ''));

    if (!emailOk && !phoneOk) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Cần ít nhất một kênh liên hệ hợp lệ (Email hoặc SĐT).' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3. Forward to configured provider (never logging PII to public console logs)
    if (context.env.WEB3FORMS_ACCESS_KEY) {
      const upstream = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: context.env.WEB3FORMS_ACCESS_KEY,
          subject: `[Fagon Website] Yêu cầu tư vấn từ ${fullName}`,
          fullName,
          contactEmail,
          contactPhone,
          audienceId,
          serviceId,
          description,
          referenceLink,
          budget,
          desiredDate,
        }),
      });

      if (!upstream.ok) {
        return new Response(
          JSON.stringify({ ok: false, error: 'Không thể chuyển tiếp yêu cầu tới dịch vụ email.' }),
          { status: 502, headers: { 'Content-Type': 'application/json' } }
        );
      }

      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(
      JSON.stringify({
        ok: false,
        error: 'Máy chủ chưa được cấu hình khóa WEB3FORMS_ACCESS_KEY.',
      }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  } catch {
    return new Response(
      JSON.stringify({ ok: false, error: 'Dữ liệu yêu cầu không hợp lệ.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
