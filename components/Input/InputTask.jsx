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
export default function InputTask({ setOpen, listId, type }) {
  const classes = useStyle();
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const [title, setTitle] = useState("");
  const handleBtn = () => {
    if (type === "task") {
      addMoreTask(title.listId);
      setTitle("");
      setOpen(false);
    } else {
      addMoreTask(title);
      setTitle("");
      setOpen(false);
    }
  };
  const { addMoreTask, addMoreList } = useContext(storeApi);

  const handleBlur = () => {
    setOpen(false);
    //setTaskTitle("");
  };

  return (
    <div>
      <div>
        <Paper className={classes.task}>
          <InputBase
            onChange={handleOnChange}
            multiline
            onBlur={() => setOpen(false)}
            fullWidth
            inputProps={{
              className: classes.input,
            }}
            value={title}
            placeholder={
              type === "task"
                ? "Enter a title of this task"
                : "Enter list Title"
            }
          />
        </Paper>
      </div>
      <div>
        <StyledButton onClick={handleBtn}>
          {" "}
          {type === "task" ? "add Task" : "add List"}{" "}
        </StyledButton>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}
