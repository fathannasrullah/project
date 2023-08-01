import { Grid } from '@mui/material'

import Item from './Item'

const List = ({list}) => {
  return (
    <Grid 
      container 
      flexDirection='columm'
      justifyContent='center'
    >
      {list.map(({ id, avatar, first_name, email }) => (
        <Item
          id={id}
          avatar={avatar}
          first_name={first_name}
          email={email}
        />
      ))}
    </Grid>
  )
}

export default List