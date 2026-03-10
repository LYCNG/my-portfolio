"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const time = formData.get("time") as string;
  const budget = formData.get("budget") as string;
  const description = formData.get("description") as string;
  
  // Handle multiple selections
  const subjects = formData.getAll("subject") as string[];

  if (!name || !email || !description) {
    return { error: "Missing required fields" };
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio Inquiry <onboarding@resend.dev>",
      to: ["az215273@gmail.com"],
      subject: `✨ New Inquiry from [${name}]`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #1e293b; max-width: 650px; margin: auto; padding: 30px; border: 1px solid #e2e8f0; border-radius: 20px; background: #ffffff;">
          <h1 style="color: #3b82f6; font-size: 26px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin-bottom: 25px;">🚀 接收到新的專案諮詢</h1>
          
          <div style="margin-bottom: 30px;">
            <h2 style="color: #334155; font-size: 18px; margin-bottom: 15px; background: #f1f5f9; padding: 8px 15px; border-radius: 8px;">👤 基本資料</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 6px 0; color: #64748b; width: 120px;"><strong>聯絡人姓名：</strong></td><td>${name}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;"><strong>電子信箱：</strong></td><td>${email}</td></tr>
            </table>
          </div>

          <div style="margin-bottom: 30px;">
            <h2 style="color: #334155; font-size: 18px; margin-bottom: 15px; background: #f1f5f9; padding: 8px 15px; border-radius: 8px;">💡 專案需求</h2>
            <p><strong>需求主題：</strong> ${subjects.join(", ") || "未勾選"}</p>
            <p><strong>預計完成時間：</strong> ${time || "未提供"}</p>
            <p><strong>預期建置預算：</strong> ${budget || "未提供"}</p>
          </div>

          <div style="background: #eff6ff; padding: 20px; border-radius: 12px; border-left: 5px solid #3b82f6;">
            <h2 style="color: #1d4ed8; font-size: 18px; margin: 0 0 10px 0;">🎯 需求簡述</h2>
            <p style="white-space: pre-wrap; margin: 0; color: #334155;">${description}</p>
          </div>
        </div>
      `,
    });

    return { success: true, data };
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Failed to send email" };
  }
}
