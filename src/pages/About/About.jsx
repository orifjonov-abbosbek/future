import React from "react";
import Bird from "../../assets/bird.png";
import boldx from "../../assets/boldx.svg";
import iboyint from "../../assets/iboyint.png";
import story from "../../assets/story.png";
import card1 from "../../assets/card1.png";
import boy from "../../assets/boy.png";
import teen from "../../assets/teen.svg";
import book from "../../assets/book.png";
import guser from "../../assets/guser.png";
import desk from "../../assets/desk.png";
import tinkof from "../../assets/tinkof.png";
import alfabank from "../../assets/alfabank.png";
import pvk from "../../assets/pvk.png";
import avito from "../../assets/avito.png";
import budget from "../../assets/budget.png";
import mobilegame from "../../assets/mobilegame.png";
import it from "../../assets/it.png";
import playtime from "../../assets/playtime.svg";
import Footer from "../../components/Footer/Footer";

import "./About.scss";

const About = () => {
  return (
    <main>
      <section className="hero">
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
              <div className="border"></div>
              <h2>Приветствуем в Академии будущего ХОД!</h2>
              <p>Вам у нас понравится:)</p>
              <img src={Bird} alt="bird" />
            </div>
            <ul>
              <li>
                <img src={boldx} alt="boldx" />
                <h3>Мы создали Академию </h3>
                <p>
                  для детей, чтобы компьютер был не зависимостью и игрушкой, а
                  другом на пути обучения и развития.
                </p>
              </li>
              <li>
                <img src={boldx} alt="boldx" />
                <h3>Мы создали Академию </h3>
                <p>
                  для детей, чтобы компьютер был не зависимостью и игрушкой, а
                  другом на пути обучения и развития.
                </p>
              </li>
              <li>
                <img src={boldx} alt="boldx" />
                <h3>Мы создали Академию </h3>
                <p>
                  для детей, чтобы компьютер был не зависимостью и игрушкой, а
                  другом на пути обучения и развития.
                </p>
              </li>
            </ul>
          </div>
          <div className="iboyint">
            <img src={iboyint} alt="" />
          </div>
        </div>
      </section>

      <section className="story">
        <div className="container">
          <div className="story__wrapper">
            <div className="info_box">
              <img src={story} alt="" />

              <h2>Имя Фамилия</h2>
              <p>Основатель Академии будущего ХОД</p>
            </div>

            <p>
              «Все началось с любви к шахматам. Я хотел предвидеть ход
              противника, хотел просчитать его действия, хотел побеждать. Я не
              стал гением шахмат, но стратег и психолог из меня неплохой» -
              смеется Иван Иванович. Идея открыть Академию шахмат пришла к нему
              в 2020 году, когда в период полного локдауна он вдруг вспомнил про
              хобби - игру в шахматы. Оказалось, что для игры в шахматы сейчас и
              доска-то не обязательна, все есть в телефоне. Племянник (сын?)
              Ивана Ивановича большую часть дня проводил в стрелялках на
              планшете. <br /> <br /> «Я показал ему шахматы. К июню он уже был
              неплохим соперником» - Вскоре идея небольшой академии шахмат
              превратилась в план создания Академии Будущего, где дети смогут
              учиться тому, что им нравится, а взрослые попытаются изменить
              жизнь. Уж очень это сейчас актуально". <br />
              <br />
              <span>
                Из интервью с основателем Академии Будущего Ивановым И.И.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="cost">
        <div className="container">
          <div className="cost__wrapper">
            <h2>Наши ценности</h2>

            <ul>
              <li>
                <img src={card1} alt="" />
                <p>
                  Содержание обучения должно быть актуальным, а методика
                  проверенная годами.
                </p>
              </li>
              <li>
                <img src={boy} alt="" />
                <p>
                  Точка развития образования - ребенок, его интересы и
                  потребности
                </p>
              </li>

              <li>
                <img src={teen} alt="" />
                <p>
                  Точка развития образования - ребенок, его интересы и
                  потребности
                </p>
              </li>

              <li>
                <img src={book} alt="" />
                <p>Прогрессом правит любовь к знаниям </p>
              </li>

              <li>
                <img src={desk} alt="" />
                <p>
                  Технологии правят миром, а человек эти технологии создает{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="stuffs">
        <div className="container">
          <div className="stuffs__wrapper">
            <h2>Наши люди</h2>

            <ul>
              <li>
                <div className="img_box">
                  <div className="border"></div>
                  <img src={guser} alt="" />
                </div>

                <h3>Имя Фамилия</h3>

                <p>
                  Выпускница Гарвардского Университета. Более 10 лет играет в
                  шахматы и участвует в турнирах.
                </p>
              </li>

              <li>
                <div className="img_box">
                  <div className="border"></div>
                  <img src={guser} alt="" />
                </div>

                <h3>Имя Фамилия</h3>

                <p>
                  Выпускница Гарвардского Университета. Более 10 лет играет в
                  шахматы и участвует в турнирах.
                </p>
              </li>

              <li>
                <div className="img_box">
                  <div className="border"></div>
                  <img src={guser} alt="" />
                </div>

                <h3>Имя Фамилия</h3>

                <p>
                  Выпускница Гарвардского Университета. Более 10 лет играет в
                  шахматы и участвует в турнирах.
                </p>
              </li>

              <li>
                <div className="img_box">
                  <div className="border"></div>
                  <img src={guser} alt="" />
                </div>

                <h3>Имя Фамилия</h3>

                <p>
                  Выпускница Гарвардского Университета. Более 10 лет играет в
                  шахматы и участвует в турнирах.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="programs">
        <div className="container">
          <div className="programs__wrapper">
            <h2>Наши программы</h2>

            <ul>
              <li>
                <p>Предполагают пролонгированное обучение</p>
              </li>
              <li>
                <p>
                  Составлены с учетом возрастных и индивидуальных особенностей
                  детей
                </p>
              </li>
              <li>
                <p>Авторские и не имеют аналогов</p>
              </li>
              <li>
                <p>
                  Составлены на основе деятельностного и компетентностного
                  подходов
                </p>
              </li>
              <li>
                <p>
                  Реализуются с помощью современных педагогических технологий
                </p>
              </li>
              <li>
                <p>Актуальны и фундаментальны</p>
              </li>
            </ul>

            <ol>
              <li>
                <b>600</b>
                <p>Курсов</p>
              </li>

              <li>
                <b>82</b>
                <p>
                  Ведущих <br /> преподавателей
                </p>
              </li>

              <li>
                <b>14 795</b>
                <p>Выпускников</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="partners">
        <div className="container">
          <div className="partners__wrapper">
            <h2>Наши партнеры</h2>
            <ul>
              <li>
                <img src={tinkof} alt="" />
              </li>
              <li>
                <img src={alfabank} alt="" />
              </li>
              <li>
                <img src={pvk} alt="" />
              </li>
              <li>
                <img src={avito} alt="" />
              </li>
              <li>
                <img src={avito} alt="" />
              </li>
              <li>
                <img src={tinkof} alt="" />
              </li>
              <li>
                <img src={pvk} alt="" />
              </li>
              <li>
                <img src={avito} alt="" />
              </li>
              <li>
                <img src={avito} alt="" />
              </li>
              <li>
                <img src={alfabank} alt="" />
              </li>
              <li>
                <img src={tinkof} alt="" />
              </li>
              <li>
                <img src={alfabank} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="foru">
        <div className="container">
          <div className="foru__wrapper">
            <h2>Нажми, если это о тебе</h2>

            <ul>
              <li>
                <img src={playtime} alt="" />

                <p>Я хочу, чтобы мой ребенок был успешным</p>
              </li>
              <li>
                <img src={budget} alt="" />

                <p>Я хочу больше зарабатывать</p>
              </li>
              <li>
                <img src={mobilegame} alt="" />

                <p>Мой ребенок не выпускает гаджет из рук</p>
              </li>
              <li>
                <img src={it} alt="" />

                <p>Я хочу стать айтишником</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
