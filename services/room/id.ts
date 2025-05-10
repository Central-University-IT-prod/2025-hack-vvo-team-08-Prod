"use server"

import axios from "axios";
import { Room } from "@/types/room"; // импортируй свой тип Room, если он есть

export async function getRoomByIdApi(id: string) {
	const res = await axios.get(
			`${process.env.NEXT_PUBLIC_URL ?? "http://RETRACTED/"}/api/room/${id}`
	);

	if (res.status !== 200) {
		throw new Error("Failed to fetch room");
	}

	return res.data.room as Room; // типизация одной комнаты
}
