import React from "react";
import "./Footer.scss";
import vk from "../../assets/vk.svg";
import insta from "../../assets/insta.svg";
import fsb from "../../assets/fsb.svg";
import yt from "../../assets/yt.svg";
import Bird from "../../assets/bird.png";
import tg from "../../assets/tg.svg";
import logo from "../../assets/footerlogo.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="footer_card1">
              <li className="footer_card1_item">
                <a>
                  <img src={logo} alt="" />
                </a>
                <a href="tel:88009503398">8 800 950-33-98 </a>
                <address>г. Москва, ул. Ленина, д. 50</address>
                <a className="mail" href="mail:info@hodfutureacademy.ru">
                  info@hodfutureacademy.ru
                </a>
                <div className="social_icons">
                  <img src={vk} alt="" />
                  <img src={insta} alt="" />
                  <img src={fsb} alt="" />
                  <img src={yt} alt="" />
                  <img src={tg} alt="" />
                </div>
                <p className="copyright">© ХОД, Future Academy</p>
              </li>
            </ul>

            <ul className="footer_card2">
              <li className="footer_card2_item_title">Детям</li>
              <li className="footer_card2_item">Робототехника</li>
              <li className="footer_card2_item">Создание игр</li>
              <li className="footer_card2_item">Программирование</li>
              <li className="footer_card2_item">Мультимедиа</li>
              <li className="footer_card2_item">Soft skills</li>
              <li className="footer_card2_item">Шахматы</li>
              <li className="footer_card2_item">Блогинг</li>
              <li className="footer_card2_item">Создание игр</li>
              <li className="footer_card2_item">Программирование</li>
              <li className="footer_card2_item">Мультимедиа</li>
              <li className="footer_card2_item">Soft skills</li>
            </ul>

            <ul className="footer_card2">
              <li className="footer_card2_item_title">Подросткам</li>
              <li className="footer_card2_item">Web-разработка</li>
              <li className="footer_card2_item">Прикладное программирование</li>
              <li className="footer_card2_item">Графическое моделирование</li>
              <li className="footer_card2_item">Game Development</li>
              <li className="footer_card2_item">Soft skills</li>
              <li className="footer_card2_item">
                Разработчик мобильных приложений
              </li>
              <li className="footer_card2_item">Блогинг</li>
              <li className="footer_card2_item">Создание игр</li>
              <li className="footer_card2_item">Программирование</li>
              <li className="footer_card2_item">Мультимедиа</li>
              <li className="footer_card2_item">Soft skills</li>
            </ul>

            <ul className="footer_card2">
              <li className="footer_card2_item_title">Взрослым</li>
              <li className="footer_card2_item">Разработчик игр на Unity</li>
              <li className="footer_card2_item">Разработка ПО</li>
              <li className="footer_card2_item">Графический Дизайн</li>
              <li className="footer_card2_item">Тестировщик ПО</li>
              <li className="footer_card2_item">Интернет Маркетинг</li>
              <li className="footer_card2_item">Java-разработчик</li>
              <li className="footer_card2_item">Python–разработчик</li>
              <li className="footer_card2_item">IOS-разработчик</li>
              <li className="footer_card2_item">Программирование</li>
            </ul>

            <ul className="footer_card2">
              <li className="footer_card2_item_title">Информация</li>
              <li className="footer_card2_item">Об академии</li>
              <li className="footer_card2_item">Мероприятия</li>
              <li className="footer_card2_item">Новости</li>
              <li className="footer_card2_item">База знаний</li>
              <li className="footer_card2_item">Карьера</li>
              <li className="footer_card2_item">Контакты</li>
            </ul>

            <div className="register_sec">
              <img className="footerbird" src={Bird} alt="" />

              <div className="footer_desc">
                <h2>Помочь с выбором?</h2>
                <p>
                  Оставьте заявку и наши специалисты свяжутся с вами, ответят на
                  все вопросы и подберут подходящий вариант обучения.
                </p>
              </div>

              <div className="refister_form">
                <input type="text" placeholder="Ваше имя" />
                <div className="inside_form">
                  <input type="text" placeholder="Ваш телефон" />
                  <input type="text" placeholder="Ваш e-mail" />
                </div>
                <div className="submit_sec">
                  <p>
                    Нажимая на кнопку, я соглашаюсь на обработку персональных
                    данных и с правилами пользования Платформой
                  </p>

                  <button>Отправить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
