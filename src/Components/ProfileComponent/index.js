import React from 'react'
import { useForm, Controller } from "react-hook-form"
import { Container } from '@mui/system'
import * as Style from './style'

const ProfileComponent = ({handleSubmitData}) => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
    }
  });
  const onSubmit = data => handleSubmitData(data)
  return (
    <Container sx={{display:'flex', justifyContent:'center', mt:5}}>
      <Style.StyledFormParent>
        <form onSubmit={handleSubmit(onSubmit)} style={{width:'500px'}}>
        <h2>User Profile</h2>
          <Controller
            name="fullName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Style.StyledTextField 
              placeholder='Full Name'
              {...field} 

            />}
          />
          <Controller
            name="education"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Style.StyledTextField 
              placeholder='Education'
              {...field} 

            />}
          />
          <Controller
            name="contact"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Style.StyledTextField 
              placeholder='Contact'
              {...field} 

            />}
          />
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Style.StyledTextField 
              placeholder='Email'
              {...field} 

            />}
          />
          <Style.StyledSubmitButton 
            variant="contained"
            type="submit"
          >
            Submit
          </Style.StyledSubmitButton>
        </form>
      </Style.StyledFormParent>
    </Container>
  )
}
export default ProfileComponent
