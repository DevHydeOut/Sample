"use client"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"


const chartData = [
  { month: "January", desktop: 80000, mobile: 65000 },
  { month: "February", desktop: 30000, mobile: 52000 },
  { month: "March", desktop: 5000, mobile: 2000 },
  { month: "April", desktop: 73000, mobile: 9000 },
  { month: "May", desktop: 2090, mobile: 15300 },
  { month: "June", desktop: 2140, mobile: 1400 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export default function Chart() {
  return (
    <ChartContainer config={chartConfig} className="">
        <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis/>
            <Bar dataKey="desktop" fill="#669192" radius={4} />
            <Bar dataKey="mobile" fill="#62B6A6" radius={4} />
        </BarChart>
    </ChartContainer>
  )
}
