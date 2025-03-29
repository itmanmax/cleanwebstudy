"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MessageSquare, Send, ThumbsUp, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

// Mock data for discussions
const discussions = [
  {
    id: 1,
    author: "张同学",
    avatar: "/placeholder.svg?height=50&width=50",
    date: "2023-05-15",
    title: "如何更好地培养自律的学习习惯？",
    content: "我发现自己在学习过程中容易分心，想听听大家有什么好的方法来培养自律的学习习惯？",
    likes: 24,
    comments: 8,
  },
  {
    id: 2,
    author: "李老师",
    avatar: "/placeholder.svg?height=50&width=50",
    date: "2023-05-10",
    title: "关于学风建设的几点建议",
    content:
      "作为一名教师，我想分享一些关于学风建设的建议，希望能够帮助到大家。首先，我认为学风建设应该从每个人做起...",
    likes: 36,
    comments: 12,
  },
  {
    id: 3,
    author: "王同学",
    avatar: "/placeholder.svg?height=50&width=50",
    date: "2023-05-05",
    title: "分享我的学习方法和心得",
    content: "我想分享一下我的学习方法和心得，希望能够帮助到大家。我发现制定明确的学习计划和目标非常重要...",
    likes: 18,
    comments: 6,
  },
]

// Mock data for suggestions
const suggestions = [
  {
    id: 1,
    author: "刘同学",
    avatar: "/placeholder.svg?height=50&width=50",
    date: "2023-05-12",
    title: "关于图书馆开放时间的建议",
    content: "建议图书馆延长开放时间，特别是在考试周期间，以满足学生的学习需求。",
    status: "已处理",
    response: "感谢您的建议，我们已经调整了图书馆的开放时间，考试周期间将延长至晚上11点。",
  },
  {
    id: 2,
    author: "赵同学",
    avatar: "/placeholder.svg?height=50&width=50",
    date: "2023-05-08",
    title: "关于增加自习室的建议",
    content: "建议学校增加自习室数量，现有的自习室在高峰期经常座位不足。",
    status: "处理中",
    response: "",
  },
  {
    id: 3,
    author: "钱同学",
    avatar: "/placeholder.svg?height=50&width=50",
    date: "2023-05-03",
    title: "关于改善校园网络的建议",
    content: "建议学校改善校园网络，特别是在宿舍区域，网络经常不稳定。",
    status: "已处理",
    response: "感谢您的建议，我们已经升级了校园网络设备，提高了网络稳定性和速度。",
  },
]

export default function Interaction() {
  const [newDiscussion, setNewDiscussion] = useState({ title: "", content: "" })
  const [newSuggestion, setNewSuggestion] = useState({ title: "", content: "" })

  const handleDiscussionSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    alert("讨论已提交！")
    setNewDiscussion({ title: "", content: "" })
  }

  const handleSuggestionSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    alert("建议已提交！")
    setNewSuggestion({ title: "", content: "" })
  }

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
              <h1 className="text-4xl font-bold text-slate-800">互动交流</h1>
              <p className="text-lg text-slate-600">
                提供师生互动交流的平台，分享学习心得，讨论学风建设，提出宝贵建议，共同营造良好的学习氛围。
              </p>
            </div>
            <div className="flex-1 relative h-[300px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=300&width=500" alt="互动交流" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Interaction Content */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="discussions" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="discussions">学习讨论</TabsTrigger>
              <TabsTrigger value="suggestions">建议反馈</TabsTrigger>
            </TabsList>

            <TabsContent value="discussions">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">最新讨论</h2>

                  <div className="space-y-6">
                    {discussions.map((discussion) => (
                      <Card key={discussion.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-center gap-4 mb-2">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                              <Image
                                src={discussion.avatar || "/placeholder.svg"}
                                alt={discussion.author}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-medium">{discussion.author}</div>
                              <div className="text-sm text-slate-500">{discussion.date}</div>
                            </div>
                          </div>
                          <CardTitle>{discussion.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-600 mb-4">{discussion.content}</p>
                          <div className="flex items-center gap-4 text-slate-500">
                            <button className="flex items-center gap-1 hover:text-emerald-600">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{discussion.likes}</span>
                            </button>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" />
                              <span>{discussion.comments}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">发起讨论</h2>

                  <Card>
                    <CardContent className="pt-6">
                      <form onSubmit={handleDiscussionSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">
                            标题
                          </label>
                          <Input
                            id="title"
                            value={newDiscussion.title}
                            onChange={(e) => setNewDiscussion({ ...newDiscussion, title: e.target.value })}
                            placeholder="请输入讨论标题"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="content" className="block text-sm font-medium text-slate-700 mb-1">
                            内容
                          </label>
                          <Textarea
                            id="content"
                            value={newDiscussion.content}
                            onChange={(e) => setNewDiscussion({ ...newDiscussion, content: e.target.value })}
                            placeholder="请输入讨论内容"
                            rows={6}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full">
                          <Send className="h-4 w-4 mr-2" />
                          发布讨论
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="suggestions">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">最新建议</h2>

                  <div className="space-y-6">
                    {suggestions.map((suggestion) => (
                      <Card key={suggestion.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-center gap-4 mb-2">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                              <Image
                                src={suggestion.avatar || "/placeholder.svg"}
                                alt={suggestion.author}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-medium">{suggestion.author}</div>
                              <div className="text-sm text-slate-500">{suggestion.date}</div>
                            </div>
                            <div
                              className={`ml-auto px-2 py-1 text-xs rounded-full ${
                                suggestion.status === "已处理"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-amber-100 text-amber-800"
                              }`}
                            >
                              {suggestion.status}
                            </div>
                          </div>
                          <CardTitle>{suggestion.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-600 mb-4">{suggestion.content}</p>
                          {suggestion.response && (
                            <div className="bg-slate-50 p-4 rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <User className="h-4 w-4 text-slate-500" />
                                <span className="font-medium text-slate-700">管理员回复：</span>
                              </div>
                              <p className="text-slate-600">{suggestion.response}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">提交建议</h2>

                  <Card>
                    <CardContent className="pt-6">
                      <form onSubmit={handleSuggestionSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="suggestion-title" className="block text-sm font-medium text-slate-700 mb-1">
                            标题
                          </label>
                          <Input
                            id="suggestion-title"
                            value={newSuggestion.title}
                            onChange={(e) => setNewSuggestion({ ...newSuggestion, title: e.target.value })}
                            placeholder="请输入建议标题"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="suggestion-content" className="block text-sm font-medium text-slate-700 mb-1">
                            内容
                          </label>
                          <Textarea
                            id="suggestion-content"
                            value={newSuggestion.content}
                            onChange={(e) => setNewSuggestion({ ...newSuggestion, content: e.target.value })}
                            placeholder="请输入建议内容"
                            rows={6}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full">
                          <Send className="h-4 w-4 mr-2" />
                          提交建议
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">共建清朗学风</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            学风建设需要每一位师生的共同参与和努力，让我们一起营造良好的学习氛围，共建优良学风。
          </p>
          <Button className="bg-white text-purple-600 hover:bg-slate-100">了解更多</Button>
        </div>
      </section>
    </main>
  )
}

