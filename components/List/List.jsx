import React from "react";
import styled from "styled-components";
import { CssBaseline, Paper, Typography } from "@material-ui/core";
import Title from "./Title";
import Task from "./Task";
import InputContainer from "../Input/InputContainer";

const StyledDiv = styled.div`
  & {
    background-color: #ebecf0;
    width: 300px;
    padding: 10px;
    margin-left: 10px;
  }
`;

export default function List({ list }) {
  return (
    <div>
      <StyledDiv>
        <Title title={list.title}></Title>
        {list.tasks.map((task) => (
          <Task key={task.id} task={task}></Task>
        ))}
        <InputContainer listId={list.id}></InputContainer>
      </StyledDiv>
    </div>
  );
}
