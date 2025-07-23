import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function ListPerson() {
    const [listPerson, setListPerson] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://3.91.252.25:5000/api/person")
    .then(response => {
      console.log("datos del api", response.data);
      setListPerson(response.data)
    }).catch(error => {
      console.error("No se puedo obtener datos", error);
    })
  }, [])


  return (
    <div className='container mt-5'>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h2>Listado de personas</h2>
        <button className='btn btn-primary' 
          onClick={() => navigate("/create")}
          >
            Crear persona
        </button>
      </div>
      <table className='table table-striped table-bordered'>
          <thead className='table-dark'>
            <tr  >
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
            </tr>
          </thead>
          <tbody>
            {listPerson.map((person) => (
               <tr key={person._id}>
                <td>{person.name}</td>
                <td>{person.lastname}</td>
                <td>{person.age}</td>
              </tr>
            ))}
           
          </tbody>
      </table>
    </div>
  );
}

export default ListPerson;