import axios from 'axios'
import { isEmpty } from 'lodash'

export const creatorListService = async(endpoint, listParams) => {
  if (!isEmpty(listParams) && typeof listParams === 'object') {
    return await axios({
      method: 'GET',
      url: endpoint,
      params: {
        ...listParams
      }
    })
  }

  return await axios({
    method: 'GET',
    url: endpoint,
  })
}

export const creatorDetailService = async(endpoint, userID) => {
  const endpointWithID = `${endpoint}/${userID}`
  
  return await axios({
    method: 'GET',
    url: endpointWithID,
  })
}