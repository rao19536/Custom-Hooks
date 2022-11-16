import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import * as Style from './style'

const ProductComponent = ({product}) => {
  
  return (
    <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
        <Style.StyledPaper>
            <Grid container spacing={2}>
                <Grid item>
                <Style.StyledButtonBase>
                    <Style.Img alt="complex" src={product.image} />
                </Style.StyledButtonBase>
                </Grid>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            {product.category}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Full resolution 1920x1080 • JPEG
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ID: 1030114
                        </Typography>
                    </Grid>
                    <Grid item>
                    <Typography variant="body2">
                        Remove
                    </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" component="div">
                        {product.price}
                    </Typography>
                </Grid>
            </Grid>
        </Style.StyledPaper>
    </Grid>
  )
}

export default ProductComponent
