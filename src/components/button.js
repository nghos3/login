import React from 'react';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";


const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});
 

function Butn(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="raised" component="span" className={classes.button}>
        LOGIN
      </Button>
    </div>
  );
}

export default withStyles(styles)(Butn);




    