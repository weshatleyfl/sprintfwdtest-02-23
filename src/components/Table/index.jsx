import React from "react";
import TableHeadItem from "./components/TableHeadItem";
import TableRow from "./components/TableRow";

import "./table.css";

const Table = ({ data, columns }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((cell, index) => (
            <TableHeadItem key={index} cell={cell} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((cell, index) => (
          <TableRow key={cell.id} cell={cell} column={columns} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
