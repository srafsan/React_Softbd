import { Component } from 'react';

class Effect extends Component {
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    render() {
        return (
            <div>
                Effect
            </div>
        );
    }
}

export default Effect;
