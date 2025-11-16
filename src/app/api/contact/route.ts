import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // 验证必填字段
    if (!name || !email) {
      return NextResponse.json(
        { error: '姓名和邮箱为必填项' },
        { status: 400 }
      );
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '邮箱格式不正确' },
        { status: 400 }
      );
    }

    // 检查 Resend API Key 是否配置
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY 未配置');
      return NextResponse.json(
        { error: '邮件服务未配置，请联系管理员' },
        { status: 500 }
      );
    }

    // 在函数内部创建 Resend 实例，避免构建时错误
    const resend = new Resend(process.env.RESEND_API_KEY);

    // 发送邮件
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL || 'jufengxinhao@gmail.com',
      replyTo: email,
      subject: '职业交易员沟通 - 新的联系表单提交',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00C9FF; border-bottom: 2px solid #00C9FF; padding-bottom: 10px;">
            新的联系表单提交
          </h2>
          <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong style="color: #1a202c;">姓名:</strong> <span style="color: #2d3748;">${name}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #1a202c;">邮箱:</strong> <span style="color: #2d3748;">${email}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #1a202c;">电话:</strong> <span style="color: #2d3748;">${phone || '未提供'}</span></p>
            ${message ? `<p style="margin: 10px 0;"><strong style="color: #1a202c;">留言:</strong></p><p style="color: #2d3748; background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #00C9FF;">${message}</p>` : ''}
          </div>
          <p style="color: #718096; font-size: 12px; margin-top: 20px;">
            提交时间: ${new Date().toLocaleString('zh-CN')}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend 发送邮件失败:', error);
      return NextResponse.json(
        { error: '邮件发送失败，请稍后重试' },
        { status: 500 }
      );
    }

    console.log('邮件发送成功:', data);

    return NextResponse.json({
      success: true,
      message: '提交成功！我们会尽快与您联系。',
    });
  } catch (error) {
    console.error('处理联系表单时出错:', error);
    return NextResponse.json(
      { error: '提交失败，请稍后重试' },
      { status: 500 }
    );
  }
}

