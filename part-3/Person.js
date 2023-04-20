const Person = (props) => {
	let message = "";
	let name = "";
	if (props.age > 18) {
		message = <h3>Go vote!</h3>;
	} else {
		message = <h3>Go Study</h3>;
	}

	if (props.name.length > 8) {
		name = props.name.slice(0, 6);
	} else {
		name = props.name;
	}

	return (
		<div>
			<p>About this person</p>
			{message}
			<p>Name: {name}</p>
			<h3>Hobbies</h3>
			<ul>
				{props.hobbies.map((hobby) => (
					<li>{hobby}</li>
				))}
			</ul>
		</div>
	);
};
