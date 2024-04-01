import { Paper, Stack } from '@mui/material'
import React from 'react'
import OrdeHeader from '../../vendor/orderList/ordeHeader'
import OrderHeader from './OrderHeader'
import OrderStatus from './OrderStatus'
import OrderBody from './OrderBody'
import Steppers from '../../../components/Stepper'

const Myorder = () => {
  return (
    <div>
      <Stack sx={{m:2.8}}>

      <Stack>
        <OrderHeader/>
      </Stack>
      <Stack>
        <Paper>

      <Steppers/>
        </Paper>
      </Stack>
      <Stack>
      <OrderBody/>
      </Stack>
      </Stack>
    </div>
  )
}

export default Myorder