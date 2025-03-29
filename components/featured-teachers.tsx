"use client"

import { usePerformanceMonitoring } from '@/hooks/use-performance';
import { useEffect, useState } from 'react';
import { measureApiPerformance } from '@/lib/performance-monitor';
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Teacher {
  id: string;
  name: string;
  subject: string;
  image: string;
}

export default function FeaturedTeachers() {
  const { measureOperation } = usePerformanceMonitoring('FeaturedTeachers');
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [startIndex, setStartIndex] = useState(0)

  useEffect(() => {
    async function fetchTeachers() {
      try {
        // 使用性能监控包装的 API 请求
        const response = await measureApiPerformance('/api/teachers');
        const data = await response.json();
        
        // 使用性能监控包装的状态更新操作
        measureOperation('setTeachersState', () => {
          setTeachers(data);
        });
      } catch (error) {
        console.error('Failed to fetch teachers:', error);
      }
    }

    fetchTeachers();
  }, []);

  const nextTeachers = () => {
    setStartIndex((prev) => (prev + 1) % teachers.length)
  }

  const prevTeachers = () => {
    setStartIndex((prev) => (prev - 1 + teachers.length) % teachers.length)
  }

  // Calculate visible teachers based on screen size and startIndex
  const getVisibleTeachers = () => {
    const result = []
    for (let i = 0; i < teachers.length; i++) {
      result.push(teachers[(startIndex + i) % teachers.length])
    }
    return result
  }

  const visibleTeachers = getVisibleTeachers()

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <Button variant="outline" size="icon" onClick={prevTeachers} className="rounded-full">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" onClick={nextTeachers} className="rounded-full">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleTeachers.map((teacher) => (
          <Card key={teacher.id} className="hover:shadow-lg transition-shadow overflow-hidden">
            <div className="relative h-48">
              <Image src={teacher.image || "/placeholder.svg"} alt={teacher.name} fill className="object-cover" />
            </div>
            <CardContent className="pt-4">
              <h3 className="text-lg font-bold text-slate-800">{teacher.name}</h3>
              <p className="text-sm text-slate-500 mb-2">{teacher.subject}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

