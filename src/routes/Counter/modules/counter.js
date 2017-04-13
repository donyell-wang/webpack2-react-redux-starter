import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT'
export const COUNTER_INCREMENT_ASYNC = 'COUNTER_INCREMENT_ASYNC'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}

export function decrement (value = 1) {
  return {
    type    : COUNTER_DECREMENT,
    payload : value
  }
}

export function incrementAsync (value = 1) {
  return {
    type    : COUNTER_INCREMENT_ASYNC,
    payload : value
  }
}

export const actions = {
  increment,
  decrement,
  incrementAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT] : (state, action) => state + action.payload,
  [COUNTER_DECREMENT] : (state, action) => state - action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

// ------------------------------------
// Sagas
// ------------------------------------
// Our worker Saga: will perform the async increment task
export function* doIncrementAsync () {
  yield delay(1000)
  yield put(increment(1))
}

// Our watcher Saga: spawn a new incrementAsync task on each COUNTER_INCREMENT_ASYNC
export function* watchIncrementAsync () {
  yield takeEvery('COUNTER_INCREMENT_ASYNC', doIncrementAsync)
}
export const sagas = [
  watchIncrementAsync
]
