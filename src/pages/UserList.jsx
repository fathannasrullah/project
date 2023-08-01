import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppBar, Box, Button, Typography } from '@mui/material'

import { isEmpty } from 'lodash'

import { getUserList } from '../store/user/action'

import { STATUS_REQUEST_LIST_USER_PENDING, STATUS_REQUEST_LIST_USER_FAILED } from '../utils/constants/status'

import List from '../components/List'
import BackButton from '../components/BackButton'
import HideOnScroll from '../components/HideOnScroll'

import Error404 from './404'

import styles from './UserList.module.scss'

const UserList = (props) => {
  // get global state and dispatch function from store
  const dispatch = useDispatch()
  const { statusRequest, userListData } = useSelector(state => state.user)
  
  // get user list data from global state
  let {
    page,
    total_pages: totalPage,
    data: userList,
  } = userListData

  const handleMoreUser = () => {
    dispatch(getUserList({
      page: page + 1
    }))
  }

  const userListFailed = ( statusRequest === STATUS_REQUEST_LIST_USER_FAILED )
  const userListLoading = ( statusRequest === STATUS_REQUEST_LIST_USER_PENDING )
  const nextPage = ( page < totalPage )

  useEffect(() => {
    if (isEmpty(userList)) dispatch(getUserList())
  }, [userList, dispatch])

  return (
    <Box mt={6}>
      <HideOnScroll {...props}>
        <AppBar className={styles.containerAppBar}>
          <Box>
            <BackButton />
          </Box>
        </AppBar>
      </HideOnScroll>
      {userListFailed && <Error404 />}
      
      {!isEmpty(userList) && <List list={userList} />}
      
      {userListLoading 
        ? <Typography textAlign='center'>Loading..</Typography>
        : !userListFailed && 
          <Box textAlign='center'>
            <Button
              onClick={handleMoreUser}
              variant='contained'
              disabled={!nextPage}
            >
              {nextPage ? 'Load More' : 'No More Content'}
            </Button>
          </Box>
      }
    </Box>
  )
}

export default UserList