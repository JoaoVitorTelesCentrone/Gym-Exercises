import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const SearchExercises = () => {
  const[search, setSearch] = useState('')

  const handleSearch = () => {
    console.log(search)
  }

  return (
    <Stack alignItems='center' justifyContent='center' mt='37px' p='20px' >
      <Typography mb='50px' textAlign='center' sx={{fontSize : {lg: '44px', sx: '30px'}}}>
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField sx={{ input: {fontWeight: '700', 
        border: 'none', 
        borderRadius: '4px'}, 
        width: {lg: '1170px', xs: '350px', sm: '500px'},
        backgroundColor: '#fff',
        borderRadius: '40px'
      }} 
        height='76px' value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Search exercises' type='text'  />
        <Button sx={{bgcolor: '#FF2625', color: '#fff', textTransform: 'none',
         width: {lg: '175px', xs: '60px'}, fontSize: {lg: '20px', xs: '14px'}, 
         height: '56px', position: 'absolute', right:'0'}} onClick={handleSearch()}>Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises
