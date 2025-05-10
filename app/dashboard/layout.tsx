import Link from "next/link";
import {Button} from "@components/ui/button";
import {Bell, Home, MessageSquare, User} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@components/ui/avatar";
import {PropsWithChildren} from "react";

export default function Layout({children}: PropsWithChildren) {
	return (
			<div className="min-h-screen bg-[#FFFBF0]">
				{/* Header for desktop and mobile */}
				<header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-6 bg-[#FFCB3B] shadow-md">
					<div className="flex items-center justify-between w-full max-w-7xl mx-auto">
						{/* Логотип с увеличенным отступом справа */}
						<div className="flex-shrink-0 mr-10">
							<Link href="/dashboard" className="text-2xl font-bold uppercase font-next-art">
								УЛЕЙ
							</Link>
						</div>

						{/* Навигация с увеличенными промежутками */}
						<div className="hidden md:flex items-center justify-center flex-1 mx-8">
							<nav className="flex space-x-10">
								<Link href="/dashboard" className="font-medium hover:text-yellow-800">
									Комнаты
								</Link>
								<Link href="/dashboard/profile" className="font-medium hover:text-yellow-800">
									Мои заявки
								</Link>
							</nav>
						</div>

						{/* Аватар с увеличенным отступом слева */}
						<div className="flex-shrink-0 ml-10">
							<Avatar>
								<AvatarImage src="/placeholder-user.jpg" alt="Аватар" />
								<AvatarFallback>СТ</AvatarFallback>
							</Avatar>
						</div>
					</div>
				</header>

				{children}

				{/* Mobile navigation */}
				<nav className="md:hidden fixed bottom-0 left-0 right-0 z-20 flex items-center justify-around h-16 bg-white border-t">
					<Link href="/dashboard" className="flex items-center justify-center w-full h-full text-yellow-600">
						<Home className="w-6 h-6" />
					</Link>
					<Link href="/dashboard/applications" className="flex items-center justify-center w-full h-full text-gray-500">
						<MessageSquare className="w-6 h-6" />
					</Link>
					<Link href="/dashboard/profile" className="flex items-center justify-center w-full h-full text-gray-500">
						<User className="w-6 h-6" />
					</Link>
				</nav>
			</div>
	)
}