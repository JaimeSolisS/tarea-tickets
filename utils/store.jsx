const tasks = [
  {
    id: "task-1",
    title: "Task 1",
    description: "Description of task 1",
    requester: "John Doe",
    assingee: "None",
    date: "15/10/2020",
    status: "open",
  },
  {
    id: "task-2",
    title: "Task 2",
    description: "Description of task 2",
    requester: "Victor Wayne",
    assingee: "None",
    date: "15/10/2020",
    status: "open",
  },
  {
    id: "task-3",
    title: "Task 3",
    description: "Description of task 3",
    requester: "Jane Doe",
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
    "list-2": {
      id: "list-2",
      title: "In progress",
      tasks,
    },
    "list-3": {
      id: "list-3",
      title: "Done",
      tasks,
    },
  },
  listIds: ["list-1", "list-2", "list-3"],
};

export default data;
