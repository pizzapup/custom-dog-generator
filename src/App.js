import "./styles.css";
import "./styles/styles.scss";
import {lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./routes/Layout";
import DogDetail from "./components/DogForm/DogDetail";
const Home = lazy(() => import("./routes/Home"));
const CreateDog = lazy(() => import("./routes/CreateDog"));
const DogGallery = lazy(() => import("./routes/DogGallery"));
const ResumePage = lazy(() => import("./routes/ResumePage"));
// const DogDetail = lazy(() => import("./components/DogForm/DogDetail"));
export const pages = [
  {to: "/home", title: "Home"},
  {to: "/createdog", title: "Create Dog"},
  {to: "/doggallery", title: "Dog Gallery"},
  {to: "/resumepage", title: "Resume"},
];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            // path="home"
            element={
              <Suspense fallback={<>...</>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="home"
            element={
              <Suspense fallback={<>...</>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="createdog"
            element={
              <Suspense fallback={<>...</>}>
                <CreateDog />
              </Suspense>
            }
          />
          <Route
            path="doggallery"
            element={
              <Suspense fallback={<>...</>}>
                <DogGallery />
              </Suspense>
            }
          />
          <Route path="doggallery/:id" element={<DogDetail />} />
          <Route
            path="resumepage"
            element={
              <Suspense fallback={<>...</>}>
                <ResumePage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={<p> yikes - there's nothing at this url. try again ? </p>}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
