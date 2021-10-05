import {  Button, Card, CardContent, CardHeader, CardMedia,  Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';
import './sector.css'


const Sector = (props) => {
  const {title,lectures,picture,price } = props.sector
    
    return (
      
    <Card className="sectorCard"  sx={{ maxWidth: 345 }}>
        <CardHeader
          
          
          title={title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={picture}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body3" color="text.primary">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquid praesentium totam repellendus molestiae, minima, non repudiandae illo iure saepe ducimus quidem itaque eum ratione quaerat ut deleniti libero quae.
          </Typography>
          <h6>Lectures:{lectures}</h6>
          <h4>Price:BDT {price}</h4>
          <Button className="footer"
          onClick={()=>props.handleEvent(props.sector)} >Enroll</Button>
        </CardContent>
      </Card>
    

  

        
    );
};

export default Sector;