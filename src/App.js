import React from 'react';
import Content from './Content';
import { BrowserRouter as Router } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  app: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.app}>
        <Content />
      </div>
    </Router>
  );
}

export default App;
