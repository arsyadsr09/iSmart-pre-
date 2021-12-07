import {
  ADD_DATA,
  DELETE_DATA,
  SET_DATA,
  SET_SECTION,
  TRANSFER_DATA,
} from "../constants"

export const setSection =
  (section = "", param = "") =>
  (dispatch) => {
    dispatch({
      type: SET_SECTION,
      payload: { section, param },
    })
  }

export const setData = (data) => (dispatch) => {
  dispatch({
    type: SET_DATA,
    payload: { data },
  })
}

export const addData = (data) => (dispatch) => {
  console.log(data)
  dispatch({
    type: ADD_DATA,
    payload: { data },
  })
}

export const deleteData = (block_hash) => (dispatch) => {
  dispatch({
    type: DELETE_DATA,
    payload: { block_hash },
  })
}
export const transferData = (block_hash, data) => (dispatch) => {
  dispatch({
    type: TRANSFER_DATA,
    payload: { block_hash, data },
  })
}
