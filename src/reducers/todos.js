const todos = (state= [], action)=>{
    switch (action.type) {
        case "FETCH_TODO":
            return [...action.data];
        case "ADD_TODO":
            return [...state, action.data];
        case "DELETE_TODO":
            return state.filter((item) => item.id !== Number(action.data.id));
        case "UPDATE_TODO":
            return state.map((item) => item.id === action.data.id ? action.data : item);
        default:
            return state
    }
}

export default todos;