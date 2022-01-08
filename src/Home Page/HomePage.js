import React from 'react';
import useStyle from './style';
import { Card, CardMedia, CardContent, Typography, Button, CardActions, CircularProgress } from '@material-ui/core';
import axios from 'axios';
import { useContext } from 'react';
import { GlobalContext } from '../App';
import { useNavigate } from 'react-router-dom';

const api_endpoint = 'https://jsonblob.com/api/jsonBlob/928323317618982912';

const HomePage = () => {

    const classes = useStyle();
    const navigate = useNavigate();

    const { allPosts, setAllPosts } = useContext(GlobalContext);

    const [errorPosts, setErrorPosts] = React.useState(false);

    React.useEffect(() => {

        const getPosts = async () => {
            try {
                const { data } = await axios.get(api_endpoint);

                setAllPosts(data);

            } catch (error) {
                console.log(error);
                setErrorPosts(true);
            }
        };

        getPosts();

    }, []);

    const ShowAllPosts = () => {
        return (
            <>
                {

                        allPosts.map((post, index) => {
                            return (
                                <Card className={classes.card} key={index}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={post.postImageUrl}
                                        alt="green iguana"
                                    />
                                    <CardContent style={{ textAlign: 'center' }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {post.postTitle}
                                        </Typography>
                                        <Typography variant="body2" >
                                            {post.postAuthorName}
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ float: 'right' }}>
                                        <Button 
                                            size="small" 
                                            variant='outlined' 
                                            color='primary'
                                            onClick={()=>{
                                                navigate(`/${post.id}`)
                                            }}>Pročitaj</Button>
                                    </CardActions>
                                </Card>
                            )
                        })
                }
            </>
        )
    };

    return (
        <div style={{ marginTop: '6%' }}>
            <div className={classes.section}>

                {
                    errorPosts
                        ?
                        <Typography>
                            Nije moguće izlistati sve post-ove.
                        </Typography>
                        :
                        <ShowAllPosts />
                }

            </div>
        </div>
    )
}

export default HomePage
