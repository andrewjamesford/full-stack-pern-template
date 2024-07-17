const request = require("supertest");
const app = require("../app");
const db = require("../db");
const productRepository = require("./product.repository");

describe("GIVEN that the GET /products route exist", () => {
	afterAll(() => {
		db.end();
	});

	test("Products shall be returned from the repository", async () => {
		const response = await productRepository.getProducts("p.id", "asc");
		expect(response.length).toBeGreaterThan(0);
	});

	test("Products shall be returned via the api", async () => {
		const apiResponse = await request(app)
			.get("/api/products")
			.set("Accept", "application/json");

		expect(apiResponse.statusCode).toBe(200);
	});
});
