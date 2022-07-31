import React from 'react';
import { useParams } from 'react-router-dom';

function Info() {
	const { id } = useParams();
	return <div>Mais informações- Id:{id} </div>;
}

export default Info;
