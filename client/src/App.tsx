import { Route, Routes } from "react-router-dom";

import { PostList } from "./components/PostList";

function App(): JSX.Element {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<h1>Hello</h1>} />
      </Routes>
    </div>
  );
}

export default App;
