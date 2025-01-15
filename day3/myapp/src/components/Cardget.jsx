import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import axios from 'axios';
import { useState } from 'react';
import { Grid } from '@mui/material';



const Cardget = () => {
    const [data, setData] = useState([]);

    axios.get("https://fakestoreapi.com/products")
    .then((res) => {
            setData(res.data)
        });
    return (
        <div>
            <Grid container spacing={2}>
                {data.map((val) => { 
                    return (
                        <Grid item xs={8} sm={6} md={ 4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={val.image }
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {val.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {val.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                         </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Cardget

