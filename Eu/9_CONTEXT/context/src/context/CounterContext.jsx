import React, { createContext, useState } from 'react';

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
	const [counter, setCounter] = useState(1);

	return (
		<CounterContext.Provider value={{ counter, setCounter }}>
			{children}
		</CounterContext.Provider>
	);
};

export const ChangeContext = () => {
	const { counter, setCounter } = React.useContext(CounterContext);
	return (
		<div>
			<button onClick={() => setCounter(counter + 1)}>+</button>
			<button onClick={() => setCounter(counter - 1)}>-</button>
		</div>
	);
};
