import React from 'react';
import { Typography, Container, Box } from '@mui/material';
const Footer = () => {
  return (
    <Box component="footer" sx={{ mt: 'auto', bgcolor: '#f7f7f9', py: 6 }}>
        <Container maxWidth="lg">
            <Typography variant="body2" color="text.secondary" align="center">
                Copyright © {new Date().getFullYear()} Your Company Name
            </Typography>
        </Container>
    </Box>
  );
}

export default Footer;
