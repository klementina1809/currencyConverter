import { useState, useEffect } from "react";

import Block from "./assets/components/Block.jsx";
import "./assets/styles/Converter.css";
import { getData } from "./assets/services/api";

function Converter() {
	const [baseCurrency, setBaseCurrency] = useState("");
	const [currency, setCurrency] = useState("");
	const [inputValue, setInputValue] = useState("");
	const [outputValue, setOutputValue] = useState(0);

	useEffect(() => {
		console.log("currency", currency);
		console.log("baseCurrency", baseCurrency);
	}, [currency, baseCurrency]);

	useEffect(() => {
		async function dataCurrency() {
			const response = await getData(baseCurrency, currency);
			console.log(response);
			handleCalculatedOutput(response.data);
		}
		if (inputValue !== "") {
			console.log("baseCurrency", baseCurrency);
			console.log("currency", currency);
			console.log("inputValue", inputValue);

			if (inputValue === "" || baseCurrency === "" || currency === "") {
				alert(
					"Invalid data format. Please fill in all the necessary information."
				);
				setInputValue("");
				return;
			}
			dataCurrency();
		}
	}, [inputValue, baseCurrency, currency]);

	const handleChangeCurrency = (cur) => {
		setCurrency(cur);
	};
	const handleChangeBaseCurrency = (cur) => {
		setBaseCurrency(cur);
	};

	const handleCalculatedOutput = (data) => {
		const [coefficient] = Object.values(data);
		const output = Math.round(inputValue * coefficient * 100) / 100;
		setOutputValue(output);
	};

	return (
		<div className="converter-container">
			<Block
				inputValue={inputValue}
				setInputValue={setInputValue}
				baseCurrency={baseCurrency}
				status={false}
				handleChangeBaseCurrency={handleChangeBaseCurrency}
			/>
			<Block
				outputValue={outputValue}
				currency={currency}
				status={true}
				handleChangeCurrency={handleChangeCurrency}
			/>
		</div>
	);
}

export default Converter;
