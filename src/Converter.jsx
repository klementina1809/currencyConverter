import { useState, useEffect } from "react";
import Freecurrencyapi from "@everapi/freecurrencyapi-js";
import Block from "./assets/components/Block/Block";
import "./Converter.css";

function Converter() {
	const [baseCurrency, setBaseCurrency] = useState("");
	const [currency, setCurrency] = useState("");
	const [inputValue, setInputValue] = useState("");
	const [outputValue, setOutputValue] = useState(0);

	const API = new Freecurrencyapi(
		"fca_live_93bzKchjgLOw4IWEws1ZpjVYkc1lRiih0zIeRARN"
	);

	// useEffect(() => {
	// 	console.log("currency", currency);
	// 	console.log("baseCurrency", baseCurrency);
	// }, [baseCurrency, currency]);

	const handleChangeCurrency = (cur) => {
		setCurrency(cur);
	};
	const handleChangeBaseCurrency = (cur) => {
		setBaseCurrency(cur);
	};

	const handleConvert = () => {
		console.log("baseCurrency", baseCurrency);
		console.log("currency", currency);

		API.latest({
			base_currency: baseCurrency,
			currencies: currency,
		}).then((response) => {
			console.log(response);
			setOutputValue(response.data.currency);
		});
	};

	return (
		<div className="converter-container">
			<Block
				inputValue={inputValue}
				setInputValue={setInputValue}
				baseCurrency={baseCurrency}
				setBaseCurrency={setBaseCurrency}
				status={false}
				handleChangeBaseCurrency={handleChangeBaseCurrency}
				
				
			/>
			<Block
				outputValue={outputValue}
				setOutputValue={setOutputValue}
				currency={currency}
				setCurrency={setCurrency}
				status={true}
				handleChangeCurrency={handleChangeCurrency}
			/>
			<button onClick={handleConvert}>go</button>
		</div>
	);
}

export default Converter;
