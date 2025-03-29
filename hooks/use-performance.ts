import { useEffect, useRef } from 'react';
import {
  initWebVitals,
  measureComponentPerformance,
  measureResourcePerformance,
  measureMemoryUsage,
} from '@/lib/performance-monitor';

export function usePerformanceMonitoring(componentName?: string) {
  const componentMounted = useRef(false);

  useEffect(() => {
    if (componentMounted.current) return;
    componentMounted.current = true;

    // 初始化 Web Vitals 监控
    initWebVitals();

    // 如果提供了组件名称，监控组件性能
    if (componentName) {
      const endMeasure = measureComponentPerformance(componentName);
      return () => {
        endMeasure();
      };
    }
  }, [componentName]);

  useEffect(() => {
    // 定期监控资源加载和内存使用
    const intervalId = setInterval(() => {
      measureResourcePerformance();
      measureMemoryUsage();
    }, 30000); // 每30秒收集一次

    return () => clearInterval(intervalId);
  }, []);

  // 返回一个包装函数，用于监控特定操作的性能
  const measureOperation = (operationName: string, operation: () => any) => {
    const startTime = performance.now();
    const result = operation();
    const endTime = performance.now();

    console.log(`[${operationName}] took ${endTime - startTime}ms`);
    return result;
  };

  return { measureOperation };
} 