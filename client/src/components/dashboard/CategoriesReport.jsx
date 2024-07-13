import Table from "../table/Table";
import TableCell from "../table/TableCell";
import TableHeaderCell from "../table/TableHeaderCell";

const CategoriesReport = ({ reportData }) => {
	return (
		<div className="">
			<h3>Categories Report</h3>
			<Table>
				<thead>
					<tr className="">
						<TableHeaderCell>Category</TableHeaderCell>
						<TableHeaderCell>Discounted Products</TableHeaderCell>
						<TableHeaderCell>Total Products</TableHeaderCell>
					</tr>
				</thead>
				<tbody>
					{reportData.map((category) => (
						<tr key={category.id}>
							<TableCell className="">
								{category.categoryName || "No category"}
							</TableCell>
							<TableCell className="">{category.discountedProducts}</TableCell>
							<TableCell className="">{category.totalProducts}</TableCell>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default CategoriesReport;
