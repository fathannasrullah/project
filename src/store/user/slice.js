import { createSlice } from '@reduxjs/toolkit'

import { 
  STORE_NAME,
  SLICE_NAME_USER_LIST,
  SLICE_NAME_USER_DETAIL,
} from '../../utils/constants/store'
import {
  STATUS_REQUEST_BASE_IDDLE,
  STATUS_REQUEST_DETAIL_USER_FAILED,
  STATUS_REQUEST_DETAIL_USER_PENDING,
  STATUS_REQUEST_DETAIL_USER_SUCCESS,
  STATUS_REQUEST_LIST_USER_FAILED,
  STATUS_REQUEST_LIST_USER_PENDING,
  STATUS_REQUEST_LIST_USER_SUCCESS,
} from '../../utils/constants/status'

import { getUserDetail, getUserList } from './action'

const initialState = {
  statusRequest: STATUS_REQUEST_BASE_IDDLE,
  [SLICE_NAME_USER_LIST]: [],
  [SLICE_NAME_USER_DETAIL]: null,
}

const userSlice = createSlice({
  name: STORE_NAME.USER,
  initialState,
  reducers: {
    getUserList,
    getUserDetail,
  },
  extraReducers: (builder) => {
    // get user list
    builder.addCase(getUserList.fulfilled, (state, action) => {
      state[SLICE_NAME_USER_LIST] = action.payload[SLICE_NAME_USER_LIST].page === 1
        ? action.payload[SLICE_NAME_USER_LIST]
        : {
            ...action.payload[SLICE_NAME_USER_LIST],
            data: [...state[SLICE_NAME_USER_LIST].data, ...action.payload[SLICE_NAME_USER_LIST].data]
          }
      state.statusRequest = STATUS_REQUEST_LIST_USER_SUCCESS
    }),
    builder.addCase(getUserList.pending, (state) => {
      state.statusRequest = STATUS_REQUEST_LIST_USER_PENDING
    }),
    builder.addCase(getUserList.rejected, (state) => {
      state[SLICE_NAME_USER_LIST] = []
      state.statusRequest = STATUS_REQUEST_LIST_USER_FAILED
    }),
    // get user detail
    builder.addCase(getUserDetail.fulfilled, (state, action) => {
      state[SLICE_NAME_USER_DETAIL] = action.payload[SLICE_NAME_USER_DETAIL]
      state.statusRequest = STATUS_REQUEST_DETAIL_USER_SUCCESS
    }),
    builder.addCase(getUserDetail.pending, (state) => {
      state.statusRequest = STATUS_REQUEST_DETAIL_USER_PENDING
    }),
    builder.addCase(getUserDetail.rejected, (state) => {
      state[SLICE_NAME_USER_DETAIL] = null
      state.statusRequest = STATUS_REQUEST_DETAIL_USER_FAILED
    })
  }
})

const { reducer } = userSlice

export default reducer