import Link from "next/link";

const Button = ({ text, background, link }) => {
  return (
    <Link href={link}>
      <p
        className={`inline-block text-base font-semibold text-center px-4 py-4 ${background}`}
      >
        {text}
      </p>
    </Link>
  );
};

export default Button;
