import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Sector from '../Home/Sector';

const Trainings = () => {
    const [mainSectors, setmainSector] = useState([]);
    useEffect(()=>{
        fetch('./sector.json')
        .then(res => res.json())
        .then(data => setmainSector(data))
    },[]);
    return (
        <div>
            <Grid container spacing={{ xs:4 , md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            mainSectors.map(mainSector=><Grid item xs={2} sm={4} md={4} >
              <Sector mainSector={mainSector} 
              ></Sector>
            </Grid>)
          }
         
</Grid>
        </div>
    );
};

export default Trainings;