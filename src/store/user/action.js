import { createAsyncThunk } from '@reduxjs/toolkit'

import { creatorDetailAction, creatorListAction } from '../creator-action-helper'

import { getUserDetailService, getUserListService } from '../../services/API/user'

import { SLICE_NAME_USER_DETAIL, SLICE_NAME_USER_LIST } from '../../utils/constants/store'

export const getUserList = createAsyncThunk(
  'user/user-list',
  async (listParams, thunkAPI) => {
    return (
      await creatorListAction(
        thunkAPI,
        listParams,
        getUserListService,
        SLICE_NAME_USER_LIST,
      )
    )
  }
)

export const getUserDetail = createAsyncThunk(
  'user/user-detail',
  async (detailParams, thunkAPI) => {
    return (
      await creatorDetailAction(
        thunkAPI,
        detailParams,
        getUserDetailService,
        SLICE_NAME_USER_DETAIL,
      )
    )
  }
)