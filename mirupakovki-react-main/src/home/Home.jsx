import React from "react";
import "./home.css";
import HomeFirstBlock from "../components/homeFirstBlock/HomeFirstBlock";
import HomeThirdBlock from "../components/homeThirdBlock/HomeThirdBlock";
import HomeSecondBlock from "../components/homeSecondBlock/HomeSecondBlock";
import HomeFourthBlock from "../components/homeFourthBlock/HomeFourthBlock";

const Home = () => {
  return (
    <main className="home">
      <div className="wrapper-home">
        <HomeFirstBlock />
      </div>
      <div className="second-home">
        <HomeSecondBlock />
      </div>
      <div className="third-home">
        <HomeThirdBlock />
      </div>
      <div className="fourth-home">
      <HomeFourthBlock />
      </div>
    </main>
  );
};

export default Home;
