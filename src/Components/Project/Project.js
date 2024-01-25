import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const projectInfoTitles = ["image", "tech stack", "about", "links"]

export default function ResponsiveGrid() {
  
  const [projectInfoState , setProjectInfoState] = useState(projectInfoTitles)
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 4 }}>
        {Array.from(projectInfoState).map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Item>{projectInfoState[index]}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}