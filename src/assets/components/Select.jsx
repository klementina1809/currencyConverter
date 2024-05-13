import { useEffect, useState, useMemo } from 'react';
import { getCurrencies } from "../services/api";

function Select({baseCurrency, currency, handleChangeBaseCurrency, handleChangeCurrency}) {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const response = await getCurrencies();
        const currenciesData = Object.keys(response.data);
        setCurrencies(currenciesData);
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    }

    if (currencies.length === 0) {
      fetchCurrencies();
    }
  }, [currencies]);

  const memoizedCurrencies = useMemo(() => currencies, [currencies]);

  return (
    <select name="currencies" id="">
      {memoizedCurrencies.map((currency) => (
        <option key={currency} value={currency}>{currency}</option>
      ))}
    </select>
  );
}

export default Select;
