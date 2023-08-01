import { useNavigate } from 'react-router-dom'

import { KeyboardBackspace } from '@mui/icons-material'
import { Button } from '@mui/material'

import styles from './BackButton.module.scss'

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <Button
      startIcon={<KeyboardBackspace />}
      onClick={() => navigate(-1)}
      variant='text'
      className={styles.button}
    >
      Back
    </Button>
  )
}

export default BackButton