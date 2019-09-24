const INITIAL_STATE = { 
    token: '',
    user: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'auth/USER_AUTHENTICATED':
            return { token: action.payload.token, user: action.payload.user };
        case 'auth/TOKEN_EXPIRED':
        case 'auth/LOGOUT':
            return INITIAL_STATE;
        default:
            return state;
    }
}