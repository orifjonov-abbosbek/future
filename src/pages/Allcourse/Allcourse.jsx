import React from "react";
import "./Allcourse.scss";
import child from "../../assets/children.svg";
import teen from "../../assets/teen.svg";
import elder from "../../assets/elder.svg";
import mobibles from "../../assets/mobile.svg";
import Footer from "../../components/Footer/Footer";

const Allcourse = () => {
  return (
    <>
      <section className="allcourse">
        <div className="container">
          <div className="allcourse__wrapper">
            <h2>Все программы обучения</h2>
            <div className="head">
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
              <div className="line"></div>
            </div>

            <div className="content">
              <div className="leftside">
                <h3>Уровень сложности</h3>

                {[
                  "Новичок",
                  "Пользователь",
                  "Профессионал",
                  "Профессионал",
                ].map((label, index) => (
                  <label htmlFor={`radio-${index}`} key={`radio-${index}`}>
                    <input
                      type="radio"
                      name="user-type"
                      id={`radio-${index}`}
                    />
                    {label}
                  </label>
                ))}

                <div className="line2"></div>

                <h3>Тип обучения</h3>

                {["Любой", "Профессия", "Курс"].map((label, index) => (
                  <label htmlFor={`radio2-${index}`} key={`radio2-${index}`}>
                    <input
                      type="radio"
                      name="learning-type"
                      id={`radio2-${index}`}
                    />
                    {label}
                  </label>
                ))}

                <div className="line2"></div>

                <h3 style={{ fontWeight: "800" }}>Длительность</h3>
                <p className="before_range">от 1 до 24 месяцев</p>

                <input className="range" type="range" />

                <div className="banner">Баннер 280х400</div>
              </div>

              <div className="card_content">
                <h3>Направление</h3>

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

                <ul className="card_list">
                  <li className="card_list_item">
                    <p>Программа</p>

                    <div className="card_top">
                      <img src={mobibles} alt="" />
                      <h4>«Разработка мобильных приложений»</h4>
                    </div>

                    <p className="desc">
                      Разработчик мобильных приложений создаёт приложения,
                      которыми люди ежедневно пользуются на смартфонах, умных
                      часах и планшетах.{" "}
                    </p>
                    <p className="duration">24 месяца</p>
                  </li>

                  <li className="card_list_item">
                    <p>Программа</p>

                    <div className="card_top">
                      <img src={mobibles} alt="" />
                      <h4>«Разработка мобильных приложений»</h4>
                    </div>

                    <p className="desc">
                      Разработчик мобильных приложений создаёт приложения,
                      которыми люди ежедневно пользуются на смартфонах, умных
                      часах и планшетах.{" "}
                    </p>
                    <p className="duration">24 месяца</p>
                  </li>

                  <li className="card_list_item">
                    <p>Программа</p>

                    <div className="card_top">
                      <img src={mobibles} alt="" />
                      <h4>«Разработка мобильных приложений»</h4>
                    </div>

                    <p className="desc">
                      Разработчик мобильных приложений создаёт приложения,
                      которыми люди ежедневно пользуются на смартфонах, умных
                      часах и планшетах.{" "}
                    </p>
                    <p className="duration">24 месяца</p>
                  </li>
                  <li className="card_list_item">
                    <p>Программа</p>

                    <div className="card_top">
                      <img src={mobibles} alt="" />
                      <h4>«Разработка мобильных приложений»</h4>
                    </div>

                    <p className="desc">
                      Разработчик мобильных приложений создаёт приложения,
                      которыми люди ежедневно пользуются на смартфонах, умных
                      часах и планшетах.{" "}
                    </p>
                    <p className="duration">24 месяца</p>
                  </li>
                  <li className="card_list_item">
                    <p>Программа</p>

                    <div className="card_top">
                      <img src={mobibles} alt="" />
                      <h4>«Разработка мобильных приложений»</h4>
                    </div>

                    <p className="desc">
                      Разработчик мобильных приложений создаёт приложения,
                      которыми люди ежедневно пользуются на смартфонах, умных
                      часах и планшетах.{" "}
                    </p>
                    <p className="duration">24 месяца</p>
                  </li>
                  <li className="card_list_item">
                    <p>Программа</p>

                    <div className="card_top">
                      <img src={mobibles} alt="" />
                      <h4>«Разработка мобильных приложений»</h4>
                    </div>

                    <p className="desc">
                      Разработчик мобильных приложений создаёт приложения,
                      которыми люди ежедневно пользуются на смартфонах, умных
                      часах и планшетах.{" "}
                    </p>
                    <p className="duration">24 месяца</p>
                  </li>
                  <li className="card_list_item">
                    <p>Программа</p>

                    <div className="card_top">
                      <img src={mobibles} alt="" />
                      <h4>«Разработка мобильных приложений»</h4>
                    </div>

                    <p className="desc">
                      Разработчик мобильных приложений создаёт приложения,
                      которыми люди ежедневно пользуются на смартфонах, умных
                      часах и планшетах.{" "}
                    </p>
                    <p className="duration">24 месяца</p>
                  </li>
                  <li className="card_list_item">
                    <p>Программа</p>

                    <div className="card_top">
                      <img src={mobibles} alt="" />
                      <h4>«Разработка мобильных приложений»</h4>
                    </div>

                    <p className="desc">
                      Разработчик мобильных приложений создаёт приложения,
                      которыми люди ежедневно пользуются на смартфонах, умных
                      часах и планшетах.{" "}
                    </p>
                    <p className="duration">24 месяца</p>
                  </li>
                  <li className="card_list_item">
                    <p>Программа</p>

                    <div className="card_top">
                      <img src={mobibles} alt="" />
                      <h4>«Разработка мобильных приложений»</h4>
                    </div>

                    <p className="desc">
                      Разработчик мобильных приложений создаёт приложения,
                      которыми люди ежедневно пользуются на смартфонах, умных
                      часах и планшетах.{" "}
                    </p>
                    <p className="duration">24 месяца</p>
                  </li>
                  <li className="card_list_item">
                    <p>Программа</p>

                    <div className="card_top">
                      <img src={mobibles} alt="" />
                      <h4>«Разработка мобильных приложений»</h4>
                    </div>

                    <p className="desc">
                      Разработчик мобильных приложений создаёт приложения,
                      которыми люди ежедневно пользуются на смартфонах, умных
                      часах и планшетах.{" "}
                    </p>
                    <p className="duration">24 месяца</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Allcourse;
