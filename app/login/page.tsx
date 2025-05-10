"use client"

import type React from "react"
import Link from "next/link"
import {Button} from "@components/ui/button"
import {Input} from "@components/ui/input"
import {Label} from "@components/ui/label"
import Form from "next/form";
import {LoginApi} from "@services/user/login";

export default async function Login() {
	return (
			<main className="min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-200">
				<div className="relative min-h-screen">
					{/* Волнистая линия сверху */}
					<div className="absolute top-0 left-0 right-0 h-16">
						<svg
								viewBox="0 0 1200 120"
								preserveAspectRatio="none"
								className="absolute bottom-0 left-0 w-full h-16 text-yellow-400"
						>
							<path
									d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
									opacity=".25"
									className="fill-current"
							></path>
							<path
									d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
									opacity=".5"
									className="fill-current"
							></path>
							<path
									d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
									className="fill-current"
							></path>
						</svg>
					</div>

					<div
							className="container relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 mx-auto">
						<h1 className="mt-8 text-4xl font-bold text-center uppercase font-next-art md:text-6xl">УЛЕЙ</h1>

						<div className="w-full max-w-md mt-12">
							<div className="p-8 bg-white/80 backdrop-blur rounded-lg shadow-md">
								<h2 className="mb-8 text-2xl font-bold text-center uppercase font-next-art">ВХОД</h2>

								<Form action={LoginApi} className="space-y-6">
									<div className="space-y-2">
										<Label htmlFor="loginOrEmail" className="sr-only">
											ЛОГИН
										</Label>
										<Input
												name="name"
												placeholder="ЛОГИН"
												className="h-12 text-center bg-yellow-50 placeholder:text-yellow-800/70"
												required
										/>
									</div>

									<div className="space-y-2">
										<Label htmlFor="password" className="sr-only">
											ПАРОЛЬ
										</Label>
										<Input
												name="password"
												type="password"
												placeholder="ПАРОЛЬ"
												className="h-12 text-center bg-yellow-50 placeholder:text-yellow-800/70"
												required
										/>
									</div>

									<Button type="submit" className="w-full h-12 bg-yellow-500 hover:bg-yellow-600">
										ВОЙТИ
									</Button>

									<div className="text-center">
									</div>
								</Form>
							</div>
						</div>
					</div>

					{/* Волнистая линия снизу */}
					<div className="absolute bottom-0 left-0 right-0 h-16 transform rotate-180">
						<svg
								viewBox="0 0 1200 120"
								preserveAspectRatio="none"
								className="absolute bottom-0 left-0 w-full h-16 text-yellow-400"
						>
							<path
									d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
									opacity=".25"
									className="fill-current"
							></path>
							<path
									d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
									opacity=".5"
									className="fill-current"
							></path>
							<path
									d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
									className="fill-current"
							></path>
						</svg>
					</div>
				</div>
			</main>
	)
}
