import DiscountBadge from "./DiscountBadge";

const Product = ({
	name,
	description,
	price,
	imageName,
	imageDescription,
	discountType,
	discountValue,
}) => {
	return (
		<li className="">
			<div className="">
				<div>
					{imageName ? (
						<img
							src={`./img/${imageName}`}
							alt={imageDescription}
							className=""
						/>
					) : (
						<img
							src="./img/dog-photo-default.png"
							alt="Default  dog"
							className=""
						/>
					)}
					{discountValue && discountType && (
						<DiscountBadge
							className=""
							discountValue={discountValue}
							discountType={discountType}
						/>
					)}
				</div>
				<h3>{name}</h3>
				<p>Price {`$${price.toFixed(2)}`}</p>
				<p data-testid="product-description" className="">
					{description}
				</p>
				<button className="" type="button">
					Add to Cart
				</button>
			</div>
		</li>
	);
};

export default Product;
