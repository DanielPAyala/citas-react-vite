const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  return (
    <div className="bg-white shadow-md m-3 px-5 py-10 rounded-lg">
      <p className="font-bold text-gray-700 uppercase mb-3">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold text-gray-700 uppercase mb-3">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold text-gray-700 uppercase mb-3">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold text-gray-700 uppercase mb-3">
        Fecha Alta: <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold text-gray-700 uppercase mb-3">
        Sintomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="mt-10 flex justify-between">
        <button
          className="py-2 px-10 rounded-md bg-yellow-400 hover:bg-yellow-500 text-white font-bold"
          type="button"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 rounded-md bg-red-600 hover:bg-red-700 text-white font-bold"
          type="button"
          onClick={() => eliminarPaciente(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
