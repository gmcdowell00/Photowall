
// Action creaters
// Functions that return an action
// Named export
export function removePhoto(index) {
    return {
        type: 'REMOVE_POST', // Action
        index: index         // Payload
    }
}

// Add post
export function addPhoto(post) {
    return {
        type: 'ADD_POST',
        post: post
    }
}