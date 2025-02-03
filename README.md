# nextfire-chatbot-genkit

## 🎨 Dashboard Preview
<img width="956" alt="Screenshot 2025-01-31 054050" src="https://github.com/user-attachments/assets/f2ffe0a3-c4dc-4e0b-819c-9b77d67e7b00" />

🚀 **NextFire Chatbot GenKit** is an open-source project designed to help developers integrate AI-powered chatbot assistants into various systems, such as e-commerce, blogs, and other applications. Built with **Next.js 15**, **Firebase**, and **Gemini 1.5**, this system provides an easy-to-implement AI chatbot solution, even with the limitations of Google's free AI API.

## ✨ Key Features

- 🔐 **User Authentication** – Login and registration using Firebase Authentication.
- 💬 **AI Chatbot** – Uses Google AI (Gemini 1.5) to provide intelligent responses in various scenarios.
- 📝 **Chat History** – Store and manage user conversations with Firebase.
- 🌎 **Multi-Scenario Support** – Can be applied to e-commerce, blogs, customer service, and more.
- 🎭 **Customizable AI Personality** – Modify AI behavior and role by editing `prompt.ts`.
- 🚀 **Built with Next.js 15** – High performance, SEO-friendly, and easy to develop.

## 🛠️ Installation and Running the Project

Ensure you have **Node.js** and **npm** installed before starting.

### Clone this repository
```bash
git clone https://github.com/juanda050/nextfire-chatbot-genkit.git
```

### Navigate to the project directory
```bash
cd nextfire-chatbot-genkit
```

### Install dependencies
```bash
npm install
```

### 🔑 Get Google AI API Key

Before setting up environment variables, you need to generate an API key:

1. Go to [Google AI Studio](https://aistudio.google.com/).
2. Sign in with your Google account.
3. Navigate to the API key section and generate a new key.
4. Copy the generated API key.

```bash
# Set up environment variables
echo "GOOGLE_GENAI_API_KEY=your_gemini_api" > .env.local
```

### 🚀 Run the Development Server
```bash
npm run dev
```

## 🛠️ Modifying AI Character or Role

The chatbot's personality, role, and response limitations can be adjusted by editing `src/app/prompt.ts`. Here’s how:

### Example: Veterinary Assistant
```typescript
export const DIAGNOSIS_PROMPT = `
Kamu adalah "Juanda", sebuah asisten sistem berbasis AI yang dirancang untuk membantu dalam bidang kedokteran hewan. Peranmu adalah memberikan solusi atau penjelasan terkait kesehatan, perawatan, dan pengobatan hewan peliharaan maupun ternak. Kamu juga dapat memberikan informasi tentang dirimu jika diminta.

Aturan utama:
1. Jawablah hanya pertanyaan yang terkait dengan kedokteran hewan, kesehatan hewan, atau informasi tentang dirimu.
2. Jika ada pertanyaan di luar bidang ini, balas dengan tegas: "Kamu serius? Saya hanya asisten AI untuk kedokteran hewan."
`;
```

### Example: E-Commerce Assistant
```typescript
export const ECOMMERCE_PROMPT = `
Kamu adalah "ShopBot", sebuah asisten AI yang dirancang untuk membantu pelanggan dalam mencari produk, memberikan rekomendasi, dan menjawab pertanyaan terkait toko online.

Aturan utama:
1. Jawablah hanya pertanyaan yang terkait dengan produk, harga, stok barang, atau layanan pelanggan.
2. Jika ada pertanyaan di luar bidang ini, balas dengan: "Maaf, saya hanya dapat membantu dalam hal e-commerce."
`;
```

### Example: Blog Writing Assistant
```typescript
export const BLOG_ASSISTANT_PROMPT = `
Kamu adalah "BlogWriter", asisten AI yang membantu pengguna dalam menulis artikel, memberikan ide konten, dan menyempurnakan gaya penulisan.

Aturan utama:
1. Jawablah hanya pertanyaan yang terkait dengan menulis blog, gaya penulisan, atau pengeditan konten.
2. Jika ada pertanyaan di luar bidang ini, balas dengan: "Saya hanya dapat membantu dalam bidang penulisan dan blog."
`;
```

## 🤝 Contributing & Code of Conduct

We welcome contributions from everyone! Please read our **[Contributing Guidelines](CONTRIBUTING.md)** before making changes. Also, make sure to follow our **[Code of Conduct](CODE_OF_CONDUCT.md)** to ensure a welcoming and inclusive environment.

Feel free to suggest new features or improvements via issues or pull requests. Happy coding! 🚀

