import {takeLatest, call, put} from "redux-saga/effects";
import {GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS} from "../actions/users";
import api from "../../Api";

export default function* watcher() {
    yield takeLatest(GET_USERS_REQUEST, handleUsersRequest)
}

function* handleUsersRequest(action) {
    try {
        const { page } = action.payload
        const {data} = yield call(api.getUsers,page)
        console.log(data)
        yield put({
            type: GET_USERS_SUCCESS,
            payload: {
                data
            }
        })

    } catch (e) {
        yield put({
            type: GET_USERS_FAIL,
           message:e.message
        })
        console.warn(e)
    }
}