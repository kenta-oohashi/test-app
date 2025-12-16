import Header from "./components/Header/Header.jsx";
import PostsIndex from "./components/PostsList/PostsIndex.jsx";
import PostsDetail from "./components/PostsList/PostsDetail.jsx";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PostsIndex />} />
        <Route path="/posts/:id" element={<PostsDetail />} />
      </Routes>
    </div>
  )
}
export default App

