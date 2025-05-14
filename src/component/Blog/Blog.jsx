import { Box } from '@mui/material'
import React from 'react'
import {useQuery } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import { GET_BLOGS_INFO } from '../../graphql/queries'





function Blog() {
    const { t }=useTranslation()
   const {loading ,data, error}=useQuery(GET_BLOGS_INFO)
if (loading) return <h1>loading...</h1>
if (error) return<h1>error...</h1>
console.log(data)


  return (
    <>
     <Box  className="flex overflow-x-auto space-x-4 p-4 text-white"
      sx={{
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
          height: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#888',
          borderRadius: '4px',
        },
      }}>
        سلام خوبی
     </Box>
    
    </>
  )
}

export default  Blog