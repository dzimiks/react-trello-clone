import React, { useState } from 'react';

import AddIcon from '@material-ui/icons/Add';
import { Button, Grid } from '@material-ui/core';
import { ACTION_TYPES } from '../actions';

import TrelloModal from './TrelloModal';

const TrelloActionButton = (props) => {
  const { listID, cardsLength } = props;
  const [open, setOpen] = useState(false);
  const buttonText = cardsLength > 0 ? 'Add another card' : 'Add a card';

  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <Grid item>
      <Button
        color="primary"
        variant="text"
        startIcon={<AddIcon/>}
        onMouseDown={handleOpenModal}>
        {buttonText}
      </Button>

      <TrelloModal
        listID={listID}
        open={open}
        setOpen={setOpen}
        type={ACTION_TYPES.ADD_CARD}
      />
    </Grid>
  );
};

export default TrelloActionButton;
