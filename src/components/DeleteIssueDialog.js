import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DeleteIssueDialog(props) {
  const { issueId, open, onDeleteIssue, onClose } = props;

  const handleClickYes = () => {
    onDeleteIssue(issueId);
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          {'Are you sure delete this issue?'}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClickYes} color="primary">
            Yes
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DeleteIssueDialog.propTypes = {
  issueId: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onDeleteIssue: PropTypes.func.isRequired
};
