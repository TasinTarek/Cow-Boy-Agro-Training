import {   Grid} from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Home.css'
import Welcome from './Welcome';
import image from '../../images/image.jpg'
import Sector from './Sector';


const Home = () =>{
    const [welcome, setWelcome] = useState([])

    const [sectors, setSectors] = useState([])
    useEffect(()=>{
      fetch('./generated.json')
      .then(res => res.json())
      .then(data => setSectors(data))
    },[])
    
    return (
      
      <div>
        <div>
        <Welcome welcome={welcome} ></Welcome>
        <h2 className="welcome" >Find The Right Training For YOU!!!</h2>
        </div>
      
         <div >
         <Grid container spacing={{ xs:4 , md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            sectors.map(sector=><Grid item xs={2} sm={4} md={4} >
              <Sector sector={sector} ></Sector>
            </Grid>)
          }
         
</Grid>
</div>
        
      
      
        
      
      </div>
      
      
    

    );
};

export default Home;