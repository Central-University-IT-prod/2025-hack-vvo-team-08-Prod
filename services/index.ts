"use server"

import type {User} from "lucia";
import {notFound} from "next/navigation";
import {unstable_cache as cache} from "next/cache";
import {roomModel, userModel} from "@server/models";
import {Room} from "@/types/room";

export const getUser = cache(
		async (
				name: string
		) => {
			console.log(`name: ${name}`)

			const user: User | null = JSON.parse(JSON.stringify(
					await userModel.findOne({name}, {}, {lean: true})
			))

			console.log(`user: ${user}`)

			if (!user) {
				console.log(`User ${name} not found`)
				notFound()
			}

			return {user}
		},
		["user", "userLike", "all"],
		{revalidate: 600, tags: ["user", "userLike", "all"]}
)

export const getAuthor = cache(
		async (id?: string): Promise<{ user: User | null }> => {
			const user: User | null = JSON.parse(JSON.stringify(
					await userModel.findByIdAndUpdate(
							id,
							{onlineAt: new Date()},
							{lean: true},
					)
			))

			return {user}
		},
		["author", "userLike", "all"],
		{revalidate: 300, tags: ["author", "userLike", "all"]}
)

export const getUsers = cache(
		async () => {
			const users: User[] = JSON.parse(JSON.stringify(
					await userModel
							.find(
									{},
									{},
									{
										lean: true,
										sort: {createdAt: -1}
									}
							)
			))

			return users
		},
		["users", "userLike", "all"],
		{revalidate: 1200, tags: ["users", "userLike", "all"]}
)

export const getRoom = cache(
		async (_id: string): Promise<{ room: Room }> => {
			const room: Room | null = JSON.parse(JSON.stringify(
					await roomModel.findById(_id, {}, {lean: true})
			));

			if (!room) {
				console.log(`Room ${_id} not found`);
				notFound();
			}

			return {room};
		},
		["room", "roomLike", "all"],
		{revalidate: 600, tags: ["room", "roomLike", "all"]}
);

export const getRooms = cache(
		async (): Promise<Room[]> => {
			const rooms: Room[] = JSON.parse(JSON.stringify(
					await roomModel.find({}, {}, {
						lean: true
					})
			));

			return rooms;
		},
		["rooms", "roomLike", "all"],
		{revalidate: 1200, tags: ["rooms", "roomLike", "all"]}
);