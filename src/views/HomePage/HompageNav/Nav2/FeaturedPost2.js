import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { Link } from '@material-ui/core';
import ReadMore2 from './ReadMore2';

// const featuredPosts = [
//   {
//     title: 'Success story 1',
//     description:
//     `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus im
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus im
    
//      nulla et dictum interdum, nisi lorem egestas vitae scel`,
//   },
//   // {
//   //   title: 'Success story 2',
    
//   //   description:
//   //     `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus im
//   //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus im
      
//   //      nulla et dictum interdum, nisi lorem egestas vitae scel`,
//   //   image: './images/home.jpg',
//   //   imageText: 'Image Text',
//   //   linkText: 'Read more...',
//   // },
//   // {
//   //   title: 'Success story 3',
    
//   //   description:
//   //   `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus im
//   //   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus im
    
//   //    nulla et dictum interdum, nisi lorem egestas vitae scel`,
//   //   image: './images/home.jpg',
//   //   imageText: 'Image Text',
//   //   linkText:'</ReadMore>',
//   // },
// ];
const useStyles = makeStyles({
  card: {
    display: 'flex',
    marginTop:"100px",
    boxShadow:'2px 2px 2px 2px #fffbbf',
  },
  cardDetails: {
    width: '30%',
    flex: 1,
  },
  cardMedia: {
   // width: 160,
   
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  // // const { post } = props;
  // {featuredPosts.map((post, i) => (
  //   <FeaturedPost key={i} post={post} />
  // ))}   
  return (
    <Grid item xs={12} md={4}>

      {/* // <CardActionArea component="a" href="#">  */}
      <Card className={classes.card}  boxShadow={3}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
            Success story 2
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              
            </Typography>
            <Typography variant="subtitle1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus im
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus im
    
     nulla et dictum interdum, nisi lorem egestas vitae scel...
            </Typography>
            <Typography variant="subtitle1" color="primary">
              <ReadMore2/>
            </Typography>
          </CardContent>
        </div>
        {/* <Hidden xsDown>
          <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
        </Hidden> */}
      </Card>
      {/* </CardActionArea>  */}
      
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
