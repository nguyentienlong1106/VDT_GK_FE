import React from "react";
import "./Table.css";

interface Student {
  _id: string;
  name: string;
  sex: string;
  university: string;
  // Add other properties as needed
}

interface TableProps {
  data: Student[];
  deleteRow: (index: number) => void;
  editRow: (index: number) => void;
}

export const Table: React.FC<TableProps> = ({ data, deleteRow, editRow }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>TT</th>
          <th>FullName</th>
          <th>Sex</th>
          <th>University</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>{val.name}</td>
              <td>{val.sex}</td>
              <td>{val.university}</td>
              <td>
                <span className="actions">
                  <button className="btn" onClick={() => editRow(key)}>
                    Edit
                  </button>

                  <button className="btn" onClick={() => deleteRow(key)}>
                    Delete
                  </button>
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
