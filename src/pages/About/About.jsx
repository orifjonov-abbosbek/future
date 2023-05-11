import React from "react";
import Bird from "../../assets/bird.png";
import boldx from "../../assets/boldx.svg";
import "./About.scss";

const About = () => {
  return (
    <>
      <main>
        <section className="about__hero">
          <div className="container">
            <div className="hero__wrapper">
              <h2>
                Образовательная платформа <br /> ХОД Future Academy
              </h2>

              <p>Актуальные знания для новичков и профессионалов</p>
            </div>
          </div>
        </section>

        <section className="intro">
          <div className="container">
            <div className="intro__wrapper">
              <div className="about__desc">
                <h2>Кем вы хотите стать?</h2>
                <p>
                  Пора найти себя и выбрать подходящий курс :) <br /> <br />{" "}
                  Удачи!
                </p>
                <img src={Bird} alt="" />
              </div>

              <ul>
                <li>
                  <img src={boldx} alt="" />

                  <h3>Мы создали Академию </h3>

                  <p>
                    для детей, чтобы компьютер был не зависимостью и игрушкой, а
                    другом на пути обучения и развития.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
