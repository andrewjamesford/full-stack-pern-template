import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Product from "./Product";

test("Test Product displays all data", async () => {
	render(
		<Product
			name={"Product Name"}
			description={"Product Description"}
			price={100}
			imageDescription={"Image Description"}
			imageName={"dog.jpg"}
			discountType={"percentage"}
			discountValue={10}
		/>,
	);

	const heading = screen.getByText("Product Name");
	expect(heading).toBeInTheDocument();
});
