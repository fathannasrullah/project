import { List as MUIList } from '@mui/material'

import Item from './Item'

const List = ({list}) => {
  return (
    <MUIList sx={{ maxWidth: '600px', margin: '0 auto' }}>
      {list.map(({ id, avatar, first_name, email }) => (
        <Item
          id={id}
          avatar={avatar}
          first_name={first_name}
          email={email}
        />
      ))}
    </MUIList>
  )
}

export default List