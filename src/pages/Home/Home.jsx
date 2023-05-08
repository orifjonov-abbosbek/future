import React from "react";
import Bap from "../../assets/herobgres.png";
import Bird from "../../assets/bird.png";
import child from "../../assets/children.svg";
import teen from "../../assets/teen.svg";
import elder from "../../assets/elder.svg";
import rightarr from "../../assets/rightarr.svg";
import playms from "../../assets/playms.png";
import monitor from "../../assets/monitor.svg";
import diagram from "../../assets/diagram.svg";
import news from "../../assets/newspaper.svg";
import contentlogo from "../../assets/contentlogo.svg";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <main>
        <section className="hero">
          <img className="res" src={Bap} alt="" />
          <div className="container">
            <div className="hero__wrapper">
              <div className="content">
                <h1>
                  Образовательная платформа
                  <br />
                  ХОД Future Academy
                </h1>

                <p>Актуальные знания для новичков и профессионалов</p>
              </div>
            </div>
          </div>
        </section>

        <section className="statistics">
          <div className="container">
            <div className="statistics__wrapper">
              <div className="statistics__desc">
                <h2>Кем вы хотите стать?</h2>
                <p>
                  Пора найти себя и выбрать подходящий курс :) <br /> <br />{" "}
                  Удачи!
                </p>
                <img src={Bird} alt="" />
              </div>

              <div className="content__sec">
                <ul className="content__nav">
                  <li className="content_nav_card">
                    <img src={child} alt="" />
                    <div className="">
                      <h3>Дети</h3>
                      <p>8 — 14 лет</p>
                    </div>
                  </li>
                  <li className="content_nav_card">
                    <img src={teen} alt="" />
                    <div className="">
                      <h3>Подростки</h3>
                      <p>14 — 18 лет</p>
                    </div>
                  </li>
                  <li className="content_nav_card">
                    <img src={elder} alt="" />
                    <div className="">
                      <h3>Взрослые</h3>
                      <p>18 — ∞ </p>
                    </div>
                  </li>
                </ul>

                <div className="sections">
                  <p>Робототехника</p>
                  <p>Создание игр</p>
                  <p>Web-разработка</p>
                  <p>Мультимедиа</p>
                  <p>Шахматы</p>
                  <p>3D-моделирование и дизайн</p>
                  <p>Английский язык</p>
                  <p>Блогинг</p>
                  <p>Soft skills</p>
                </div>

                <img className="playms" src={playms} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="shop">
          <div className="container">
            <div className="shop__wrapper">
              <h2>
                Актуальные знания от признанных экспертов рынка для новичков и
                практикующих специалистов.
              </h2>

              <div className="results">
                <div className="card">
                  <b>600</b>
                  <p>Курсов</p>
                </div>
                <div className="card">
                  <b>82</b>
                  <p>
                    Ведущих <br /> преподавателей
                  </p>
                </div>
                <div className="card">
                  <b>14 795</b>
                  <p>Выпускников</p>
                </div>
              </div>

              <div className="result_content">
                <div className="first_card">
                  <div className="first">
                    <b>25</b>
                    <p> ноябрь</p>
                  </div>

                  <div className="second">
                    <h4>День открытых дверей </h4>
                    <p>
                      Приглашаем всех желающих на бесплатную экскурсию в мир
                      востребованных профессий и полезных навыков
                    </p>
                  </div>
                  <button>
                    Записаться <img src={rightarr} alt="" />
                  </button>
                </div>

                <div className="second_content">
                  <div className="first">
                    <img src={monitor} alt="" />
                    <h3>Программы обучения</h3>
                    <p>
                      В списке наших курсов вы сможете найти профессию и занятие
                      по душе, изучить новое и получить практические знания,
                      которые помогут получить работу мечты.
                    </p>
                    <button className="second_button">
                      Подробнее <img src={rightarr} alt="" />
                    </button>
                  </div>
                 <div className="wrapper">

                  <div className="second">
                    <div className="first_card">
                      <img src={news} alt="" />
                      <p>Новости Академии</p>
                    </div>

                    <div className="second_card">
                      <img src={diagram} alt="" />
                      <p>Мир IT</p>
                    </div>
                  </div>

                <div className="third_card">
                  <img src={contentlogo} alt="" />

                  <div className="third_card_content">
                    <h3>Попробуй!</h3>
                    <p>
                      Пройдите тест и узнайте свои способности в сфере
                      информационных технологий
                    </p>
                  </div>
                 </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
