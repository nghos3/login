import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Password from './password';
import Divider from 'material-ui/Divider';
import User from './user';
import Grid from 'material-ui/Grid';
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    
  }),
});

function PaperSheet(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
      <Typography  component="p">
          <User/>
        </Typography>
         
      </Paper>
  
          
      <Paper className={classes.root} elevation={4}>
        <Typography component="p">
          <Password/>
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);





