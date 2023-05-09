import React from "react";
import "./Seremony.scss";
import Footer from "../../components/Footer/Footer";
import mobibles from '../../assets/mobile.svg';
import iboy from '../../assets/iboy.png';
import rightlongarr from "../../assets/rightlongarr.svg";
import rightarr from "../../assets/rightarr.svg";

const Seremony = () => {
  return (
    <>
      <section className="seremony">
        <div className="container">
          <div className="seremony__wrapper">
            <p>
              Главная <img src={rightlongarr} alt="" /> Мероприятия
            </p>

            <h2>Все мероприятия</h2>

            <div className="content">
              <div className="first_card">
                <div className="first">
                  <b>25</b>
                  <p>ноябрь</p>
                </div>
                <div className="second">
                  <h5>День открытых дверей </h5>
                  <p>
                    Приглашаем всех желающих на бесплатную экскурсию в мир
                    востребованных профессий и полезных навыков
                  </p>
                </div>

                <button>
                  Записаться <img src={rightarr} alt="" />
                </button>
              </div>

              <ul className="card_list">
                <li className="card_list_item">
                  <p>Встреча</p>

                  <div className="card_top">
                    <img src={mobibles} alt="" />
                    <h4>Заголовок мероприятия</h4>
                  </div>

                  <p className="desc">
                    Краткий анонс мероприятия в нескольких предложениях. Текст,
                    который будет заинтересовывать пользователя
                  </p>
                  <p className="duration">16 ноября 2021</p>
                </li>

                <li className="card_list_item">
                  <p>Встреча</p>

                  <div className="card_top">
                    <img src={mobibles} alt="" />
                    <h4>Заголовок мероприятия</h4>
                  </div>

                  <p className="desc">
                    Краткий анонс мероприятия в нескольких предложениях. Текст,
                    который будет заинтересовывать пользователя
                  </p>
                  <p className="duration">16 ноября 2021</p>
                </li>

                <li className="card_list_item">
                  <p>Встреча</p>

                  <div className="card_top">
                    <img src={mobibles} alt="" />
                    <h4>Заголовок мероприятия</h4>
                  </div>

                  <p className="desc">
                    Краткий анонс мероприятия в нескольких предложениях. Текст,
                    который будет заинтересовывать пользователя
                  </p>
                  <p className="duration">16 ноября 2021</p>
                </li>

                <li className="card_list_item">
                  <div className="">
                    <img src={iboy} alt="" />
                  </div>
                  <div className="">
                    <p>Встреча</p>

                    <div className="card_top">
                      <img src={mobibles} alt="" />
                      <h4>Заголовок мероприятия</h4>
                    </div>

                    <p className="desc">
                      Краткий анонс мероприятия в нескольких предложениях.
                      Текст, который будет заинтересовывать пользователя
                    </p>
                    <p className="duration">16 ноября 2021</p>
                  </div>
                </li>

                <li className="card_list_item">
                  <div className="card_top">
                    <h4>Заголовок мероприятия</h4>
                  </div>

                  <p className="desc">
                    Краткий анонс мероприятия в нескольких предложениях. Текст,
                    который будет заинтересовывать пользователя
                  </p>
                </li>

                <li className="card_list_item">
                  <p>Встреча</p>

                  <div className="card_top">
                    <img src={mobibles} alt="" />
                    <h4>Заголовок мероприятия</h4>
                  </div>

                  <p className="desc">
                    Краткий анонс мероприятия в нескольких предложениях. Текст,
                    который будет заинтересовывать пользователя
                  </p>
                  <p className="duration">16 ноября 2021</p>
                </li>

                <li className="card_list_item">
                  <p>Встреча</p>

                  <div className="card_top">
                    <img src={mobibles} alt="" />
                    <h4>Заголовок мероприятия</h4>
                  </div>

                  <p className="desc">
                    Краткий анонс мероприятия в нескольких предложениях. Текст,
                    который будет заинтересовывать пользователя
                  </p>
                  <p className="duration">16 ноября 2021</p>
                </li>

                <li className="card_list_item">
                  <p>Встреча</p>

                  <div className="card_top">
                    <img src={mobibles} alt="" />
                    <h4>Заголовок мероприятия</h4>
                  </div>

                  <p className="desc">
                    Краткий анонс мероприятия в нескольких предложениях. Текст,
                    который будет заинтересовывать пользователя
                  </p>
                  <p className="duration">16 ноября 2021</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Seremony;
