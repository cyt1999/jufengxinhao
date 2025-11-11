import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
  contentHtml?: string;
}

const postsDirectory = path.join(process.cwd(), 'content/blog/zh');

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];
  
  // 递归读取所有年份目录
  function readDirectory(dir: string) {
    if (!fs.existsSync(dir)) {
      return;
    }
    
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        readDirectory(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        try {
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const { data, content } = matter(fileContents);
          
          // 从文件名提取日期作为slug（格式：YYYY-MM-DD）
          // 支持格式：YYYY-MM-DD-标题.md 或 YYYY-MM-DD-序号-标题.md
          const dateMatch = entry.name.match(/^(\d{4}-\d{2}-\d{2})-/);
          const slug = dateMatch ? dateMatch[1] : (data.date || entry.name.replace(/\.md$/, ''));
          
          posts.push({
            slug,
            title: data.title || '',
            date: data.date || '',
            author: data.author || '飓风信号团队',
            category: data.category || '未分类',
            tags: data.tags || [],
            excerpt: data.excerpt || '',
            content,
          });
        } catch (error) {
          console.error(`Error reading file ${fullPath}:`, error);
        }
      }
    }
  }
  
  readDirectory(postsDirectory);
  
  // 按日期排序（最新的在前）
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = getAllPosts();
  const post = posts.find(post => post.slug === slug);
  
  if (!post) {
    return null;
  }
  
  // 将Markdown转换为HTML
  const processedContent = await remark()
    .use(html)
    .process(post.content);
  
  return {
    ...post,
    contentHtml: processedContent.toString(),
  };
}

export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter(post => post.category === category);
}

export function getCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories).sort();
}

export function searchPosts(query: string): BlogPost[] {
  const posts = getAllPosts();
  const lowerQuery = query.toLowerCase();
  
  return posts.filter(post => 
    post.title.toLowerCase().includes(lowerQuery) ||
    post.excerpt.toLowerCase().includes(lowerQuery) ||
    post.content.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

