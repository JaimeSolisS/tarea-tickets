import Head from "next/head";
import styles from "../styles/Home.module.css";
import List from "../components/List/List";
import store from "../utils/store";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(store);
  return (
    <div>
      {data.listIds.map((listId) => {
        const list = data.lists[listId];

        return <List list={list} key={listId} />;
      })}
    </div>
  );
}
