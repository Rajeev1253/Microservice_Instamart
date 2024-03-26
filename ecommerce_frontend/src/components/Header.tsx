import { Stack } from '@mui/material'
import React from 'react'
import TypographyComponent from './Typography'
interface HeaderProps {
    text1 : string,
    text2 : string,

}

const Header = (props:HeaderProps) => {
  return (
    <div>
          <Stack>
        <Stack sx={{mt:3}} width={"100%"} direction={"row"} justifyContent={"space-between"}>
            <Stack>
        <TypographyComponent weight='600' size='28px' text={props.text1}/>
        <TypographyComponent text={props.text2}/>
            </Stack>
            </Stack>
            </Stack>



            {/* <Card sx={{ width: "348px", height: "154px" }}>
                  <TypographyComponent
                    text="Payment Info"
                    weight="600"
                    sx={{ m: 1 }}
                    size="20px"
                  />
                  <Stack direction={"row"} sx={{ ml: 1 }}>
                    <ImageComponent srcs={master} />
                    <TypographyComponent text="Master Card **** **** 6557" />
                  </Stack>
                  <Stack direction={"row"} sx={{ ml: 2 }}>
                    <TypographyComponent text="Business Name:" size="14px" />
                    <TypographyComponent text="User" size="14px" />
                  </Stack>
                  <Stack direction={"row"} sx={{ ml: 2 }}>
                    <TypographyComponent text="Phone:" size="14px" />
                    <TypographyComponent text=" +91 904 231 1212" size="14px" />
                  </Stack>
                </Card> */}
    </div>
  )
}

export default Header