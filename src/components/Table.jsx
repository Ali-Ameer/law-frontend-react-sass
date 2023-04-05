import React, { useState } from "react";

export const Table = () => {
  const [rows, setRows] = useState([
    { id: 1, quantity: "", storage: "", row: "", dixn: "" },
  ]);

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      quantity: "",
      storage: "",
      row: "",
      dixn: "",
    };
    setRows([...rows, newRow]);
  };

  const handleDeleteRow = (id) => {
    const newRows = rows.filter((row) => row.id !== id);
    setRows(newRows);
  };

  const handleInputChange = (event, id) => {
    const { name, value } = event.target;
    const newRows = rows.map((row) =>
      row.id === id ? { ...row, [name]: value } : row
    );
    setRows(newRows);
  };

  const dropdownOptions = [
    "test data",
    "fake data 2",
    "some text 3",
    "one tow three",
    "just some fake data",
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Quantity</th>
          <th>Storage</th>
          <th>Row</th>
          <th>Dixon</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td>
              <div className="deleteAndInput">
                <button onClick={() => handleDeleteRow(row.id)}>Delete</button>
                <input
                  type="text"
                  name="quantity"
                  value={row.quantity}
                  onChange={(e) => handleInputChange(e, row.id)}
                />
              </div>
            </td>
            <td>
              {/* you can add any value or choose value from dropdown  */}
              <input
                type="text"
                name="storage"
                value={row.storage}
                onChange={(e) => handleInputChange(e, row.id)}
                list="storageOptions"
                autoComplete="on"
              />
              <datalist id="storageOptions">
                {dropdownOptions.map((option) => (
                  <option key={option} value={option} />
                ))}
              </datalist>
            </td>

            <td>
              <input
                type="text"
                name="row"
                value={row.row}
                onChange={(e) => handleInputChange(e, row.id)}
                list="rowOptions"
              />
              <datalist id="rowOptions">
                {dropdownOptions.map((option) => (
                  <option key={option} value={option} />
                ))}
              </datalist>
            </td>
            <td>
              <input
                type="text"
                name="dixn"
                value={row.dixn}
                onChange={(e) => handleInputChange(e, row.id)}
                list="dixnOptions"
              />
              <datalist id="dixnOptions">
                {dropdownOptions.map((option) => (
                  <option key={option} value={option} />
                ))}
              </datalist>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="5">
            <button onClick={handleAddRow}>Add Row</button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
