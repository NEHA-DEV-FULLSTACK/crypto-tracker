import { useEffect, useState } from "react";
import { fetchCrypto } from "../services/cryptoService";
import type { Crypto } from "../type/crypto";
import CryptoDataTable from "../components/CryptoDataTable";

function Dashboard() {
  const [cryptoData, setCryptoData] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchCrypto();
        setCryptoData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && <CryptoDataTable data={cryptoData} />}
    </div>
  );
}

export default Dashboard;
