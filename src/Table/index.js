import Form from "../Form";
import uuid from 'react-uuid';
import { useState } from "react";

const Table = () => {
  const [table, setTable] = useState([]);

  const onAddRow = (form) => {
    let newTable = [];

    let exists = false;

    table.forEach((item) => {
      if (item.date === form.date) {
        exists = true;
      }
    });

    if (exists) {
      newTable = table.map((item) => {
        if (item.date === form.date) {
          item.km = parseInt(form.km) + parseInt(item.km);
        }
        return item;
      });
    } else {
      newTable = [
        ...table,
        {
          id: uuid(),
          date: form.date,
          km: form.km,
        },
      ];
    }

    newTable.sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0));

    setTable(newTable);
  };

  const onDeleteRow = (id) => {
    const newTable = table.filter((item) => item.id !== id);

    setTable(newTable);
  };

  const onEditRow = (e) => {
    console.log(e);
  };

  return (
    
    <div style={{width:'500px', margin:'10px 60px' }}>
      <Form onAddRow={onAddRow} />
      <div className="table" style={{textAlign:"center", margin:'20px auto', borderRadius:"15px"}}>
        <table>
        <thead>
              <tr className = "row" style={{border:"none"}}>
                <th
                  scope="col"
                  align="center"
                  className = "col"
                  style={{width:"120px"}}
                
                >
                  Дата
                </th>
                <th
                  scope="col"
                  align="center"
                  className = "col"
                  style={{width:"120px"}}
                
                >
                  Расстояние
                </th>
                <th
                  scope="col"
                  align="center"
                  className = "col"
                  style={{width:"120px"}}
                 
                >
                  Изменить
                </th>
                <th
                  scope="col"
                  align="center"
                  className = "col"
                  style={{width:"120px"}}
                
                >
                  Удалить
                </th>
              </tr>
            </thead>
          <tbody>
            {table.map((item) => (
              <tr  className = "row" style={{display:'flex', border:"none"}}key={item.id}>
                <td  className = "col" style={{width:"120px"}}>{item.date}</td>
                <td  className = "col" style={{width:"120px"}}>{item.km} км</td>
                <td  className = "col" style={{width:"120px"}}>
                  <button onClick={onEditRow}>edit</button>
                </td>
                <td  className = "col" style={{width:"120px"}}>
                  <button onClick={() => onDeleteRow(item.id)}>x</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      
  );
};

export default Table;
