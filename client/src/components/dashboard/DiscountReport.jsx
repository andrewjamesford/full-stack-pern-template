import Table from "../table/Table";
import TableCell from "../table/TableCell";
import TableHeaderCell from "../table/TableHeaderCell";

const DiscountsReport = ({ reportData, className }) => {
	return (
		<div className={className}>
			<h3>Discounts Report</h3>
			<Table>
				<thead>
					<tr className="">
						<TableHeaderCell>Discount Type</TableHeaderCell>
						<TableHeaderCell>Total Products</TableHeaderCell>
					</tr>
				</thead>
				<tbody>
					{reportData.map((discount, index) => (
						<tr key={discount.id}>
							<TableCell className="">
								{discount.discountType || "No discount"}
							</TableCell>
							<TableCell className="">{discount.totalProducts}</TableCell>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default DiscountsReport;
