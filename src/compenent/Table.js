import React, { useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./table.css";
import "./Toggle.css"


export const Table = ({ rows = [], deleteRow, editRow }) => {
  const [isCheckedArray, setIsCheckedArray] = useState(rows.map(() => false));
  
  const calculatePercentage = (row) => {
    const{first_sem, second_sem, third_sem} =  row || {}
    const totalScore = parseInt(first_sem) +    parseInt(second_sem) + parseInt(third_sem);
    const  maxPossibleScore = 100; 
    return ((totalScore / (3 * maxPossibleScore)) * 100).toFixed(1); 
  };

  const handleToggle = (index) => {

      const  updatedIsCheckedArray= [...isCheckedArray];

         updatedIsCheckedArray[index] = !updatedIsCheckedArray[index];

     setIsCheckedArray(updatedIsCheckedArray);

  };

  const getActive = () => {
    return isCheckedArray.filter((value) => value).length
  }
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <td>ID</td>
            <th>Name</th>
            <th>College</th>
            <th>DOB</th>
            <th>Department</th>
            <th>1st Sem</th>
            <th>2nd Sem</th>
            <th>3rd Sem</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows?.length > 0 ? (
            rows.map((row, index) => {
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{row.name}</td>
                  <td>{row.college}</td>
                  <td>{row.dob}</td>
                  <td>{row.department}</td>
                  <td>{row.first_sem}</td>
                  <td>{row.second_sem}</td>
                  <td>{row.third_sem}</td>
                  <td>


                  {calculatePercentage(row)}%
                  </td>
                  <td>
                    <div>

                      <label>
                        <input
                          type="checkbox"
                          checked={isCheckedArray[index]}
                          onChange={() => handleToggle(index)}
                        />{" "}


                        <span className="slider"></span>


                      </label>
                      {isCheckedArray[index] ? <p>Active</p> : <p>Inactive</p>}
                    </div>
                  </td>
                  <td className="fit">
                    <span className="actions">
                      <BsFillTrashFill
                        className="delete-btn"
                        onClick={() => alert("Do you want Delete ?", deleteRow(index))}
                      />


                      <BsFillPencilFill className="edit-btn" onClick={() => editRow(index)} />
                    </span>
                  </td>
                </tr>
              );
            })
          ) : (
            <h1 className="no_data">No Data</h1>
          )}
        </tbody>
      </table>

      <div className="card_container">
        <div className="card">
          <h3 className="h3">Active : {getActive()}</h3>
        </div>


        <div className="card card-2">
          <h3 className="h3">Inactive : {isCheckedArray.filter((value) => !value).length}</h3>
        </div>
      </div>
    </div>
  );
};
