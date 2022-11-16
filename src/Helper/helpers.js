const firstIndex = 0
export const onChangePagination = (page, pageSize, data) => {
    return data.slice(firstIndex + pageSize * (page - 1), pageSize * page)
} 
