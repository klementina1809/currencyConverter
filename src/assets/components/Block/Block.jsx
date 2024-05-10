import React from "react";
import Button from "../Button/Button";
import Select from "../Select/Select";
import Input from "../Input/Input";

function Block() {
	return (
		<div className="block-container">
			<div className="buttons-bar">
				<Button title="EUR" />
				<Button title="USD" />
				<Button title="JPY" />
				<Select />
			</div>
			<Input />
		</div>
	);
}

export default Block;
