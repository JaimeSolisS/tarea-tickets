import Head from "next/head";
import styles from "../styles/Home.module.css";
import List from "../components/List/List";
import store from "../utils/store";
import { useState } from "react";
import storeApi from "../utils/storeApi";
import { v4 as uuid } from "uuid";

export default function Home() {
  const [data, setData] = useState(store);
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
  return (
    <storeApi.Provider value={{ addMoreTask }}>
      <div>
        {data.listIds.map((listId) => {
          const list = data.lists[listId];

          return <List list={list} key={listId} />;
        })}
      </div>
    </storeApi.Provider>
  );
}
