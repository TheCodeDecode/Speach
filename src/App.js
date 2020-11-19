import React, { useEffect, useState } from "react";
import "./App.css";
import * as moment from "moment";
const SpeechRecoginition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const mic = new SpeechRecoginition();
mic.continous = true;
mic.intermResults = true;
mic.lang = "en-US";

function App() {
  const [isListening, setIsListening] = useState(false);
  const [news, setNews] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        mic.start();
      };

      mic.onstart = () => {
        console.log("MICS on");
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("stopped mic");
      };
    }

    mic.onresult = (event) => {
      console.log(event, "event");

      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

      VoiceShow(transcript);
      setKeyword(transcript);
    };
    mic.onerror = () => {
      mic.stop();
      console.log("Please connect mic");
    };
  };

  const VoiceShow = (transcript) => {
    var synthesis = window.speechSynthesis;

    var voice = synthesis.getVoices().filter(function (voice) {
      return voice.lang === "en";
    })[0];
    var utterance = new SpeechSynthesisUtterance(
      "Seraching news for " + transcript
    );

    utterance.voice = voice;
    utterance.pitch = 1.5;
    utterance.rate = 1.25;
    utterance.volume = 0.8;
    synthesis.speak(utterance);

    const fetchData = async (transcript) => {
      const url = `http://newsapi.org/v2/everything?q=${transcript}&sortBy=publishedAt&apiKey=ba8a44f45f7b47e7b1402ced82e3c743`;
      const data = await (await fetch(url)).json();
      setNews(data.articles);
    };
    fetchData(transcript);
  };
  let defaultImage =
    "https://discountseries.com/wp-content/uploads/2017/09/default.jpg";
  return (
    <>
      <div className="jumbotron text-center banner">
        <h2 className="mb-3">Voice Search</h2>
        <button
          className="btn btn-danger"
          onClick={() => setIsListening((prev) => !prev)}
        >
          {isListening ? "Listening" : "Not Listening"}
        </button>
        <p className="mt-4" style={{ fontSize: "18px" }}>
          Seraching news for :<b> {keyword}</b>
        </p>
      </div>
      <div className="container">
        {news &&
          news.map((item) => (
            <div className="list_section mb-4">
              <div className="row">
                <div className="col-lg-3">
                  <div className="">
                    <img
                      src={item.urlToImage || defaultImage}
                      className="img-fluid imgborder"
                    />
                  </div>
                </div>
                <div className="col-lg-9 col-md-9">
                  <div className="result-content">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <h6>{moment(item.publishedAt).format("MMM Do YYYY")}</h6>
                    <div className="text-right">
                      <a
                        href={item.url}
                        target="_blank"
                        className="btn btn-custom"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
