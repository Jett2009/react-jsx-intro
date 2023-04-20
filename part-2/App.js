const App = () => {
	return (
		<div>
			<Tweet
				name="Carl"
				username="Cjett"
				date={new Date().toDateString()}
				message="First Tweet!"
			/>
			<Tweet
				name="Braxton"
				username="eBjett"
				date={new Date().toDateString()}
				message="Why Me?"
			/>
			<Tweet
				name="Jett"
				username="Jett2009"
				date={new Date().toDateString()}
				message="Follow me!"
			/>
		</div>
	);
};
ReactDOM.render(<App />, document.getElementById("root"));
