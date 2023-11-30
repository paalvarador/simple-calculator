interface Props {
  text: string;
}

const LedResults = ({ text = "=0" }: Props) => {
  return (
    <div className="mt-2 mr-5 mb-10 text-right font-light text-3xl">{text}</div>
  );
};

export default LedResults;
