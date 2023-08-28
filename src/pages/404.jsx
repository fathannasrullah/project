import { Box, Typography } from '@mui/material'

import BackButton from '../components/BackButton/BackButton'

const Error404 = () => {
  return (
    <Box>
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Box mb={50}>
          <Typography variant='h1'>404</Typography>
          <Typography variant='h5' sx={{ mb: 1, fontSize: '1.5rem !important' }}>
            Page Not Found ⚠️
          </Typography>
          <Typography variant='body2'>We couldn&prime;t find the page you are looking for.</Typography>
        </Box>
        <BackButton />
      </Box>
    </Box>
  )
}

export default Error404