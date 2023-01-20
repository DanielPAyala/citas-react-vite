const Error = ({children}) => {
  return (
    <div className="bg-red-800 text-white p-3 text-center font-bold uppercase rounded-md mb-4">
      {children}
    </div>
  );
};

export default Error;
