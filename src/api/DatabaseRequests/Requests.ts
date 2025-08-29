import axios, { AxiosResponse } from "axios";
import { Bill, Result } from "../../Interfaces/Interface";

axios.defaults.baseURL = "https://api.oireachtas.ie/v1/";

export async function fetchBills(): Promise<Bill[]> {
    const response: AxiosResponse<any> = await axios.get("legislation");
    let bills: Bill[] = [];

    bills = response.data.results.map((r: Result) => r.bill);

    return bills;
}