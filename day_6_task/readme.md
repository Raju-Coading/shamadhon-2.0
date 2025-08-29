# Profile Card Component

A simple, responsive **Profile Card Component** built with **React**, **Tailwind CSS**, and **Framer Motion**. This component can display a user's profile with an avatar, name, title, bio, stats, and action buttons.

---

## 🚀 Features
- Displays **profile picture** or initials if no avatar is provided
- Shows **name, title, and short bio**
- **Stats section** for followers, projects, repos, etc.
- **Action buttons**: Follow & Message
- Smooth animations using **Framer Motion**
- Fully responsive with **Tailwind CSS**

---

## 📦 Installation

Make sure you have a React project set up. If not, create one:
```bash
npx create-react-app my-app
cd my-app
```

Install dependencies:
```bash
npm install framer-motion tailwindcss
```

---

## 📄 Usage

1. Copy `ProfileCard.jsx` into your `src/` folder.
2. Import and use it in your `App.jsx`:

```jsx
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <ProfileCard
        name="Priya Verma"
        title="Full Stack Developer"
        bio="Passionate about building delightful user experiences. Loves React, Node.js and good coffee."
        avatarUrl="https://i.pravatar.cc/150?img=47"
        stats={[
          { label: "Followers", value: 2300 },
          { label: "Projects", value: 18 },
          { label: "Repos", value: 56 }
        ]}
        onFollow={() => alert("Followed!")}
        onMessage={() => alert("Message sent!")}
      />
    </div>
  );
}

export default App;
```

---

## 🖼 Example Output
The card displays:
- Avatar (or initials)
- Name, title, bio
- Stats section (Followers, Projects, Repos)
- Buttons: Follow, Message
- Last active info

---

## ⚡ Tech Stack
- **React** (UI)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)

---

---

✨ Built for learning & hackathon projects!
