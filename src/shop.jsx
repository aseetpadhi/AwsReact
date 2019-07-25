import React, {Component} from 'react';
class Shop extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
    //  fetch("https://jsonplaceholder.typicode.com/todos/1")
    fetch("http://contact4grocery.us-east-2.elasticbeanstalk.com/shops")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
               <li key={items.userId}>
               {items.userId}<p/>
                {items.title} 
                {items.completed}
              </li>            
          </ul>
        );
      }
    }
  }
  export default Shop;