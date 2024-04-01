import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { InputAdornment, OutlinedInput, Stack, TextField } from '@mui/material';
import TypographyComponent from '../../../components/Typography';
import DetailsColumn from './DetailsColumn';
import { Autocomplete,  Checkbox,  IconButton, Typography } from "@mui/material";
import { FC, useState } from "react";
import { FileUploader } from 'react-drag-drop-files'
import DragDrop from '../../../components/dragdrop/DragDrop'
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import LinearDeterminate from "../../../components/ProgressBar";
import styles from './AddProduct.module.css'
import ButtonComponent from '../../../components/ButtonComponent';
const fileTypes = ["JPG", "PNG"];

const categories = [
  { tagName: 'Title 1' },
  { tagName: 'Title 2' }
];

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;



const ProductBody:FC = () => {
  const [file, setFile] = useState<File[]>([]);
      const [imageUrls, setImageUrls] = useState<string[]>([]);
  
      const handleChange = (file: File[]) => {
          const arrayfile = Array.from(file);
  
          const urls = arrayfile.map(a => {
              return URL.createObjectURL(a)
          });
          setImageUrls((prev) => [...prev, ...urls]);
  
      };
      const deleteImg = (index: number) => {
          console.log("first", index)
          setImageUrls((prev) =>
              prev.filter((_, i) => i !== index)
          )
      }
  return (
    <div>
        <Stack>
            <Paper sx={{width:"100%",height:"1108px"}}>
            <Box sx={{ flexGrow: 1 }}>
                <Stack sx={{m:3}}>
                <Grid container spacing={2}>
        <Grid item xs={6}>
          
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
          
            <DetailsColumn text='SKU'/>
          
        </Grid>
        <Grid item xs={6}>
          
          <DetailsColumn text='Stock Quantity'/>
          
        </Grid>
        <Grid item xs={6}>
          
            <DetailsColumn text='Regular Price'/>
          
        </Grid>
        <Grid item xs={6}>
          
          <DetailsColumn text='Sale Price'/>
          
        </Grid>
        
      </Grid>
      <Box my={1}>
                <TypographyComponent text={'Tags'} size={'16px'} weight={'600'}  />
                <Autocomplete fullWidth
                    multiple
                    id="checkboxes-tags-demo"
                    options={categories}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.tagName}
                    renderOption={(props, option, { selected }) => (
                        <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option.tagName}
                        </li>
                    )}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                        <TextField {...params} placeholder="Add tags..." />
                    )}
                />
            </Box>
    </Box>
                
            </Stack>    
            </Stack>
        
          
        </Grid>
        <Grid item xs={5.5}>
          
        <Box sx={{backgroundColor:"#c8c8c8", height:"428px",  boxSizing:"border-box", borderRadius:"0.8rem"}}>
            {imageUrls && imageUrls.length > 0 && <img src={imageUrls[0]} style={{height:"100%", width:"100%",  borderRadius:"0.8rem"}} alt=""/>}
          </Box>
          <Stack>
            <Stack py={2} gap={1} >
                <TypographyComponent text={'Product Gallery'} size={'14'} weight={'600'} />
                <FileUploader children={<DragDrop file={file} />} handleChange={handleChange} multiple name="file" types={fileTypes} />
                <Stack flexWrap={'wrap'} direction={'row'} gap={2}>
                    {imageUrls?.map((a, index) => (
                        <Box key={index} sx={{ width:'100%', height: '96px', position: 'relative' ,display:"flex"}}>
                            <img src={a} alt=""  style={{width:"64px", height:"64px", margin:"16px", borderRadius:"0.4rem"}}/>
                            <IconButton onClick={() => {
                                deleteImg(index)
                            }} sx={{ position: 'absolute', top: '8px', right: '8px', height: '15px', width: '15px', color: 'black' }}><CloseIcon sx={{ height: '15px', width: '15px' }} /></IconButton>
                            <Box sx={{ position:"absolute", left:"96px", top:"16px", width:"calc(100% - 168px)"}}>
                              <Typography  >Product image name </Typography>
                              <Box sx={{mt:"16px"}}><LinearDeterminate /></Box>
                            </Box>
                            <IconButton sx={{ position:"absolute", right:"16px", top:"23px", color:"#003F62"}}><CheckCircleRoundedIcon/></IconButton>
                        </Box>
                    ))}
                </Stack>

            </Stack>
            
            <Stack direction={'row'} py={2} gap={5}>
                <ButtonComponent  variant="contained" text="Save" />
                <ButtonComponent variant="outlined" text="Cancel" />
            </Stack>
        </Stack>

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