import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'transparent', p: 2, mt: 2, boxShadow: 'none', textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary">
                © 2024 Your Website
            </Typography>
        </Box>
    );
};

export default Footer;
