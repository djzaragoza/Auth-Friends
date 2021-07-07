import { LOGIN_START, FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS }from '../actions/index.js';

const initialState = {
    friends: [],
    fetchingFriends: false,
    deletingFriend: false,
    loggingIn: false,
    savingFriends: false,
    updatingFriends: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            };
            case FETCH_FRIENDS_START:
                return {
                    ...state,
                    fetchingFriends: true,
                    loggingIn: false
                };
                case FETCH_FRIENDS_SUCCESS:
                    return {
                        ...state,
                        friends: [...state.friends, ...action.payload],
                        fetchingFriends: false
                    };
                    default:
                        return state;
    }
};

export default reducer;