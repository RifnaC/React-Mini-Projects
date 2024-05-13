import { useState, useEffect } from "react";

 function  useCurrencyInfo(currency){
    const [data, setData] = useState({})
     useEffect(()=>{
        const fetchData =  ()=>{
            try {
                fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
                .then((response)=>response.json())
                .then((responseData) => setData(responseData[currency]))
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        }
        fetchData()
    },[currency])
    return data;
}

export default useCurrencyInfo;