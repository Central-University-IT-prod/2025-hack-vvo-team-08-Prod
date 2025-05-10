"use server"

import axios from "axios";
import {redirect} from "next/navigation";
import {User} from "lucia";
import {cookies} from "next/headers";
import {lucia} from "@server/lucia";


export async function LoginApi(FormData: FormData) {
	const res = await axios.post(
			`${process.env.NEXT_PUBLIC_URL ?? "http://RETRACTED/"}/api/login`,
			{
				name: FormData.get("name") as string,
				password: FormData.get("password") as string
			}
	)

	if (res.status !== 200) {
		throw new Error("Failed to login")
	}

	const {user} = res.data as { user: User }

	const cookiesStore = await cookies()
	const session = await lucia.createSession(user._id, {})
	const sessionCookie = lucia.createSessionCookie(session.id)
	cookiesStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)

	if (user.isAdmin) {
		redirect("/admin")
	} else {
		redirect("/dashboard")
	}
}