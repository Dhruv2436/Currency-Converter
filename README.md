🌍 Currency Converter

A simple yet powerful currency converter web app that allows you to convert between different currencies in real time.
Built with HTML, CSS, and JavaScript, it fetches live exchange rates using the ExchangeRate-API (Free).

🚀 Features

✅ Convert any amount from one currency to another instantly.

📊 Live and accurate exchange rates powered by ExchangeRate-API.

🌎 Country flags automatically update based on selected currencies.

💻 Simple, responsive, and user-friendly interface.

📂 Project Structure

index.html → Main structure of the app.

style.css → Styling for a clean and responsive UI.

script.js → Stores currency-country mapping data.

code.js → Handles dropdowns, flag updates, and API calls.

🛠️ Tech Stack

⚡ HTML5 – Structure of the app

🎨 CSS3 – Styling and layout

🧑‍💻 JavaScript (Vanilla JS) – Functionality and API integration

🏳️ Flags API
 – Country flag images

💱 ExchangeRate-API
 – Currency conversion rates (Free Tier)

🔑 API Used

This project uses ExchangeRate-API, a free and reliable API that provides real-time currency conversion data.

Example API call:

const BASE_URL = "https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/";
const URL = `${BASE_URL}/${fromCurr}/${toCurr}/${amount}`;


Response includes:

conversion_rate → The rate between two currencies.

conversion_result → Final converted value.

🙏 Credits

💱 ExchangeRate-API
 – Free currency exchange rate data

🏳️ Flags API
 – Free country flag images
