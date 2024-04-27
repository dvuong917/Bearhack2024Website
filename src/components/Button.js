const Button = ({ text, background }) => {
  return (
    <div
      className={`inline-block text-1xl text-center px-2 py-2 ${background}`}
    >
      {text}
    </div>
  );
};

export default Button;
