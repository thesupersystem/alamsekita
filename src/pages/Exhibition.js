import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const Exhibition = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Paper sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', p: 2 }}>
                <Typography variant="h3">Exhibition</Typography>
                <Typography variant="h5">Subheader 1</Typography>
                <Typography variant="body1">Content for subheader 1.</Typography>
                <Typography variant="h5">Subheader 2</Typography>
                <Typography variant="body1">Content for subheader 2.</Typography>
                <Typography variant="h5">Subheader 3</Typography>
                <Typography variant="body1">Content for subheader 3.</Typography>
                <Typography variant="h5">Subheader 4</Typography>
                <Typography variant="body1">Content for subheader 4.</Typography>
                <Typography variant="h5">Subheader 5</Typography>
                <Typography variant="body1">Content for subheader 5.</Typography>
            </Paper>
        </Box>
    );
};

export default Exhibition;
