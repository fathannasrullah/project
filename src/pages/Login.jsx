import { Box, Card } from '@mui/material'

import Form from '../components/Form'

import styles from './Login.module.scss'

const inputs = [
  {
    label: "Email",
    name: "email",
    type: "text",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
  },
]

const Login = () => {
  const handleSubmit = (input, callback) => {
    console.log('login submitted: ', input)
    callback()
  }

  return (
    <Box className={styles.container}>
      <Card className={styles.loginContainer}>
        <Form
          inputs={inputs}
          btnText='Login'
          onSubmit={handleSubmit}
          linkTo='/users'
        />
      </Card>
    </Box>
  )
}

export default Login