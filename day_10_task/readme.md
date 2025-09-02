# 🛒 Styled Product Card List (React)

A beginner-friendly **React component** that displays a list of products in styled cards. Built using **React**, **Tailwind CSS** for styling, and **Framer Motion** for smooth animations.

---

## 📚 Topics Covered
- Rendering lists with React
- Using **props** for component reusability
- Basic **event handling** (`onClick`)
- Styling with Tailwind CSS
- Adding animations with Framer Motion

---

## 📦 Installation

1. Make sure you have a React project set up (e.g., using `create-react-app` or Vite).
2. Install dependencies:
   ```bash
   npm install framer-motion
   ```

*(Tailwind CSS should already be configured in your project. If not, follow the [Tailwind setup guide](https://tailwindcss.com/docs/guides/create-react-app).)*

---

## ▶️ Usage

1. Copy the component file (`ProductCardList.jsx`) into your project.
2. Import and use it in your app:
   ```jsx
   import ProductCardList from "./ProductCardList";

   function App() {
     return (
       <div className="min-h-screen bg-gray-100 p-6">
         <ProductCardList />
       </div>
     );
   }

   export default App;
   ```

---

## ✨ Features
- Display product image, name, price, and rating
- Optional **badges** (e.g., "Best Seller", "Trending")
- Buttons for **View** and **Add to Cart**
- Smooth animations with Framer Motion
- Responsive grid layout

---

## 📄 Example Products
```json
[
  {
    "id": 1,
    "title": "Wireless Headphones",
    "price": 2999,
    "rating": 4.5,
    "badge": "Best Seller"
  },
  {
    "id": 2,
    "title": "Smart Watch",
    "price": 4999,
    "rating": 4.2,
    "badge": "Trending"
  }
]
```

---

## 🛠 Tech Stack
- **React.js**
- **Tailwind CSS** (for styling)
- **Framer Motion** (for animations)
- **JavaScript (ES6)**

---

## 🚀 Mini Task
Build a **Styled Product Card List** that:
1. Displays products dynamically from an array/object
2. Shows **name, price, image, and rating**
3. Has **Add to Cart** and **View** buttons
4. Uses **animations** and **responsive design**
