import React, { useContext } from 'react';
import { CounterContext, ChangeContext } from '../context/CounterContext';

const Products = () => {
	const { counter, setCounter } = useContext(CounterContext);

	return (
		<div>
			<h1>Products</h1>
			<p>Valor do contador: {counter}</p>
			<ChangeContext />
		</div>
	);
};

export default Products;
