import { createHashRouter, RouterProvider } from "react-router-dom";
import Customers from "./Component/Customers/Customers";
import Transactions from "./Component/Transactions/Transactions";
import GraphPage from "./Page/GraphPage";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: (
        <>
          <Customers />
          <Transactions />
        </>
      ),
    },
    { path: "graph", element: <GraphPage /> },
  ]);
  return (
    <>
      <h1 className="text-center text-4xl my-4 font-bold">
      Customer information
      </h1>
      <div className="container">
        <div className="flex gap-5 mt-2">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
