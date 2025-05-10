"use client"

import Link from "next/link"
import { Button } from "@components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@components/ui/card"
import { Badge } from "@components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar"
import { Home, Users, Building2, FileText, Settings, LogOut, ChevronRight } from "lucide-react"
import {getRoomsApi} from "@services/room/all";
import {useLayoutEffect, useState} from "react"; // Импортируем getRooms

// Типы данных
interface Room {
  _id: string
  name: string
  description: string
  members: string[]
  beds: number
  balcony: boolean
  shower: boolean
  kitchen: boolean
}

export default function AdminDashboard() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [error, setError] = useState<string | null>(null);

  useLayoutEffect(() => {
    async function fetchRooms() {
      try {
        const roomsData = await getRoomsApi();
        setRooms(roomsData);
      } catch (err) {
        setError("Не удалось загрузить данные о комнатах");
      }
    }

    fetchRooms();
  }, []);

  return (
      <div className="flex min-h-screen bg-[#FFFBF0]">
        {/* Боковая панель */}
        <aside className="fixed inset-y-0 left-0 z-25 hidden w-64 bg-[#FFFBF0] md:block">
          <div className="flex items-center justify-center h-16 border-b-[#ffcb3b]">
            <Link href="/admin" className="text-2xl font-bold text-black uppercase font-next-art">
              УЛЕЙ
            </Link>
          </div>

          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link href="/admin" className="flex items-center px-4 py-3 text-black rounded-md bg-[#ffcb3b]">
                  <Home className="w-5 h-5 mr-3" />
                  Главная
                </Link>
              </li>
              <li>
                <Link
                    href="/admin/rooms"
                    className="flex items-center px-4 py-3 text-black rounded-md hover:bg-[#ffcb3b]"
                >
                  <Building2 className="w-5 h-5 mr-3" />
                  Комнаты
                </Link>
              </li>
              <li>
                <Link
                    href="/admin/students"
                    className="flex items-center px-4 py-3 text-black rounded-md hover:bg-[#ffcb3b]"
                >
                  <Users className="w-5 h-5 mr-3" />
                  Студенты
                </Link>
              </li>
              <li>
                <Link
                    href="/admin/settings"
                    className="flex items-center px-4 py-3 text-black rounded-md hover:bg-[#ffcb3b]"
                >
                  <Settings className="w-5 h-5 mr-3" />
                  Настройки
                </Link>
              </li>
            </ul>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <Button variant="destructive" className="w-full">
              <LogOut className="w-4 h-4 mr-2" />
              Выйти
            </Button>
          </div>
        </aside>

        {/* Мобильная навигация */}
        <div className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-around h-16 bg-black
       border-t md:hidden">
          <Link href="/admin" className="flex flex-col items-center justify-center w-full h-full text-[#ffcb3b]">
            <Home className="w-6 h-6" />
            <span className="text-xs">Главная</span>
          </Link>
          <Link
              href="/admin/applications"
              className="flex flex-col items-center justify-center w-full h-full text-gray-500"
          >
            <FileText className="w-6 h-6" />
            <span className="text-xs">Заявки</span>
          </Link>
          <Link href="/admin/rooms" className="flex flex-col items-center justify-center w-full h-full text-gray-500">
            <Building2 className="w-6 h-6" />
            <span className="text-xs">Комнаты</span>
          </Link>
          <Link href="/admin/students" className="flex flex-col items-center justify-center w-full h-full text-gray-500">
            <Users className="w-6 h-6" />
            <span className="text-xs">Студенты</span>
          </Link>
        </div>

        {/* Основной контент */}
        <div className="flex-1 md:ml-64">
          <header className="sticky top-0 z-10 flex items-center justify-between w-full h-16 px-4 bg-[#ffcb3b] shadow-md">
            <h1 className="text-xl font-bold font-next-art md:hidden">УЛЕЙ</h1>

            <div className="flex items-center ml-auto space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="Аватар" />
                <AvatarFallback>АД</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Администратор</p>
                <p className="text-xs text-gray-500">admin@uley.ru</p>
              </div>
            </div>
          </header>

          <main className="p-4 md:p-6">
            <div className="grid gap-6 mb-6 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="font-next-art">Всего комнат</CardTitle>
                  <CardDescription>Общее количество комнат</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{rooms.length}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="font-next-art">Свободные места</CardTitle>
                  <CardDescription>Доступные места в общежитии</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">
                    {rooms.reduce((acc, room) => acc + (room.beds - room.members.length), 0)}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="font-next-art">Ожидающие заявки</CardTitle>
                  <CardDescription>Заявки, требующие рассмотрения</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="font-next-art">Популярные комнаты</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {rooms.slice(0, 4).map((room) => (
                        <li key={room._id} className="flex items-center justify-between p-3 border rounded-md">
                          <div>
                            <p className="font-medium">Комната {room.name}</p>
                            <p className="text-sm text-gray-500">
                              Этаж {room.beds} • {room.members.length}/{room.beds} мест
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                                className={
                                  room.members.length === 0
                                      ? "bg-green-100 text-green-800"
                                      : room.members.length === room.beds
                                          ? "bg-blue-100 text-blue-800"
                                          : "bg-orange-100 text-orange-800"
                                }
                            >
                              {room.members.length === 0
                                  ? "Доступна"
                                  : room.members.length === room.beds
                                      ? "Заполнена"
                                      : "Ремонт"}
                            </Badge>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </div>
                        </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="link" className="text-black">
                    Показать все комнаты
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </main>
        </div>
      </div>
  )
}

