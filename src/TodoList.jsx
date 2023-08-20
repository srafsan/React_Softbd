import {Component} from "react";

class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: "",
			items: [ "gygyg","gygygy"],
		};
	}


	onChangeHandler = (e) => {
		this.setState({
			term: e.target.value,
		})
	};

 componentDidMount() {
   this.setState({
     items: [...this.state.items, "Hello"]
   })
 }


  onAddTask = (e) => {
		e.preventDefault();

		this.setState({
			term: "",
			items: [...this.state.items, this.state.term]
		})
	}

	onDeleteTask = (index) => {
		const deleteTask = [...this.state.items];
		deleteTask.splice(index, 1);
		this.setState({
			items: deleteTask
		})
	}

  onUpdateTask = (index) => {
    console.log("clicked", index)
    // const updatedItems = [...this.state.items];
    // updatedItems[index].showUpdate = !updatedItems[index].showUpdate;
    // console.log(updatedItems)
    // this.setState({
    //   items: updatedItems,
    // });
  }
	render() {
    console.log("Items", [...this.state.items]);

		return (
			<div>
				<h1>Number of items: {this.state.items.length}</h1>
				<input type="text" value={this.state.term} placeholder="Enter a term" onChange={this.onChangeHandler}/>
				<button onClick={this.onAddTask}>Add Item</button>
				{this.state.items.map((item, index) => {
					return (
						<div key={index} style={{display: "flex"}}>
							<p>{item}</p>
							<button onClick={() => this.onDeleteTask(index)}>Del</button>
							<button onClick={() => this.onUpdateTask(index)}>Update</button>
							{item.showUpdate ? <input type="text"/> : ""}
						</div>
					);
				})}
			</div>
		);
	}
}

export default TodoList;
