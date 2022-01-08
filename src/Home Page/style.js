import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    table: {
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
        }
    },
    section : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        flexWrap : 'wrap'
       
    },
    card : {
        borderRadius : '8px',
        width : '20%',
        margin : '1%'
    }
}));
