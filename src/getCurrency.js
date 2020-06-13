import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BuildTable from './buildTable';

const GetCurrency = props => {

	const [items, setItems] = useState([]);
	const [data, setValue] = useState([]);

	const addItem = (dollar, euro) => {
		setItems([
			{
				id: items.length,
				dollar,
				euro,
			}
		]);
		setValue([
			...data,
			{
				name: data.length,
				uv: dollar,
				pv: euro,
				amt: 300
			}
		])
	};

	useEffect(() => getCurrencyAPI(true), [data.uv]);

	const getCurrencyAPI = (prev) => {
		axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
		.then(res => prev ? addItem(res.data.Valute.USD.Value, res.data.Valute.EUR.Value)
				: addItem(res.data.Valute.USD.Previous, res.data.Valute.EUR.Previous)
		)
	}

	return (
		<>
			<button onClick={() => {getCurrencyAPI(true)}}>Посмотреть цену на сегодняшний день....</button>
			<BuildTable items={items} addItem={addItem} getCurrencyAPI={getCurrencyAPI} data={data}/>
		</>
	);
}


export default GetCurrency