import React from "react";
import Button from "../Button/Button";
import Select from "../Select/Select";
import Input from "../Input/Input";

function Block() {
	return (
		<div className="block-container">
			<div className="buttons-bar">
				<Button title="EUR" color="green" />
				<Button title="USD" color="green" />
				<Button title="JPY" color="green" />
				<Select/>
			</div>
      <Input/>
		</div>
	);
}

export default Block;
