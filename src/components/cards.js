import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent,CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Butn from './button';
import PaperSheet from './paper';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="card">
      <Card className={classes.card}>
          
           
            <Typography variant="title" gutterBottom align="center">
              Login
          {/* <img src='' alt="Login"/>*/}
          </Typography>
        <CardContent>
            <PaperSheet/>
        </CardContent>
        
        <CardActions>
           <Butn /><a href="#">Forgot Password</a>
        </CardActions>
      
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
