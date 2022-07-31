import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Product = () => {
	const { id } = useParams();
	const url = `http://localhost:3100/products/${id}`;
	const { data: product, loading, error } = useFetch(url);
	return (
		<div
			style={{
				justifyContent: 'center',
				border: '1px solid #efefef',
				borderRadius: '5px',
				paddingBottom: '30px',
				textAlign: 'center',
				listStyle: 'none',
				width: '25%',
				marginBottom: '20px',
				marginLeft: '37.5%',
				marginTop: '10%',
			}}
		>
			{loading && <p>Carregando dados...</p>}
			{error && <p>{error}</p>} <p>ID do produto: {id}</p>
			{product && (
				<div>
					<h2>{product.name}</h2>
					<p>R$: {product.price}</p>
					<Link to={`/products/${product.id}/info`}>Mais informações</Link>
				</div>
			)}
		</div>
	);
};

export default Product;
