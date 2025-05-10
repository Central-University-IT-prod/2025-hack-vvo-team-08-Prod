"use client"

import {Button} from "@components/ui/button"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@components/ui/card"
import {Badge} from "@components/ui/badge"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@components/ui/tabs"
import {CheckCircle, Clock, XCircle} from "lucide-react"

// Типы данных
interface Application {
	id: number
	roomNumber: string
	date: string
	status: "pending" | "approved" | "rejected"
	message?: string
}

export default function Applications() {
  const applications: Application[] = [
    {
      id: 1,
      roomNumber: "101",
      date: "15.04.2025",
      status: "pending",
    },
    {
      id: 2,
      roomNumber: "205",
      date: "10.04.2025",
      status: "approved",
      message: "Ваша заявка одобрена. Обратитесь в администрацию для оформления.",
    },
    {
      id: 3,
      roomNumber: "302",
      date: "05.04.2025",
      status: "rejected",
      message: "К сожалению, комната уже занята.",
    },
  ]

	return (
			<main className="container p-4 mx-auto mb-20">
				<h1 className="mb-6 text-3xl font-bold text-center font-next-art">МОИ ЗАЯВКИ</h1>

				<Tabs defaultValue="all" className="mb-6">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="all">Все</TabsTrigger>
						<TabsTrigger value="pending">В ожидании</TabsTrigger>
						<TabsTrigger value="processed">Обработанные</TabsTrigger>
					</TabsList>

					<TabsContent value="all" className="mt-4">
						<div className="space-y-4">
							{applications.map((app) => (
									<ApplicationCard key={app.id} application={app}/>
							))}
						</div>
					</TabsContent>

					<TabsContent value="pending" className="mt-4">
						<div className="space-y-4">
							{applications
									.filter((app) => app.status === "pending")
									.map((app) => (
											<ApplicationCard key={app.id} application={app}/>
									))}
						</div>
					</TabsContent>

					<TabsContent value="processed" className="mt-4">
						<div className="space-y-4">
							{applications
									.filter((app) => app.status !== "pending")
									.map((app) => (
											<ApplicationCard key={app.id} application={app}/>
									))}
						</div>
					</TabsContent>
				</Tabs>
			</main>
	)
}

function ApplicationCard({application}: { application: Application }) {
	const statusIcons = {
		pending: <Clock className="w-5 h-5 text-yellow-500"/>,
		approved: <CheckCircle className="w-5 h-5 text-green-500"/>,
		rejected: <XCircle className="w-5 h-5 text-red-500"/>,
	}

	const statusLabels = {
		pending: "В ожидании",
		approved: "Одобрена",
		rejected: "Отклонена",
	}

	const statusColors = {
		pending: "bg-yellow-100 text-yellow-800",
		approved: "bg-green-100 text-green-800",
		rejected: "bg-red-100 text-red-800",
	}

	return (
			<Card>
				<CardHeader className="pb-2">
					<div className="flex items-center justify-between">
						<CardTitle>Комната {application.roomNumber}</CardTitle>
						<Badge className={statusColors[application.status]}>
            <span className="flex items-center gap-1">
              {statusIcons[application.status]}
	            {statusLabels[application.status]}
            </span>
						</Badge>
					</div>
				</CardHeader>
				<CardContent>
					<p className="text-sm text-gray-500">Дата подачи: {application.date}</p>
					{application.message && <div className="p-3 mt-3 text-sm bg-gray-100 rounded-md">{application.message}</div>}
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button variant="outline" size="sm">
						Подробнее
					</Button>
					{application.status === "pending" && (
							<Button variant="destructive" size="sm">
								Отменить
							</Button>
					)}
				</CardFooter>
			</Card>
	)
}
