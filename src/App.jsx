import { useState } from 'react'

function App() {
  const [rows, setRows] = useState([
    { id: 1, quantity: '', storage: '', row: '', dixn: '' },
  ]);

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      quantity: '',
      storage: '',
      row: '',
      dixn: '',
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

  const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];


  return (
    <table>
      <thead>
        <tr>
          <th>Quantity</th>
          <th>Storage</th>
          <th>Row</th>
          <th>Dixn</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td>
              <input
                type="text"
                name="quantity"
                value={row.quantity}
                onChange={(e) => handleInputChange(e, row.id)}
              />
            </td>
            <td>
              <input
                type="text"
                name="storage"
                value={row.storage}
                onChange={(e) => handleInputChange(e, row.id)}
                list="storageOptions"
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
            <td>
              <button onClick={() => handleDeleteRow(row.id)}>Delete</button>
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

export default App
