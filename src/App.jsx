import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Button } from "@/components/ui/button";
import AppLayout from "./layouts/app-layout";
import { LandingPage } from "./pages/landing";
import { Onboarding } from "./pages/onboarding";
import { JobListing } from "./pages/jobListing";
import { PostJob } from "./pages/postJob";
import { SavedJobs } from "./pages/savedJob";
import { MyJobs } from "./pages/myJobs";
import { JobPage } from "./pages/job";
import { ThemeProvider } from "./components/ui/theme-provider";

// define all routes of the app
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/onboarding", element: <Onboarding /> },
      { path: "/jobs", element: <JobListing /> },
      { path: "/job/:id", element: <JobPage /> },
      { path: "/post-job", element: <PostJob /> },
      { path: "/saved-job", element: <SavedJobs /> },
      { path: "/my-jobs", element: <MyJobs /> },
    ],
  },
]);

function App() {
  return (
    <>
      {" "}
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <h1>Getting started with React and ShadCN</h1>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
