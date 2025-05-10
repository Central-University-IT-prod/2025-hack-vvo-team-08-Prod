import { Search, Edit2, ChevronDown, Check, X, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from "next/link"

export default function Home() {
	return (
			<div className="min-h-screen bg-white">
				{/* Main layout */}
				<div className="flex">
					{/* Sidebar navigation */}
					<div className="w-64 bg-white border-r border-gray-200 min-h-screen">
						<div className="p-4">
							<div className="py-4">
								<Link href="/" className="block py-2 font-semibold text-black hover:bg-gray-100 px-2">
									ГЛАВНАЯ
								</Link>
								<Link href="/automat" className="block py-2 font-semibold text-black hover:bg-gray-100 px-2">
									АВТОМАТ
								</Link>
								<Link href="/rooms" className="block py-2 font-semibold text-black hover:bg-gray-100 px-2 bg-gray-100">
									КОМНАТЫ
								</Link>
								<Link href="/students" className="block py-2 font-semibold text-black hover:bg-gray-100 px-2">
									СТУДЕНТЫ
								</Link>
							</div>
						</div>
					</div>

					{/* Main content */}
					<div className="flex-1">
						<div className="p-8">
							<div className="mb-6">
								<p className="text-sm text-gray-500">Профиль › Управление › Комнаты</p>
								<h1 className="text-3xl font-bold">КОМНАТЫ</h1>
							</div>

							<div className="flex justify-between mb-6">
								<button className="bg-amber-300 px-4 py-2 rounded flex items-center gap-2">
									Редактировать <Edit2 size={16} />
								</button>
								<div className="relative">
									<input type="text" placeholder="Поиск" className="pl-3 pr-10 py-2 border border-gray-300 rounded" />
									<Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
								</div>
							</div>

							{/* Table header */}
							<div className="grid grid-cols-5 gap-4 border-b pb-2 mb-4">
								<div className="flex items-center gap-1 font-semibold">
									Название <ChevronDown size={16} />
								</div>
								<div className="flex items-center gap-1 font-semibold">
									Жители <ChevronDown size={16} />
								</div>
								<div className="flex items-center gap-1 font-semibold">
									Характеристика <ChevronDown size={16} />
								</div>
								<div className="flex items-center gap-1 font-semibold">
									Заявки <ChevronDown size={16} />
								</div>
								<div className="flex items-center gap-1 font-semibold">
									Статус <ChevronDown size={16} />
								</div>
							</div>

							{/* Room 1 */}
							<div className="mb-6">
								<div className="grid grid-cols-5 gap-4 items-center mb-2">
									<div>
										<div className="font-bold">КОМНАТА 101</div>
										<div className="flex mt-1">
                    <span className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-1">
                      1
                    </span>
											<span className="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-1">
                      2
                    </span>
											<span className="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-1">
                      3
                    </span>
										</div>
									</div>
									<div>Иван Иванов</div>
									<div>Шумный, Сова</div>
									<div>1</div>
									<div>
										<span className="bg-green-200 text-green-800 px-4 py-1 rounded-full">Свободна</span>
									</div>
								</div>
								<div className="bg-gray-50 p-3 rounded mb-4">
									<p className="text-sm text-gray-600">
										Кол-во кроватей: 2. Тип комнаты: двухярусные. Балкон: есть. Душ: нет. Кухня: нет.
									</p>
								</div>

								{/* Applications section */}
								<div className="mb-4">
									<button className="flex items-center gap-1 mb-2 text-gray-700">
										<ChevronDown size={16} /> Заявки
									</button>
									<div className="bg-amber-50 p-4 rounded">
										<div className="grid grid-cols-3 gap-4 border-b pb-2 mb-2">
											<div className="flex items-center gap-1 font-semibold">
												Имя <ChevronDown size={16} />
											</div>
											<div className="flex items-center gap-1 font-semibold">
												Характеристика <ChevronDown size={16} />
											</div>
											<div className="flex items-center gap-1 font-semibold">
												Дата подачи <ChevronDown size={16} />
											</div>
										</div>
										<div className="grid grid-cols-3 gap-4 items-center py-2">
											<div>Иван Иванов</div>
											<div>Шумный, Сова</div>
											<div className="flex items-center justify-between">
												<span>01.01.2025</span>
												<div className="flex gap-1">
													<button className="bg-green-100 p-1 rounded-full">
														<Check size={16} className="text-green-600" />
													</button>
													<button className="bg-red-100 p-1 rounded-full">
														<X size={16} className="text-red-600" />
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Room 2 */}
							<div className="mb-6">
								<div className="grid grid-cols-5 gap-4 items-center mb-2">
									<div>
										<div className="font-bold">КОМНАТА 101</div>
										<div className="flex mt-1">
                    <span className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-1">
                      1
                    </span>
											<span className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-1">
                      2
                    </span>
											<span className="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-1">
                      3
                    </span>
										</div>
									</div>
									<div>Иван Иванов</div>
									<div></div>
									<div>2</div>
									<div>
										<span className="bg-gray-200 text-gray-800 px-4 py-1 rounded-full">Заполнена</span>
									</div>
								</div>
								<div className="bg-gray-50 p-3 rounded mb-4">
									<p className="text-sm text-gray-600">
										Кол-во кроватей: 2. Тип комнаты: двухярусные. Балкон: есть. Душ: нет. Кухня: нет.
									</p>
								</div>

								{/* Applications section */}
								<div className="mb-4">
									<button className="flex items-center gap-1 mb-2 text-gray-700">
										<ChevronDown size={16} /> Заявки
									</button>
									<div className="bg-amber-50 p-4 rounded">
										<div className="grid grid-cols-3 gap-4 border-b pb-2 mb-2">
											<div className="flex items-center gap-1 font-semibold">
												Имя <ChevronDown size={16} />
											</div>
											<div className="flex items-center gap-1 font-semibold">
												Характеристика <ChevronDown size={16} />
											</div>
											<div className="flex items-center gap-1 font-semibold">
												Дата подачи <ChevronDown size={16} />
											</div>
										</div>
										<div className="grid grid-cols-3 gap-4 items-center py-2 border-b">
											<div>Иван Иванов</div>
											<div>Шумный, Сова</div>
											<div className="flex items-center justify-between">
												<span>01.01.2025</span>
												<div className="flex gap-1">
													<button className="bg-green-100 p-1 rounded-full">
														<Check size={16} className="text-green-600" />
													</button>
													<button className="bg-red-100 p-1 rounded-full">
														<X size={16} className="text-red-600" />
													</button>
												</div>
											</div>
										</div>
										<div className="grid grid-cols-3 gap-4 items-center py-2">
											<div>Иван Иванов</div>
											<div>Сова</div>
											<div className="flex items-center justify-between">
												<span>01.01.2025</span>
												<div className="flex gap-1">
													<button className="bg-green-100 p-1 rounded-full">
														<Check size={16} className="text-green-600" />
													</button>
													<button className="bg-red-100 p-1 rounded-full">
														<X size={16} className="text-red-600" />
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	)
}
