import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { ConfigProvider, App as AntApp, theme as antTheme } from "antd";
import Layout from "./components/Layout/Layout";
import { useTheme } from "./hooks/useTheme";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails/ProjectDetails"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function Loading() {
  return (
    <div className="grid place-items-center min-h-[40vh] text-[var(--text-muted)]">
      <p>Loading...</p>
    </div>
  );
}

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm:
          theme === "dark" ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
        token: {
          colorPrimary: theme === "dark" ? "#818cf8" : "#4f46e5",
          colorBgBase: theme === "dark" ? "#0d0f16" : "#ffffff"
        }
      }}
    >
      <AntApp>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout theme={theme} toggleTheme={toggleTheme} />}>
              <Route
                path="/"
                element={
                  <Suspense fallback={<Loading />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path="/about"
                element={
                  <Suspense fallback={<Loading />}>
                    <About />
                  </Suspense>
                }
              />
              <Route
                path="/skills"
                element={
                  <Suspense fallback={<Loading />}>
                    <Skills />
                  </Suspense>
                }
              />
              <Route
                path="/projects"
                element={
                  <Suspense fallback={<Loading />}>
                    <Projects />
                  </Suspense>
                }
              />
              <Route
                path="/projects/:slug"
                element={
                  <Suspense fallback={<Loading />}>
                    <ProjectDetails />
                  </Suspense>
                }
              />
              <Route
                path="/contact"
                element={
                  <Suspense fallback={<Loading />}>
                    <Contact />
                  </Suspense>
                }
              />
              <Route
                path="*"
                element={
                  <Suspense fallback={<Loading />}>
                    <NotFound />
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AntApp>
    </ConfigProvider>
  );
}

export default App;
