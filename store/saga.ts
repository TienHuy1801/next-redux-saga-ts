import { LOAD_USERS_LOADING, RECEIVE_PEOPLE } from './types';
import { put, takeEvery, takeLatest } from 'redux-saga/effects'

async function fetchPeopleSync() {   
    return (await import("../public/data.json")).default;
}

function* fetchPeople(){
    try {       
        const payload = yield fetchPeopleSync();
        yield put({type: RECEIVE_PEOPLE, payload: payload});   
    } catch (e) {       
        console.log(e);
    }
}

export function* rootSaga() {   
    yield takeEvery(LOAD_USERS_LOADING, fetchPeople);
    yield takeLatest(LOAD_USERS_LOADING, fetchPeople);
}

export default rootSaga;
