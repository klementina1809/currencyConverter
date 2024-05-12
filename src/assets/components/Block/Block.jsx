import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import Select from "../Select/Select";
import Input from "../Input/Input";

function Block({
	baseCurrency,
	setBaseCurrency,
	currency,
	setCurrency,
	status,
	inputValue,
	outputValue,
	setInputValue,
	setOutputValue,
	handleChangeCurrency,
	handleChangeBaseCurrency,
}) {

	const defaultCurrencies = ["EUR", "USD", "AUD"];

	const handleChangeValue = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<div className="block-container">
			<div className="buttons-bar">
				{defaultCurrencies.map((cur) => (
					<Button
						key={cur}
						title={cur}
						onselect={() =>
							status
								? handleChangeCurrency(cur)
								: handleChangeBaseCurrency(cur)
						}
						classname={
							baseCurrency === cur || currency === cur
								? "active"
								: ""
						}
					/>
				))}
				<Select />
			</div>
			<Input
				status={status}
				value={status ? outputValue : inputValue}
				placeholder={0}
				onchange={(e) => handleChangeValue(e)}
			/>
		</div>
	);
}

export default Block;
