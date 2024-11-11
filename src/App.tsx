import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  PageAboutMe,
  PageContact,
  PageHome,
  PageNotFound,
  PageProjects,
  PageProjectSlug,
} from "./pages";
import { Suspense } from "react";
import { Loading } from "./layouts";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation("translation");
  const translation = {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
  return (
    <>
      <Helmet>
        <title>{translation.title}</title>
        <meta name="description" content={translation.description} />
      </Helmet>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/about-me" element={<PageAboutMe />} />
            <Route path="/projects" element={<PageProjects />} />
            <Route path="/projects/:slug" element={<PageProjectSlug />} />
            <Route path="/contact" element={<PageContact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
