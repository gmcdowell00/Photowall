import React, {Component} from "react";

class AddPhoto extends Component {
    constructor () {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);        
    }
    handleSubmit(event) {
        // Prevent default of re-rendering the full page
        event.preventDefault();
        const imgLink = event.target.elements.link.value;
        const desc = event.target.elements.description.value;

        if (imgLink && desc) {

            const post = {
                id : 0,
                description : desc,
                imageLink : imgLink
            }
            this.props.onAddPhoto(post);
        }
    }

    render() {
        return (
            <div>
                <h1> Photowall </h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link"/>
                        <input type="text" placeholder="Description" name="description"/>
                        <button>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto;