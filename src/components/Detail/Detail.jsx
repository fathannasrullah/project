import { 
  Avatar,
  Box,
  Button,
  Card, 
  CardContent, 
  CardMedia,
  Skeleton,
  Typography
} from '@mui/material'

import styles from './Detail.module.scss'

const Detail = ({ detail, detailIsLoading }) => {
  const { avatar, first_name, last_name, email } = detail
  
  return (
    <Card sx={{ position: 'relative' }} className={styles.container}>
      {detailIsLoading
        ? <Skeleton 
            variant='rectangular' 
            sx={{ height: '12.625rem' }} 
          />
        : <CardMedia sx={{ height: '12.625rem' }} image={avatar} />
      }
      {detailIsLoading
        ? <Skeleton 
            variant='circular' 
            sx={{
              width: 75,
              height: 75,
              left: '1.313rem',
              top: '10.28125rem',
              position: 'absolute',
            }}
          />
        : <Avatar
            alt={first_name}
            src={avatar}
            sx={{
              width: 75,
              height: 75,
              left: '1.313rem',
              top: '10.28125rem',
              position: 'absolute',
            }}
            className={styles.avatar}
          />
      }
      <CardContent>
        <Box
          sx={{
            mt: 5.75,
            mb: 5,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
            {detailIsLoading
              ? <Skeleton variant='text' width='150px' />
              : <Typography variant='h6'>{first_name} {last_name}</Typography>
            }
            {detailIsLoading
              ? <Skeleton variant='text' width='200px' />
              : <Typography className={styles.body2}>{email}</Typography>
            }
          </Box>
          <Button variant='contained' className={styles.button} disabled={detailIsLoading}>Connect</Button>
        </Box>
        <Box>
          <Typography variant='h6'>
            About Me
          </Typography>
        </Box>
        <Box>
          {detailIsLoading
            ? <Skeleton variant='text' />
            : <Typography className={styles.body2}>
                I&prime;m a thing. But, like most politicians, he promised more than he could deliver. You won&prime;t have
                time for sleeping, soldier, not with all the bed making you&prime;ll be doing. Then we&prime;ll go with that
                data file! Hey, you add a one and two zeros to that or we walk! You&prime;re going to do his laundry?
                I&prime;ve got to find a way to escape.
              </Typography>
          }
        </Box>
      </CardContent>
    </Card>
  )
}

export default Detail