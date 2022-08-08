import { useState, useEffect } from 'react';

const useFetch = (url) => {

   const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

       useEffect(() => {
  setTimeout(() => {
      fetch(' http://localhost:8000/blogs')
    .then(res => {
          if (!res.ok) {
        throw Error('Could not fetch data from that resource')
      }
        return res.json();
    })
    .then(data => {
     console.log(data);
     setData(data);
     setIsLoading(false);
     setError(null);
    })
    .catch(err => {
        setError(err.message)
        setIsLoading(false);
    })
  }, 1000);
    }, [url]);

    return {data, isLoading, error};

}

export default useFetch;