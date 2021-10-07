import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import "./cards2.css"

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import BackgroundImg from "../../assets/pictures/company_team.jpg";
import { ImgMediaCard } from "./cards";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap'
  },

}));

const tileData = [
{
  img: BackgroundImg,
  title: 'title'
},
{
  img: BackgroundImg,
  title: 'title'
},
{
  img: BackgroundImg,
  title: 'title'
}
];

export function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div>
      <GridList className={classes.gridList} cols={2.5}>
        {/* {tileData.map((tile) => (
            // <div className="cardss">
            //             <ImgMediaCard /> 
            //             </div>
          <GridListTile key={tile.img}>
            <ImgMediaCard />            
            <GridListTileBar
              title={tile.title}
            />
          </GridListTile>
        ))} */}
        <Card className="m" style={{maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={BackgroundImg}
          title='title'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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

      </GridList>
    </div>
  );
}