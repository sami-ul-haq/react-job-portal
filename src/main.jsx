import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./layouts/RootLayout";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobPage from "./pages/JobPage";
import { jobLoader } from "./utils/jobLoader";
import AddJobPage from "./pages/AddJobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJobPage />} />
      <Route path="/job/:id" element={<JobPage />} loader={jobLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
