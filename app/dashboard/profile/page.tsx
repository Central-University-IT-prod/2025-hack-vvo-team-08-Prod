"use client"

import {Button} from "@components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@components/ui/card"
import {Input} from "@components/ui/input"
import {Label} from "@components/ui/label"
import {Textarea} from "@components/ui/textarea"
import {RadioGroup, RadioGroupItem} from "@components/ui/radio-group"
import {Checkbox} from "@components/ui/checkbox"
import {Avatar, AvatarFallback, AvatarImage} from "@components/ui/avatar"
import {Upload} from "lucide-react"

export default function Profile() {
	return (
			<main className="container p-4 mx-auto mb-20">
				<h1 className="mb-6 text-3xl font-bold text-center font-next-art">МОЙ ПРОФИЛЬ</h1>

				<Card className="mb-6">
					<CardHeader className="pb-2">
						<CardTitle className="font-next-art">Личная информация</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex flex-col items-center mb-6 md:flex-row md:items-start md:space-x-6">
							<div className="relative mb-4 md:mb-0">
								<Avatar className="w-24 h-24">
									<AvatarImage src="/placeholder-user.jpg" alt="Аватар"/>
									<AvatarFallback className="text-2xl">СТ</AvatarFallback>
								</Avatar>
								<Button size="icon" variant="outline" className="absolute bottom-0 right-0 w-8 h-8 rounded-full">
									<Upload className="w-4 h-4"/>
								</Button>
							</div>

							<div className="flex-1 space-y-4">
								<div className="grid gap-2">
									<Label htmlFor="fullname">ФИО</Label>
									<Input id="fullname" defaultValue="Студентов Студент Студентович"/>
								</div>

								<div className="grid grid-cols-2 gap-4">
									<div className="grid gap-2">
										<Label htmlFor="faculty">Факультет</Label>
										<Input id="faculty" defaultValue="Информатика"/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="course">Курс</Label>
										<Input id="course" type="number" defaultValue="2" min="1" max="6"/>
									</div>
								</div>

								<div className="grid gap-2">
									<Label htmlFor="email">Email</Label>
									<Input id="email" type="email" defaultValue="student@example.com"/>
								</div>

								<div className="grid gap-2">
									<Label htmlFor="phone">Телефон</Label>
									<Input id="phone" type="tel" defaultValue="+7 (900) 123-45-67"/>
								</div>
							</div>
						</div>

						<Button className="w-full bg-yellow-500 hover:bg-yellow-600">Сохранить изменения</Button>
					</CardContent>
				</Card>

				<Card className="mb-6">
					<CardHeader className="pb-2">
						<CardTitle className="font-next-art">Предпочтения проживания</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label>Режим дня</Label>
							<RadioGroup defaultValue="early">
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="early" id="early"/>
									<Label htmlFor="early">Жаворонок (рано встаю, рано ложусь)</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="late" id="late"/>
									<Label htmlFor="late">Сова (поздно встаю, поздно ложусь)</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="mixed" id="mixed"/>
									<Label htmlFor="mixed">Смешанный (график меняется)</Label>
								</div>
							</RadioGroup>
						</div>

						<div className="space-y-2">
							<Label>Предпочтения по шуму</Label>
							<RadioGroup defaultValue="quiet">
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="quiet" id="quiet"/>
									<Label htmlFor="quiet">Предпочитаю тишину</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="moderate" id="moderate"/>
									<Label htmlFor="moderate">Умеренный шум допустим</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="noisy" id="noisy"/>
									<Label htmlFor="noisy">Не против шума</Label>
								</div>
							</RadioGroup>
						</div>

						<div className="space-y-2">
							<Label>Интересы (выберите все подходящие)</Label>
							<div className="grid grid-cols-2 gap-2">
								<div className="flex items-center space-x-2">
									<Checkbox id="sports"/>
									<Label htmlFor="sports">Спорт</Label>
								</div>
								<div className="flex items-center space-x-2">
									<Checkbox id="music"/>
									<Label htmlFor="music">Музыка</Label>
								</div>
								<div className="flex items-center space-x-2">
									<Checkbox id="gaming"/>
									<Label htmlFor="gaming">Видеоигры</Label>
								</div>
								<div className="flex items-center space-x-2">
									<Checkbox id="reading"/>
									<Label htmlFor="reading">Чтение</Label>
								</div>
								<div className="flex items-center space-x-2">
									<Checkbox id="cooking"/>
									<Label htmlFor="cooking">Кулинария</Label>
								</div>
								<div className="flex items-center space-x-2">
									<Checkbox id="art"/>
									<Label htmlFor="art">Искусство</Label>
								</div>
							</div>
						</div>

						<div className="space-y-2">
							<Label htmlFor="about">О себе</Label>
							<Textarea
									id="about"
									placeholder="Расскажите о себе, своих привычках и предпочтениях для лучшего подбора соседей"
									className="min-h-[100px]"
							/>
						</div>

						<Button className="w-full bg-yellow-500 hover:bg-yellow-600">Сохранить предпочтения</Button>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="pb-2">
						<CardTitle className="font-next-art">Безопасность</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="grid gap-2">
							<Label htmlFor="current-password">Текущий пароль</Label>
							<Input id="current-password" type="password"/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="new-password">Новый пароль</Label>
							<Input id="new-password" type="password"/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="confirm-password">Подтвердите пароль</Label>
							<Input id="confirm-password" type="password"/>
						</div>

						<Button className="w-full bg-yellow-500 hover:bg-yellow-600">Изменить пароль</Button>

						<div className="pt-4 mt-4 border-t">
							<Button variant="destructive" className="w-full">
								Выйти из аккаунта
							</Button>
						</div>
					</CardContent>
				</Card>
			</main>
	)
}
