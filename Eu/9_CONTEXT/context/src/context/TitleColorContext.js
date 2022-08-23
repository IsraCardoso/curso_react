import { createContext, useReducer } from 'react';

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
	switch (action.type) {
		case 'RED':
			return { color: 'red' };
		case 'BLUE':
			return { ...state, color: 'blue' };
		case 'GREEN':
			return { ...state, color: 'green' };
		case 'YELLOW':
			return { ...state, color: 'yellow' };
		case 'PURPLE':
			return { ...state, color: 'purple' };
	}
};

export const TitleColorProvider = ({ children }) => {
	const [state, dispatch] = useReducer(titleColorReducer, { color: 'purple' });
	console.log('color:', state);
	return (
		<TitleColorContext.Provider value={{ ...state, dispatch }}>
			{children}
		</TitleColorContext.Provider>
	);
};
