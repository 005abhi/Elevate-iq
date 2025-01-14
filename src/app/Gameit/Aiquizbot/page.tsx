"use client";
import { categories } from "./categories";
import { Button } from "./components/ui/button";
import { createPrompt, generateQuestion } from "./lib/ai";
import { string_between_strings } from "./lib/common";
import { Crown, Frown, RotateCcw, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Sidebar } from "../../components/Sidebar";
import "./globalss.css";

export default function Home() {
  const [categoriesData, setCategoriesData] = useState(categories);
  const [search, setSearch] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [correctAns, setCorrectAns] = useState(false);
  const [result, setResult] = useState(false);
  const [currentCate, setCurrentCate] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [time, setTime] = useState(10);
  const [quizData, setQuizData] = useState({
    question: "",
    options: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
    currentQuestion: 1,
    totalCorrectAnswers: 0,
  });

  const searchCategory = () => {
    let searchedCate = categories.filter((cate) => {
      return cate.name.toLowerCase().includes(search.toLowerCase());
    });
    setCategoriesData(searchedCate);
    searchedCate.length == 0 ? setHasError(true) : setHasError(false);
  };

  const startTimer = () => {
    if (time > 0) {
      setTime(time - 1);
    }
  };

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        startTimer();
      }, 1000);
      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [time]);

  const createQuiz = async (title: string, currentQuestion: number) => {
    setSelectedOption("");
    setIsLoading(true);
    setCurrentCate(title);
    setIsOpen(true);
    setCorrectAns(false);
    setCurrentQuestion(currentQuestion);
    let res: any = await createQuestion(title);
    let question = string_between_strings("[[", "]]", res);
    let opt1 = string_between_strings("$$", "$$", res);
    let opt2 = string_between_strings("@@", "@@", res);
    let opt3 = string_between_strings("##", "##", res);
    let opt4 = string_between_strings("&&", "&&", res);
    let correctAns = string_between_strings("~~~", "~~~", res);

    setQuizData({
      ...quizData,
      question,
      options: { a: opt1, b: opt2, c: opt3, d: opt4 },
      correctAnswer: correctAns,
      currentQuestion: currentQuestion,
    });
    setIsLoading(false);
    setTime(10);
    startTimer();
  };

  const createQuestion = async (title: string) => {
    let prompt: any = await createPrompt(title);
    if (prompt.status) {
      let exactPrompt = string_between_strings(
        "[[",
        "]]",
        prompt.generatedPrompt
      );
      let res = await generateQuestion(exactPrompt);
      if (res.status) {
        return res.question;
      } else {
        toast.error("Question can't be generated. Something went wrong.");
      }
    } else {
      toast.error("Question can't be generated. Something went wrong.");
    }
  };

  const checkAnswer = (ans: string, option: string) => {
    if (ans === quizData.correctAnswer) {
      setQuizData({
        ...quizData,
        totalCorrectAnswers: quizData.totalCorrectAnswers + 1,
      });
      setSelectedOption(option);
      if (quizData.currentQuestion === 10) {
        setResult(true);
      }
    } else {
      document.querySelectorAll(".optionsBox .option").forEach((opt) => {
        if (!opt.classList.contains("correct")) {
          opt.classList.add("wrong");
        }
      });
      setCorrectAns(true);
      if (quizData.currentQuestion === 10) {
        setResult(true);
      }
    }
  };

  return (
    <main className="layout w-full h-screen overflow-hidden">
      <div className="sidebar w-1/5 min-w-[200px] bg-black text-black h-screen fixed top-0 left-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="content w-full ml-[200px] h-screen overflow-y-auto px-8 py-6">
        {/* Header */}
        {/* Search Wrapper */}
        <div className="searchWrapper flex flex-col items-center mb-6">
          <div className="search-box flex items-center w-full max-w-md border border-gray-300 rounded-lg p-2">
            <button className="btn-search bg-indigo-500 text-black p-2 rounded-l-md">
              <Search />
            </button>
            <input
              type="text"
              className="input-search flex-grow px-3 py-2 focus:outline-none"
              placeholder="Type to Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                searchCategory();
              }}
            />
          </div>
        </div>

        {/* Error Handling */}
        {hasError ? (
          <div className="notFound flex flex-col items-center mt-8">
            <Frown className="h-[8rem] w-[8rem] text-[#5b4c6b]" />
            <div className="message text-[2rem] font-semibold text-[#5b4c6b]">
              Category Not Found
            </div>
          </div>
        ) : (
          /* Quiz Categories */
          <div className="quizCategories grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoriesData.map((cate, i) => (
              <figure
                key={i}
                className="border border-gray-700 bg-gray-900 text-black rounded-lg shadow-md p-4 transition-transform hover:scale-105 cursor-pointer"
                onClick={() => createQuiz(cate.name, 1)}
              >
                <img
                  src={`${cate.image}`}
                  alt={`${cate.name}`}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <figcaption className="text-center text-lg font-semibold">
                  {cate.name}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {/* Quiz Dialog */}
        <div className={`quizDailog ${isOpen ? "block" : "hidden"} bg-black`}>
          <header className="flex justify-between items-center text-white">
            <button
              className="text-white text-lg"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              &#8592; Back
            </button>
            <h5 className="text-white">Awesome Quiz</h5>
            <div className="rightOptions flex items-center">
              <Button
                className="bg-[#9a75c3] ml-3"
                onClick={() => {
                  setIsLoading(true);
                  createQuiz(currentCate, currentQuestion);
                }}
              >
                Change Question
              </Button>
            </div>
          </header>
          <main>
            {isLoading ? (
              <>
                <div className="h-[5rem] my-8 animate-pulse bg-white rounded-2xl"></div>
                <div className="options">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="h-[3.6rem] mb-6 animate-pulse bg-white rounded-2xl"
                    ></div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h1 style={{ color: "white" }}>
                  <b>Question:</b> {quizData.question}
                </h1>

                <div className="optionsBox">
                  {Object.entries(quizData.options).map(([key, value]) => (
                    <div
                      key={key}
                      className={`option ${
                        selectedOption === key ? "correct" : ""
                      } text-white`} // Added text-white here
                      onClick={() => checkAnswer(value, key)}
                    >
                      <b>{key.toUpperCase()})</b>&nbsp; {value}
                    </div>
                  ))}
                </div>
                <div
                  className={`${correctAns ? "block" : "hidden"} text-white`}
                >
                  <b>Correct Answer: </b>
                  {quizData.correctAnswer}
                </div>
              </>
            )}
          </main>
          <footer className="flex justify-between text-white">
            <div className="left">
              <p className="text-white">
                <span>{quizData.currentQuestion}</span> out of <span>10</span>
              </p>
            </div>
            <div className="right flex items-center">
              <Button className="mr-3 bg-transparent border-[#6d508e] border-[2px] hover:text-black text-[#6d508e] hover:bg-[#6d508e]">
                Exit Game
              </Button>
              <Button
                disabled={isLoading || quizData.currentQuestion === 10}
                className="bg-[#9a75c3] hover:bg-[#6d508e]"
                onClick={() => createQuiz(currentCate, currentQuestion + 1)}
              >
                Continue
              </Button>
            </div>
          </footer>
        </div>

        {/* Result Section */}
        <div
          className={`result ${
            result ? "flex" : "hidden"
          } flex-col items-center`}
        >
          <Crown className="h-[7rem] w-[7rem] !text-[#9a75c3]" />
          <h2 className="text-center">
            <b className="text-[3rem]">Congrats!</b>
            <br /> You have answered {quizData.totalCorrectAnswers} / 10 right!
          </h2>
          <Button className="mt-4 bg-[#6d508e] text-black">
            Play Again <RotateCcw className="h-[1.2rem] ml-2 w-[1.2rem]" />
          </Button>
        </div>
      </div>
    </main>
  );
}
