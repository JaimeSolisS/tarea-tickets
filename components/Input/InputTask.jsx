import React, { useContext, useState } from "react";
import { Paper, InputBase, Button, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles, fade } from "@material-ui/core/styles";
import styled from "styled-components";
import storeApi from "../../utils/storeApi";

const useStyle = makeStyles((theme) => ({
  task: {
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(1),
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}));

const StyledButton = styled.button`
  &&{
    background: "#5AAC44",
    color: "#fff",
    "&:hover": {
      background: fade("#5AAC44", 0.75),
    }
  }
`;
export default function InputTask({ setOpen, listId }) {
  const classes = useStyle();
  const handleOnChange = (e) => {
    setTaskTitle(e.target.value);
  };
  const [taskTitle, setTaskTitle] = useState("");
  const handleBtn = () => {
    addMoreTask(taskTitle.listId);
    setTaskTitle("");
    setOpen(false);
  };
  const { addMoreTask } = useContext(storeApi);

  const handleBlur = () => {
    setOpen(false);
    setTaskTitle("");
  };

  return (
    <div>
      <div>
        <Paper className={classes.task}>
          <InputBase
            onChange={handleOnChange}
            multiline
            onBlur={handleBlur}
            fullWidth
            inputProps={{
              className: classes.input,
            }}
            value={taskTitle}
            placeholder="Enter a name of this task"
          />
        </Paper>
      </div>
      <div>
        <StyledButton onClick={handleBtn}> Add Task </StyledButton>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}
