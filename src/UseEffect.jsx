import React, {useEffect, useState} from 'react';

const UseEffect = () => {
	const [name, setName] = useState("");
	const [state, setState] = useState({name: "", selected: false})
	const [num, setNum] = useState(0)

	useEffect(() => {
		console.log("The state has changed, useEffect runs!")
	}, [state.name, state.selected]);

	const handleAdd = () => {
		setState((prev) => ({...prev, name}))
	}

	const handleSelect = () => {
		setState((prev) => ({...prev, selected: true}))
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setNum(prev => prev + 1);
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, []);

	return (
		<div>
			<p>{num}</p>
			<input type="text" onChange={e => setName(e.target.value)}/>
			<button onClick={handleAdd}>Add Name</button>
			<button onClick={handleSelect}>Select</button>

			{
				`{
					name: ${state.name}, selected: ${state.selected.toString()}
				}`
			}
		</div>
	);
};

export default UseEffect;