import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Award, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StudentShowcase() {
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
              <h1 className="text-4xl font-bold text-slate-800">学生园地</h1>
              <p className="text-lg text-slate-600">
                展示学生在学习、科研、社会实践等方面的优秀成果，以及各类学生活动的精彩瞬间，践行"学途沐廉风，青春绽清正"的理念。
              </p>
            </div>
            <div className="flex-1 relative h-[300px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=300&width=500" alt="学生园地" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Student Activities */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">学生活动</h2>

          <Tabs defaultValue="academic" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="academic">学术活动</TabsTrigger>
              <TabsTrigger value="cultural">文化活动</TabsTrigger>
              <TabsTrigger value="social">社会实践</TabsTrigger>
            </TabsList>

            <TabsContent value="academic">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?height=200&width=300" alt="学术论坛" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>学生学术论坛</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-slate-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>每月举办</span>
                    </div>
                    <p className="text-slate-600">
                      学生自主组织的学术交流活动，分享学术研究成果，交流学习心得，提升学术能力。
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="创新创业大赛"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>创新创业大赛</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-slate-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>每年举办</span>
                    </div>
                    <p className="text-slate-600">鼓励学生创新创业，展示创新创业成果，培养学生的创新精神和创业能力。</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?height=200&width=300" alt="学科竞赛" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>学科竞赛</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-slate-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>全年举办</span>
                    </div>
                    <p className="text-slate-600">
                      组织学生参加各类学科竞赛，提升专业能力，培养竞争意识和团队合作精神。
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="cultural">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?height=200&width=300" alt="文化艺术节" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>文化艺术节</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-slate-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>每年举办</span>
                    </div>
                    <p className="text-slate-600">展示学生的文化艺术才华，丰富校园文化生活，提升学生的人文素养。</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?height=200&width=300" alt="读书节" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>校园读书节</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-slate-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>每学期举办</span>
                    </div>
                    <p className="text-slate-600">营造浓厚的读书氛围，培养学生的阅读习惯，提升人文素养。</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?height=200&width=300" alt="社团文化节" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>社团文化节</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-slate-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>每年举办</span>
                    </div>
                    <p className="text-slate-600">展示各学生社团的风采，促进社团交流，丰富校园文化生活。</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="social">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?height=200&width=300" alt="志愿服务" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>志愿服务活动</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-slate-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>全年开展</span>
                    </div>
                    <p className="text-slate-600">组织学生参与各类志愿服务活动，培养学生的社会责任感和奉献精神。</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?height=200&width=300" alt="社会调研" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>社会调研活动</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-slate-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>寒暑假开展</span>
                    </div>
                    <p className="text-slate-600">
                      组织学生开展社会调研，了解社会现状，培养学生的社会责任感和实践能力。
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?height=200&width=300" alt="支教活动" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>支教活动</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-slate-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>寒暑假开展</span>
                    </div>
                    <p className="text-slate-600">组织学生前往偏远地区开展支教活动，传播知识，奉献爱心。</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Outstanding Students */}
      <section className="w-full py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">优秀学生风采</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=300" alt="张同学" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>张同学</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500 mb-4">计算机科学与技术专业</p>
                <p className="text-slate-600">学习成绩优异，科研能力突出，多次获得国家级奖学金，是同学们学习的榜样。</p>
                <div className="mt-4 flex items-center text-emerald-600">
                  <Award className="h-4 w-4 mr-2" />
                  <span>获评"三好学生标兵"</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=300" alt="李同学" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>李同学</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500 mb-4">物理学专业</p>
                <p className="text-slate-600">科研能力突出，在国际顶级期刊发表多篇论文，多次获得国家级奖学金。</p>
                <div className="mt-4 flex items-center text-emerald-600">
                  <Award className="h-4 w-4 mr-2" />
                  <span>获评"优秀学生"</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=300" alt="王同学" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>王同学</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500 mb-4">文学专业</p>
                <p className="text-slate-600">文学才华出众，多次在全国性文学比赛中获奖，作品在多家知名刊物发表。</p>
                <div className="mt-4 flex items-center text-emerald-600">
                  <Award className="h-4 w-4 mr-2" />
                  <span>获评"文学创作新星"</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=300" alt="赵同学" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>赵同学</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500 mb-4">工商管理专业</p>
                <p className="text-slate-600">创业能力突出，在校期间创办多家公司，带领团队获得多项创业大赛奖项。</p>
                <div className="mt-4 flex items-center text-emerald-600">
                  <Award className="h-4 w-4 mr-2" />
                  <span>获评"创业之星"</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 bg-gradient-to-r from-amber-500 to-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">展示你的风采</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            每一位学生都有自己的闪光点，欢迎你展示自己的风采，分享你的成长故事。
          </p>
          <Button className="bg-white text-amber-600 hover:bg-slate-100">立即参与</Button>
        </div>
      </section>
    </main>
  )
}

