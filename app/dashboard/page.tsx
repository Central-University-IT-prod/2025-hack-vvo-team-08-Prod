"use client"

import {useEffect, useLayoutEffect, useState} from "react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {ChevronDown, ChevronUp, Heart, Search, X} from "lucide-react"
import {getRoomsApi} from "@services/room/all";
import {Room} from "@/types/room";
import {Checkbox} from "@components/ui/checkbox";

export default function Dashboard() {
	const [rooms, setRooms] = useState<Room[]>()
	const [capacity, setCapacity] = useState<number | null>(null)
	const [error, setError] = useState<string | null>(null);

	useLayoutEffect(() => {
		async function fetchRooms() {
			try {
				const roomsData = await getRoomsApi();
				setRooms(roomsData);
				console.log(`roomsData: ${roomsData}`)
			} catch (err) {
				setError("Не удалось загрузить данные о комнатах");
			}
		}

		fetchRooms();
	}, []);

	const [searchTerm, setSearchTerm] = useState("")
	const [filterSearchTerm, setFilterSearchTerm] = useState("")
	const [filters, setFilters] = useState({
		balcony: false,
		toilet: false,
		shower: false,
		kitchen: false,
		airConditioner: false,
		firstTier: false,
		secondTier: false,
		noSmoking: false,
		noParties: false,
	})

	// Состояние для отображения секций фильтров
	const [expandedSections, setExpandedSections] = useState({
		capacity: true,
		characteristics: true,
		sleepingPlace: true,
		preferences: true,
	})

	// Состояние для отфильтрованных комнат
	const [filteredRooms, setFilteredRooms] = useState<Room[] | undefined>(rooms)

	// Состояние для избранных комнат
	const [favorites, setFavorites] = useState<string[]>([])

	// Функция для переключения секций фильтров
	const toggleSection = (section: keyof typeof expandedSections) => {
		setExpandedSections((prev) => ({
			...prev,
			[section]: !prev[section],
		}))
	}

	// Функция для переключения избранного
	const toggleFavorite = (roomId: string) => {
		setFavorites((prev) => (prev.includes(roomId) ? prev.filter((id) => id !== roomId) : [...prev, roomId]))
	}

	// Функция для изменения фильтров
	const handleFilterChange = (filterName: keyof typeof filters) => {
		setFilters((prev) => ({
			...prev,
			[filterName]: !prev[filterName],
		}))
	}

	// Применение фильтров при изменении состояния
	useEffect(() => {
		if (!rooms) return
		let result = [...rooms]
		console.log(result)

		// Фильтр по поисковому запросу
		if (searchTerm) {
			result = result.filter(
					(room) =>
							room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
							room.description.toLowerCase().includes(searchTerm.toLowerCase()),
			)
		}

		// Фильтр по вместимости
		if (capacity !== null) {
			result = result.filter((room) => room.beds <= capacity)
		}

		// Фильтр по характеристикам
		if (filters.balcony) {
			result = result.filter((room) => room.balcony)
		}

		if (filters.shower) {
			result = result.filter((room) => room.shower)
		}

		if (filters.kitchen) {
			result = result.filter((room) => room.kitchen)
		}

		// Фильтр по предпочтениям (предполагаем, что эта информация может быть в описании)
		if (filters.noSmoking) {
			result = result.filter(
					(room) =>
							room.description.toLowerCase().includes("без курения") ||
							room.description.toLowerCase().includes("некурящие"),
			)
		}

		if (filters.noParties) {
			result = result.filter(
					(room) =>
							room.description.toLowerCase().includes("без вечеринок") || room.description.toLowerCase().includes("тихая"),
			)
		}

		setFilteredRooms(result)
	}, [rooms, searchTerm, capacity, filters])

	// Очистка фильтра вместимости
	const clearCapacityFilter = () => {
		setCapacity(null)
	}

	return (
			<main className="container p-4 mx-auto pb-20">
				<h1 className="mb-6 text-3xl font-bold text-center font-next-art">КОМНАТЫ</h1>

				<div className="flex justify-center mb-6">
					<Button className="bg-yellow-500 hover:bg-yellow-600">Заселить меня автоматически</Button>
				</div>

				<div className="flex flex-col md:flex-row gap-4 mb-6">
					<div className="w-full md:w-1/3">
						<div className="relative">
							<Input
									placeholder="Поиск по фильтрам"
									className="pl-10 h-12 bg-[#F5F5F0]"
									value={filterSearchTerm}
									onChange={(e) => setFilterSearchTerm(e.target.value)}
							/>
							<Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"/>
						</div>
					</div>
					<div className="w-full md:w-2/3">
						<div className="relative">
							<Input
									placeholder="Поиск"
									className="pl-10 h-12 bg-[#F5F5F0]"
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
							/>
							<Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"/>
						</div>
					</div>
				</div>

				{/* Filters */}
				<div className="mb-8">
					{/* Вместимость */}
					<div className="filter-section mb-4">
						<button
								onClick={() => toggleSection("capacity")}
								className="filter-header flex items-center text-yellow-500 font-medium"
						>
							{expandedSections.capacity ? (
									<ChevronDown className="h-5 w-5 mr-2"/>
							) : (
									<ChevronUp className="h-5 w-5 mr-2"/>
							)}
							<span>Вместимость</span>
						</button>

						{expandedSections.capacity && (
								<div className="mt-2 flex items-center pl-7">
									<span className="mr-2">до</span>
									<div className="relative">
										<Input
												type="number"
												className="w-24 h-10 bg-[#F5F5F0]"
												value={capacity || ""}
												onChange={(e) => setCapacity(e.target.value ? Number.parseInt(e.target.value) : null)}
										/>
										{capacity !== null && (
												<button
														onClick={clearCapacityFilter}
														className="absolute right-2 top-2.5 text-gray-400 hover:text-gray-600"
												>
													<X className="h-4 w-4"/>
												</button>
										)}
									</div>
									<span className="ml-2">человек</span>
								</div>
						)}
					</div>

					{/* Характеристики */}
					<div className="filter-section mb-4">
						<button
								onClick={() => toggleSection("characteristics")}
								className="filter-header flex items-center text-yellow-500 font-medium"
						>
							{expandedSections.characteristics ? (
									<ChevronDown className="h-5 w-5 mr-2"/>
							) : (
									<ChevronUp className="h-5 w-5 mr-2"/>
							)}
							<span>Характеристики</span>
						</button>

						{expandedSections.characteristics && (
								<div className="mt-2 space-y-2 pl-7">
									<label className="flex items-center">
										<Checkbox
												checked={filters.airConditioner}
												onCheckedChange={() => handleFilterChange("airConditioner")}
												className="mr-2"
										/>
										<span>Кондиционер</span>
									</label>
									<label className="flex items-center">
										<Checkbox
												checked={filters.shower}
												onCheckedChange={() => handleFilterChange("shower")}
												className="mr-2"
										/>
										<span>Душ</span>
									</label>
									<label className="flex items-center">
										<Checkbox
												checked={filters.kitchen}
												onCheckedChange={() => handleFilterChange("kitchen")}
												className="mr-2"
										/>
										<span>Кухня</span>
									</label>
									<label className="flex items-center">
										<Checkbox
												checked={filters.balcony}
												onCheckedChange={() => handleFilterChange("balcony")}
												className="mr-2"
										/>
										<span>Балкон</span>
									</label>
								</div>
						)}
					</div>
				</div>

				{/* Room listings */}
				<div className="mb-8">
					<div className="grid grid-cols-12 mb-2 font-medium text-sm">
						<div className="col-span-3 md:col-span-3 flex items-center">
							Название <ChevronDown className="h-4 w-4 ml-1"/>
						</div>
						<div className="col-span-3 md:col-span-3 flex items-center">
							Жители <ChevronDown className="h-4 w-4 ml-1"/>
						</div>
						<div className="col-span-6 md:col-span-6 flex items-center justify-end">
							Статус <ChevronDown className="h-4 w-4 ml-1"/>
						</div>
					</div>

					{filteredRooms
							? filteredRooms.map((room) => (
									<div key={room._id} className="mb-4">
										<div className="grid grid-cols-12 items-center">
											<div className="col-span-3 md:col-span-3">
												<div className="bg-[#F5F5F0] rounded-lg p-4 h-28 flex items-center justify-center">
													{/* Placeholder for room image */}
												</div>
											</div>
											<div className="col-span-9 md:col-span-9 pl-4">
												<div className="grid grid-cols-12">
													<div className="col-span-12 md:col-span-4">
														<h3 className="text-xl font-bold font-next-art">{room.name}</h3>
														<div className="flex mt-2">
															{room.members.map((_, idx) => (
																	<div key={idx} className="mr-1">
																		<div
																				className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
																			М
																		</div>
																	</div>
															))}
														</div>
													</div>
													<div
															className="col-span-12 md:col-span-8 mt-2 md:mt-0 flex flex-col md:flex-row md:items-center md:justify-between">
														<div className="text-sm text-gray-600">
															<p>
																Кол-во кроватей: {room.beds};
															</p>
															<p>
																Балкон: {room.balcony ? "есть" : "нет"}; Душ: {room.shower ? "есть" : "нет"};
																Кухня:{" "}
																{room.kitchen ? "есть" : "нет"};
															</p>
														</div>
														<div className="flex items-center mt-2 md:mt-0">
															<button className="mr-2">
																<Heart className="h-6 w-6 text-red-400"/>
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
							))
							: <div className="text-center py-8 text-gray-500">
								Комнаты не найдены. Попробуйте изменить параметры фильтрации.
							</div>}
				</div>
			</main>
	)
}
