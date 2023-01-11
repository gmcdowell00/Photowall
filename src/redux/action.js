
// Action creaters
// Functions that return an action
// Named export
export function removePost(index) {
    return {
        type: 'REMOVE_POST', // Action
        index: index         // Payload
    }
}

// Add post