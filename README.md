Crypto Tracker - Project Documentation
🚀 Tech Stack
Frontend
- React (Vite + TypeScript)
- Tailwind CSS

Backend
- Node.js
- Express.js
- MongoDB Atlas (Mongoose ORM)
- Node-cron

Others
- Axios (API requests)
- Dotenv (environment variables)
⚙️ Setup Instructions
1. Clone Repository
https://github.com/NEHA-DEV-FULLSTACK/crypto-tracker.git
cd crypto-tracker
2. Setup Backend
cd nodeBackend
npm install

Create a .env file with:
MONGO_URI=mongodb+srv://nehacrypto:*************@mycryptodb.sizyn8q.mongodb.net/?retryWrites=true&w=majority
PORT=5000

Start backend:
npm run dev
3. Setup Frontend
cd reactcryptofrontend
npm install

Create a .env file with:
VITE_API_URL=http://localhost:5000/api/crypto

Start frontend:
npm run dev

Visit http://localhost:5173
⏰ How the Cron Job Works
- Uses node-cron to schedule hourly updates
- Fetches top 10 cryptocurrencies from CoinGecko
- Saves data in CurrentCrypto (latest snapshot)
- Saves data in HistoricalCrypto (history tracking)

Code snippet:
// Cron job
cron.schedule("0 * * * *", () => {
  console.log("crom job running hourly");
  getCurrentCryptoData();
});

// load data
getCurrentCryptoData();

🌐 Deployment Links
- Backend API →https://crypto-tracker-al1j.onrender.com/api/crypto/current
- Frontend App → https://jade-longma-72302c.netlify.app/ 

📸 Screenshots
https://docs.google.com/document/d/11z_aYqUMHH04GFybgODfb2AfGpe4hM35/edit?usp=sharing&ouid=102322558793571551349&rtpof=true&sd=true
Also uploaded to git repo.


👨‍💻 Author
Neha kumari
LinkedIn: https://www.linkedin.com/in/neha1990/
Email: nehathkr03@gmail.com


---------------------If you have any query free feel to contact--------------
