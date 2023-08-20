import React, {useEffect, useState} from 'react';

const TodolistFunc = () => {
	const [items, setItems] = useState(["this", "is"]);

	const onAddTask = (e) => {
		e.preventDefault();

		const form  = e.target;
		const item = form.item.value;
		setItems([...items, item ])
		form.reset();
	}

	const onDeleteTask = (index) => {
		const deleteTask = [...items];
		deleteTask.splice(index, 1);
		setItems(deleteTask)
	}

	useEffect(() => {
		setItems([...items, "Hello"]);

		return () => {

		};
	}, []);

	console.log(items)
	return (
		<>
			<form onSubmit={onAddTask}>
				<h1>Number of items: {items.length}</h1>
				<input type="text" name="item" placeholder="Enter a term" />
				<input type="submit" value="Submit" />
			</form>
				{items?.map((item, index) => {
					return (
						<div key={index} style={{display: "flex"}}>
							<p>{item}</p>
							<button onClick={() => onDeleteTask(index)}>Del</button>
						</div>
					);
				})}
		</>
	);
};

export default TodolistFunc;