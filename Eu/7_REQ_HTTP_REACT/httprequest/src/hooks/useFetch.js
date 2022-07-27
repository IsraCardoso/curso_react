import React, { useState, useEffect } from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState(null);

	const [config, setConfig] = useState(null);
	const [method, setMethod] = useState(null);
	const [callFetch, setCallFetch] = useState(false);
	const [itemId, setItemId] = useState(null);

	const [loading, setLoading] = useState(false);

	const httpConfig = (data, method) => {
		if (method === 'POST') {
			setConfig({
				method,
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});
			setMethod(method);
		} else if (method === 'DELETE') {
			setConfig({
				method,
				headers: { 'Content-Type': 'application/json' },
			});
			setMethod(method);
			setItemId(data);
		} else if (method === 'PUT') {
			setConfig({
				method,
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data[0]),
			});
			setMethod(method);
			setItemId(data[1]);
		}
	};

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			try {
				const response = await fetch(url);
				const json = await response.json();
				setData(json);
			} catch (err) {
				console.log(err.message);
			}
			setLoading(false);
		}
		fetchData();
	}, [url, callFetch]);

	useEffect(() => {
		const httpRequest = async () => {
			let json;
			if (method === 'POST') {
				const fetchOptions = [url, config];
				const response = await fetch(...fetchOptions);
				json = await response.json();
			} else if (method === 'DELETE') {
				const fetchOptions = [`${url}/${itemId}`, config];
				const response = await fetch(...fetchOptions);
				json = await response.json();
			} else if (method === 'PUT') {
				const fetchOptions = [`${url}/${itemId}`, config];
				const response = await fetch(...fetchOptions);
				json = await response.json();
			}
			setCallFetch(json);
		};
		httpRequest();
	}, [config, method, url]);

	return { data, httpConfig, loading };
};
