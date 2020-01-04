import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, MenuItem, Paper } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { requestFetchIssueById } from '../store/actions';

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

export default function EditIssue() {
  const classes = useStyles();
  const { id } = useParams();
  const issue = useSelector((state) =>
    state.issues.items.find((x) => x.id === parseInt(id))
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestFetchIssueById(id));
  }, [dispatch, id]);

  return (
    <Paper className={classes.content}>
      <Formik
        initialValues={{
          id: issue.id,
          name: issue.name,
          status: issue.status,
          isNew: issue.isNew ? 0 : 1,
          createdDate: issue.createdDate,
          createdBy: issue.createdBy
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={classes.root}>
            <div>
              <Field
                name="id"
                type="text"
                label="Issue Id"
                component={TextField}
                margin="normal"
                disabled
              />
            </div>
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
                type="text"
                label="Created Date"
                component={TextField}
                margin="normal"
                disabled
              />
            </div>
            <div>
              <Field
                name="createdBy"
                type="text"
                label="Created By"
                component={TextField}
                margin="normal"
                disabled
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
