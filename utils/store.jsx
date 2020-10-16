const tasks = [
  {
    id: "task-1",
    title: "Task 1",
    requester: "A",
    assingee: "None",
    date: "15/10/2020",
    status: "open",
  },
  {
    id: "task-2",
    title: "Task 2",
    requester: "A",
    assingee: "None",
    date: "15/10/2020",
    status: "open",
  },
  {
    id: "task-3",
    title: "Task 3",
    requester: "A",
    assingee: "None",
    date: "15/10/2020",
    status: "open",
  },
];

const data = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "Todo",
      tasks,
    },
  },
  listIds: ["list-1"],
};

export default data;
