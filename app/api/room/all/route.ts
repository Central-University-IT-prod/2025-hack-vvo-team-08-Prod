import { getRooms } from "@/services";

/**
 * @swagger
 * /api/room/all:
 *   get:
 *     description: Получить все комнаты
 *     responses:
 *       200:
 *         description: Список комнат
 */
export async function GET() {
	const rooms = await getRooms();

	return Response.json(
			{ rooms },
			{ status: 200 }
	);
}