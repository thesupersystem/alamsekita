import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import exampleImage from '../assets/images/logo.webp';
import anotherImage from '../assets/images/sg_map.gif'; // Import the additional image
import polyMapImage from '../assets/images/posthumanism_001.webp';
import caption1 from '../assets/images/001_top.webp';
import polySpeciesChart from '../assets/images/polyenvichart.webp';
import polySpeciesMap from '../assets/images/polyenvichart3.webp';
import hypothesis from '../assets/images/hypothesis.webp';
import polyspeciesdesign from '../assets/images/polyspecies_01.webp';
import polyspeciesframework from '../assets/images/polyspecies_Chart.webp';

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
                  
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h4" sx={{ flexGrow: 1, color: "#FFFFFF", fontFamily: 'CustomFont1' }}>
                            Introduction
                        </Typography>
                        <Typography variant="body1" sx={{ flexGrow: 1, color: "#FFFFFF", fontFamily: 'CustomFont2' }}>
                            Singapore, an island that sits at the Southern tip of Malaysia, is a prime example of a country that has successfully emerged as an economic powerhouse in the late 20th Century. Spanning roughly 721 km², Singapore has developed rapidly and is continuing to expand its population. The island was predominately made of lowland rainforest (~80%) and a considerable amount of mangrove and freshwater swamps until the 1880s. Rapid deforestation began 150 years ago, and it has reduced the rainforest cover to less than 2% of its original extent: 118 ha (0.16%) of primary and 995 ha (1.37%) of old secondary forest. Continuous urban redevelopment of natural spaces has led to human-animal conflicts, the loss of natural habitat, and a slew of other environmental problems. How can design play a role in allowing coexistence between humans and their non-human counterparts? "Alam Se-Kita" is a design initiative that explores the possibilities of transforming human-centred spaces into poly-species environments through Posthuman methodologies.
                        </Typography>
                    </Box>

                    <Box
                        component="img"
                        sx={{
                            mt: 2, // Add margin to the top
                            ml: 2,
                            maxWidth: '200%', // Ensure the image does not overflow
                            height: 'auto',
                        }}
                        alt="Additional Example"
                        src={anotherImage} // Source for the additional image
                    />

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
                        src={caption1} // Source for the additional image
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h4" sx={{ flexGrow: 1, color: "#FFFFFF", fontFamily: 'CustomFont1' }}>
                            Posthumanism
                        </Typography>
                        <Typography variant="body1" sx={{ flexGrow: 1, color: "#FFFFFF", fontFamily: 'CustomFont2' }}>
                            The term "posthumanism" is applied to a range of contemporary theoretical positions put forward by researchers with disciplinary backgrounds in philosophy, science and technology studies, literary studies, critical theory, theoretical socioloy and communication studies. For these groups, posthumanism designates a series of breaks with foundational assumptions of modern Western culture: in particular, a new way of understanding the human subjecti in relationship to the natural world in general.
                            <br></br>
                            Posthumanist theory claims to offer a new epistemology that is not anthropocentric and therefore not centered in Cartesian dualism. It seeks to undermine the traditional boundaries between the human, the animal and the technological. The postmodern theorist Ihab Hassan coined the term and offered a seminal definition in an article entitled "Prometheus as Performer: Towards a Posthumanis Culture?"(1977). Related terms, with their own their own theoretical nuances, include the transhuman and the antihuman.
                        </Typography>
                    </Box>




                </Box>

                [poly-species environments]

                <Box
                    component="img"
                    sx={{
                        p: 1,
                        mt: 1,
                        maxWidth: '100%', // Adjust the size as needed
                        maxHeight: '100%',
                        mr: 2
                    }}
                    alt="Example"
                    src={polySpeciesChart}
                />
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                   
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h4" sx={{ flexGrow: 1, color: "#FFFFFF", fontFamily: 'CustomFont1' }}>
                            Poly-Species Environments
                        </Typography>
                        <Typography variant="body1" sx={{ flexGrow: 1, color: "#FFFFFF", fontFamily: 'CustomFont2' }}>
                            The term "posthumanism" is applied to a range of contemporary theoretical positions put forward by researchers with disciplinary backgrounds in philosophy, science and technology studies, literary studies, critical theory, theoretical socioloy and communication studies. For these groups, posthumanism designates a series of breaks with foundational assumptions of modern Western culture: in particular, a new way of understanding the human subjecti in relationship to the natural world in general.
                            <br></br>
                            Posthumanist theory claims to offer a new epistemology that is not anthropocentric and therefore not centered in Cartesian dualism. It seeks to undermine the traditional boundaries between the human, the animal and the technological. The postmodern theorist Ihab Hassan coined the term and offered a seminal definition in an article entitled "Prometheus as Performer: Towards a Posthumanis Culture?"(1977). Related terms, with their own their own theoretical nuances, include the transhuman and the antihumanIn an urbanizing world there is an increasing priority for making cities nature-inclusive environments. Cities offer places for human-wildlife experiences, and thus for broad societal support of biodiversity conservation. Cities also depend on ecosystem services provided by biodiversity to remain healthy, liveable places, Although biodiversity is frequently addressed in urban green infrastructure plans, it is often not an integral topic in city planningm urband design and house development. As a result, wildlife,-rich urban green areas are often lacking in those parts of the cities where people live and work.
                        </Typography>

                      

                    </Box>



                    <Box
                        component="img"
                        sx={{
                            mt: 2, // Add margin to the top
                            ml: 2,
                            maxWidth: '200%', // Ensure the image does not overflow
                            maxHeight: '100%',
                        }}
                        alt="Additional Example"
                        src={polySpeciesMap} // Source for the additional image
                    />
                   





                </Box>

                <Box
                    component="img"
                    sx={{
                        mt: 2, // Add margin to the top
                        ml: 2,
                        maxWidth: '200%', // Ensure the image does not overflow
                        height: 'auto',
                    }}
                    alt="Additional Example"
                    src={hypothesis} // Source for the additional image
                />


                [poly-species design]

                <Box
                    component="img"
                    sx={{
                        p: 1,
                        mt: 1,
                        maxWidth: '100%', // Adjust the size as needed
                        maxHeight: '100%',
                        mr: 2
                    }}
                    alt="Example"
                    src={polyspeciesdesign}
                />

                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h4" sx={{ flexGrow: 1, color: "#FFFFFF", fontFamily: 'CustomFont1' }}>
                            Poly-Species Design
                        </Typography>
                        <Typography variant="body1" sx={{ flexGrow: 1, color: "#FFFFFF", fontFamily: 'CustomFont2' }}>
                            
                            <br></br>
                            Poly-species design is a methodology that approaches design through Posthumanist principles developed by Donna Harraway and Rosi Braidotti. This design methodological approach intends to transform human-centered environments into poly-species environments thus, encouraging the co-existence between humans and their non-human counterparts.
                            <br></br>
                            This design methodology ensures the inclusivity of non-human stakeholders during all stages of development.
                            <br></br>
                            <br></br>
                


                        </Typography>

                      

                    </Box>

                   
                    <Box
                        component="img"
                        sx={{
                            mt: 2, // Add margin to the top
                            ml: 2,
                            maxWidth: '200%', // Ensure the image does not overflow
                            height: 'auto',
                        }}
                        alt="Additional Example"
                        src={polyspeciesframework} // Source for the additional image
                    />



                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                    <Typography variant="body1" sx={{ p:2, flexGrow: 1, color: "#FFFFFF", fontFamily: 'CustomFont2' }}>

                        [PHASE 1]
                        <br></br>
                        The user identifies the issue of an existing human-centred environment. Identifying key non-human stakeholders is done during this stage of the design process. A design statement is developed around the poly-species design framework to address the issue. Sources from various forms media (news articles,journals etc) will be used to support the design statement.

                    </Typography>

                    <Typography variant="body1" sx={{ p: 2, flexGrow: 1, color: "#FFFFFF", fontFamily: 'CustomFont2' }}>


                        [PHASE 2]
                        <br></br>
                        With a design statement prepared and sources to support it, users can approach collaborators (scientists, animal researchers) to understand more about targeted species. The access to characteristics of targeted species allows the user to develop solutions to meet the needs of non-human stakeholders. Users can also further collaborate with other field specialists (technologists, AI researchers etc) to develop solutions and prototypes. During this entire process, the user must ensure key points of the design framework are met. Occasionally, governments can play a significant role in a project, and thus, it is crucial to involve them during most stages of a project.


                    </Typography>

                    <Typography variant="body1" sx={{ p: 2, flexGrow: 1, color: "#FFFFFF", fontFamily: 'CustomFont2' }}>

                        [PHASE 3]
                        <br></br>
                        A developed solution or prototype cannot be deployed for real-world use unless tested in the field. During this phase, human stakeholders (both private and government organisations), will be approached to deploy the solution or prototype for field testing. Data from the test will deduce the feasibility of the design project.
                    </Typography>

                </Box>

            </Paper>
        </Box>
    );
};

export default LandingPage;
