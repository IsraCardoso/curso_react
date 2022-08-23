import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const useCounterContext = () => {
	const context = useContext(CounterContext);
	if (!context) {
		console.log('erro ao carregar contexto');
		return;
	}
	return context;
};

export default useCounterContext;
