import React, {Component}  from "react"; // Import react libraries through this variable

class List extends Component {
    render() {
        return  ( 
                  <ol>
                    { this.props.tasks.map((task, index) => <li key={index}>{task}</li> )} 
                  </ol> 
                )
              }
  }

  export default List