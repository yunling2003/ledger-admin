import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, MenuItem, Paper } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addIssue } from '../store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: 500
    }
  },
  submit: {
    marginTop: 40
  },
  content: {
    padding: 20
  }
}));

export default function AddIssue() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Paper className={classes.content}>
      <Formik
        initialValues={{
          name: '',
          status: '0',
          isNew: '0',
          createdDate: '',
          createdBy: ''
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(100, 'Must be 100 characters or less')
            .required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          let issue = {
            name: values.name,
            status: parseInt(values.status),
            isNew: values.isNew === '0' ? true : false,
            createdDate: values.createdDate,
            createdBy: values.createdBy
          };
          dispatch(addIssue(issue));
          setSubmitting(false);
          history.push('/issues');
        }}
      >
        {({ isSubmitting }) => (
          <Form className={classes.root}>
            <div>
              <Field
                name="name"
                type="text"
                label="Issue Name"
                component={TextField}
                margin="normal"
              />
            </div>
            <div>
              <Field
                select
                name="status"
                type="text"
                label="Select Status"
                component={TextField}
                margin="normal"
              >
                <MenuItem key="0" value="0">
                  started
                </MenuItem>
                <MenuItem key="1" value="1">
                  in progress
                </MenuItem>
                <MenuItem key="2" value="2">
                  done
                </MenuItem>
              </Field>
            </div>
            <div>
              <Field
                select
                name="isNew"
                type="text"
                label="Select Process Status"
                component={TextField}
                margin="normal"
              >
                <MenuItem key="0" value="0">
                  true
                </MenuItem>
                <MenuItem key="1" value="1">
                  false
                </MenuItem>
              </Field>
            </div>
            <div>
              <Field
                name="createdDate"
                type="date"
                label="Created Date"
                component={TextField}
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </div>
            <div>
              <Field
                name="createdBy"
                type="text"
                label="Created By"
                component={TextField}
                margin="normal"
              />
            </div>
            <div className={classes.submit}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Paper>
  );
}
