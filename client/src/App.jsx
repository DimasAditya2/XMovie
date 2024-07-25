import { RouterProvider } from "react-router-dom";
import router from "./router/index";
function App() {

  return (
    <div id="main">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;