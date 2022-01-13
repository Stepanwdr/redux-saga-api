import {GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS} from "../actions/users";

const initialState = {
    usersRequestStatus: "",
    usersList: [],
    usersListData: {}
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS_REQUEST: {
            return {
                ...state,
                usersRequestStatus:"request"
            }
        }
        case GET_USERS_SUCCESS: {
            const { data:usersList,...usersListData}=action.payload.data
            return {
                ...state,
                usersRequestStatus:"success",
                usersListData,
                usersList
            }
        }
        case GET_USERS_FAIL: {

            return {
                ...state,
                usersRequestStatus:"fail",
            }
        }

        default:
            return state

    }
}