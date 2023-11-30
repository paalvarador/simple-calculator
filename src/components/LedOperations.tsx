interface Props {
  text: String;
}

const LedOperations = ({ text = "0" }: Props) => {
  return (
    <div className="mt-5 mr-5 ml-5 text-xl text-right text-gray font-light">
      {text}
    </div>
  );
};

export default LedOperations;
