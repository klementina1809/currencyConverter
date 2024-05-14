import Button from "./Button";
import Select from "./Select";
import Input from "./Input";

function Block({
	baseCurrency,
	currency,
	status,
	inputValue,
	outputValue,
	setInputValue,
	handleChangeCurrency,
	handleChangeBaseCurrency,
}) {
	const defaultCurrencies = ["EUR", "USD", "JPY"];

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
				<Select
					baseCurrency={baseCurrency}
					currency={currency}
					changeCurrency={
						status ? handleChangeCurrency : handleChangeBaseCurrency
					}
				/>
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
