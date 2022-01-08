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
    }
}));
