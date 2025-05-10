import axios from "axios";
import {Room} from "@/types/room"; // импортируй свой тип Room, если он есть

export async function getRoomsApi() {
	const res = await axios.get(
			`${process.env.NEXT_PUBLIC_URL ?? "http://RETRACTED/"}/api/room/all`
	);

	if (res.status !== 200) {
		throw new Error("Failed to fetch rooms");
	}

	return res.data.rooms as Room[]; // типизация массива комнат
}
