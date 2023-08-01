/**
 * @param  { function }  thunkAPI, function from thunk api, that able to reject, or fullfilled
 * @param  { object }  listParams, params object for hitting endpoint
 * @param  { function }  serviceFunc, function hitting endpoint, from service
 * @param  { string }  keyNameSlicePayload, name key for payload, require for forwarding ( returning ) into [ slice store data ]
 * @returns 
 * async function for list dsta with create async thunk, with handling data and catch error
 */
export const creatorListAction = async (
  thunkAPI,
  listParams,
  serviceFunc,
  keyNameSlicePayload,
) => {
  try {
    const response = await serviceFunc(listParams)
    
    if (!response) throw({ response })

    const { data: responseData } = response

    if (!responseData) throw({ response })

    return { 
      [keyNameSlicePayload]: responseData
    }
  } catch (error) {
    const { response } = error

    if (!response) {
      return thunkAPI.rejectWithValue(response)
    }

    const { data } = response

    return thunkAPI.rejectWithValue(data)           
  }
}

/**
 * @param  { function }  thunkAPI, function from thunk api, that able to reject, or fullfilled
 * @param  { object }  detailParams, params object for hitting endpoint
 * @param  { function }  serviceFunc, function hitting endpoint, from service
 * @param  { string }  keyNameSlicePayload, name key for payload, require for forwarding ( returning ) into [ slice store data ]
 * @returns 
 * async function for detail dsta with create async thunk, with handling data and catch error
 */
export const creatorDetailAction = async (
  thunkAPI,
  detailParams,
  serviceFunc,
  keyNameSlicePayload,
) => {
  try {
    const response = await serviceFunc(detailParams)

    if (!response) throw({ response })

    const { data: responseData } = response

    if (!responseData) throw({ response })

    return {
      [keyNameSlicePayload]: responseData
    }
  } catch (error) {
    const { response } = error

    if (!response) {
      return thunkAPI.rejectWithValue(response)
    }

    const { data } = response
  
    return thunkAPI.rejectWithValue(data)
  }
}