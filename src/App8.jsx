import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const UserProfile = () => {
  const { userId } = useParams();
  return <h2>User Profile: User ID is {userId}</h2>;
};

const Navigation = () => {
  return (
    <nav
      style={{
        padding: "10px",
        backgroundColor: "#f4f4f4",
        marginBottom: "20px",
      }}
    >
      <Link to="/" style={{ marginRight: "10px" }}>
        Home
      </Link>
      <Link to="/about" style={{ marginRight: "10px" }}>
        About
      </Link>
      <Link to="/user/101">User 101</Link>
    </nav>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>React Router Example</h1>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:userId" element={<UserProfile />} />
        </Routes>
      </div>
      <div style={{ marginTop: "50px", color: "gray", fontSize: "14px" }}>
        <p>Copyright &copy; Rajesh</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
