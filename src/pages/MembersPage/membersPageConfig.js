
//options heading, indexKey:itemPath, render:()=>el

export const columns = [
  {
    heading: "Members",
    indexKey: "members",
    render: (cell) => {
      return `${cell.first_name} ${cell.last_name}`;
    },
  },
  {
    heading: "Team",
    indexKey: "team",
    render: (cell) => {
      return <a href={`team/${cell.team.id}`}>{cell.team.name}</a>;
    },
  },
];
