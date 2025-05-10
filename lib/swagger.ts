import { createSwaggerSpec } from "next-swagger-doc";

export const getApiDocs = async () => {
	const spec = createSwaggerSpec({
		apiFolder: "app/api", // define api folder under app folder
		definition: {
			openapi: "3.0.0",
			info: {
				title: "Next Swagger API Example",
				version: "1.0",
			},
			components: {
				securitySchemes: {
					BasicAuth: {        // <--- Меняем с BearerAuth на BasicAuth
						type: "http",
						scheme: "basic",
					},
				},
			},
			security: [],
		},
	});
	return spec;
};