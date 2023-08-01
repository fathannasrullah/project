import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Backdrop, CircularProgress } from '@mui/material'

const LoadingData = ({ isLoading }) => {
  const [open, setOpen] = useState(isLoading)
  const navigate = useNavigate()
  
  const handleClose = () => {
    navigate(-1)
  }

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default LoadingData
