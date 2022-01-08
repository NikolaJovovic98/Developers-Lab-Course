import React from 'react';
import useStyle from './style';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import axios from 'axios';

const api_endpoint = 'https://jsonblob.com/api/jsonBlob/928323317618982912';


const PostPage = () => {

    const classes = useStyle();

    const { postId } = useParams();

    const [post, setPost] = React.useState({});

    React.useEffect(() => {

        const getPosts = async () => {
            try {
                const { data } = await axios.get(api_endpoint);

                setPost(data.filter((post) => post.id === parseInt(postId)));
                setPost(post => post[0]);

            } catch (error) {
                console.log(error);
            }
        };

        getPosts();

    }, []);



    return (
        <div style={{ marginTop: '6%', display : 'flex', justifyContent:'center' }} >
            <Card style={{ width : '40%', textAlign : 'center' }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={post.postImageUrl}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {post.postTitle}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="div">
                        {post.postAuthorName}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                        {post.postText}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default PostPage
