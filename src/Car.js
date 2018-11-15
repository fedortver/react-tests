import React from 'react';

export default (props) =>{
	return(
		<div>
		<h3>Car name: {props.name}</h3>
		<p>Year: {props.year}</p>
		{props.children}
	</div>
	)
	
}

