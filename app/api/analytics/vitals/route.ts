import { NextResponse } from 'next/server';
import type { PerformanceMetric } from '@/lib/performance-monitor';

export async function POST(request: Request) {
  try {
    const data: PerformanceMetric = await request.json();
    
    // 这里可以将数据存储到数据库或发送到分析服务
    // 示例：将数据写入控制台
    console.log('Performance Data:', {
      metric: data.name,
      value: data.value,
      timestamp: new Date().toISOString(),
      page: data.id,
    });

    // TODO: 实际项目中，你可能需要：
    // 1. 将数据存储到数据库（如 MongoDB）
    // 2. 发送到专门的分析服务（如 Elasticsearch）
    // 3. 使用消息队列进行异步处理
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing performance data:', error);
    return NextResponse.json(
      { error: 'Failed to process performance data' },
      { status: 500 }
    );
  }
} 