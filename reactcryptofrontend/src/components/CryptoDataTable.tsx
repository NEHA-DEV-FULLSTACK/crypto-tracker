
interface Crypto {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
}

interface Props {
  data: Crypto[];
}

function CryptoDataTable({ data }: Props) {
  return (
    <div className="flex justify-center">
      <div className="w-11/12 md:w-4/5 lg:w-3/4 bg-white shadow-lg rounded-lg">
        <h2 className="text-center mb-6" style={{fontSize: '2rem'}}>
          Crypto Tracker
        </h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50" style={{fontSize: '1.5rem'}}>
              <tr>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Symbol</th>
                <th className="py-3 px-6 text-left">Price (USD)</th>
                <th className="py-3 px-6 text-left">Market Cap</th>
                <th className="py-3 px-6 text-left">24h Change (%)</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody className="bg-white divide-y divide-gray-200" style={{fontSize: '1.2rem'}}>
              {data?.map((coin, index) => (
                <tr
                  key={coin.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-indigo-50 transition-colors duration-200 ease-in-out`}
                >
                  <td className="py-4 px-6 font-semibold text-gray-900">{coin.name}</td>
                  <td className="py-4 px-6 text-gray-700">{coin.symbol.toUpperCase()}</td>
                  <td className="py-4 px-6 text-gray-700">${coin.current_price.toFixed(2)}</td>
                  <td className="py-4 px-6 text-gray-700">
                    ${coin.market_cap.toLocaleString()}
                  </td>
                  <td style={{ color: coin.price_change_percentage_24h > 0 ? "green" : "red" }}>
              {coin.price_change_percentage_24h.toFixed(2)}%
               </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div  style={{marginTop: '2rem', textAlign: 'center',color: '#4b5563', fontSize: '2rem',lineHeight: '1',fontWeight: '700' }}>
  Prices are updated automatically every hour via cron job.
</div>
      </div>
    </div>
  );
}

export default CryptoDataTable;