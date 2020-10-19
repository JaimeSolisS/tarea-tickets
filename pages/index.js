import Head from "next/head";
import styles from "../styles/Home.module.css";
import List from "../components/List/List";
import store from "../utils/store";
import { useState } from "react";
import storeApi from "../utils/storeApi";
import { v4 as uuid } from "uuid";
import InputContainer from "../components/Input/InputContainer";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function Home() {
  const [data, setData] = useState(store);
  const classes = useStyle();
  const addMoreTask = (title, listId) => {
    const newTaskId = uuid();
    const newTask = {
      id: newTaskId,
      title,
    };

    const list = data.lists[listId];
    list.tasks = [...list.tasks, newTask];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      tasks: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };
  return (
    <storeApi.Provider value={{ addMoreTask, addMoreList }}>
      <div className={classes.root}>
        {data.listIds.map((listId) => {
          const list = data.lists[listId];

          return <List list={list} key={listId} />;
        })}
        <InputContainer type="list"> </InputContainer>
      </div>
    </storeApi.Provider>
  );
}
