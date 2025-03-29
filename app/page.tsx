'use client';

import Link from "next/link"
import { ArrowRight, BookOpen, Users, Award, MessageSquare, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import HeroCarousel from "@/components/hero-carousel"
import QuoteCard from "@/components/quote-card"
import StatsCounter from "@/components/stats-counter"
import FeaturedTeachers from "@/components/featured-teachers"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                清朗学风，<span className="text-emerald-600">学润德馨</span>
              </h1>
              <p className="text-lg text-slate-600">
                积极响应国家对于教育创新、人才培养以及文化建设的号召，深入践行新时代教育理念，大力弘扬优良学风，充分展现新时代学子的精神风貌与专业素养。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    了解更多 <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/activities">
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    参与活动
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">核心价值理念</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              我们致力于培养具有高尚品德和专业素养的新时代人才，弘扬优良学风，践行社会主义核心价值观。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <QuoteCard
              quote="以廉铸师魂，育人守初心"
              description="教师以廉洁自律为根本，坚守教育初心，培养德才兼备的学生。"
              icon={<BookOpen className="h-8 w-8 text-emerald-600" />}
            />
            <QuoteCard
              quote="学途沐廉风，青春绽清正"
              description="学生在学习过程中培养正直品格，在青春岁月中展现清正廉洁的风采。"
              icon={<Users className="h-8 w-8 text-blue-600" />}
            />
            <QuoteCard
              quote="廉韵润校园，德厚育贤才"
              description="校园文化浸润廉洁之风，以深厚的道德底蕴培养杰出人才。"
              icon={<Award className="h-8 w-8 text-purple-600" />}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatsCounter number={1000} label="参与学生" />
            <StatsCounter number={50} label="优秀教师" />
            <StatsCounter number={120} label="学风活动" />
            <StatsCounter number={25} label="获奖项目" />
          </div>
        </div>
      </section>

      {/* Featured Teachers */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">师德风采</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              展示我校优秀教师的风采，他们以身作则，践行"以廉铸师魂，育人守初心"的理念。
            </p>
          </div>

          <FeaturedTeachers />
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">探索更多</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              了解更多关于学风建设、师德风采、学生活动和互动交流的内容。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>学风建设</CardTitle>
                <CardDescription>探索我校学风建设的成果与举措</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  了解我校在学风建设方面的各项举措和取得的成果，以及未来的发展规划。
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/academic-atmosphere"
                  className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center"
                >
                  查看详情 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>师德风采</CardTitle>
                <CardDescription>展示优秀教师的事迹与风采</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  展示我校优秀教师的先进事迹，他们在教书育人过程中展现的高尚师德和专业素养。
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/teacher-ethics"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
                >
                  查看详情 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>学生园地</CardTitle>
                <CardDescription>展示学生活动与成果</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  展示学生在学习、科研、社会实践等方面的优秀成果，以及各类学生活动的精彩瞬间。
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/student-showcase"
                  className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center"
                >
                  查看详情 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>互动交流</CardTitle>
                <CardDescription>参与讨论与互动</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  提供师生互动交流的平台，分享学习心得，讨论学风建设，提出宝贵建议。
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/interaction"
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center"
                >
                  查看详情 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">清朗学风，学润德馨</h3>
              <p className="text-slate-300">
                积极响应国家对于教育创新、人才培养以及文化建设的号召，深入践行新时代教育理念。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-slate-300 hover:text-white">
                    首页
                  </Link>
                </li>
                <li>
                  <Link href="/academic-atmosphere" className="text-slate-300 hover:text-white">
                    学风建设
                  </Link>
                </li>
                <li>
                  <Link href="/teacher-ethics" className="text-slate-300 hover:text-white">
                    师德风采
                  </Link>
                </li>
                <li>
                  <Link href="/student-showcase" className="text-slate-300 hover:text-white">
                    学生园地
                  </Link>
                </li>
                <li>
                  <Link href="/interaction" className="text-slate-300 hover:text-white">
                    互动交流
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">联系我们</h3>
              <p className="text-slate-300">
                地址：安徽师范大学花津校区
                <br />
                电话：123-456-7890
                <br />
                小组：不爱吃香菜
                <br />
                邮箱：ahnu@university.edu.cn
              </p>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>© {new Date().getFullYear()} 清朗学风，学润德馨 - 网页设计大赛. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

