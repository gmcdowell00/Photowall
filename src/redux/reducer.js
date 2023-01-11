import data from "../data/posts";

// Returns current state
// Action alters state
const postReducer = function posts(state = data, action) {
    console.log(action.index);
    switch (action.type) {
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index+1)]
        default: return state;
    }
    
}

function removePhoto(index) {

}

export default postReducer;