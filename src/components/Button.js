const Button = ({ text, background }) => {
  return (
    <div
      className={`inline-block text-base font-semibold text-center px-4 py-4 ${background}`}
    >
      {text}
    </div>
  );
};

export default Button;
