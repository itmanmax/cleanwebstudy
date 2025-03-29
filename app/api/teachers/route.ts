import { NextResponse } from 'next/server';

// 模拟教师数据
const teachers = [
  {
    id: '1',
    name: '张教授',
    subject: '教育学',
    image: '/placeholder.svg',
  },
  {
    id: '2',
    name: '李教授',
    subject: '文学',
    image: '/placeholder.svg',
  },
  {
    id: '3',
    name: '王教授',
    subject: '理学',
    image: '/placeholder.svg',
  },
  {
    id: '4',
    name: '刘教授',
    subject: '工学',
    image: '/placeholder.svg',
  },
];

export async function GET() {
  try {
    // 模拟数据库延迟
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return NextResponse.json(teachers);
  } catch (error) {
    console.error('Error fetching teachers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch teachers' },
      { status: 500 }
    );
  }
} 