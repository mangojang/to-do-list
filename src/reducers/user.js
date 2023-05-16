const initialState = {
    loggedIn: false
}
const user = (state= initialState, action)=>{
    switch (action.type) {
        case "GET_USER":
            return {...state, loggedIn: true};
        case "SIGN_UP":
            return state;
        case "SIGN_IN":
            return {...state, loggedIn: true};
        default:
            return state
    }
}

export default user;