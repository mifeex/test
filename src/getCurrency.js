import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BuildTable from './buildTable';

const GetCurrency = props => {

	const [items, setItems] = useState([]);

	const addItem = (dollar, euro) => {
		setItems([
			...items,
			{
				id: items.length,
				dollar,
				euro
			}
		]);
	};

	// const getCurrencyAPI = () => {
	// 	axios.get('https://currate.ru/api/?get=currency_list&key=927c8a2752ea8ca58d95be6eb0ea003a')
	// 	.then(data => {
	// 		console.log(data)
	// 	})		
	// }

	return (
		<>
			<button onClick={() => {addItem(70, 80)}}>Посмотреть цену....</button>
			<BuildTable items={items} addItem={addItem}/>
		</>
	);
}


export default GetCurrency