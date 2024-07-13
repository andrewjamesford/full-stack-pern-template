const Header = () => {
	return (
		<>
			<header>
				<nav className="">
					<div className="">
						<img src="./img/menu_black_24dp.svg" alt="menu" />
					</div>
					<ul className="">
						<li className="">
							<a href="/products">products</a>
						</li>
						<li className="">
							<a href="/dashboard">Dashboard</a>
						</li>
					</ul>
				</nav>

				<h1 className="">Logo</h1>
			</header>
		</>
	);
};

export default Header;
