import {getUser} from "@/services";

/**
 * @swagger
 * /api/login:
 *   post:
 *     description: Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - password
 *     responses:
 *       200:
 *         description: Работает
 */
export async function POST(request: Request) {
	const res = await request.json()

	const {user} = await getUser(res.name)

	if (!user || user.password !== res.password) {
		return new Response(null, {
			status: 400,
			headers: {
				Location: "/",
			}
		})
	}

	return Response.json(
			{
				user
			},
			{
				status: 200
			}
	)
}