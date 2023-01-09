import React, {Component} from 'react'
import PropTypes from 'prop-types'

// Stateless function
function Photo(props) {
        const post = props.post;
        return <figure className='figure'>
            <img className='photo' src={post.imageLink} alt={post.description} crossOrigin="Anonymous"/>
            <figcaption><p>{post.description}</p></figcaption>
            <div className='button-container'>
                <button className='remove-button' onClick={() => {props.onRemovePhoto(post)}}>Remove</button>
            </div>
        </figure>    
}

Photo.protTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

// Class component 
// class Photo extends Component {
//     render() {
//         const post = this.props.post;
//         return <figure className='figure'>
//             <img className='photo' src={post.imageLink} alt={post.description}/>
//             <figcaption><p>{post.description}</p></figcaption>
//             <div className='button-container'>
//                 <button className='remove-button'>Remove</button>
//             </div>
//         </figure>
//     }
// }

export default Photo