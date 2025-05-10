"use server"

import {Sex} from "@/types/user";

export async function CreateUser(formData: FormData, sex: Sex) {
	const name = formData.get("name") as string
	const email = formData.get("email") as string
	const password = formData.get("password") as string
	const fullname = formData.get("fullname") as string


}