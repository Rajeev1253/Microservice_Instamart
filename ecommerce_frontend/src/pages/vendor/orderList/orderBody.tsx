import { Divider, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import TypographyComponent from '../../../components/Typography'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
const columns: GridColDef[] = [
    { field: 'product', headerName: 'Product', width:192, sortable: false, },
    { field: 'orderId', headerName: 'OrderId',  width:192, sortable: false,},
    { field: 'date', headerName: 'Date', width:192},
    {
      field: 'customerName',
      headerName: 'Customer Name',
      sortable: false,

      width:192
    },
    {
      field: 'status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width:192,
    },
    {
        field: 'amount',
        headerName: 'Amount',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
      
      },
  ];
  
  const rows = [
    { id:1, product:'Lorem ipsum', orderId:"#2314",Date:"02/12/2002",customerName:"Rajeev Goyal",status:"pending",amount:"2000"},
    { id:2, product:'Lorem ipsum', orderId:"#2314",Date:"02-12-2002",customerName:"Rajeev Goyal",status:"pending",amount:"2000"},
    { id:3, product:'Lorem ipsum', orderId:"#2314",Date:"02-12-2002",customerName:"Rajeev Goyal",status:"pending",amount:"2000"},
    { id:4, product:'Lorem ipsum', orderId:"#2314",Date:"02-12-2002",customerName:"Rajeev Goyal",status:"pending",amount:"2000"},
    { id:5, product:'Lorem ipsum', orderId:"#2314",Date:"02-12-2002",customerName:"Rajeev Goyal",status:"pending",amount:"2000"},
    { id:6, product:'Lorem ipsum', orderId:"#2314",Date:"02-12-2002",customerName:"Rajeev Goyal",status:"pending",amount:"2000"},
    { id:7, product:'Lorem ipsum', orderId:"#2314",Date:"02-12-2002",customerName:"Rajeev Goyal",status:"pending",amount:"2000"},
    { id:8, product:'Lorem ipsum', orderId:"#2314",Date:"02-12-2002",customerName:"Rajeev Goyal",status:"pending",amount:"2000"},
    { id:9, product:'Lorem ipsum', orderId:"#2314",Date:"02-12-2002",customerName:"Rajeev Goyal",status:"pending",amount:"2000"},
    { id:10, product:'Lorem ipsum', orderId:"#2314",Date:"02-12-2002",customerName:"Rajeev Goyal",status:"pending",amount:"2000"},
    { id:11, product:'Lorem ipsum', orderId:"#2314",Date:"02-12-2002",customerName:"Rajeev Goyal",status:"pending",amount:"2000"} ,   
    
  ];

const OrderBody = () => {
  return (
    <Stack>

    <div style={{ width: '100%' }}>
        <Paper sx={{m:3}}>
            <Stack>
            </Stack>
        <TypographyComponent text='Recent Searches' weight='600' sx={{m:2}}/>
            <Divider orientation='horizontal' variant='middle'/>
                

    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
        </Paper>
  </div>
    </Stack>
  )
}

export default OrderBody