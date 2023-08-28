import { Grid } from '@mui/material'

import Item from './Item/Item'

const ListSkeleton = ({ listIsLoading }) => {
  return (
    <Grid 
      container 
      flexDirection='columm'
      justifyContent='center'
    >
      {Array(6).fill({ avatar: null, first_name:null, email:null }).map(({ avatar, first_name, email }, id) => (
        <Item 
          id={id}
          avatar={avatar}
          first_name={first_name}
          email={email}
          listIsLoading={listIsLoading}
        />
      ))}
    </Grid>
  )
}

export default ListSkeleton