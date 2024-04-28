const Button = ({ text, background }) => {
  return (
    <p
      className={`inline-block text-base font-semibold text-center px-4 py-4 ${background}`}
    >
      {text}
    </p>
  );
};

export default Button;
