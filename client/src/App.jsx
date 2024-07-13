import Router, { Switch, Route } from "crossroad";
import Header from "./components/Header";
import DashboardPage from "./components/dashboard/DashboardPage";
import ProductPage from "./components/products/ProductPage";
import NotFoundPage from "./components/NotFoundPage";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="">
			<Header />
			<Router>
				<Switch redirect="/">
					<Route exact path="/dashboard" component={DashboardPage} />
					<Route exact path="/" component={ProductPage} />
					<Route path="*" component={NotFoundPage} />
				</Switch>
			</Router>
			<Footer />
		</div>
	);
};

export default App;
