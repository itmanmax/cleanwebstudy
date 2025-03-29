import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

// 定义性能指标类型
export interface PerformanceMetric {
  name: string;
  value: number;
  id: string;
  navigationType?: string;
}

// 定义自定义性能指标
export interface CustomPerformance {
  componentRenderTime?: number;
  resourceLoadTime?: number;
  apiResponseTime?: number;
  memoryUsage?: number;
  jsHeapSize?: number;
}

// 性能数据处理函数
const handlePerformanceMetric = (metric: PerformanceMetric) => {
  // 将数据发送到分析服务器
  const body = JSON.stringify({
    ...metric,
    timestamp: Date.now(),
    url: window.location.href,
    userAgent: navigator.userAgent,
  });

  // 使用 sendBeacon API 发送数据，这样不会影响页面卸载
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/analytics/vitals', body);
  } else {
    // 降级处理：使用 fetch
    fetch('/api/analytics/vitals', {
      method: 'POST',
      body,
      keepalive: true,
    });
  }

  // 同时在控制台输出，方便开发时查看
  console.log('[Performance Metric]:', metric.name, metric.value);
};

// 监控核心 Web Vitals
export const initWebVitals = () => {
  getCLS(handlePerformanceMetric); // 累积布局偏移
  getFID(handlePerformanceMetric); // 首次输入延迟
  getLCP(handlePerformanceMetric); // 最大内容绘制
  getFCP(handlePerformanceMetric); // 首次内容绘制
  getTTFB(handlePerformanceMetric); // 首字节时间
};

// 监控组件渲染性能
export const measureComponentPerformance = (componentName: string) => {
  const startTime = performance.now();
  
  return () => {
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    
    handlePerformanceMetric({
      name: `${componentName}_render`,
      value: renderTime,
      id: componentName,
    });
  };
};

// 监控资源加载性能
export const measureResourcePerformance = () => {
  if (typeof window === 'undefined') return;

  const resourceData = window.performance.getEntriesByType('resource');
  const resourceMetrics = resourceData.map(entry => ({
    name: entry.name,
    duration: entry.duration,
    type: entry.initiatorType,
  }));

  handlePerformanceMetric({
    name: 'resource_timing',
    value: resourceMetrics.reduce((acc, curr) => acc + curr.duration, 0),
    id: 'resources',
  });
};

// 监控内存使用情况
export const measureMemoryUsage = () => {
  if (typeof window === 'undefined' || !('memory' in performance)) return;

  const memory = (performance as any).memory;
  
  handlePerformanceMetric({
    name: 'memory_usage',
    value: memory.usedJSHeapSize,
    id: 'memory',
  });
};

// 监控 API 请求性能
export const measureApiPerformance = async (
  url: string,
  options?: RequestInit
) => {
  const startTime = performance.now();
  
  try {
    const response = await fetch(url, options);
    const endTime = performance.now();
    
    handlePerformanceMetric({
      name: `api_${url}`,
      value: endTime - startTime,
      id: url,
    });
    
    return response;
  } catch (error) {
    handlePerformanceMetric({
      name: `api_error_${url}`,
      value: performance.now() - startTime,
      id: url,
    });
    throw error;
  }
}; 