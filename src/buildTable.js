import React, { useState, useEffect } from 'react';
import {LineChart, XAxis, Tooltip, CartesianGrid, Line} from 'recharts'

const BuildTable = props => {

	// setInterval(() => props.addItem(70, 80), 5000)

	const data = [
		{name: 'Cost A', uv: 0, pv: 0, amt: 0},
		{name: 'Cost B', uv: 5000, pv: 3000, amt: 2400},
		{name: 'Cost C', uv: 1000, amt: 1000},
	]

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

			<LineChart
				width={400}
				height={400}
				data={data}
				margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
			>
				<XAxis dataKey="name" />
				<Tooltip />
				<CartesianGrid stroke="#f5f5f5" />
				<Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
				<Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
			</LineChart>			
		</>
	)
}

export default BuildTable