import React from "react";
import { Paper } from "@material-ui/core";
import { useState } from "react";
import Window from "./Window";

import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  task: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
}));

export default function Task({ task }) {
  const classes = useStyle();

  const [show, setShow] = useState(false);
  const onOpen = () => setShow(true);
  const onClose = () => setShow(false);

  return (
    <div>
      <Paper className={classes.task} onClick={onOpen}>
        {task.title}
      </Paper>
      <Window task={task} onClose={onClose} show={show}></Window>
    </div>
  );
}
