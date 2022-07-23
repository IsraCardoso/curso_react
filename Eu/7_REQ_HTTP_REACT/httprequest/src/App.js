import './App.css';
import { useState, useEffect } from 'react';
import { useFetch } from './hooks/useFetch';

const url = 'http://localhost:3000/products';

function App() {
	const [productsList, setProductsList] = useState([]);

	const { data: items, httpConfig, loading } = useFetch(url);

	const [name, setName] = useState('');
	const [price, setPrice] = useState('');

	// useEffect(() => {
	// 	fetchData();
	// }, []);

	// async function fetchData() {
	// 	const response = await fetch(url);
	// 	const data = await response.json();
	// 	setProductsList(data);
	// }

	async function handleSubmit(event) {
		event.preventDefault();

		const newProduct = {
			name,
			price,
		};
		console.log(name, price);
		// const res = await fetch(url, {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify(newProduct),
		// });

		// const addedProduct = await res.json();
		// setProductsList([...productsList, addedProduct]);
		httpConfig(newProduct, 'POST');
		setName('');
		setPrice('');
	}

	return (
		<div className="App">
			<h1>Lista de Produtos:</h1>
			{loading && <p>Carregando...</p>}
			{!loading && (
				<ul>
					{items &&
						items.map((item) => (
							<li key={item.id}>
								{item.name} -R${item.price}
							</li>
						))}
				</ul>
			)}
			<div className="add-product">
				<form onSubmit={handleSubmit}>
					<label htmlFor="name">
						Nome:
						<input
							type="text"
							name="name"
							onChange={(e) => setName(e.target.value)}
						/>
					</label>
					<label htmlFor="price">
						Preço:
						<input
							type="number"
							name="price"
							onChange={(e) => setPrice(e.target.value)}
						/>
					</label>
					{loading ? (
						<button type="submit" disabled>
							Aguarde
						</button>
					) : (
						<button type="submit">Adicionar</button>
					)}
				</form>
			</div>
		</div>
	);
}

export default App;
