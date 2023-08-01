import { useNavigate } from 'react-router-dom'

import { 
  Avatar, 
  Card, 
  CardActionArea, 
  CardContent, 
  ListItem, 
  ListItemAvatar, 
  ListItemText,
  Skeleton,
} from '@mui/material'

import styles from './Item.module.scss'

const Item = ({ id, avatar, first_name, email }) => {
  const navigate = useNavigate()

  const handleCardClick = () => navigate(`/users/${id}`)

  return (
    <Card key={id} className={styles.container}>
      <CardActionArea onClick={handleCardClick} disabled={!id} >
        <CardContent>
          <ListItem>
            <ListItemAvatar>
              {avatar 
                ? <Avatar alt={first_name} src={avatar} className={styles.avatar}/>
                : <Skeleton variant='circular' width='100px' height='100px' />
              }
            </ListItemAvatar>
            <ListItemText
              primary={first_name
                ? first_name
                : <Skeleton variant='text' />
              }
              secondary={email
                ? <> — I'll be in your neighborhood doing errands this… </>
                : <Skeleton variant='text' width={360}/>
              }
            />
          </ListItem>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Item