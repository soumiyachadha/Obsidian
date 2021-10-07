import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import a from "../../assets/pictures/a.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={a}
          title="NeuRes"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            NeuRes
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          To acquaint y’all with this phenomenal concept, we at the Data Science Community are all geared up for a week-long bootcamp on deep learning, ‘NeuRes’, wherein we’ll have a series of insightful workshops exploring the topic. 

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
