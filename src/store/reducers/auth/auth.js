const initialState = {
    token: null,
    userId: ''
};



const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "AUTH_START":
            return {
                ...state, 
                token : true
            }
        default: 
            return state;
    }
};



export default reducer;