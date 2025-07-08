# 🖼️ Screenshot Gallery App

This React app allows users to generate screenshots using the [ApiFlash](https://apiflash.com/) API and displays them in a dynamic gallery.

Users can input multiple parameters to customize their screenshot requests. Each new screenshot is shown on the page immediately after generation, and all past screenshots are stored and displayed in a gallery view below.

---

## 🎯 What It Does

- Uses `async/await` to make API calls to ApiFlash
- Lets users add and update query parameters (like URL, width, height, full page, etc.)
- Displays the screenshot result immediately on the page
- Maintains a scrollable gallery of all screenshots generated during the session

---

## 🧰 Tech Stack

- React
- JavaScript (ES6+)
- ApiFlash API
- CSS for styling

---



## 🏁 How to Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/screenshot-gallery-app.git
   cd screenshot-gallery-app
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
Visit http://localhost:3000 in your browser.

🌐 ApiFlash API
This app uses the ApiFlash screenshot API. You’ll need a free API key to use it. Add your key in the environment file or directly in the fetch request, depending on how you set it up.

👩‍💻 Author
Made with 💻 by Hebatallah Tharhan
