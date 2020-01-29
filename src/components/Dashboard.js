import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import * as API from '../services/index';
import { requestFetchIssues } from '../store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const [status, setStatus] = React.useState([]);
  const [isNew, setIsNew] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    API.getIssueStatusReport().then((res) => {
      if (res) {
        setStatus(res.data);
      }
    });
  }, []);

  React.useEffect(() => {
    API.getIssueIsNewReport().then((res) => {
      if (res) {
        setIsNew(res.data);
      }
    });
  }, []);

  React.useEffect(() => {
    dispatch(requestFetchIssues());
  }, [dispatch]);

  const getNewOptions = () => ({
    title: {
      text: 'Issue New Chart'
    },
    tooltip: {},
    xAxis: {
      data: ['new', 'old']
    },
    yAxis: {},
    series: [
      {
        name: 'viewed',
        type: 'pie',
        data: isNew
      }
    ]
  });

  const getStatusOptions = () => ({
    title: {
      text: 'Issue Status Chart'
    },
    tooltip: {},
    xAxis: {
      data: ['started', 'in progress', 'done']
    },
    yAxis: {},
    series: [
      {
        name: 'status',
        type: 'bar',
        data: status
      }
    ]
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <ReactEchartsCore
              echarts={echarts}
              option={getStatusOptions()}
              style={{ height: '500px' }}
              notMerge={true}
              lazyUpdate={true}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <ReactEchartsCore
              echarts={echarts}
              option={getNewOptions()}
              style={{ height: '500px' }}
              notMerge={true}
              lazyUpdate={true}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
