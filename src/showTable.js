import React from 'react';
import {LineChart, XAxis, Tooltip, CartesianGrid, Line} from 'recharts';

const ShowTable = props => {
	return (
		<LineChart
			width={500}
			height={500}
			data={props.data}
			margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
		>
			<XAxis dataKey="name" />
			<Tooltip />
			<CartesianGrid stroke="#f5f5f5" />
			<Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
			<Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
		</LineChart>
	)
}

export default ShowTable