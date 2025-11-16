import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const earningsDir = path.join(process.cwd(), 'public', 'student-earnings');
    
    // 检查目录是否存在
    if (!fs.existsSync(earningsDir)) {
      return NextResponse.json({ images: [] });
    }

    // 读取目录中的所有文件
    const files = fs.readdirSync(earningsDir);
    
    // 过滤出图片文件（支持常见图片格式）
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const imageFiles = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext);
      })
      .map(file => `/student-earnings/${file}`)
      .sort(); // 按文件名排序

    return NextResponse.json({ images: imageFiles });
  } catch (error) {
    console.error('Error reading student earnings images:', error);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
}

