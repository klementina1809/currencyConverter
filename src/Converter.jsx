import { useState } from "react";
import Block from "./assets/components/Block/Block";
import "./Converter.css";

function Converter() {
	const [count, setCount] = useState(0);

	return (
		<div className="converter-container">
			<Block />
			<Block />
		</div>
	);
}

export default Converter;
