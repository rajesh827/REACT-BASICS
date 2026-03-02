## 📘 Title
React Basics

---

## 🎯 Objectives

- To design and construct React component architecture using functional components and JSX syntax  
- To evaluate and apply React Hooks (`useState`, `useEffect`, `useRef`) for state management and side effects  
- To create dynamic and interactive user interfaces using conditional rendering and event handling  
- To design and implement form handling and validation in React with controlled components  
- To integrate and configure React Router for client-side navigation and dynamic routing  
- To synthesize external API data through asynchronous operations for display  
- To analyze component lifecycle and design cleanup mechanisms using `useEffect`

---

## 🧪 Tasks Performed (Procedure)

### 1️⃣ Laptop List Rendering
- Created an array of laptop objects  
- Used `map()` to render `ProductCard` components  

### 2️⃣ Counter Component
- Initialized count state to 0  
- Increment button (+1)  
- Decrement button (-1)  
- Reset button (0)  

### 3️⃣ Login Status Component
- Used `useState` for `isLoggedIn`  
- Used ternary operator to display:
  - "Welcome back!"  
  - "Please log in"  
- Used `&&` operator for conditional messages  
- Implemented Login/Logout toggle button  

### 4️⃣ Registration Form
- Created state object: `username`, `email`, `age`  
- Implemented `handleChange` using computed property names  
- Used `handleSubmit` with `e.preventDefault()`  
- Displayed form data using `JSON.stringify()`  
- Showed alert message on submit  

### 5️⃣ Window Resize Listener
- Tracked window width using `useState`  
- Added resize event listener inside `useEffect`  
- Cleaned up event listener using return function  

### 6️⃣ Fetch Users Component
- Fetched data from:
- Managed states: `users`, `loading`, `error`  
- Displayed loading and error messages  
- Displayed user name and email  

### 7️⃣ Focus Input Component
- Used `useRef` to focus input field  
- Displayed entered name  

### 8️⃣ React Router Implementation
- Created Home component  
- Created About component  
- Created Navigation with `Link`  
- Configured `BrowserRouter`, `Routes`, `Route`  
- Implemented dynamic route `/user/:userId` using `useParams`  

### 9️⃣ Card Component (Children Prop)
- Created reusable Card component  
- Applied border and padding styling  
- Used Card with:
- Text paragraph  
- Button  
- Heading and list  

### 🔟 Props Drilling Example
- Created Grandparent → Parent → Child hierarchy  
- Passed `userName` state from Grandparent to Child  
- Demonstrated prop flow across multiple levels  

---

## 🛠 Technologies Used

- React  
- Vite  
- JavaScript (ES6+)  
- React Router  

---

## 💬 Discussion

### What tasks were performed?
All fundamental React concepts including components, hooks, routing, API integration, props drilling, and form handling were implemented and tested.

### Problems Encountered
- Understanding `useEffect` cleanup mechanism  
- Managing multiple states correctly  
- Configuring React Router properly  
- Fixing GitHub Pages deployment issues  

### Use Cases of React
- Single Page Applications (SPA)  
- Dynamic user interfaces  
- Real-time data applications  
- Dashboard and admin panels  

### Limitations of React
- SEO challenges without SSR  
- Requires additional libraries for full application setup  
- Steeper learning curve for beginners  

---

## 📌 Conclusion

This lab experiment helped in understanding core React concepts such as component-based architecture, state management, lifecycle handling, routing, and API integration. The practical implementation strengthened knowledge of modern frontend development using React.

---

## 👨‍💻 Author
Rajesh Bhandari
