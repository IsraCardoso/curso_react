import React, { useContext } from 'react';
import { CounterContext, ChangeContext } from '../context/CounterContext';
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const About = () => {
	const { counter, setCounter } = useContext(CounterContext);
	const { color, dispatch } = useTitleColorContext();
	const setTitleColor = (color) => {
		dispatch({ type: color });
	};
	return (
		<div>
			<h1 style={{ color }}>About</h1>
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

export default About;
