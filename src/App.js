import { useState } from "react";
import "./App.css";
import { Table } from "./compenent/Table";
import { Modal } from "./compenent/Model";

function App() {
  //model
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      id:"1",
      name: "Santhosh",
      college: "Government Arts College,Karur",
      dob: "2023-01-06",
      department:'computer Science',
      first_sem:"55",
      second_sem:"54",
      third_sem:"45",
      total:"154",
      isActive: false
      
    }
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, id) => id !== targetIndex));
  };

  const handleModal = () => {
    setModalOpen(!modalOpen)
  }
  const handleEditRow = (id) => {
    setRowToEdit(id);

    handleModal()
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null ? 
    setRows([...rows, newRow]) 
    : setRows(
          rows.map((currRow, id) => {
            if (id !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="App">
       <button onClick={handleModal} className="btn">ADD +</button>
       <Table  rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
     
      {modalOpen && (
        <Modal
          closeModal={handleModal}
          onSubmit={handleSubmit}
          actions={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default App;
