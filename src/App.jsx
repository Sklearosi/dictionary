import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [currentFont, setCurrentFont] = useState("Sans Serif");
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [word, setWord] = useState("keyboard");
  const [info, setInfo] = useState({
    phonetic: ``,
    voice: [],
    noun: [],
    verb: [],
    synonyms: [],
    sourceUrl: "",
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(123);
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );

        const phonetics = response.data[0].phonetics;
        const nonEmptyPhonetic = phonetics.find((voice) => voice.audio !== "");

        setInfo({
          phonetic: response.data[0].phonetic,
          voice: nonEmptyPhonetic.audio,
          noun: response.data[0].meanings[0].definitions,
          verb: response.data[0].meanings[1].definitions,
          synonyms: response.data[0].meanings[0].synonyms,
          sourceUrl: response.data[0].sourceUrls[0],
        });

        console.log(response.data[0]);
      } catch (error) {}
    };

    getData();
  }, [word]);

  return (
    <>
      <div className=" flex justify-between items-center w-mobWidth m-mobMargin mt-4">
        <img className=" w-7 h-8" src="/assets/images/logo.svg" alt="" />
        <div className=" w-48 flex justify-evenly items-center">
          <div className="">
            <div className=" relative">
              <div
                className="flex justify-between items-center pr-2 border-r-2 border-borderRight"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <p className=" mr-3">{currentFont}</p>
                <img src="/assets/images/icon-arrow-down.svg" />{" "}
              </div>
              <ul
                className={` opacity-100 z-10 transition-all duration-400 overflow-hidden absolute top-8 right-1 rounded-lg shadow-listShadow w-32 ${
                  !isOpen ? "h-0" : "h-37 p-3"
                }`}
              >
                <li
                  onClick={() => {
                    setCurrentFont("Sans Serif");
                    setIsOpen(!isOpen);
                  }}
                  className=" hover:text-hoverColor"
                >
                  Sans Serif
                </li>
                <li
                  onClick={() => {
                    setCurrentFont("Serif");
                    setIsOpen(!isOpen);
                  }}
                  className=" hover:text-hoverColor"
                >
                  Serif
                </li>
                <li
                  onClick={() => {
                    setCurrentFont("Mono");
                    setIsOpen(!isOpen);
                  }}
                  className=" hover:text-hoverColor"
                >
                  Mono
                </li>
              </ul>
            </div>
          </div>
          <div className=" w-20 flex justify-evenly items-center">
            <label
              htmlFor="toggleCheck"
              className={`relative w-forCircle h-5 ${
                !isChecked ? "bg-toggleBgColor" : " bg-hoverColor "
              } rounded-xl`}
            >
              <div
                className={` transition-all duration-300  ${
                  isChecked ? "left-6" : null
                } rounded-full bg-white w-toggleCircle h-toggleCircle absolute top-0 bottom-0 m-toggleMargin left-1`}
              ></div>
            </label>
            <input
              className=" hidden"
              type="checkbox"
              id="toggleCheck"
              onChange={(e) => {
                e.target.checked
                  ? setIsChecked(!isChecked)
                  : setIsChecked(!isChecked);
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
            >
              <path
                fill="none"
                stroke={!isChecked ? "#838383" : "#A445ED"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className=" bg-inputDiv w-mobWidth h-12 rounded-xl flex justify-between items-center m-auto mt-8">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          className=" w-searchInput ml-4 bg-transparent focus:outline-none"
        />
        <img
          onClick={() => {
            console.log(input);
            setWord(input);
          }}
          className=" mr-4"
          src="/assets/images/icon-search.svg"
          alt=""
        />
      </div>
      <div className="flex justify-between items-center w-mobWidth m-auto mt-9">
        <div className=" grid gap-4">
          <h1 className="text-4xl font-bold leading-10 tracking-normal text-left text-gray-700 ">
            {word}
          </h1>
          <p className="text-lg font-normal leading-6 tracking-normal text-left text-purple-600">
            {info.phonetic}
          </p>
        </div>
        <button>
          <img
            className=" w-12 h-12"
            onClick={() => {
              let audio = new Audio(info.voice);
              audio.play();
            }}
            src="/assets/images/icon-play.svg"
            alt=""
          />
        </button>
      </div>

      <fieldset className="border-t w-mobWidth m-auto mt-7">
        <legend className=" pr-5  text-lg font-bold leading-5 tracking-normal text-left text-gray-900">
          noun
        </legend>
        <p className="text-base font-normal leading-5 tracking-normal text-left mt-8">
          Meaning
        </p>

        <ul className="  mt-4 grid gap-2">
          {info.noun.map((noun, index) => (
            <li key={index} className="flex ">
              <div className="w-1 h-1 rounded-full mt-2.5 bg-purple-500"></div>
              <p className=" w-11/12 ml-5 text-sm font-normal leading-6 tracking-normal text-left text-gray-900">
                {noun.definition}
              </p>
            </li>
          ))}
        </ul>
      </fieldset>

      {info.synonyms.length > 0 ? (
        <div className=" break-words flex items-start gap-3 w-mobWidth m-auto mt-4">
          <p>Synonyms</p>
          <div className="flex flex-wrap overflow-hidden gap-2">
            {info.synonyms.map((synonym, inedx) => {
              return (
                <p
                  className="text-16 font-bold leading-19 tracking-normal text-left text-purple-500"
                  key={inedx}
                >
                  {synonym}
                </p>
              );
            })}
          </div>
        </div>
      ) : null}

      <fieldset className="border-t w-mobWidth m-auto mt-7">
        <legend className=" pr-5  text-lg font-bold leading-5 tracking-normal text-left text-gray-900">
          verb
        </legend>
        <p className="text-base font-normal leading-5 tracking-normal text-left mt-8">
          Meaning
        </p>

        <ul className="  mt-4 grid gap-2">
          {info.verb.map((verb, index) => (
            <li key={index} className="flex ">
              <div className="w-1 h-1 rounded-full mt-2.5 bg-purple-500"></div>
              <p className=" w-11/12 ml-5 text-sm font-normal leading-6 tracking-normal text-left text-gray-900">
                {verb.definition}
              </p>
            </li>
          ))}
        </ul>
      </fieldset>

      <div className=" w-mobWidth m-auto mt-6 border-t-borderWidthOne pt-4 pb-8">
        <p className="text-sm font-normal leading-5 tracking-normal text-left text-gray-600">
          Source
        </p>
        <a target="_blank"
          className="flex text-sm font-normal leading-5 tracking-normal text-left text-gray-900 items-center"
          href={info.sourceUrl}
        >
          {info.sourceUrl}
          <img
            className="ml-2 w-3 h-3"
            src="/assets/images/icon-new-window.svg"
            alt=""
          />
        </a>
      </div>
    </>
  );
}

export default App;
