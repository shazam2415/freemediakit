# 🇵🇸 FreeMediaKit

FreeMediaKit is an open-source, single-page web platform designed to provide free, high-quality, and print-ready visual assets for Palestine activists and demonstrators worldwide. 

The project aims to centralize protest posters, banners, and social media graphics, making them easily accessible in multiple dimensions and formats.

👉 **Live Demo:** [https://freemediakit.vercel.app](https://freemediakit.vercel.app) *(Replace with your actual Vercel link)*

---

## 🚀 Features

- **Single-Page Architecture:** Lightweight, ultra-fast, and highly responsive user experience.
- **Categorized Visuals:** Easily filter through Posters (A3/A4), Banners, and Social Media assets.
- **Print-Ready Dimensions:** High-quality previews showing exact dimensions for physical printing.
- **Palestine Flag Palette:** A dark-themed modern UI designed around the symbolic colors: Emerald Green, Crimson Red, Black, and White.
- **Future-Proof Structure:** Data-driven architecture using a single mock JSON file, ready to scale into a dynamic database in the future.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

---

## 💻 Getting Started

To run this project locally, follow these simple steps:

### 1. Clone the Repository
```bash
git clone [https://github.com/shazam2415/freemediakit.git](https://github.com/shazam2415/freemediakit.git)
cd freemediakit
2. Install Dependencies
Bash
npm install
# or
yarn install
3. Run the Development Server
Bash
npm run dev
# or
yarn dev
Open http://localhost:3000 with your browser to see the result.

📂 Project Structure
Plaintext
freemediakit/
├── src/
│   ├── app/
│   │   ├── layout.js     # Global layout and metadata
│   │   └── page.js       # Main application page with filter & grid
│   └── data/
│       └── mockData.json # Mock data file for assets registry
├── public/               # Static assets & placeholder previews
└── package.json          # Project dependencies and scripts
🎨 How to Contribute
This project is built with global solidarity in mind. There are two ways you can contribute:

For Designers (Submit Art)
If you want to add your own designs to the catalog, please click the "Submit Design" button on the live website or open an issue with your high-res file links (PDF, SVG, or PNG).

For Developers
Fork the repository.

Create a new branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add some AmazingFeature').

Push to the branch (git push origin feature/AmazingFeature).

Open a Pull Request.

📝 License
Distributed under the MIT License. See LICENSE for more information. All assets provided on this platform are intended for public domain/activism use.


Dosyayı kaydedip GitHub'a göndermek için terminalde şu komutları sırasıyla çalıştırabilirsin:

```bash
git add README.md
git commit -m "docs: add comprehensive README"
git push