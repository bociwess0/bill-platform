import axios, { AxiosResponse } from "axios";
import { Bill, Result } from "../../Interfaces/Interface";

//base API url 
axios.defaults.baseURL = "https://api.oireachtas.ie/v1/";

// function that fetches all the bills from the api
export async function fetchBills(): Promise<Bill[]> {
    const response: AxiosResponse<any> = await axios.get("legislation");
    const bills: Bill[] = response.data.results.map((r: Result) => r.bill);
    return bills;
}