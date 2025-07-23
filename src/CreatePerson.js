import {useNavigate} from 'react-router-dom';

function CreatePerson() {
    const navigate = useNavigate();
    return (
        <div className="container mt-5">
            <h2>Crear Persona</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Edad</label>
                    <input type="number" className="form-control" />
                </div>
                <button className="btn btn-success">Guardar</button>
                <button className="btn btn-secondary ms-2" 
                onClick={() => navigate('/')}>Cancelar</button>
            </form>
        </div>
    )
}

export default CreatePerson;