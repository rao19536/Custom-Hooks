import { styled } from '@mui/system'
import Paper from '@mui/material/Paper'
import ButtonBase from '@mui/material/ButtonBase'

export const StyledPaper = styled(Paper)(({theme})=>({
    padding: '15px',
    // marginTop: '10px',
    maxWidth: 500,
    boxShadow:'0px 10px 20px 2px rgba(0, 0, 0, 0.25)',
    flexGrow: 1,
    // backgroundColor: (theme) =>
    // theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
}))

export const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
})

export const StyledButtonBase = styled(ButtonBase)(()=>({
    width: 128, 
    height: 128
}))