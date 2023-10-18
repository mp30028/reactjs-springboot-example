import React, { useState, useEffect } from 'react';
import "../css/Zonesoft.css"
import * as DataService from "./DataService";

function ExampleComponent() {

	const [samples, setSamples] = useState([]);

	useEffect(() => {
		DataService.fetchAll().then((data) => setSamples(data));
	}, [setSamples]);
	
	return (
		<table className="zsft-table" style={{ width: "100%" }}>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{samples.map(s =>
					<tr>
						<td>{s.id}</td>
						<td>{s.name}</td>
						<td>{s.description}</td>
					</tr>
				)}
			</tbody>
		</table>
	);
}

export default ExampleComponent;