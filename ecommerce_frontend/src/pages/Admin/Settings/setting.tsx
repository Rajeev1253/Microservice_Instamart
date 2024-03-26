import React from 'react'
import TypographyComponent from '../../../components/Typography'
import { Avatar, Divider, Paper, Stack } from '@mui/material'
import ButtonComponent from '../../../components/ButtonComponent'
import SimpleSidebarItem from '../../../components/SimpleSidebarItem'
import InputComponent from '../../../components/InputComponent'

const Settings = () => {
  return (
    <div>
      <Stack sx={{m:3}}>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>

<Stack>

<TypographyComponent size='28px' weight='600' text='Settings' />
<TypographyComponent size='14px' weight='400' text='Manage your account settings' sx={{pt:1}}/>
</Stack>
<Stack direction={"row"}gap={3}>
  <ButtonComponent variant="contained" text='Save Changes' sx={{textTransform:"none",width:"140px",height:"48px"}}/>
  <ButtonComponent variant="outlined" text='Cancel' sx={{textTransform:"none",width:"140px",height:"48px"}}/>
</Stack>
</Stack>
<Stack sx={{mt:2}}>
  <Paper sx={{width:"75vw",height:"70vh"}}>
    <Stack direction={"row"} sx={{m:5}}>
      <Stack width={"30%"} height={"100%"} gap={4} >
       <TypographyComponent text='Persnol Information'/>
       <TypographyComponent text='Security'/>
       <TypographyComponent text='Billing Tax'/>
       <TypographyComponent text='Plans'/>
       <TypographyComponent text='Linked Shops'/>



<Divider orientation='vertical'/>
      </Stack>
      <Stack>

      <Stack sx={{pl:2}}>
    <TypographyComponent size='24px' weight='600' text='General Information'/>
    <TypographyComponent size='14px' weight='400' text='Manage your account settings' sx={{pt:1}}/>
    <Stack>
    <TypographyComponent size='16px' weight='600' text='Profile Picture' sx={{mt:3}}/>
    <Stack sx={{mt:2}} direction={"row"} justifyContent={"space-between"} width={"550px"} >
      <Stack direction={"row"} gap={2}>
        <Avatar sx={{width:"64px",height:"64px"}}/>
        <Stack>
        <TypographyComponent size='14px' weight='600' text='Mark Collin' />
        <TypographyComponent size='14px' weight='400' text='Role/tittle'/>
        <TypographyComponent size='14px' weight='400' text='Location' />
        </Stack>
      </Stack>
      <Stack direction={"row"} gap={3} height={"60px"} alignItems={"flex-end"}>
      <ButtonComponent variant="contained" text='Save Changes' sx={{textTransform:"none",width:"150px",height:"37px"}}/>
  <ButtonComponent variant="outlined" text='Cancel' sx={{textTransform:"none",width:"150px",height:"37px"}}/>
      </Stack>
    </Stack>
    <Stack>
    </Stack>
    </Stack>
      </Stack>
      
      </Stack>

    </Stack>
    
  </Paper>

</Stack>

      </Stack>
     
    </div>
  )
}

export default Settings