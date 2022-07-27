import './App.css';
import { useState, useEffect } from 'react';
import { useFetch } from './hooks/useFetch';

const url = 'http://localhost:3000/products/';

function App() {
	const [productsList, setProductsList] = useState([]);

	const { data: items, httpConfig, loading } = useFetch(url);

	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [newName, setNewName] = useState('');
	const [newPrice, setNewPrice] = useState('');
	const [id, setId] = useState('');

	const [edit, setEdit] = useState(false);

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
	async function deleteItem(id) {
		try {
			httpConfig(id, 'DELETE');
		} catch (error) {
			console.log(error);
		}
	}

	async function updateItem(id, name, price) {
		const updatedProduct = [
			{
				name,
				price,
			},
			id,
		];
		try {
			httpConfig(updatedProduct, 'PUT');
			setName('');
			setPrice('');
			setEdit(false);
		} catch (error) {
			console.log(error);
		}
	}
	const editItem = (id, name, price) => {
		console.log(id, name, price);
		setNewName(name);
		setNewPrice(price);
		setId(id);
	};

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
								<button onClick={() => deleteItem(item.id)}>Excluir</button>
								<button
									onClick={() => {
										setEdit(true);
										editItem(item.id, item.name, item.price);
									}}
								>
									Editar
								</button>
							</li>
						))}
				</ul>
			)}
			{edit === true && (
				<form onSubmit={() => updateItem(id, newName, newPrice)}>
					<h3>Id:{id}</h3>
					<label htmlFor="name">
						Nome:
						<input
							type="text"
							name="name"
							value={newName}
							onChange={(e) => setNewName(e.target.value)}
						/>
					</label>
					<label htmlFor="price">
						Preço:
						<input
							type="number"
							name="price"
							value={newPrice}
							onChange={(e) => setNewPrice(e.target.value)}
						/>
					</label>
					<button type="submit">Confirmar</button>
				</form>
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
