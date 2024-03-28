import { Avatar, Paper, Stack } from '@mui/material'
import React from 'react'
import TypographyComponent from '../../../components/Typography'
import ButtonComponent from '../../../components/ButtonComponent'

const persnol = () => {
  return (
    <div>
        <Paper>

         <Stack>
                <Stack sx={{ pl: 2 }}>
                  <TypographyComponent
                    size="24px"
                    weight="600"
                    text="General Information"
                  />
                  <TypographyComponent
                    size="14px"
                    weight="400"
                    text="Manage your account settings"
                    sx={{ pt: 1 }}
                  />
                  <Stack>
                    <TypographyComponent
                      size="16px"
                      weight="600"
                      text="Profile Picture"
                      sx={{ mt: 3 }}
                    />
                    <Stack
                      sx={{ mt: 2 }}
                      direction={"row"}
                      justifyContent={"space-between"}
                      width={"550px"}
                    >
                      <Stack direction={"row"} gap={2}>
                        <Avatar sx={{ width: "64px", height: "64px" }} />
                        <Stack>
                          <TypographyComponent
                            size="14px"
                            weight="600"
                            text="Mark Collin"
                          />
                          <TypographyComponent
                            size="14px"
                            weight="400"
                            text="Role/tittle"
                          />
                          <TypographyComponent
                            size="14px"
                            weight="400"
                            text="Location"
                          />
                        </Stack>
                      </Stack>
                      <Stack
                        direction={"row"}
                        gap={3}
                        height={"60px"}
                        alignItems={"flex-end"}
                      >
                        <ButtonComponent
                          variant="contained"
                          text="Save Changes"
                          sx={{
                            textTransform: "none",
                            width: "150px",
                            height: "37px",
                          }}
                        />
                        <ButtonComponent
                          variant="outlined"
                          text="Cancel"
                          sx={{
                            textTransform: "none",
                            width: "150px",
                            height: "37px",
                          }}
                        />
                      </Stack>
                    </Stack>
                    <Stack></Stack>
                  </Stack>
                </Stack>
              </Stack>
        </Paper>
    </div>
  )
}

export default persnol