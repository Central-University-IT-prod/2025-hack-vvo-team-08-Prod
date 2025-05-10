import { Check, ChevronDown, Users } from "lucide-react"

interface Resident {
    name: string
    characteristics: string
    applicationDate: string
}

interface RoomCardProps {
    roomNumber: string
    resident: string
    characteristics: string
    applications: number
    status: "available" | "occupied"
    beds: number
    bedType: string
    hasBalcony: boolean
    hasToilet: boolean
    hasShower: boolean
    hasKitchen: boolean
    residents: Resident[]
}

export function RoomCard({
                             roomNumber,
                             resident,
                             characteristics,
                             applications,
                             status,
                             beds,
                             bedType,
                             hasBalcony,
                             hasToilet,
                             hasShower,
                             hasKitchen,
                             residents,
                         }: RoomCardProps) {
    return (
        <div className="border-b">
            <div className="grid grid-cols-5 p-3">
                <div className="font-bold">{roomNumber}</div>
                <div>{resident}</div>
                <div>{characteristics}</div>
                <div>{applications}</div>
                <div>
          <span
              className={`${
                  status === "available" ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-800"
              } px-4 py-1 rounded-md`}
          >
            {status === "available" ? "Свободна" : "Заполнена"}
          </span>
                </div>
            </div>
            <div className="px-3 pb-3 text-sm text-gray-600">
                <div className="flex gap-2 items-center mb-1">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span>{`Кол-во кроватей: ${beds}; Тип кровати: ${bedType};`}</span>
                </div>
                <div>
                    {`Балкон: ${hasBalcony ? "есть" : "нет"}; Душ: ${hasShower ? "есть" : "нет"}; Кухня: ${hasKitchen ? "есть" : "нет"}...`}
                </div>
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

                {residents.map((resident, index) => (
                    <div key={index} className={`grid grid-cols-3 p-2 text-sm ${index < residents.length - 1 ? "border-b" : ""}`}>
                        <div>{resident.name}</div>
                        <div>{resident.characteristics}</div>
                        <div className="flex justify-between">
                            {resident.applicationDate}
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
                ))}
            </div>
        </div>
    )
}
