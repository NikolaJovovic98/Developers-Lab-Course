import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
      paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        marginTop : '10px'
      },
}));