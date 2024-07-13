const DiscountBadge = ({ discountType, discountValue }) => {
	return (
		<div className="" data-testid="badge">
			{discountType === "percentage off" && <>{discountValue} % off</>}
			{discountType === "fixed amount off" && <>$ {discountValue} off</>}
		</div>
	);
};

export default DiscountBadge;
