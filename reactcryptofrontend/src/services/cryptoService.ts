import axios from "axios";
import type { Crypto } from "../type/crypto";

const API_URL = import.meta.env.VITE_API_URL as string;

export const fetchCrypto = async (): Promise<Crypto[]> => {
  try {
    const { data } = await axios.get<Crypto[]>(`${API_URL}/current`);
    return data;
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    return [];
  }
};
