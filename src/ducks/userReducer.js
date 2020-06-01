const initialState = {
    user: '',
    isLoggedIn: false
}

const LOGIN_USER = 'LOGIN_USER'

export function loginUser(user){
    return {
        type: LOGIN_USER,
        payload: user
    }
}


//THE DEFAULT EXPORT IS THE REDUCER FUNCTION
export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_USER:
            return {...state, user: action.payload, isLoggedIn:true}
        default:
            return state
    }
}