import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { InputAdornment, OutlinedInput, Stack, TextField } from '@mui/material';
import TypographyComponent from '../../../components/Typography';
import DetailsColumn from './DetailsColumn';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));



const ProductBody = () => {
  return (
    <div>
        <Stack>
            <Paper sx={{width:"100%",height:"1108px"}}>
            <Box sx={{ flexGrow: 1 }}>
                <Stack sx={{m:3}}>
                <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <Stack>

            <Stack>
                    <TypographyComponent text='Product Name' weight='600'/>
                    <Stack sx={{mt:2}}>

                   <OutlinedInput
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
            sx={{width:"100%",height:"100%"}}
          /> 

          
                    </Stack>

            </Stack>
            <Stack sx={{mt:1}}>
                    <TypographyComponent text='Description' weight='600'/>
                    <Stack sx={{mt:2}}>

                    <OutlinedInput
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
            sx={{height:'180px'}}
        
          />

          
                    </Stack>

            </Stack>
            <Stack sx={{mt:1}}>
                    <TypographyComponent text='Category' weight='600'/>
                    <Stack sx={{mt:2}}>

                    <OutlinedInput
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
          />

          
                    </Stack>

            </Stack>
            <Stack sx={{mt:1}}>
                    <TypographyComponent text='Brand Name' weight='600'/>
                    <Stack sx={{mt:2}}>

                    <OutlinedInput
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
          />

          
                    </Stack>

            </Stack>
            <Stack>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <DetailsColumn text='SKU'/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <DetailsColumn text='Stock Quantity'/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <DetailsColumn text='Regular Price'/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <DetailsColumn text='Sale Price'/>
          </Item>
        </Grid>
        
      </Grid>
    </Box>
                
            </Stack>    
            </Stack>
          </Item>
          
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Stack height={"428px"} bgcolor={"gray"}></Stack>
            <DetailsColumn text='Product Gallery'/>
          </Item>
          
        </Grid>
        
        
        
       
        
      </Grid>
                </Stack>
      
    </Box>
            </Paper>
        </Stack>
    </div>
  )
}

export default ProductBody