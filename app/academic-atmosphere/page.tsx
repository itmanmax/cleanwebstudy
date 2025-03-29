import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, BookOpen, Award, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AcademicAtmosphere() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <section className="w-full bg-gradient-to-r from-blue-50 to-green-50 py-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回首页
          </Link>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl font-bold text-slate-800">学风建设</h1>
              <p className="text-lg text-slate-600">
                学风是学校的灵魂，是学校文化的核心。我校致力于营造良好的学习氛围，培养学生的学习兴趣和学习能力，促进学生全面发展。
              </p>
            </div>
            <div className="flex-1 relative h-[300px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=300&width=500" alt="学风建设" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">学风建设核心理念</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-col items-center">
                <BookOpen className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle className="text-center">清朗学风，学润德馨</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">营造清朗的学习氛围，通过学习滋养德行，培养学生高尚的品德和专业素养。</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-col items-center">
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-center">清风满学府，廉洁正言行</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">
                  让清廉之风充满校园，引导师生以廉洁自律规范言行，营造风清气正的校园环境。
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-col items-center">
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-center">育廉洁学风，筑未来栋梁</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">培养廉洁自律的学风，为国家培养德才兼备的未来栋梁之才。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="w-full py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">学风建设活动</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="学术讲座" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-slate-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>每月定期举办</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">学术讲座系列</h3>
                <p className="text-slate-600">
                  邀请知名学者和专家开展学术讲座，拓宽学生视野，激发学习兴趣，培养学术精神。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="读书会" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-slate-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>每周举办</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">主题读书会</h3>
                <p className="text-slate-600">
                  组织学生围绕特定主题开展读书活动，交流读书心得，培养阅读习惯，提升人文素养。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="学术竞赛" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-slate-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>每学期举办</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">学术竞赛</h3>
                <p className="text-slate-600">
                  举办各类学科竞赛和创新创业大赛，激发学生的学习热情和创新精神，提升专业能力。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="学风建设主题班会"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-slate-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>每月举办</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">学风建设主题班会</h3>
                <p className="text-slate-600">
                  组织学生开展学风建设主题班会，交流学习经验，分享学习方法，营造良好的学习氛围。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">学风建设成果</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>优良学风班级</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  评选优良学风班级，表彰在学风建设中表现突出的班级，营造良好的学习氛围。
                </p>
                <div className="text-emerald-600 font-bold">年度评选：20个班级</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>学习标兵</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  评选学习标兵，表彰在学习中表现优异的学生，树立学习榜样，激励更多学生努力学习。
                </p>
                <div className="text-emerald-600 font-bold">年度评选：100名学生</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>学术成果</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  学生在各类学科竞赛和创新创业大赛中取得优异成绩，展现了我校学风建设的成果。
                </p>
                <div className="text-emerald-600 font-bold">国家级奖项：25项</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">参与学风建设</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            学风建设需要每一位师生的共同参与和努力，让我们一起营造良好的学习氛围，共建优良学风。
          </p>
          <Button className="bg-white text-emerald-600 hover:bg-slate-100">立即参与</Button>
        </div>
      </section>
    </main>
  )
}

