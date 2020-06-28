import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import {
  Button,
  Modal,
  Grid,
  TextField,
  IconButton
} from '@material-ui/core';

import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import CloseIcon from '@material-ui/icons/Close';

import {
  ACTION_TYPES,
  addCard,
  deleteCard,
  updateCard
} from '../actions';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    maxWidth: '90vw',
    backgroundColor: '#fff',
    padding: 16,
  },
  textfield: {
    marginBottom: 16,
    width: 220
  },
  grid: {
    display: 'flex',
    paddingTop: 16
  },
  closeButton: {
    position: 'absolute',
    right: 8,
    top: 8,
  },
});

const TrelloModal = (props) => {
  const classes = useStyles();
  const { open, setOpen, cardTitle, cardText, type } = props;

  const [title, setTitle] = useState(cardTitle ? cardTitle : '');
  const [text, setText] = useState(cardText ? cardText : '');

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleAddCard = () => {
    const { listID, addCard } = props;

    if (title && text) {
      setTitle('');
      setText('');
      addCard(listID, title, text);
      handleCloseModal();
    }
  };

  const handleDeleteCard = () => {
    const { listID, cardID, deleteCard } = props;
    deleteCard(listID, cardID);
  };

  const handleUpdateCard = () => {
    const { listID, cardID, updateCard } = props;
    updateCard(listID, cardID, title, text);
    handleCloseModal();
  };

  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description">
      <Grid
        container
        direction="column"
        className={classes.root}>
        <TextField
          className={classes.textfield}
          placeholder="Enter a card title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          error={title === ''}
          label="Title"
          helperText={title === '' ? 'Enter a card title!' : ' '}/>

        <IconButton
          className={classes.closeButton}
          onClick={handleCloseModal}>
          <CloseIcon/>
        </IconButton>

        <TextField
          placeholder="Enter a card text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          helperText={text === '' ? 'Enter a card text!' : ' '}
          error={text === ''}
          label="Text"
          variant="outlined"
          rowsMax={10}
          multiline
          fullWidth/>

        <Grid
          container
          justify="space-between"
          alignItems="center"
          className={classes.grid}>
          <Button
            onClick={handleDeleteCard}
            variant="text"
            color="secondary"
            startIcon={<DeleteIcon/>}
            disabled={type === ACTION_TYPES.ADD_CARD}>
            Delete
          </Button>

          <Grid item>
            <Button
              onClick={handleCloseModal}
              variant="text"
              startIcon={<CancelIcon/>}>
              Cancel
            </Button>

            <Button
              onClick={type === ACTION_TYPES.UPDATE_CARD ? handleUpdateCard : handleAddCard}
              variant="text"
              color="primary"
              startIcon={<SaveIcon/>}
              disabled={title === '' || text === ''}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCard: (listID, title, text) => dispatch(addCard(listID, title, text)),
  deleteCard: (listID, cardID) => dispatch(deleteCard(listID, cardID)),
  updateCard: (listID, cardID, title, text) => dispatch(updateCard(listID, cardID, title, text))
});

export default connect(null, mapDispatchToProps)(TrelloModal);
