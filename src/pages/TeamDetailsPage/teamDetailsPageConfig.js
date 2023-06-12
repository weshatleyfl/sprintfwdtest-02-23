export const columns = [
  {
    heading: "Members",
    indexKey: "first_name",
    render: (cell) => {
      return `${cell.first_name} ${cell.last_name}`;
    },
  },
];
