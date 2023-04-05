import { useRecoilState, useRecoilValue } from "recoil";
import { counterLengthState, counterState } from "./atom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import BenefitOfLegalCourses from "./components/BenefitOfLegalCourses";
import { Article } from "./components/Article";
import { Footer } from "./components/Footer";

function App() {
  const [counter, setCounter] = useRecoilState(counterState);

  const count = useRecoilValue(counterLengthState);

  return (
    <div className="App" dir="rtl">
      <Navbar />
      <Hero />
      <BenefitOfLegalCourses />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
