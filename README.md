ARTIFI — Modular Routing Prototype

How to run:
1. Unzip project folder.
2. Run `npm install` then `npm start`.
3. Visit http://localhost:3000

Routing:
- /                 Home
- /login            Login (demo)
- /products         List products
- /products/:id     Product detail + rating POST /products/:id/rate
- /custom-orders    Custom order form (POST)
- /auction          Auction room (POST /auction/bid)
- /profile/:username Profile page

Notes:
- Data stored in /data JSON files for prototype purposes.
- AI integrations (Vertex/Gemini/Vision/Document AI) are placeholders in the UI.
