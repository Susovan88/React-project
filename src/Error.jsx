import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function ErrorMsg(){
    return(
        <>    
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="filled" severity="error">
            Please enter a city name to fetch the weather information.
            </Alert>
       </Stack>
       </>
    )
}