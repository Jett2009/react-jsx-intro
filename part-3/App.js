const App = () => {
	return (
		<div>
			<Person name="Carl" age={18} hobbies={["Fishing", "Swimming"]} />
			<Person name="Braxton" age={32} hobbies={["Cars", "Shoes"]} />
			<Person name="Jett" age={40} hobbies={["Work", "Investing"]} />
		</div>
	);
};
ReactDOM.render(<App />, document.getElementById("root"));
