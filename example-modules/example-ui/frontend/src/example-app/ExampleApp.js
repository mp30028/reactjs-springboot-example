import React from 'react';
import "../css/Zonesoft.css"
import ExampleComponent from "../example-component/ExampleComponent";


function ExampleApp() {
	
	return (
		<table className="zsft-table" style={{ width: "100%" }}>
			<thead>
				<tr>
					<th >
						Example App
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td  style={{ width: "100%" }}><ExampleComponent /></td>
				</tr>
			</tbody>
		</table>
	);
}

export default ExampleApp;