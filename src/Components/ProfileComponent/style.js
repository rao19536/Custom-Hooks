import { styled } from '@mui/system'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Box } from '@mui/system'

export const StyledFormParent = styled(Box)(()=>({
    // border:'1px solid',
    boxShadow:'0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
    padding:'20px',
    display:'flex',
    justifyContent:'center',
    width:'100%'
}))
export const StyledTextField = styled(TextField)(()=>({
    width:'100%',
    marginTop:'30px'
}))
export const StyledSubmitButton = styled(Button)(()=>({
    margin:'20px 0 30px 0'
}))
