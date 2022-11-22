import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import useCallApi from '../../CustomHooks/CallApi/useCallApi'
import ProductComponent from '../../Components/ProductComponent'
import APIFailComponent from '../../Components/APIFailComponent'
import PaginationOutlined from '../../Components/Pagination'
import { onChangePagination } from '../../Helper/helpers'
import * as Style from './style'

const ProductContainer = () => {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(9)
    const [userInfo, serUserInfo] = useState([])

    const {isLoading, data, error} = useCallApi('https://fakestoreapi.com/products/', 'get')
    const userData = () =>{
        serUserInfo(onChangePagination(page, pageSize, data))
    }
    const handleChange = (page)=>{
        setPage(page)
    }
    useEffect(()=>{
        userData(page, pageSize, data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page, pageSize, data])

    return (
    <Container maxWidth="xl">
    {!isLoading ? !error ? (
        <>
            <Style.StyledTypography>Products For Sale</Style.StyledTypography>
            <Grid container spacing={2}>
                {userInfo.map((val, index)=>(
                    <ProductComponent 
                        product={val}
                        key={index}
                    />
                ))}
            </Grid>
            <PaginationOutlined 
                onPageChange={handleChange}
                pageSize={pageSize}
                dataLength={data.length}
            />
        </>
        ):(
            <APIFailComponent/>
        ):(
        <Style.StyledCircularProgress />
    )}
    </Container>
  )
}
export default ProductContainer
