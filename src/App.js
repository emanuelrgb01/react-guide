import Expenses from "./components/Expenses";

function App() {
	const expenses = [
		{
			id: "e1",
			title: "Car Insurance 1",
			amount: 299.47,
			date: new Date(2021, 2, 3)
		},
		{
			id: "e2",
			title: "Car Insurance 2",
			amount: 245.47,
			date: new Date(2021, 2, 28)
		},
		{
			id: "e3",
			title: "Car Insurance  3",
			amount: 289.47,
			date: new Date(2021, 1, 12)
		},
		{
			id: "e4",
			title: "Car Insurance  4",
			amount: 219.47,
			date: new Date(2020, 8, 14)
		}
	];
	return (
		<div>
			<h2>Let's get started!</h2>
			<p>Apenas o Brasil é penta.</p>
			<Expenses expenses={expenses}/>
		</div>
	);
}

export default App;
