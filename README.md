# nextfire-chatbot-genkit

## 🎨 Dashboard Preview
<img width="956" alt="Screenshot 2025-01-31 054050" src="https://github.com/user-attachments/assets/f2ffe0a3-c4dc-4e0b-819c-9b77d67e7b00" />

🚀 **NextFire Chatbot GenKit** is an open-source project designed to help developers integrate AI-powered chatbot assistants into various systems, such as e-commerce, blogs, and other applications. Built with **Next.js 15**, **Firebase**, and **Gemini 1.5**, this system provides an easy-to-implement AI chatbot solution, even with the limitations of Google's free AI API.

## ✨ Key Features

- 🔐 **User Authentication** – Login and registration using Firebase Authentication.
- 💬 **AI Chatbot** – Uses Google AI (Gemini 1.5) to provide intelligent responses in various scenarios.
- 📝 **Chat History** – Store and manage user conversations with Firebase.
- 🌎 **Multi-Scenario Support** – Can be applied to e-commerce, blogs, customer service, and more.
- 🚀 **Built with Next.js 15** – High performance, SEO-friendly, and easy to develop.

## 🛠️ Installation and Running the Project

Ensure you have **Node.js** and **npm** installed before starting.

# Clone this repository
```bash
git clone https://github.com/username/nextfire-chatbot-genkit.git
```

# Navigate to the project directory
```bash
cd nextfire-chatbot-genkit
```

# Install dependencies
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

## 🤝 Contributing

Contributions are welcome! To contribute to this project:

1. **Fork** this repository.
2. **Clone** your fork:  
   ```bash
   git clone https://github.com/your-username/nextfire-chatbot-genkit.git
   ```
3. **Create a new branch**:  
   ```bash
   git checkout -b feature-name
   ```
4. **Make your changes** and commit:  
   ```bash
   git commit -m "Add new feature"
   ```
5. **Push to your branch**:  
   ```bash
   git push origin feature-name
   ```
6. **Submit a pull request** – Your changes will be reviewed before merging.

---

Feel free to suggest new features or improvements via issues or pull requests. Happy coding! 🚀

