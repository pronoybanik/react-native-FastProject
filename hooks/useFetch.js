// import { useEffect, useState } from "react"
// import axios from "axios";

// const useFetch = (endpoint, query) => {
//     const [data, setData] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);


//     const options = {
//         method: 'GET',
//         url: `https://jsearch.p.rapidapi.com/${endpoint}`,
//         headers: {
//             'X-RapidAPI-Key': '2f73a15a05mshc8572a9fd688e74p1556bdjsnaf84909f6730',
//             'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
//         },
//         params: { ...query },
//     };

//     const fetchData = async () => {
//         setIsLoading(true);
//         try {
//             const response = await axios.request(options);
//             setData(response.data.data);
//             setIsLoading(false);

//         } catch (error) {
//             setError(error)
//             alert("There is error")
//             console.log('1');
//         } finally {
//             setIsLoading(false)
//         }
//     }

//     useEffect(() => {
//         fetchData()
//     }, []);

//     const refetch = () => {
//         setIsLoading(true);
//         fetchData();
//     }
//     return { data, isLoading, error, refetch }
// };

// export default useFetch;


import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
            ...query
        },
        headers: {
            'X-RapidAPI-Key': '2f73a15a05mshc8572a9fd688e74p1556bdjsnaf84909f6730',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert("There is an error");
            console.log('1');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;

