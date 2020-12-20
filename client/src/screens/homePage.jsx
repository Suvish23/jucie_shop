import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Header from '../components/Header'

import fruits from "../images/fruits.jpg"

  

function HomePage() { 
    return (
        <Grid>
 <Grid>
    <Header/>
      </Grid>
      <Grid container item direction="row"
  justify="center"
  alignItems="center" style={{}}>
        <Card style={{width:"75vw",marginTop:"8vh",height:"68vh",borderRadius:"20px",background:`url(${fruits}) no-repeat center center/cover`
}}>
            <CardContent>
                
            <Typography style={{textAlign:"center",color:"white",backgroundColor:"#C698A2",borderRadius:"20px",fontWeight:"bolder",fontSize:"3rem",opacity:'0.9'}}>SV Juice Center</Typography>
            </CardContent>
            <CardActions>
                <Button style={{margin:"auto",marginTop:"41vh",width:"18vw",fontSize:"20px",background:"#6D74F7",color:"#F3FBFB",borderRadius:"20px"}}>
                    New Order
                </Button>
            </CardActions>
        </Card>
        {/* <Demo/> */}
      </Grid>
      </Grid>
        
    )
}

export default HomePage
