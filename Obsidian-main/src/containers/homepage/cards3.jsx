import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import b from "../../assets/pictures/b.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard3() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={b}
          title="frog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            SRM Achivers Connect
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          To add five stars to our evening, and give us all some food for thought and pearls of wisdom, our friends at the Directorate of Alumni Affairs have come up with a very interesting event called “SRM Achiever’s Connect”.
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
