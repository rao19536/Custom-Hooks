import * as React from 'react';
import Pagination from '@mui/material/Pagination'
import * as Style from './style'

export default function PaginationOutlined({dataLength, pageSize, onPageChange, ...otherProps}) {
    const handleChange = (event, page)=>{
        onPageChange(page)
    }
  return (
    <Style.PaginationParent spacing={2}>
      <Pagination 
        count={Math.ceil(dataLength/pageSize)}
        variant="outlined"
        color="primary"
        onChange={handleChange}
        {...otherProps}
      />
    </Style.PaginationParent>
  );
}
