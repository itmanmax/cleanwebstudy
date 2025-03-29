import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Users, Award, Star, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TeacherEthics() {
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
              <h1 className="text-4xl font-bold text-slate-800">师德风采</h1>
              <p className="text-lg text-slate-600">
                师德是教师的灵魂，是教师职业的核心。我校教师以身作则，言传身教，践行"以廉铸师魂，育人守初心"的理念。
              </p>
            </div>
            <div className="flex-1 relative h-[300px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=300&width=500" alt="师德风采" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">师德建设核心理念</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-col items-center">
                <Users className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle className="text-center">以廉铸师魂，育人守初心</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">教师以廉洁自律为根本，坚守教育初心，培养德才兼备的学生。</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-col items-center">
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-center">廉韵润校园，德厚育贤才</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">校园文化浸润廉洁之风，以深厚的道德底蕴培养杰出人才。</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-col items-center">
                <Star className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-center">清风满学府，廉洁正言行</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">
                  让清廉之风充满校园，引导师生以廉洁自律规范言行，营造风清气正的校园环境。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Outstanding Teachers */}
      <section className="w-full py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">优秀教师风采</h2>

          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="education">教育学院</TabsTrigger>
              <TabsTrigger value="literature">文学院</TabsTrigger>
              <TabsTrigger value="science">理学院</TabsTrigger>
            </TabsList>

            <TabsContent value="education">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?height=200&width=300" alt="张教授" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>张教授</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-500 mb-4">教育学院院长</p>
                    <p className="text-slate-600">
                      从教30年，致力于教育理论研究和实践，培养了大批优秀教育人才，多次获得国家级教学成果奖。
                    </p>
                    <div className="mt-4 flex items-center text-emerald-600">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      <span>获评"全国优秀教师"</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?height=200&width=300" alt="王老师" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>王老师</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-500 mb-4">教育学院副教授</p>
                    <p className="text-slate-600">
                      潜心教学研究，创新教学方法，关心学生成长，深受学生喜爱，多次获得校级教学优秀奖。
                    </p>
                    <div className="mt-4 flex items-center text-emerald-600">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      <span>获评"校级优秀教师"</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?height=200&width=300" alt="李老师" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>李老师</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-500 mb-4">教育学院讲师</p>
                    <p className="text-slate-600">
                      年轻有为，教学热情高，善于运用现代教育技术，教学效果显著，是学生心目中的良师益友。
                    </p>
                    <div className="mt-4 flex items-center text-emerald-600">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      <span>获评"青年教师教学能手"</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="literature">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?height=200&width=300" alt="刘教授" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>刘教授</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-500 mb-4">文学院教授</p>
                    <p className="text-slate-600">
                      著名文学评论家，出版多部文学著作，培养了大批文学人才，深受学生爱戴。
                    </p>
                    <div className="mt-4 flex items-center text-emerald-600">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      <span>获评"全国优秀教师"</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?height=200&width=300" alt="赵老师" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>赵老师</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-500 mb-4">文学院副教授</p>
                    <p className="text-slate-600">
                      语言功底深厚，教学风格独特，善于激发学生的学习兴趣，多次获得教学优秀奖。
                    </p>
                    <div className="mt-4 flex items-center text-emerald-600">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      <span>获评"校级优秀教师"</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?height=200&width=300" alt="钱老师" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>钱老师</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-500 mb-4">文学院讲师</p>
                    <p className="text-slate-600">教学认真负责，关心学生成长，善于运用多种教学方法，深受学生喜爱。</p>
                    <div className="mt-4 flex items-center text-emerald-600">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      <span>获评"青年教师教学能手"</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="science">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?height=200&width=300" alt="孙教授" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>孙教授</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-500 mb-4">理学院教授</p>
                    <p className="text-slate-600">
                      著名科学家，在科研领域取得重大突破，培养了大批科研人才，深受学生爱戴。
                    </p>
                    <div className="mt-4 flex items-center text-emerald-600">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      <span>获评"全国优秀教师"</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?height=200&width=300" alt="周老师" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>周老师</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-500 mb-4">理学院副教授</p>
                    <p className="text-slate-600">
                      教学严谨，科研能力强，善于引导学生进行科学探索，多次获得教学优秀奖。
                    </p>
                    <div className="mt-4 flex items-center text-emerald-600">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      <span>获评"校级优秀教师"</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?height=200&width=300" alt="吴老师" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>吴老师</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-500 mb-4">理学院讲师</p>
                    <p className="text-slate-600">教学认真负责，实验指导细致，关心学生成长，深受学生喜爱。</p>
                    <div className="mt-4 flex items-center text-emerald-600">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      <span>获评"青年教师教学能手"</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-500 to-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">师德建设，人人有责</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            师德建设需要每一位教师的共同参与和努力，让我们一起营造风清气正的校园环境，共建优良师德。
          </p>
          <Button className="bg-white text-blue-600 hover:bg-slate-100">了解更多</Button>
        </div>
      </section>
    </main>
  )
}

