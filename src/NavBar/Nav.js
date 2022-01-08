import React from "react";
import {
    AppBar,
    IconButton,
    Toolbar,
    List,
    Container,
    Button,
    Typography
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
import Form from "./Dialog";


const usedStyles = makeStyles({
    navbarDisplayFlex: {
        display: "flex",
        justifyContent: "space-between"
    },
    navDisplayFlex: {
        display: "flex",
        justifyContent: "space-between"
    },
    linkText: {
        textDecoration: "none",
        textTransform: "uppercase",
        width: "90px",
        color: "white"
    }
});

const NavBar = () => {
    const classes = usedStyles();

    const [ showDialog, setShowDialog ] = React.useState(false);

    const navigate = useNavigate();


    return (
        <>
            <AppBar position="fixed" >
                <Toolbar>
                    <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
                        <IconButton edge="start" color="inherit" aria-label="home" onClick={()=>{ navigate('/'); }}>
                         <Typography> BLOG </Typography>
                        </IconButton>
                        <List
                            component="nav"
                            aria-labelledby="main navigation"
                            className={classes.navDisplayFlex}
                        >
                                <Button variant="contained" color="secondary" onClick={()=>{ setShowDialog(true); }}>
                                    Dodaj Post
                                </Button>
                        </List>
                    </Container>
                </Toolbar>
                <Form show={showDialog} setShow={setShowDialog} />
            </AppBar>
        </>
    );
};

export default NavBar;
