import React from 'react';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import Grow from 'material-ui/transitions/Grow';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from 'material-ui/Divider';

const styles = {
  root: {
    flexGrow: 1,
  },
  heading: {
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    color: "#a0a0a0",
  }
};

class Opportunities extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       expanded: null
     }
   }
   handleChange(panel,event,value){
     // console.log(event,"event",panel,"!!!!",value);
    this.setState({
      expanded: value ? panel : false,
    });
  };
   render() {
      return (
         <div>
           <Paper elevation={8} style={{backgroundColor:'#ddd',width:'85%',borderRadius:'5px',margin:'15px'}}>
           {/* <Paper style={{height:'50px'}}></Paper> */}
           <ExpansionPanel expanded={this.state.expanded === 'panel1'} onChange={this.handleChange.bind(this,'panel1')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography style={styles.heading}>General settings</Typography>
                <Typography style={styles.secondaryHeading}>I am an expansion panel</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                  maximus est, id dignissim quam.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={this.state.expanded === 'panel2'} onChange={this.handleChange.bind(this,'panel2')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography style={styles.heading}>Users</Typography>
                <Typography style={styles.secondaryHeading}>
                  You are currently not an owner
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                  diam eros in elit. Pellentesque convallis laoreet laoreet.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={this.state.expanded === 'panel3'} onChange={this.handleChange.bind(this,'panel3')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography style={styles.heading}>Advanced settings</Typography>
                <Typography style={styles.secondaryHeading}>
                  Filtering has been entirely disabled for whole web server
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                  eros, vitae egestas augue. Duis vel est augue.
                </Typography>
              </ExpansionPanelDetails>
              <Divider />
              <ExpansionPanelActions>
                <Button size="small">Cancel</Button>
                <Button size="small" color="primary">
                  Save
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>
            </Paper>
         </div>
      );
   }
}
export default Opportunities;
