import { Avatar, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';


const Sector = (props) => {
  const {title,lectures,picture } = props.sector
    
    return (
    <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          
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
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
      </Card>
    
  
  

        
    );
};

export default Sector;