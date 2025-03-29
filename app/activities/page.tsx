"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { usePerformanceMonitoring } from "@/hooks/use-performance"
import { CalendarDays, Users, BookOpen, Trophy, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Activity {
  id: string
  title: string
  description: string
  date: string
  type: string
  icon: JSX.Element
  color: string
}

const activities: Activity[] = [
  {
    id: "1",
    title: "学术讲座系列",
    description: "邀请知名学者进行学术前沿讲座，探讨最新研究成果。",
    date: "2025年4月15日",
    type: "讲座",
    icon: <BookOpen className="h-6 w-6" />,
    color: "text-emerald-600",
  },
  {
    id: "2",
    title: "创新研究工作坊",
    description: "为研究生提供实践机会，培养创新研究能力。",
    date: "2025年4月20日",
    type: "工作坊",
    icon: <Users className="h-6 w-6" />,
    color: "text-blue-600",
  },
  {
    id: "3",
    title: "学术竞赛",
    description: "举办学科竞赛，激发学生学习热情和创新精神。",
    date: "2025年5月1日",
    type: "竞赛",
    icon: <Trophy className="h-6 w-6" />,
    color: "text-amber-600",
  },
  {
    id: "4",
    title: "学术交流会",
    description: "促进校际交流，分享研究经验和学术成果。",
    date: "2025年5月15日",
    type: "交流会",
    icon: <CalendarDays className="h-6 w-6" />,
    color: "text-purple-600",
  },
]

export default function ActivitiesPage() {
  const { measureOperation } = usePerformanceMonitoring("ActivitiesPage")

  const handleRegister = (activityId: string) => {
    measureOperation("activityRegistration", () => {
      // TODO: 实现活动报名逻辑
      console.log("注册活动:", activityId)
      alert("报名成功！我们会通过邮件通知您活动详情。")
    })
  }

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
            <h1 className="text-4xl font-bold text-slate-800 mb-4">参与活动</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              参与我们丰富多彩的学术活动，提升专业能力，拓展学术视野，结识志同道合的伙伴，共同践行"清朗学风，学润德馨"的理念。
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity) => (
              <Card key={activity.id} className="hover:shadow-lg transition-shadow border-t-4 border-t-emerald-500">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`bg-slate-50 p-2 rounded-full ${activity.color}`}>{activity.icon}</div>
                    <div>
                      <CardTitle>{activity.title}</CardTitle>
                      <CardDescription className="text-slate-500">
                        {activity.type} · {activity.date}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{activity.description}</p>
                  <Button
                    onClick={() => handleRegister(activity.id)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    立即报名
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-none shadow-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
            <CardHeader>
              <CardTitle className="text-white text-center text-2xl">需要更多信息？</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-white/90 mb-6">
                如果您对我们的活动有任何疑问，欢迎随时联系我们。我们的工作人员会很乐意为您提供帮助。
              </p>
              <Button variant="outline" size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 border-white">
                联系我们
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Activities Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">相关活动推荐</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col items-center">
                  <div className="bg-slate-50 p-3 rounded-full text-blue-600 mb-4">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-center">主题读书会</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  组织学生围绕特定主题开展读书活动，交流读书心得，培养阅读习惯，提升人文素养。
                </p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  了解详情
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col items-center">
                  <div className="bg-slate-50 p-3 rounded-full text-emerald-600 mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-center">学风建设主题班会</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  组织学生开展学风建设主题班会，交流学习经验，分享学习方法，营造良好的学习氛围。
                </p>
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  了解详情
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col items-center">
                  <div className="bg-slate-50 p-3 rounded-full text-purple-600 mb-4">
                    <Trophy className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-center">优良学风评选</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  评选优良学风班级和学习标兵，表彰在学风建设中表现突出的集体和个人，树立学习榜样。
                </p>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  了解详情
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">共建清朗学风</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            学风建设需要每一位师生的共同参与和努力，让我们一起营造良好的学习氛围，共建优良学风。
          </p>
          <Button className="bg-white text-emerald-600 hover:bg-slate-100" size="lg">
            了解更多
          </Button>
        </div>
      </section>
    </div>
  )
}

