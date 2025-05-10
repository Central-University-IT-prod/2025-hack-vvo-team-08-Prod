"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Edit, Search } from "lucide-react"

export default function Page() {
	const [currentPage, setCurrentPage] = useState(1)

	return (
			<div className="flex flex-col min-h-screen">

				{/* Main Content */}
				<div className="flex flex-1 bg-[#FDFAF4]">
					{/* Sidebar */}
					<aside className="w-48 p-4">
						<nav className="space-y-2">
							<Link href="#" className="block py-1 font-medium">
								ГЛАВНАЯ
							</Link>
							<Link href="#" className="block py-1 font-medium">
								АВТОМАТ
							</Link>
							<Link href="#" className="block py-1 font-medium">
								КОМНАТЫ
							</Link>
							<Link href="#" className="block py-1 font-medium font-bold">
								СТУДЕНТЫ
							</Link>
						</nav>
					</aside>

					{/* Content */}
					<main className="flex-1 p-4">
						<div className="mb-4">
							<div className="text-sm text-gray-600 mb-1">
								<span>Профиль › Управление › Студенты</span>
							</div>
							<h2 className="text-2xl font-bold mb-4">СТУДЕНТЫ</h2>

							<div className="flex justify-between mb-4">
								<button className="bg-[#FFCF40] px-3 py-1 rounded flex items-center gap-1">
									Редактировать <Edit size={16} />
								</button>
								<div className="relative">
									<input type="text" placeholder="Поиск" className="bg-[#FDFAF4] px-3 py-1 rounded w-48" />
									<Search size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
								</div>
							</div>

							{/* Table */}
							<div className="bg-white rounded shadow">
								<table className="w-full">
									<thead>
									<tr className="border-b">
										<th className="p-3 text-left">
											<div className="flex items-center">
												Студент <ChevronDown size={16} />
											</div>
										</th>
										<th className="p-3 text-left">
											<div className="flex items-center">
												Комната <ChevronDown size={16} />
											</div>
										</th>
										<th className="p-3 text-left">
											<div className="flex items-center">
												Заявки <ChevronDown size={16} />
											</div>
										</th>
										<th className="p-3 text-left">
											<div className="flex items-center">
												Автомат <ChevronDown size={16} />
											</div>
										</th>
										<th className="p-3 text-left">
											<div className="flex items-center">
												Характеристика <ChevronDown size={16} />
											</div>
										</th>
										<th className="p-3 w-10"></th>
									</tr>
									</thead>
									<tbody>
									<tr className="border-b">
										<td className="p-3">Иван Иванов</td>
										<td className="p-3">101</td>
										<td className="p-3">-</td>
										<td className="p-3">-</td>
										<td className="p-3">Шумный</td>
										<td className="p-3">
											<button className="text-gray-500">
												<Edit size={16} />
											</button>
										</td>
									</tr>
									<tr className="border-b">
										<td className="p-3">Иван Иванов</td>
										<td className="p-3">101</td>
										<td className="p-3">-</td>
										<td className="p-3">-</td>
										<td className="p-3">Тихий, Сова</td>
										<td className="p-3">
											<button className="text-gray-500">
												<Edit size={16} />
											</button>
										</td>
									</tr>
									<tr className="border-b">
										<td className="p-3">Иван Иванов</td>
										<td className="p-3">101, 102, 103</td>
										<td className="p-3">101, 102, 103</td>
										<td className="p-3">-</td>
										<td className="p-3">Жаворонок</td>
										<td className="p-3">
											<button className="text-gray-500">
												<Edit size={16} />
											</button>
										</td>
									</tr>
									<tr>
										<td className="p-3">Иван Иванов</td>
										<td className="p-3">-</td>
										<td className="p-3">103</td>
										<td className="p-3">-</td>
										<td className="p-3">Сова</td>
										<td className="p-3">
											<button className="text-gray-500">
												<Edit size={16} />
											</button>
										</td>
									</tr>
									</tbody>
								</table>

							</div>
						</div>
					</main>
				</div>
			</div>
	)
}
