import React, { Component } from 'react'
import Photo from './Photo'
import PropTypes, { object } from 'prop-types'
import { Link } from 'react-router-dom'

// Stateless function 
function PhotoWall(props) {
    return <div>
        <Link className='addIcon' to="/AddPhoto"></Link>
        <div className='photogrid'>
            {props.posts
                .sort((x, y) => {
                    return y.id - x.id
                })
                .map((post, index) => <Photo post={post} key={index} index={index} {...props} />)}
        </div>
    </div>
}

// Class defintion
// Alternate way of rendering components
// class Photowall extends Component {
//     render() {
//         return <div>
//             <Link className='addIcon' to="/AddPhoto"></Link>
//             <div className='photogrid'>
//                 {props.posts
//                     .sort((x, y) => {
//                         return y.id - x.id
//                     })
//                     .map((post, index) => <Photo post={post} key={index} onRemovePhoto={props.onRemovePhoto} />)}
//             </div>
//         </div >
//     }
// }

// Specify proptype
PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    //onRemovePhoto: PropTypes.func.isRequired
}


export default PhotoWall