# Portfolio

A modern, interactive portfolio, Digital Transformation & AI Engineer.

## 🚀 Features
- Experience, projects, and skills sections
- Downloadable resume
- Contact form
- Chatbot widget (integrates with a Python FastAPI backend for RAG/AI)
- Theme toggle (light/dark)
- Responsive and mobile-friendly

## 🗂️ Project Structure
```
portfolio/
├── public/                # Static assets (resume, icons, etc.)
├── src/
│   ├── assets/            # Images
│   ├── components/        # React components (UI, Chatbot, Sections, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page-level components
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── rag-backend/           # Python FastAPI backend for RAG/AI (optional)
│   ├── main.py            # Example FastAPI app
│   └── requirements.txt   # Python dependencies
├── package.json           # Project metadata and scripts
├── tailwind.config.ts     # Tailwind CSS config
├── vite.config.ts         # Vite config
└── ...
```

## 🛠️ Getting Started

### 1. Clone the Repository
```sh
git clone https://github.com/massinniss/portfolio.git
cd portfolio
```

### 2. Install Frontend Dependencies
```sh
npm install
```

### 3. Run the Frontend (React/Vite)
```sh
npm run dev
```
Visit http://localhost:5173 in your browser.

---

## 🤖 Chatbot & Backend Integration

### Backend Setup (Optional, for AI/RAG features)
1. Go to the `rag-backend/` folder:
    ```sh
    cd rag-backend
    ```
2. (Optional) Create a virtual environment:
    ```sh
    python -m venv venv
    venv\Scripts\activate
    ```
3. Install Python dependencies:
    ```sh
    pip install -r requirements.txt
    ```
4. Start the FastAPI server:
    ```sh
    uvicorn main:app --reload
    ```
    The backend will run at http://localhost:8000.
5. The React chatbot is pre-configured to send user messages to `http://localhost:8000/chat`.

**Note:** The backend currently echoes messages for testing. Replace the logic in `main.py` with your RAG or LLM code as needed.

---

## 📬 Contact Form
- The contact form is ready for integration with services like [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/).
- For backend email handling, connect the form to your own API endpoint.

---

## 🌐 Deployment

### Frontend (Static Hosting)
- Build for production:
    ```sh
    npm run build
    ```
- Deploy the `dist/` folder to any static host (GitHub Pages, Vercel, Netlify, etc.).

### Backend
- Deploy your FastAPI backend to a cloud provider (Render, Railway, Azure, etc.).
- Update the chatbot API URL in the frontend if needed.

---

## ⚡ Customization
- **Update your info:** Edit `src/components/HeroSection.tsx`, `ExperienceSection.tsx`, `ProjectsSection.tsx`, and `SkillsSection.tsx`.
- **Resume:** Replace `public/resume.pdf` with your own file.
- **Social Links:** Update URLs in `HeroSection.tsx` and `ContactSection.tsx`.
- **Chatbot:** Customize logic in `ChatbotWidget.tsx` and backend in `rag-backend/main.py`.

---

## 📝 License
This project is for personal/portfolio use. Feel free to fork and adapt for your own portfolio!

---

**Questions or need help?**
Open an issue or contact me via the portfolio contact form or social links.
