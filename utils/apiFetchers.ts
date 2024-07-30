import axios from "axios";

// Fetcher for GET request
export const fetcher = async (url: string) => {
  // try {
  const response = await axios.get(url).then((res) => res.data);
  console.log(response, "responseresponse");

  return response;
  // } catch (error) {
  //   // console.log(error, "this is fetch error ");

  //   handleAxiosError(error);
  // }
};

// Fetcher for POST request
export const postFetcher = async (url: string, data: any) => {
  try {
    const response = await axios.post(url, data);
    console.log("response of task post", response);
    return response?.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

// Fetcher for PUT request
export const putFetcher = async (url: string, data: any) => {
  try {
    const response = await axios.put(url, data);
    return response?.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

// Fetcher for DELETE request
export const deleteFetcher = async (url: string) => {
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const handleAxiosError = (error: any) => {
  console.log(error, "this is api fetcher error");

  if (axios.isAxiosError(error)) {
    if (error.response) {
      throw new Error(error.response.data.message || "An error occurred");
    } else if (error.request) {
      throw new Error("No response received from the server");
    } else {
      throw new Error(error.message);
    }
  } else {
    throw new Error("An unexpected error occurred");
  }
};
