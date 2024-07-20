import React from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';

const Toolkit = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Paper sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', p: 2 }}>
                <Typography variant="h3">Toolkit</Typography>
                <form noValidate autoComplete="off">
                    <Box sx={{ mb: 2 }}>
                        <TextField fullWidth label="Name" variant="outlined" />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField fullWidth label="Email" variant="outlined" />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                        />
                    </Box>
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default Toolkit;
