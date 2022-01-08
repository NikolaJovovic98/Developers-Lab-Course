import React from 'react';
import { Dialog, DialogTitle, DialogContent, Button, DialogActions, Grid, TextField, Typography } from '@material-ui/core';
import useStyle from './style';
import { useContext } from 'react';
import { GlobalContext } from '../App';
import axios from 'axios';

const initialState = {
    id: "",
    postTitle: "",
    postImageUrl: "",
    postAuthorName: "",
    postText: ""
};

const api_endpoint = 'https://jsonblob.com/api/jsonBlob/928323317618982912';

const Form = ({ show, setShow }) => {

    const { allPosts, setAllPosts } = useContext(GlobalContext);

    const handleClose = () => {
        setShow(false);
    };

    initialState.id = allPosts.length+1;

    const classes = useStyle();

    const [errors, setErrors] = React.useState(false);

    const [postData, setPostData] = React.useState(initialState);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const validator = validatePostData(postData.postTitle, postData.postAuthorName, postData.postImageUrl, postData.postText);
        if (validator.length !== 0) {
            setErrors(validator);
        }else {
            setErrors(false);
            addNewPost();
        }
    }

    const addNewPost = async () => {
        try {

            allPosts.push(postData);

            const test = [...allPosts];

            await axios.put(api_endpoint,test);

            setAllPosts(test);

            setShow(false);
            
        } catch (error) {
            console.log(error);
        }
    };

    const handleFormChange = (e) => {
        setPostData({
            ...postData,
            [e.target.name]: e.target.value
        });
    };

    const validatePostData = (title, author, imageUrl, text) => {
        const errors = [];
        if (!title || !author || !imageUrl || !text) errors.push('Popunite sva polja');
        if (title.length > 20 || author.length > 20) errors.push('Naslov max 20 karaktera');
        if (text.length > 250) errors.push('Tekst max 250 karaktera');
        return errors;
    };

    return (
        <Dialog
            open={show}
            onClose={handleClose}
        >
            <DialogTitle id="alert-dialog-title">
                Dodaj Novi Post
            </DialogTitle>

            {
                errors
                    ?
                    errors.map((err, index) => {
                        return (
                            <Typography style={{ textAlign : 'center' }} key={index} color='secondary' > {err} </Typography>
                        )
                    })
                    :
                    null
            }

            <DialogContent>
                <div className={classes.paper}>

                    <form className={classes.form} onSubmit={handleFormSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    autoFocus
                                    id="naslov"
                                    label="Naslov"
                                    name="postTitle"
                                    type="text"
                                    value={postData.postTitle}
                                    onChange={handleFormChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="slika"
                                    label="Url slike"
                                    name="postImageUrl"
                                    type="text"
                                    value={postData.postImageUrl}
                                    onChange={handleFormChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="autor"
                                    label="Autor"
                                    name="postAuthorName"
                                    type="text"
                                    value={postData.postAuthorName}
                                    onChange={handleFormChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="naslov"
                                    label="Tekst"
                                    name="postText"
                                    type="text"
                                    value={postData.postText}
                                    onChange={handleFormChange}
                                    maxRows={5}
                                />
                            </Grid>


                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{ marginTop: '15px', marginBottom: '15px' }}
                        >
                            Dodaj
                        </Button>
                    </form>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">Odustani</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Form;
