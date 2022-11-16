import { styled } from '@mui/system'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'

export const StyledTypography = styled(Typography)(()=>({
    padding:'30px 0 15px 0',
    fontSize:'25px',
    fontWeight:600
}))
export const StyledCircularProgress = styled(CircularProgress)({
    position:'absolute',
    top:'50%',
    left:'50%'
})

