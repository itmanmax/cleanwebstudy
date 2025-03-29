"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { usePerformanceMonitoring } from "@/hooks/use-performance"
import { motion } from "framer-motion"
import { BookOpen, Award, Users, Lightbulb, ArrowRight } from "lucide-react"

export default function AboutPage() {
  const { measureOperation } = usePerformanceMonitoring("AboutPage")

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Section */}
      <section className="w-full bg-gradient-to-r from-blue-50 to-green-50 py-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6">
            <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
            返回首页
          </Link>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">了解更多</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              积极响应国家对于教育创新、人才培养以及文化建设的号召，深入践行新时代教育理念，大力弘扬优良学风，充分展现新时代学子的精神风貌与专业素养。
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-emerald-500">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="bg-slate-50 p-2 rounded-full">
                    <BookOpen className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle>我们的使命</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    致力于建设优质的学术氛围，培养具有创新精神和实践能力的人才。通过多样化的教学方式和严谨的学术态度，为学生提供最好的学习环境，践行"清朗学风，学润德馨"的教育理念。
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-blue-500">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="bg-slate-50 p-2 rounded-full">
                    <Lightbulb className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>我们的愿景</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    打造国际一流的教育平台，促进学术交流与创新，培养未来的领军人才。我们期待与更多优秀的教育工作者和学生一起，共同创造美好的教育未来，实现"以廉铸师魂，育人守初心"的教育目标。
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-center mb-6">核心价值观</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-col items-center">
                    <Award className="h-12 w-12 text-emerald-600 mb-4" />
                    <CardTitle className="text-center">创新精神</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600">
                      鼓励创新思维，支持原创研究，推动学术发展。培养学生的创新能力和实践精神，为社会培养创新型人才。
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-col items-center">
                    <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                    <CardTitle className="text-center">严谨治学</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600">
                      坚持学术规范，追求真理，保持科学态度。培养学生严谨的学术精神和科学的研究方法，践行"学途沐廉风，青春绽清正"的理念。
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-col items-center">
                    <Users className="h-12 w-12 text-purple-600 mb-4" />
                    <CardTitle className="text-center">开放合作</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600">
                      促进学术交流，加强国际合作，共享教育资源。培养学生的团队合作精神和国际视野，实现"廉韵润校园，德厚育贤才"的教育目标。
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button
                variant="default"
                size="lg"
                onClick={() => measureOperation('navigationToActivities', () => {
                  window.location.href = '/activities';
                })}
              >
                参与我们的活动
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

