import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import exampleImage from '../assets/images/logo.webp';
import anotherImage from '../assets/images/sg_map.gif'; // Import the additional image
import polyMapImage from '../assets/images/posthumanism_001.webp';

const LandingPage = () => {
    return (
        <Box sx={{ p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
            <Paper sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)', p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}>
                [main logo]
                <Box
                    component="img"
                    sx={{
                        p: 1,
                        mt: 5,
                        width: '450px', // Adjust the size as needed
                        height: '450px',
                        mr: 2
                    }}
                    alt="Example"
                    src={exampleImage}
                />
                [map and intro]
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Box
                        component="img"
                        sx={{
                            mt: 2, // Add margin to the top
                            mr: 2,
                            maxWidth: '200%', // Ensure the image does not overflow
                            height: 'auto',
                        }}
                        alt="Additional Example"
                        src={anotherImage} // Source for the additional image
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h4" sx={{ flexGrow: 1, color: "#FFFFFF", fontFamily: 'CustomFont1' }}>
                            Introduction
                        </Typography>
                        <Typography variant="body1" sx={{ flexGrow: 1, color: "#FFFFFF", fontFamily: 'CustomFont2' }}>
                            Singapore, an island that sits at the Southern tip of Malaysia, is a prime example of a country that has successfully emerged as an economic powerhouse in the late 20th Century. Spanning roughly 721 km², Singapore has developed rapidly and is continuing to expand its population. The island was predominately made of lowland rainforest (~80%) and a considerable amount of mangrove and freshwater swamps until the 1880s. Rapid deforestation began 150 years ago, and it has reduced the rainforest cover to less than 2% of its original extent: 118 ha (0.16%) of primary and 995 ha (1.37%) of old secondary forest. Continuous urban redevelopment of natural spaces has led to human-animal conflicts, the loss of natural habitat, and a slew of other environmental problems. How can design play a role in allowing coexistence between humans and their non-human counterparts? "Alam Se-Kita" is a design initiative that explores the possibilities of transforming human-centred spaces into poly-species environments through Posthuman methodologies.
                        </Typography>
                    </Box>
                </Box>

                [posthuman]
                <Box
                    component="img"
                    sx={{
                        p: 1,
                        mt: 1,
                        width: '900px', // Adjust the size as needed
                        height: '400px',
                        mr: 2
                    }}
                    alt="Example"
                    src={polyMapImage}
                />
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Box
                        component="img"
                        sx={{
                            mt: 2, // Add margin to the top
                            mr: 2,
                            maxWidth: '200%', // Ensure the image does not overflow
                            height: 'auto',
                        }}
                        alt="Additional Example"
                        src={anotherImage} // Source for the additional image
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h4" sx={{ flexGrow: 1, color: "#FFFFFF", fontFamily: 'CustomFont1' }}>
                            Posthumanism
                        </Typography>
                        <Typography variant="body1" sx={{ flexGrow: 1, color: "#FFFFFF", fontFamily: 'CustomFont2' }}>
                            Singapore, an island that sits at the Southern tip of Malaysia, is a prime example of a country that has successfully emerged as an economic powerhouse in the late 20th Century. Spanning roughly 721 km², Singapore has developed rapidly and is continuing to expand its population. The island was predominately made of lowland rainforest (~80%) and a considerable amount of mangrove and freshwater swamps until the 1880s. Rapid deforestation began 150 years ago, and it has reduced the rainforest cover to less than 2% of its original extent: 118 ha (0.16%) of primary and 995 ha (1.37%) of old secondary forest. Continuous urban redevelopment of natural spaces has led to human-animal conflicts, the loss of natural habitat, and a slew of other environmental problems. How can design play a role in allowing coexistence between humans and their non-human counterparts? "Alam Se-Kita" is a design initiative that explores the possibilities of transforming human-centred spaces into poly-species environments through Posthuman methodologies.
                        </Typography>
                    </Box>
                </Box>



            </Paper>
        </Box>
    );
};

export default LandingPage;
