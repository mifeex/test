import React, { useState } from 'react';
import ShowTable from './showTable'

const BuildTable = props => {

	const [visible, setVisibility] = useState(false);

	setInterval(() => props.getCurrencyAPI(false), 1000 * 60 * 10)

	return (
		<>
			<ul>
				{props.items.map(item => (
					<li key={item.id}>
						<div>1$ = {item.dollar}₽</div>
						<div>1€ = {item.euro}₽</div>
					</li>
				))}
			</ul>
			<button onClick={() => setVisibility(!visible)}>Показать график...</button>
			<div className='showTableCenter'>
				{visible && <ShowTable data={props.data}/>}
			</div>
		</>
	)
}

export default BuildTable