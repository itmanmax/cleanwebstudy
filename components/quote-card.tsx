import type { ReactNode } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface QuoteCardProps {
  quote: string
  description: string
  icon: ReactNode
}

export default function QuoteCard({ quote, description, icon }: QuoteCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-emerald-500">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="bg-slate-50 p-2 rounded-full">{icon}</div>
        <h3 className="text-xl font-bold text-slate-800">{quote}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600">{description}</p>
      </CardContent>
    </Card>
  )
}

