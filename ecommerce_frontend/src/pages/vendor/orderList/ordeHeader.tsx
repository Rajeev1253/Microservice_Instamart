import React, { useState } from 'react'
import TypographyComponent from '../../../components/Typography'
import { Stack } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select'
const OrdeHeader = () => {
    const [age,setAge] = useState("")
    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };
  return (
    <div>
        <Stack>
        <Stack sx={{mt:3}} width={"100%"} direction={"row"} justifyContent={"space-between"}>
            <Stack>
        <TypographyComponent weight='600' size='28px' text='Orders List'/>
        <TypographyComponent text='Home > Order List'/>
            </Stack>
            <Stack direction={"row"}  alignItems={"flex-end"} sx={{mt:2}}>
                <CalendarMonthIcon/>
                <TypographyComponent text='Feb16,2022-feb20,2022'/>
            </Stack>
                

        </Stack>
        <Stack alignItems={"flex-end"} >
        <FormControl sx={{width:"219px",height:"52px"}} >
  <InputLabel id="demo-simple-select-label">Change status</InputLabel>
  <Select
  variant='filled'
  sx={{bgcolor:"white"}}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Pending</MenuItem>
    <MenuItem value={20}>Dispatch</MenuItem>
    <MenuItem value={30}>Delivered</MenuItem>
  </Select>
</FormControl>
        </Stack>
        </Stack>
    </div>
  )
}

export default OrdeHeader