import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import Grow from 'material-ui/transitions/Grow';
import SwipeableViews from 'react-swipeable-views';
import Tabs, { Tab } from 'material-ui/Tabs';
import Opportunities from './Opportunities.jsx'

const styles = {
  buttonRoot: {
    height: 180,
    position : 'absolute',
    top: "90px",
    right: "70px",
    zIndex: 1
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: '10px',
    padding : '10px',
    width: '130px',
    fontWeight: "7px",
    borderRadius: "5px"
  },

}

class DashBoard extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       addClick : false,
       value: 0
     }
   }
   handleAdd(){
     this.setState({
       addClick: !this.state.addClick
     })
   }
   handleClick(){
     this.setState({
       addClick: !this.state.addClick
     })
     alert("dfsfsd")
   }
   handleChange(event,value){
     this.setState({
       value: value
     })
   }
   render() {
      return (
         <div>
           <div>
             <AppBar position="static" style={{backgroundColor:"#1b1c1d",zIndex:0,position:"absolute",top:'0',right:'0',left:'0'}}>
               <Toolbar>
                 <Typography variant="title" color="inherit">
                   Rapid Prototyping Team
                 </Typography>
               </Toolbar>
             </AppBar>


             <Button variant="fab" color="secondary" aria-label="add" onClick={this.handleAdd.bind(this)} style={{zIndex:1, position:"absolute",top:"35px",right:"50px"}}>
               <AddIcon />
             </Button>
             <div style={styles.buttonRoot}>
                <Grow in={this.state.addClick}>
                  <Paper elevation={8} style={styles.paper} onClick={this.handleClick.bind(this)}>
                    <Typography>POC</Typography>
                  </Paper>
                </Grow>
                <Grow
                  in={this.state.addClick}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(this.state.addClick ? { timeout: 1000 } : {})}
                >
                  <Paper elevation={8} style={styles.paper} onClick={this.handleClick.bind(this)}>
                    <Typography>MicroComponents</Typography>
                  </Paper>
                </Grow>
            </div>
          </div>

          <div>
             <center>
              <AppBar position="static" style={{marginTop:'75px',backgroundColor:"#c2c2c2",width:"80%"}}>
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange.bind(this)}
                  indicatorColor="secondary"
                  textColor="secondary"
                  fullWidth
                  centered
                >
                  <Tab label="OPPORTUNITIES" />
                  <Tab label="MICROCOMPONENTS" />
                </Tabs>
              </AppBar>
              <SwipeableViews index={this.state.value}>
                <div><Opportunities /></div>
                <div><Opportunities /></div>
              </SwipeableViews>
            </center>
          </div>

         </div>
      );
   }
}
export default DashBoard;
