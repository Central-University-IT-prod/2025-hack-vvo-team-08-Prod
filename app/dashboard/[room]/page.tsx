import Image from "next/image"
import Link from "next/link"
import { Button } from "@components/ui/button"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"

export default function RoomPage() {
  return (
     <div className="min-h-screen flex flex-col">

      {/* Основа */}
      <main className="flex-1 container max-w-6xl mx-auto py-6 px-6">
        {/* Крумб */}
        <div className="text-sm mb-2">
          <Link href="/dashboard" className="text-gray-500 hover:text-gray-700">
            Комнаты
          </Link>{" "}
          &gt; <span className="text-gray-700">Комната 101</span>
        </div>

        <h1 className="text-3xl font-bold mb-6">КОМНАТА 101</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Левая шняга с фотками */}
          <div>
            <div className="relative">
              <div className="relative h-[300px] bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Фото комнаты"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex mt-4 space-x-2">
              <button className="flex items-center justify-center h-8 w-8 bg-white border rounded-full shadow-sm">
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="h-16 w-20 flex-shrink-0 bg-gray-100 rounded">
                <Image
                  src="/placeholder.svg?height=64&width=80"
                  alt="Миниатюра 1"
                  width={80}
                  height={64}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="h-16 w-20 flex-shrink-0 bg-gray-100 rounded">
                <Image
                  src="/placeholder.svg?height=64&width=80"
                  alt="Миниатюра 2"
                  width={80}
                  height={64}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="h-16 w-20 flex-shrink-0 bg-gray-100 rounded">
                <Image
                  src="/placeholder.svg?height=64&width=80"
                  alt="Миниатюра 3"
                  width={80}
                  height={64}
                  className="w-full h-full object-cover rounded"
                />
              </div>

              <button className="flex items-center justify-center h-8 w-8 bg-white border rounded-full shadow-sm">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Инфа по комнате */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3">КОМНАТА 101, ЭТАЖ 1, СЕКЦИЯ А</h2>

              <div className="flex items-center mb-6">
                <div className="text-[#FFCC33]">★</div>
                <div className="text-gray-300">★★★</div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Жители:</h3>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="text-sm font-medium">Иванов Иван</div>
                    <div className="bg-[#FFCC33] text-sm px-2 py-1 rounded mt-1">+7 XXX XXX XX XX</div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex items-center justify-center h-10 w-10 border rounded-full">
                  <Heart className="h-5 w-5" />
                </button>
                <Button className="bg-[#FFCC33] hover:bg-[#E6B82E] text-black font-medium">Подать заявку</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Характеристики */}
        <div className="mt-8">
          <div className="bg-white rounded-3xl shadow-md p-6 mb-4">
            <h3 className="text-xl font-bold uppercase mb-4">Характеристики</h3>

            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <div>
                <div className="text-gray-500">Количество кроватей:</div>
                <div className="text-gray-500">
                  Тип кроватей: <span className="text-black font-medium">двухъярусная</span>
                </div>
                <div className="text-gray-500">
                  Общая площадь: <span className="text-black font-medium">39.2 м²</span>
                </div>
                <div className="text-gray-500">
                  Балкон: <span className="text-black font-medium">есть</span>
                </div>
                <div className="text-gray-500">
                  Этаж: <span className="text-black font-medium">1</span>
                </div>
              </div>
              <div>
                <div className="text-gray-500">
                  Высота потолков: <span className="text-black font-medium">2.2 м</span>
                </div>
                <div className="text-gray-500">
                  Окна: <span className="text-black font-medium">на улицу</span>
                </div>
                <div className="text-gray-500">
                  Душ: <span className="text-black font-medium">есть</span>
                </div>
                <div className="text-gray-500">
                  Кухня: <span className="text-black font-medium">есть</span>
                </div>
              </div>
            </div>
          </div>

          {/* Адрес */}
          <div className="bg-white rounded-3xl shadow-md p-6">
            <h3 className="text-xl font-bold uppercase mb-4">Адрес</h3>
            <p className="text-sm">Ростовская обл., Таганрог, ул. Нестерова, 21 р-н</p>
            <p className="text-sm">Северо-Западный</p>
          </div>
        </div>
      </main>
    </div>
  )
}
