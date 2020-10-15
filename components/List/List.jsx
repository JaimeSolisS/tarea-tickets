import React from "react";
import styled from "styled-components";
import { CssBaseline, Paper, Typography } from "@material-ui/core";
import Title from "./Title";
import Task from "./Task";

const StyledDiv = styled.div`
  & {
    background-color: #ebecf0;
    width: 300px;
    padding: 10px;
    margin-left: 10px;
  }
`;

export default function List() {
  return (
    <div>
      <StyledDiv>
        <Title></Title>
        <Task></Task>
        <Task></Task>
        <Task></Task>
      </StyledDiv>
    </div>
  );
}
