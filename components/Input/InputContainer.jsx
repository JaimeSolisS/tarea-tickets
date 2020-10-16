import React, { useState } from "react";
import { Paper, Typography, Collapse } from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import InputCard from "./InputTask";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    width: "300px",
  },
  addTask: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    background: "#EBECF0",
    "&:hover": {
      backgroundColor: fade("#000", 0.25),
    },
  },
}));

export default function InputContainer({ listId, type }) {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.addTask}
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography>
            {type === "task" ? "+ Add a Card" : "+ Add another List"}
          </Typography>
        </Paper>
      </Collapse>
    </div>
  );
}
