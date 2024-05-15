import { useEffect, useState, useMemo } from "react";
import { getCurrencies } from "../services/api";

function Select({ currency, baseCurrency, changeCurrency }) {
	const [currencies, setCurrencies] = useState([]);

	useEffect(() => {
		async function fetchCurrencies() {
			try {
				const response = await getCurrencies();
				const currenciesData = Object.keys(response.data);
				const filteredData = currenciesData.filter(
					(cur) => cur !== "EUR" && cur !== "USD" && cur !== "JPY"
				);
				setCurrencies(filteredData);
			} catch (error) {
				console.error("Error fetching currencies:", error);
			}
		}

		if (currencies.length === 0) {
			fetchCurrencies();
		}
	}, [currencies]);

	const memoizedCurrencies = useMemo(() => currencies, [currencies]);

	return (
		<select
			name="currencies"
			id="currencies"
			onChange={(e) => changeCurrency(e.target.value)}
			className={
				memoizedCurrencies.some(
					(cur) => baseCurrency === cur || currency === cur
				)
					? "active"
					: ""
			}
		>
			{memoizedCurrencies.map((cur) => (
				<option
					key={cur}
					value={cur}
					className={
						baseCurrency === cur || currency === cur ? "active" : ""
					}
				>
					{cur}
				</option>
			))}
		</select>
	);
}

export default Select;
