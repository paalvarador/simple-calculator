import { SetStateAction, useState } from "react";
import Button from "./Button";
import LedOperations from "./LedOperations";
import { Calculator } from "../classes/Calculator";
import LedResults from "./LedResults";

const Container = () => {
  let calculator = new Calculator(0);
  let [ledOperation, setLedOperation] = useState("0");
  let [ledResult, setLedResult] = useState("0");

  const handleClick = (value: SetStateAction<String>) => {
    console.log(`ledOperation: ${ledOperation}`);
    console.log(`value = ${value}`);

    if (ledOperation === "0") {
      switch (value) {
        case "1":
          ledOperation = "1";
          break;
        case "2":
          ledOperation = "2";
          break;
        case "3":
          ledOperation = "3";
          break;
        case "4":
          ledOperation = "4";
          break;
        case "5":
          ledOperation = "5";
          break;
        case "6":
          ledOperation = "6";
          break;
        case "7":
          ledOperation = "7";
          break;
        case "8":
          ledOperation = "8";
          break;
        case "9":
          ledOperation = "9";
          break;
        case "Ac":
          ledOperation = "0";
          break;
        case "=":
          ledResult = calculator
            .evaluteExpression(ledOperation.toString())
            .toString();
          break;
      }

      setLedOperation(ledOperation);
      setLedResult(ledResult);
    } else {
      switch (value) {
        case "0":
          ledOperation = ledOperation + value;
          break;
        case "1":
          ledOperation = ledOperation + value;
          break;
        case "2":
          ledOperation = ledOperation + value;
          break;
        case "3":
          ledOperation = ledOperation + value;
          break;
        case "4":
          ledOperation = ledOperation + value;
          break;
        case "5":
          ledOperation = ledOperation + value;
          break;
        case "6":
          ledOperation = ledOperation + value;
          break;
        case "7":
          ledOperation = ledOperation + value;
          break;
        case "8":
          ledOperation = ledOperation + value;
          break;
        case "9":
          ledOperation = ledOperation + value;
          break;
        case "Ac":
          ledOperation = "0";
          break;
        case "+":
          ledOperation = ledOperation + value;
          break;
        case "-":
          ledOperation = ledOperation + value;
          break;
        case "*":
          ledOperation = ledOperation + value;
          break;
        case "/":
          ledOperation = ledOperation + value;
          break;
        case ".":
          ledOperation = ledOperation + value;
          break;
        case "=":
          ledResult = calculator
            .evaluteExpression(ledOperation.toString())
            .toString();
          ledOperation = "0";
          break;
        case "␡":
          if (ledOperation.length > 1) {
            ledOperation = ledOperation.substring(0, ledOperation.length - 1);
          } else {
            ledOperation = "0";
          }

          break;
      }

      setLedOperation(ledOperation);
      setLedResult(ledResult);
    }
  };

  return (
    <div className="pt-1 pb-5 mt-5 mb-5 max-w-xs mx-auto bg-white-ghots rounded-lg shadow-lg bg-gradient-to-b from-white-ghots to-white-ghots">
      <LedOperations text={ledOperation} />
      <LedResults text={ledResult} />
      <div className="flex justify-between mr-5 ml-5">
        <Button
          text="Ac"
          width="w-14"
          height="h-14"
          textColor="text-gray"
          textSize="text-lg"
          bgColor="bg-white"
          handleClick={() => handleClick("Ac")}
        />
        <Button
          text="␡"
          width="w-14"
          height="h-14"
          textColor="text-gray"
          textSize="text-lg"
          bgColor="bg-white"
          handleClick={() => handleClick("␡")}
        />
        <Button
          text="/"
          width="w-14"
          height="h-14"
          textColor="text-blue-dodger"
          textSize="text-lg"
          bgColor="bg-blue-light"
          handleClick={() => handleClick("/")}
        />
        <Button
          text="*"
          width="w-14"
          height="h-14"
          textColor="text-blue-dodger"
          textSize="text-lg"
          bgColor="bg-blue-light"
          handleClick={() => handleClick("*")}
        />
      </div>
      <div className="flex justify-between mr-5 ml-5">
        <Button
          text="7"
          width="w-14"
          height="h-14"
          textColor="text-gray"
          textSize="text-lg"
          bgColor="bg-white"
          handleClick={() => handleClick("7")}
        />
        <Button
          text="8"
          width="w-14"
          height="h-14"
          textColor="text-gray"
          textSize="text-lg"
          bgColor="bg-white"
          handleClick={() => handleClick("8")}
        />
        <Button
          text="9"
          width="w-14"
          height="h-14"
          textColor="text-gray"
          textSize="text-lg"
          bgColor="bg-white"
          handleClick={() => handleClick("9")}
        />
        <Button
          text="-"
          width="w-14"
          height="h-14"
          textColor="text-blue-dodger"
          textSize="text-lg"
          bgColor="bg-blue-light"
          handleClick={() => handleClick("-")}
        />
      </div>
      <div className="flex justify-between mr-5 ml-5">
        <Button
          text="4"
          width="w-14"
          height="h-14"
          textColor="text-gray"
          textSize="text-lg"
          bgColor="bg-white"
          handleClick={() => handleClick("4")}
        />
        <Button
          text="5"
          width="w-14"
          height="h-14"
          textColor="text-gray"
          textSize="text-lg"
          bgColor="bg-white"
          handleClick={() => handleClick("5")}
        />
        <Button
          text="6"
          width="w-14"
          height="h-14"
          textColor="text-gray"
          textSize="text-lg"
          bgColor="bg-white"
          handleClick={() => handleClick("6")}
        />
        <Button
          text="+"
          width="w-14"
          height="h-14"
          textColor="text-blue-dodger"
          textSize="text-lg"
          bgColor="bg-blue-light"
          handleClick={() => handleClick("+")}
        />
      </div>
      <div className="flex justify-between mr-5 ml-5">
        <Button
          text="1"
          width="w-14"
          height="h-14"
          textColor="text-gray"
          textSize="text-lg"
          bgColor="bg-white"
          handleClick={() => handleClick("1")}
        />
        <Button
          text="2"
          width="w-14"
          height="h-14"
          textColor="text-gray"
          textSize="text-lg"
          bgColor="bg-white"
          handleClick={() => handleClick("2")}
        />
        <Button
          text="3"
          width="w-14"
          height="h-14"
          textColor="text-gray"
          textSize="text-lg"
          bgColor="bg-white"
          handleClick={() => handleClick("3")}
        />
        <Button
          text="."
          width="w-14"
          height="h-14"
          textColor="text-gray"
          textSize="text-lg"
          bgColor="bg-white"
          handleClick={() => handleClick(".")}
        />
      </div>
      <div className="flex justify-between mr-5 ml-5">
        <Button
          text="0"
          width="w-32"
          height="h-14"
          textColor="text-gray"
          textSize="text-lg"
          bgColor="bg-white"
          handleClick={() => handleClick("0")}
        />
        <Button
          text="="
          width="w-32"
          height="h-14"
          textColor="text-white-ghots"
          textSize="text-lg"
          bgColor="bg-blue-dodger"
          handleClick={() => handleClick("=")}
        />
      </div>
    </div>
  );
};

export default Container;
