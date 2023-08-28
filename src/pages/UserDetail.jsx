
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AppBar, Box, Button } from '@mui/material'

import { isEmpty } from 'lodash'

import { getUserDetail } from '../store/user/action'

import { STATUS_REQUEST_DETAIL_USER_FAILED, STATUS_REQUEST_DETAIL_USER_PENDING } from '../utils/constants/status'

import Detail from '../components/Detail/Detail'
import BackButton from '../components/BackButton/BackButton'
import HideOnScroll from '../components/HideOnScroll'

import Error404 from './404'

import styles from './UserDetail.module.scss'

const UserDetail = () => {
  // get user id
  const { id: userID } = useParams()
  // get global state and dispatch function from store
  const dispatch = useDispatch()
  const { userDetailData, statusRequest } = useSelector((states) => states.user)

  // get user detail from global state
  let userDetail = {}
  if (!isEmpty(userDetailData)) userDetail = userDetailData.data

  useEffect(() => {
    dispatch(getUserDetail(userID))
  }, [userID, dispatch])

  const userDetailIsLoading = statusRequest === STATUS_REQUEST_DETAIL_USER_PENDING
  const userDetailIsError = statusRequest === STATUS_REQUEST_DETAIL_USER_FAILED

  return (
    <Box mt={6}>
      <HideOnScroll>
        <AppBar className={styles.containerAppBar}>
          <Box>
            <BackButton />
          </Box>
        </AppBar>
      </HideOnScroll>
      {userDetailIsError && <Error404 />}
      
      {!isEmpty(userDetail) || userDetailIsLoading
        ? <Detail detail={userDetail} detailIsLoading={userDetailIsLoading} />
        : !userDetailIsError &&
            <Box textAlign='center'>
              <Button
                className={styles.button}
                variant='contained'
                disabled={true}
              >
                Data not found!
              </Button>
            </Box>
      }
    </Box>
  )
}

export default UserDetail