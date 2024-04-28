import Link from "next/link";

const Button = ({ text, background, link }) => {
  return (
    <Link href={link}>
      <p
        className={`flex text-base font-semibold text-center p-4  flex-row w-fit ${background} hover:cursor-pointer hover:bg-sky-400 rounded-full`}
      >
        {text}
      </p>
    </Link>
  );
};

export default Button;
