import React from "react";

function Input({ value, onchange, placeholder, status }) {
	return (
		<input
			value={value}
			onChange={onchange}
			placeholder={placeholder}
			type="number"
			disabled={status}
		/>
	);
}

export default Input;
