import { useState, useEffect } from "react";
import axios from "axios";
//import { OPEN_CART_API_KEY } from "@env";

function useFetch(endpoint, params = {}) {
  const [data, setData] = useState([]); //holds the returned data from api call
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  let api_key =
    "7NikGFtIqGWjXPUTdZP0ECoWhVhVfLRy0s8FT8NP0Cezpu0xE1TIUQc5yh0fq4rVFT43408XyvM2cJh0OAROu5U0lrBgB6QA1m1jsjjYEgM71BbysvwbuYurLpPYqoqexsXTK4xaChB5OlQB4wqMc1ZF6f2EFiI4a4IJBC2LANJJ6cXnPdNIUNxEIP2nrpcOysW43EJQHwPL0Biy6FqR3BxWKNkwbyUbh4d43alxCznbTN3mNI50l2OdUj5hY0L1";
  let formData = new FormData();
  formData.append("username", "foundit");
  formData.append("key", api_key);

  const options = {
    method: "GET",
    url: `http://founditgd.online/index.php?route=api/${endpoint}`,
    headers: {},
    body: formData,
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      //we are using the axios library to make the api requests
      const response = await axios.request(options);
      console.log("fetch", response.data);
      //temp = JSON.parse(response.data);
      //console.log("fetch", temp);
      //set the response data to data array
      setData(response.data);
      //set isloading to false to stop spinner and output data
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  //call fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
}

export default useFetch;
