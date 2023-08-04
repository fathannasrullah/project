import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppBar, Box, Button } from '@mui/material'

import { isEmpty } from 'lodash'

import { getUserList } from '../store/user/action'

import { STATUS_REQUEST_LIST_USER_PENDING, STATUS_REQUEST_LIST_USER_FAILED, STATUS_REQUEST_BASE_IDDLE, STATUS_REQUEST_LIST_USER_SUCCESS } from '../utils/constants/status'

import List from '../components/List'
import BackButton from '../components/BackButton'
import HideOnScroll from '../components/HideOnScroll'
import ListSkeleton from '../components/ListSkeleton'

import Error404 from './404'

import styles from './UserList.module.scss'

const UserList = (props) => {
  // get global state and dispatch function from store
  const dispatch = useDispatch()
  const { statusRequest, userListData } = useSelector(state => state.user)
  
  // get user list data from global state
  const {
    page,
    total_pages: totalPage,
    data: userList = [],
  } = userListData

  const userListIsSuccess = statusRequest === STATUS_REQUEST_LIST_USER_SUCCESS
  const userListIsError = statusRequest === STATUS_REQUEST_LIST_USER_FAILED
  const userListIsLoading = statusRequest === STATUS_REQUEST_LIST_USER_PENDING
  const isNextPage = page < totalPage

  const handleMoreUser = () => {
    dispatch(getUserList({
      page: page + 1
    }))
  }

  useEffect(() => {
    if (!isEmpty(userList) || userListIsSuccess || userListIsError) return 
    
    dispatch(getUserList())
  }, [userList, userListIsSuccess, userListIsError, dispatch])

  return (
    <Box mt={6}>
      <HideOnScroll {...props}>
        <AppBar className={styles.containerAppBar}>
          <Box>
            <BackButton />
          </Box>
        </AppBar>
      </HideOnScroll>
      {userListIsError && <Error404 />}
      
      <List list={userList} />
      
      {userListIsLoading && isEmpty(userList)
        ? <ListSkeleton listIsLoading={userListIsLoading} />
        : !userListIsError && 
          <Box textAlign='center'>
            <Button
              className={styles.button}
              onClick={handleMoreUser}
              variant='contained'
              disabled={!isNextPage}
            >
              {isNextPage ? 'Load More' : !isEmpty(userList) ? 'No More Content' : 'Data not found!'}
            </Button>
          </Box>
      }
    </Box>
  )
}

export default UserList