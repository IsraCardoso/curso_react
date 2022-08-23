import React from 'react';
import './Home.css';
import useCounterContext from '../hooks/useCounterContext';
import { useTitleColorContext } from '../hooks/useTitleColorContext';
import { CounterContext, ChangeContext } from '../context/CounterContext';

const Home = () => {
	const { counter, setCounter } = useCounterContext();
	const { color, dispatch } = useTitleColorContext();
	const setTitleColor = (color) => {
		dispatch({ type: color });
	};
	return (
		<div>
			<h1 style={{ color }}>Home</h1>
			<p>Valor do contador: {counter}</p>
			<ChangeContext />
			<div>
				<button onClick={() => setTitleColor('RED')}>RED</button>
				<button onClick={() => setTitleColor('BLUE')}>BLUE</button>
				<button onClick={() => setTitleColor('YELLOW')}>YELLOW</button>
				<button onClick={() => setTitleColor('GREEN')}>GREEN</button>
			</div>
		</div>
	);
};
export default Home;
