const defaultState = {
    user: null
}

const UserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "Login":
            return {
                ...state,
                user: action.payload
            };
        case "Logout":
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
}

export default UserReducer;