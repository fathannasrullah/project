import { CUSTOMER_APP_API_URL_USER } from '../../utils/configs/api'

import { creatorDetailService, creatorListService } from './creator-services-helper'

export const getUserListService = async(listParams) => {
  return (
    await creatorListService(
      CUSTOMER_APP_API_URL_USER,
      listParams
    )
  )
}

export const getUserDetailService = async(userID) => {
  return (
    await creatorDetailService(
      CUSTOMER_APP_API_URL_USER,
      userID
    )
  )
}