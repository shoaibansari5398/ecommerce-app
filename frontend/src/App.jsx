import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product" element={<Product />} />
				<Route path="/wishlist" element={<Wishlist />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</Router>
	);
}

export default App;
