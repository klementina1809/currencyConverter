import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const API = new Freecurrencyapi(
	"fca_live_93bzKchjgLOw4IWEws1ZpjVYkc1lRiih0zIeRARN"
);

export const getData = async (baseCurrency, currency) => {
	return await API.latest({
		base_currency: baseCurrency,
		currencies: currency,
	});
};
