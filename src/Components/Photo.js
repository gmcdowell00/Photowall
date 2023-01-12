import React, {Component} from 'react'
import PropTypes from 'prop-types'

// Stateless function
function Photo(props) {
        console.log(props);
        const post = props.post;
        return <figure className='figure'>
            <img className='photo' src={post.imageLink} alt={post.description} crossOrigin="Anonymous"/>
            <figcaption><p>{post.description}</p></figcaption>
            <div className='button-container'>
                <button className='remove-button' onClick={() => {
                    props.removePhoto(props.index);
                }}>Remove</button>
            </div>
        </figure>    
}

function mapStatetoProps(state) {
    return {
        posts : state
    }
}

Photo.protTypes = {
    posts: PropTypes.array.isRequired,
    //onRemovePhoto: PropTypes.func.isRequired
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