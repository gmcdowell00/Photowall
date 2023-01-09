import React, {Component}  from "react"; // Import react libraries through this variable

// Stateless function
function Title(props) {
  return <h1>{props.title}</h1>
}

// Class component 
// class Title extends Component {
//     render () {
//       return <h1>{this.props.title}</h1>
//     }
//   }

export default Title