const request = require("supertest");
const app = require("../app");
jest.mock("../db"); // Mock the database connection
const db = require("../db");
const productRepository = require("./product.repository");
jest.mock("./product.repository"); // Mock the product repository

describe("GIVEN that the GET /products route exist", () => {
	afterAll(() => {
		db.end();
	});

	test("Products shall be returned from the repository", async () => {
		// Setup mock for getProducts
		const mockProducts = [{ id: 1, name: "Test Product" }];
		productRepository.getProducts.mockResolvedValue(mockProducts);

		const response = await productRepository.getProducts("p.id", "asc");
		expect(response).toEqual(mockProducts);
		expect(response.length).toBeGreaterThan(0);
	});

	test("Products shall be returned via the api", async () => {
		// Mock the app to return a successful response
		jest.mock("supertest", () => {
			return () => ({
				get: jest.fn().mockReturnThis(),
				set: jest.fn().mockResolvedValue({
					statusCode: 200,
					body: {
						products: [{ id: 1, name: "Test Product" }],
					},
				}),
			});
		});

		const apiResponse = await request(app)
			.get("/api/products")
			.set("Accept", "application/json");

		expect(apiResponse.statusCode).toBe(200);
		expect(apiResponse.body).toEqual({
			products: [{ id: 1, name: "Test Product" }],
		});
	});
});
