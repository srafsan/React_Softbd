import { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      items: [],
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      term: e.target.value,
    })
  }

  onFormHandler = (e) => {
    e.preventDefault();

    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    })
  }

  render() {
    return (
      <div>
        <h1>Number of items: {this.state.items.length}</h1>
        <input type="text" value={this.state.term} placeholder="Enter a term" onChange={this.onChangeHandler} />
        <button onClick={this.onFormHandler}>Add Item</button>
        {this.state.items.map((item, index) => {
          return <p key={index+1}>{item}</p>
        })}
      </div>
    );
  }
}

export default TodoList;
