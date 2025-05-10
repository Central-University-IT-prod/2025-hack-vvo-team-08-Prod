import { Check, ChevronDown, ChevronLeft, ChevronRight, Edit, Search, Users } from "lucide-react"
import Link from "next/link"

export default function AutomaticDistribution() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Main Content */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="w-64 bg-white p-6 shadow-md">
                    <nav className="space-y-4">
                        <Link href="/app/public" className="block font-medium">
                            ГЛАВНАЯ
                        </Link>
                        <Link href="/automatic" className="block font-bold">
                            АВТОМАТ
                        </Link>
                        <Link href="/rooms" className="block font-medium">
                            КОМНАТЫ
                        </Link>
                        <Link href="/students" className="block font-medium">
                            СТУДЕНТЫ
                        </Link>
                    </nav>
                </aside>

                {/* Content */}
                <main className="flex-1 p-6 bg-gray-50">
                    <div className="mb-6">
                        <div className="text-sm text-gray-500 mb-2">
                            <span>Профиль &gt; Управление &gt; Автомат</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">АВТОМАТИЧЕСКОЕ РАСПРЕДЕЛЕНИЕ</h2>

                        <div className="flex justify-between mb-4">
                            <button className="bg-yellow-400 px-4 py-2 rounded flex items-center gap-2">
                                <Edit className="w-4 h-4" />
                                Редактировать
                            </button>

                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Поиск"
                                    className="pl-3 pr-10 py-2 rounded-md border border-gray-300 bg-gray-200"
                                />
                                <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-500" />
                            </div>
                        </div>

                        {/* Rooms Table */}
                        <div className="bg-[#FDFAF4] rounded-md shadow-sm mb-6">
                            <div className="grid grid-cols-5 p-3 border-b text-sm font-medium">
                                <div className="flex items-center gap-1">
                                    Название <ChevronDown className="w-4 h-4" />
                                </div>
                                <div className="flex items-center gap-1">
                                    Жители <ChevronDown className="w-4 h-4" />
                                </div>
                                <div className="flex items-center gap-1">
                                    Характеристика <ChevronDown className="w-4 h-4" />
                                </div>
                                <div className="flex items-center gap-1">
                                    Заявки <ChevronDown className="w-4 h-4" />
                                </div>
                                <div className="flex items-center gap-1">
                                    Статус <ChevronDown className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Room 1 */}
                            <div className="border-b">
                                <div className="grid grid-cols-5 p-3">
                                    <div className="font-bold">КОМНАТА 101</div>
                                    <div>Иван Иванов</div>
                                    <div>1 курс, Шумный, Сова</div>
                                    <div>1</div>
                                    <div>
                                        <span className="bg-green-200 px-4 py-1 rounded-md text-green-800">Свободна</span>
                                    </div>
                                </div>
                                <div className="px-3 pb-3 text-sm text-gray-600">
                                    <div className="flex gap-2 items-center mb-1">
                                        <Users className="w-4 h-4 text-blue-500" />
                                        <span>Кол-во кроватей: 2; Тип кровати: двухъярусные;</span>
                                    </div>
                                    <div>Балкон: есть; Душ: нет; Кухня: нет...</div>
                                </div>

                                {/* Residents Table */}
                                <div className="mx-3 mb-3 bg-gray-100 rounded-md overflow-hidden">
                                    <div className="grid grid-cols-3 p-2 text-sm font-medium border-b">
                                        <div className="flex items-center gap-1">
                                            Имя <ChevronDown className="w-4 h-4" />
                                        </div>
                                        <div className="flex items-center gap-1">
                                            Характеристика <ChevronDown className="w-4 h-4" />
                                        </div>
                                        <div className="flex items-center gap-1">
                                            Дата подачи <ChevronDown className="w-4 h-4" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 p-2 text-sm border-b">
                                        <div>Иван Иванов</div>
                                        <div>1 курс, Шумный</div>
                                        <div className="flex justify-between">
                                            01.01.2025
                                            <div className="flex gap-1">
                                                <button className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center">
                                                    <Check className="w-4 h-4 text-green-700" />
                                                </button>
                                                <button className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center">
                                                    <span className="text-red-700">×</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 p-2 text-sm border-b">
                                        <div>Иван Иванов</div>
                                        <div>Сова</div>
                                        <div className="flex justify-between">
                                            01.01.2025
                                            <div className="flex gap-1">
                                                <button className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center">
                                                    <Check className="w-4 h-4 text-green-700" />
                                                </button>
                                                <button className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center">
                                                    <span className="text-red-700">×</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 p-2 text-sm">
                                        <div>Иван Иванов</div>
                                        <div>Шумный, Сова</div>
                                        <div className="flex justify-between">
                                            01.01.2025
                                            <div className="flex gap-1">
                                                <button className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center">
                                                    <Check className="w-4 h-4 text-green-700" />
                                                </button>
                                                <button className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center">
                                                    <span className="text-red-700">×</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Room 2 */}
                            <div className="border-b">
                                <div className="grid grid-cols-5 p-3">
                                    <div className="font-bold">КОМНАТА 101</div>
                                    <div>Иван Иванов</div>
                                    <div>3 курс, Тихий</div>
                                    <div>2</div>
                                    <div>
                                        <span className="bg-gray-200 px-4 py-1 rounded-md text-gray-800">Заполнена</span>
                                    </div>
                                </div>
                                <div className="px-3 pb-3 text-sm text-gray-600">
                                    <div className="flex gap-2 items-center mb-1">
                                        <Users className="w-4 h-4 text-blue-500" />
                                        <span>Кол-во кроватей: 2; Тип кровати: двухъярусные;</span>
                                    </div>
                                    <div>Балкон: есть; Душ: нет; Кухня: нет...</div>
                                </div>

                                {/* Residents Table */}
                                <div className="mx-3 mb-3 bg-gray-100 rounded-md overflow-hidden">
                                    <div className="grid grid-cols-3 p-2 text-sm font-medium border-b">
                                        <div className="flex items-center gap-1">
                                            Имя <ChevronDown className="w-4 h-4" />
                                        </div>
                                        <div className="flex items-center gap-1">
                                            Характеристика <ChevronDown className="w-4 h-4" />
                                        </div>
                                        <div className="flex items-center gap-1">
                                            Дата подачи <ChevronDown className="w-4 h-4" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 p-2 text-sm border-b">
                                        <div>Иван Иванов</div>
                                        <div>3 курс, Тихий, Сова</div>
                                        <div className="flex justify-between">
                                            01.01.2025
                                            <div className="flex gap-1">
                                                <button className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center">
                                                    <Check className="w-4 h-4 text-green-700" />
                                                </button>
                                                <button className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center">
                                                    <span className="text-red-700">×</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 p-2 text-sm border-b">
                                        <div>Иван Иванов</div>
                                        <div>Сова</div>
                                        <div className="flex justify-between">
                                            01.01.2025
                                            <div className="flex gap-1">
                                                <button className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center">
                                                    <Check className="w-4 h-4 text-green-700" />
                                                </button>
                                                <button className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center">
                                                    <span className="text-red-700">×</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 p-2 text-sm">
                                        <div>Иван Иванов</div>
                                        <div>Тихий</div>
                                        <div className="flex justify-between">
                                            01.01.2025
                                            <div className="flex gap-1">
                                                <button className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center">
                                                    <Check className="w-4 h-4 text-green-700" />
                                                </button>
                                                <button className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center">
                                                    <span className="text-red-700">×</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center gap-2">
                            <button className="w-8 h-8 flex items-center justify-center border rounded-md">
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center border rounded-md bg-yellow-400">1</button>
                            <button className="w-8 h-8 flex items-center justify-center border rounded-md">2</button>
                            <button className="w-8 h-8 flex items-center justify-center border rounded-md">3</button>
                            <button className="w-8 h-8 flex items-center justify-center border rounded-md">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
