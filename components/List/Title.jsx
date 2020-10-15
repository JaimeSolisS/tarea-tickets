import React from "react";
import styled from "styled-components";
import { InputBase, Typography } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyle = makeStyles((theme) => ({
  editableTitle: {
    flexGrow: 1,
  },
}));

const StyledEditableContainer = styled.div`
   {
    margin: 10px;
    display: flex;
  }
`;

const StyledInput = styled.input`
   {
    margin: 10px;
    '&:focus': {
        background: '#ddd';
    }
`;

export default function Title() {
  const [open, setOpen] = useState(false);
  const classes = useStyle();
  return (
    <div>
      {open ? (
        <div>
          <InputBase
            value="Todo"
            inputProps={{ StyledInput }}
            fullWidth
            onBlur={() => setOpen(!open)}
          />
        </div>
      ) : (
        <StyledEditableContainer>
          <Typography
            onClick={() => setOpen(!open)}
            className={classes.editableTitle}
          >
            Todo
          </Typography>
          <MoreHorizIcon />
        </StyledEditableContainer>
      )}
    </div>
  );
}
