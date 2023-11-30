interface Props {
  text: String;
  width: String;
  height: String;
  textColor: String;
  textSize: String;
  bgColor: String;
  handleClick: () => void;
}

const Button = ({
  text,
  width,
  height,
  textColor,
  textSize,
  bgColor,
  handleClick,
}: Props) => {
  return (
    <button
      className={`${width} ${height} ${textColor} ${textSize} m-1 text-lg font-sans font-bold rounded-2xl ${bgColor} hover:bg-gold-tahiti`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
