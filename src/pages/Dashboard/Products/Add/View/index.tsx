import { Grid, InputAdornment, MenuItem, Select, Stack, Typography } from "@mui/material"
import { IDashboardProductsView } from "../ViewModel"
import CustomInput from "../../../../../components/Custom/Inputs"
import CustomButton from "../../../../../components/Custom/Buttons"

const DashboardAddProductsView = (props: IDashboardProductsView): JSX.Element => {
    return (
        <Grid
            xs={12}
            item
            alignItems='center'
            alignContent='center'
            justifyContent='space-between'
            noValidate
            component='form'
            autoComplete='off'
            onSubmit={props.formik.handleSubmit}
            sx={{
                userSelect: 'none',
                width: '500px',
                margin: '0 auto',
                marginLeft: '100px'
            }}
            padding='75px 62px 75px 62px'
        >
          <Stack spacing='45px'>  
          <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Typography
                        variant='h4'
                    >
                        Add Product
                    </Typography>
                </Stack> 
            <CustomInput.TextInput
                    formik={props.formik}
                    fieldName={'productName'}
                    inputProps={{
                        startAdornment: (<InputAdornment
                            position='start'
                            sx={{
                                pb: '8px'
                            }}
                        >
                        </InputAdornment>),
                        placeholder: 'Product name'
                    }}
                />
            <CustomInput.TextInput
                    formik={props.formik}
                    fieldName={'productDescription'}
                    inputProps={{
                        startAdornment: (<InputAdornment
                            position='start'
                            sx={{
                                pb: '8px'
                            }}
                        >
                        </InputAdornment>),
                        placeholder: 'Product description'
                    }}
                />
            <CustomInput.TextInput
                    formik={props.formik}
                    fieldName={'price'}
                    inputProps={{
                        startAdornment: (<InputAdornment
                            position='start'
                            sx={{
                                pb: '8px'
                            }}
                        >
                        </InputAdornment>),
                        placeholder: 'Price'
                    }}
                    type='number'
                />
                <Select
                    {...props.formik.getFieldProps('productCategory')}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Select product category' }}
                >
                    <MenuItem value="" disabled>
                        Select product category
                    </MenuItem>
                    <MenuItem value={0}>Category 1</MenuItem>
                    <MenuItem value={1}>Category 2</MenuItem>
                    <MenuItem value={2}>Category 3</MenuItem>
                </Select>
                <Select
                    {...props.formik.getFieldProps('productBrand')}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Select product brand' }}
                >
                    <MenuItem value="" disabled>
                        Select product brand
                    </MenuItem>
                    <MenuItem value={0}>Brand 1</MenuItem>
                    <MenuItem value={1}>Brand 2</MenuItem>
                    <MenuItem value={2}>Brand 3</MenuItem>
                </Select>  
            <CustomButton.GeneralButton
                    xs={12}
                    buttonProps={{
                        type: 'submit'
                    }}
                >
                    Add
                </CustomButton.GeneralButton>        
            </Stack>          
        </Grid>    
    )
}

export default DashboardAddProductsView