"use server"

import {lucia} from "@server/lucia";
import {getAuthor} from "@/services";
import type {User} from "lucia";
import {cache} from "react";
import {cookies} from "next/headers";

export const validate = cache(
		async (): Promise<{ user: User | null }> => {
			const cookiesStore = await cookies()
			const sessionId = cookiesStore.get(lucia.sessionCookieName)?.value
			console.log(sessionId)

			if (!sessionId) {
				return {
					user: null
				}
			}

			const {user, session} = await lucia.validateSession(sessionId);

			console.log(user)
			console.log(session)

			try {
				let sessionCookie
				if (session && session.fresh) {
					sessionCookie = lucia.createSessionCookie(session.id);
				} else {
					sessionCookie = lucia.createBlankSessionCookie();
				}
				cookiesStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
			} catch {
			}

			return await getAuthor(user?.id)
		}
);