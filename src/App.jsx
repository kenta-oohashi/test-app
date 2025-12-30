import Header from "./components/Header/Header.jsx";
import PostsIndex from "./components/PostsList/PostsIndex.jsx";
import PostsDetail from "./components/PostsList/PostsDetail.jsx";
import Contact from "./components/contact/contact.jsx";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<PostsIndex />} />
        <Route path="/posts/:id" element={<PostsDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
export default App

