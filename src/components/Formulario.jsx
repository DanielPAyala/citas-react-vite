import { useEffect, useState } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random =
      Math.random().toString(36).substring(2) + Date.now().toString(36);
    return random;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    const objPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      objPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        objPaciente.id === paciente.id ? objPaciente : pacienteState
      );
      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
      objPaciente.id = generarId();
      setPacientes([...pacientes, objPaciente]);
    }

    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-xl mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        className="bg-white shadow-md m-3 rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="mascota"
            placeholder="Nombre de la mascota"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre propietario
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="propietario"
            placeholder="Nombre del propietario"
            type="text"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="email"
            placeholder="Email del propietario"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="alta"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Síntomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="sintomas"
            placeholder="Describa los síntomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>
        <input
          className="bg-indigo-600 w-full hover:bg-indigo-700 cursor-pointer text-white p-3 uppercase font-bold transition-all"
          type="submit"
          value={paciente.id ? "Editar paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
