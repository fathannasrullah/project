import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { 
  Box, 
  Button, 
  IconButton, 
  InputAdornment, 
  TextField, 
  Typography
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

import styles from './Form.module.scss'


const prepareInput = (inputs) => {
  return inputs.reduce((obj, key) => ({...obj, [key.name]: ''}), {})
}

const Form = ({ title, inputs, btnText, onSubmit, redirect, linkTo }) => {
  const initialInput = useMemo(() => prepareInput(inputs), [inputs])
  const [input, setInput] = useState(initialInput)
  
  const hasRedirect = !!redirect
  const navigate = useNavigate()

  const handleChangeInput = (event) => {
    setInput(prevInput => ({...prevInput, [event.target.name]: event.target.value}))
  }
  
  const handleClickShowPassword = () => {
    setInput({ ...input, showPassword: !input.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const handleSubmitBtn = (event) => {
    event.preventDefault()
    onSubmit(input, () => setInput(input))
    navigate(linkTo)
  }

  return (
    <Box className={styles.container}>
      <Box sx={{ mb: 3 }}>
        <Typography className={styles.heading} variant='h6'>
          {title}
        </Typography>
      </Box>
      <Box sx={{ mb: 1 }}>
        <Typography className={styles.subHeading} variant='h6'>
          Welcome to {title}! 👋🏻
        </Typography>
        <Typography className={styles.body2}>Please login to your account</Typography>
      </Box>
      <form autoComplete='off'>
        {inputs.map(({ label, name, type, value }, index) => (
          <Box key={index} className={styles.formControl}>
            <TextField
              label={label}
              name={name}
              type={type === 'password' && (input.showPassword ? 'text' : 'password')}
              value={input[value]}
              onChange={(event) => handleChangeInput(event)}
              fullWidth
              variant='outlined'
              className={styles.input}
              InputProps={{
                endAdornment: ( type === 'password' &&
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label='toggle password visibility'
                      classes={styles.iconButton}
                    >
                      {input.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Box>
        ))}
        <Button
          type='submit'
          onClick={(event) => handleSubmitBtn(event)} 
          size='large'
          fullWidth
          variant='contained'
          className={styles.button}
        >
          {btnText}
        </Button>
        {hasRedirect && 
          <Box>
            <Typography>{redirect.label}</Typography>
            <Link to={redirect.link.to}>{redirect.link.label}</Link>
          </Box>
        }
      </form>
    </Box>
  )
}

Form.defaultProps = {
  title: 'Customerapp',
  inputs: [
      {
          label: 'Email',
          name: 'email',
          type: 'text',
      },
      {
          label: 'Password',
          name: 'password',
          type: 'password',
          showPassword: false,
      },
  ],
  btnText: 'Login',
  onSubmit: (input) => console.log(input),
  redirect: null,
  linkTo: '/users'
};

export default Form