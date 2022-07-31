import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Info from './pages/Info';
import NaoEncontrado from './pages/NaoEncontrado';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
	return (
		<div className="App">
			<h1>React Router</h1>
			<BrowserRouter>
				<Navbar />
				<SearchForm />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/products/:id/info" element={<Info />} />
					<Route path="/products/:id" element={<Product />} />
					<Route path="/search" element={<Search />} />
					<Route path="/company" element={<Navigate to="/about" />} />
					<Route path="*" element={<NaoEncontrado />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
