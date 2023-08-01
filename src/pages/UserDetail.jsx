
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Box } from '@mui/material'

import { isEmpty } from 'lodash'

import { getUserDetail } from '../store/user/action'
import { STATUS_REQUEST_DETAIL_USER_FAILED, STATUS_REQUEST_DETAIL_USER_PENDING } from '../utils/constants/status'

import Detail from '../components/Detail'
import BackButton from '../components/BackButton'
import LoadingData from '../components/LoadingData'

import Error404 from './404'

const UserDetail = () => {
  // get user id
  const { id: userID } = useParams()
  // get global state and dispatch function from store
  const dispatch = useDispatch()
  const {
    userDetailData,
    statusRequest,
  } = useSelector((states) => states.user)

  // get user detail from global state
  let userDetail = null
  if (!isEmpty(userDetailData)) userDetail = userDetailData.data

  useEffect(() => {
    dispatch(getUserDetail(userID))
  }, [userID, dispatch])

  const userDetailPending =  ( statusRequest === STATUS_REQUEST_DETAIL_USER_PENDING )
  const userDetailFailed = ( statusRequest === STATUS_REQUEST_DETAIL_USER_FAILED )

  return (
    <>
      <Box component='header' mb={1}>
        <BackButton />
      </Box>
      {!isEmpty(userDetail) && !userDetailPending
        ? <Detail detail={userDetail}/>
        : <LoadingData isLoading={userDetailPending} />
      }
      {userDetailFailed && <Error404 />}
    </>
  )
}

export default UserDetail