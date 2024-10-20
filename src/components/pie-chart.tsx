"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart with text"

const chartData = [
  { browser: "Apple", visitors: 800, fill: "var(--color-apple)" },
  { browser: "Samsung", visitors: 2000, fill: "var(--color-samsung)" },
  { browser: "Honor", visitors: 5000, fill: "var(--color-honor)" },
  { browser: "Mi", visitors: 1500, fill: "var(--color-mi)" },
  { browser: "other", visitors: 2900, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Purchase",
  },
  apple: {
    label: "Apple",
    color: "#62B6A6",
  },
  samsung: {
    label: "Samsung",
    color: "#ECB360",
  },
  honor: {
    label: "Honor",
    color: "#60C8F3",
  },
  mi: {
    label: "Mi",
    color: "#FF875E",
  },
  other: {
    label: "Other",
    color: "#62B6A6",
  },
} satisfies ChartConfig

export default function ChartPie() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (

    <div className="flex flex-col items-center">
        <ChartContainer
        config={chartConfig}
        className="w-[100%] h-[100%]"
        >
        <PieChart>
        <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
        />
        <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={60}
            strokeWidth={5}
        >
            <Label
            content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                    <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    >
                    <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                    >
                        {totalVisitors.toLocaleString()}
                    </tspan>
                    <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                    >
                        Purchase Item
                    </tspan>
                    </text>
                )
                }
            }}
            />
        </Pie>
        </PieChart>
        </ChartContainer>
        <div className="flex-col gap-2 text-sm mb-4">
            <div className="flex justify-center items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
                Showing total purchase order for the last 6 months
            </div>
        </div>
    </div>
  )
}
