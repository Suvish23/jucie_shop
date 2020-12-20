import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title:{
    color:"black",
    fontFamily:"Times New Roman",
  }
  
}));

  
export default function Header() {
  const classes = useStyles();
  const history = useHistory()
  const onClickanalysishandler = ()=> {
    history.push('/analysis');
  }
  return (
    <Grid className={classes.root}>
      <AppBar position="static" style={{background:"#F3FBFB",borderRadius:"10px" ,padding:"10px"}} >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button onClick={onClickanalysishandler}>
            Analysis
              </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
