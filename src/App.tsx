import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import DetailsPage from "./Pages/DetailsPage";
import QuizPage from "./Pages/QuizPage";
import FAQ from "./Pages/FAQ";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/game/:id" element={<DetailsPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
