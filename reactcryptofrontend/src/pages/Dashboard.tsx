import { useEffect, useState } from "react";
import { fetchCrypto } from "../services/cryptoService";
import type { Crypto } from "../type/crypto";
import CryptoDataTable from "../components/CryptoDataTable";

function Dashboard() {
  const [cryptoData, setCryptoData] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
const [lastUpdated, setLastUpdated] = useState<string>("");
 useEffect(() => {
  async function loadData() {
    try {
      const data = await fetchCrypto();
      setCryptoData(data);

      // ✅ Log and show when data was last updated
      const now = new Date().toLocaleString();
      console.log("Data updated at:", now);
      setLastUpdated(now);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  }

  loadData(); // initial fetch

  const interval = setInterval(loadData, 60 * 60 * 1000); // every 1 hour
  return () => clearInterval(interval);
}, []);


  return (
    <div style={{ padding: "20px" }}>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && <CryptoDataTable data={cryptoData} />}

      {lastUpdated && (
  <div  style={{marginTop: '0.5rem', textAlign: 'center',color: '#4b5563', fontSize: '1.5rem',lineHeight: '1',fontWeight: '700' }}>
    ⏰ Last updated at: {lastUpdated}
  </div>
)}
    </div>
  );
}

export default Dashboard;
