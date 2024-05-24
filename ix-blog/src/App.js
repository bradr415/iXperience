

import Categories from "./compnents/Categories";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage />
      <BlogsPage/>
      <CategoriesPage/>
    </div>
  );
}

export default App;