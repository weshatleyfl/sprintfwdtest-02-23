import React, { useCallback } from "react";

const TableRow = ({ cell, column }) => {
  const renderItemWithCheckPaths = useCallback((columnItem, cell) => {
    const { render, indexKey } = columnItem;

    return <td key={indexKey}>{ render ? render(cell) : cell[indexKey]}</td>;
  }, []);

  return (
    <tr>
      {column.map((columnItem) => {
        return renderItemWithCheckPaths(columnItem, cell);
      })}
    </tr>
  );
};

export default TableRow;
