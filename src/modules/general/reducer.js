import {
  ADD_DATA,
  DELETE_DATA,
  SET_DATA,
  SET_SECTION,
  TRANSFER_DATA,
} from "../constants"

const initialState = {
  section: "",
  param: "",
  data: [],
  histories: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SECTION:
      return {
        ...state,
        section: action.payload.section,
        param: action.payload.param,
      }
    case SET_DATA:
      return {
        ...state,
        data: action.payload.data,
      }
    case ADD_DATA:
      return {
        ...state,
        data: [action.payload.data, ...state.data],
        histories: [
          ...state.histories,
          {
            type: "create",
            user: "Admin",
            message: `New data created with block_hash: ${action.payload.data.block_hash}`,
            time: Date.now(),
          },
        ],
      }
    case DELETE_DATA:
      return {
        ...state,
        data: state.data.filter(
          (e) => e.block_hash !== action.payload.block_hash
        ),
        histories: [
          ...state.histories,
          {
            type: "delete",
            user: "Admin",
            message: `Data with block_hash: ${action.payload.block_hash} deleted`,
            time: Date.now(),
          },
        ],
      }
    case TRANSFER_DATA:
      const indexData = state.data.findIndex(
        (e) => e.block_hash === action.payload.block_hash
      )

      let editedData = state.data

      editedData[indexData] = action.payload.data

      return {
        ...state,
        data: indexData ? editedData : state.data,
        histories: [
          ...state.histories,
          {
            type: "transfer",
            user: "Admin",
            message: `Data with block_hash: ${action.payload.block_hash} transfered to User`,
            time: Date.now(),
          },
        ],
      }

    default:
      return state
  }
}

export default reducer
