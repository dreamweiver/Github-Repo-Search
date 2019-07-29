import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import {withStyles} from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';

const lightIndigo = indigo[500];
const lightBlue = blue[100]; 

const ColorCircularProgress = withStyles({
  root: {
    color: lightIndigo,
  },
})(CircularProgress);

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: lightBlue,
  },
  barColorPrimary: {
    backgroundColor: lightIndigo,
  },
})(LinearProgress);

export {
	ColorCircularProgress,
	ColorLinearProgress
}