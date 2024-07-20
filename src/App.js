import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CaseStudies from './pages/CaseStudies';
import Exhibition from './pages/Exhibition';
import Toolkit from './pages/Toolkit';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: 'black',
                    backgroundImage: 'url("/background.gif")',
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    height: '100%',
                    width: '100%',
                },
            },
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Header />
                <Container sx={{ mt: 8 }}>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/case-studies" element={<CaseStudies />} />
                        <Route path="/exhibition" element={<Exhibition />} />
                        <Route path="/toolkit" element={<Toolkit />} />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;
