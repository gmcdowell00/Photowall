import React, { Component } from "react"; // Import react libraries through this variable
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";

class Main extends Component {
    // Lifecyle method
    // Only inovked once. DOn't inlcude any side affect
    // logic by changing the value of the variable writng to or chaning 
    // triggering UI change
    constructor() {
        // Extend Component to use 'this'
        super()
        // State object declares
        // state of component
        this.state = {
            posts: [/*{
                id: "0",
                description: "beautiful landscape",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                    "3919321_1443393332_n.jpg"
            }, {
                id: "1",
                description: "Aliens???",
                imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
            }, {
                id: "2",
                description: "On a vacation!",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
            }*/]
        }

        // Bind remove photo function to this component instance
        this.removePhoto = this.removePhoto.bind(this);
        this.navigate = this.navigate.bind(this);
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description);
        this.setState((state) => ({
            posts: state.posts.filter((post) => post !== postRemoved)
        }))
    }

    navigate() {
        this.setState({
            screen: 'addPhoto'
        })
    }

    // Lifecyle function
    // Use when fetching data from DB or API
    componentDidMount() {
        const data = SimulateFetchFromDB();
        this.setState({
            posts: data,
            screen: 'photos'
        })
    }

    // Responsible for rendering UI based
    // props or states that are placed into it
    // Never trigger any asychronous code, Ajax's request or anything of that nature. 
    render() {
        return <div>
            <Title title={['Photowall']} />
            {
                this.state.screen === 'photos' && (
                    <div>
                        <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate} />
                    </div>
                )
            }
            {
                this.state.screen === 'addPhoto' && (
                    <div>

                        <AddPhoto />
                    </div>
                )
            }

        </div>
    }
}

function SimulateFetchFromDB() {
    return [{
        id: "0",
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg"
    }, {
        id: "1",
        description: "Aliens???",
        imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
    }, {
        id: "2",
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }]
}

// constructor() : called before component is mounted. NEVER put side effect code inside of the constructor. Use ComponentDidMount for that instead. Commonly used to initialize state or bind methods. 
// componentWillMount(): invoked immediately before mounting occurs. Called before render. Once again, DO NOT put any side effect code inside of componentWillMount, and do not make API calls in this method  
// render(): never fetch data inside of render. Should only be used to return elements.
// componentDidMount(): Perfect place to fetch data. It gets called after render. This makes it clear that the initial state is empty at first, until we fetch it and re-trigger render. This forces us to set up our initial state properly, otherwise you're likely to get undefined states.
// componentDidUpdate(): called when the state of a component changes. Perfect place to update UI or make network calls based on previous state before update, and current state

export default Main