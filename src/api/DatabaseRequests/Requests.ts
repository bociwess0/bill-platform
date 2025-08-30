import axios, { AxiosResponse } from "axios";
import { Bill, Result } from "../../Interfaces/Interface";

// Base API url
axios.defaults.baseURL = "https://api.oireachtas.ie/v1/";

// Function that fetches all the bills from the api
export async function fetchBills(): Promise<Bill[]> {
  try {
    const response: AxiosResponse<any> = await axios.get("legislation");
    const bills: Bill[] = response.data.results.map((r: Result) => r.bill);

    return bills;
  } catch (error) {
    console.log("Error fetching product data!");
    throw error;
  }
}
