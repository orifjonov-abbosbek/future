import React, { useState } from "react";
import All from "../../assets/allcourse.svg";
import Ham from "../../assets/hamburger.svg";
import Loc from "../../assets/location.svg";
import Arr from "../../assets/arrow.svg";
import Usr from "../../assets/usr.svg";
import close from "../../assets/close.svg";
import "./Header.scss";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [selectedOption, setSelectedOption] = useState("Select an option");

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__wrapper">
            <Link to="/">
              <a className="logo" href="">
                <svg
                  className="logo"
                  width="100"
                  height="71"
                  viewBox="0 0 100 71"
                  fill="none"
                >
                  <path
                    d="M16.4671 70.6464C7.38524 70.6464 0 63.2611 0 54.1793C0 45.0974 7.38524 37.7122 16.4671 37.7122C25.549 37.7122 32.9342 45.0974 32.9342 54.1793C32.9342 63.311 25.549 70.6464 16.4671 70.6464Z"
                    fill="#00093C"
                  />
                  <path
                    d="M16.4671 70.6464C7.38524 70.6464 0 63.2611 0 54.1793C0 45.0974 7.38524 37.7122 16.4671 37.7122C25.549 37.7122 32.9342 45.0974 32.9342 54.1793C32.9342 63.311 25.549 70.6464 16.4671 70.6464Z"
                    fill="#00093C"
                  />
                  <path
                    d="M55.3895 1.8336L37.5251 31.0253C37.0261 31.8736 37.575 32.9215 38.5232 32.9215H56.3875H74.2518C75.1999 32.9215 75.7488 31.8237 75.2498 31.0253L57.3855 1.8336C56.8865 1.08509 55.8386 1.08509 55.3895 1.8336Z"
                    fill="#00093C"
                  />
                  <path
                    d="M32.5847 6.77396L26.1475 0.336827C25.6984 -0.112276 24.9 -0.112276 24.4509 0.336827L17.3651 7.42267C16.916 7.87177 16.1176 7.87177 15.6685 7.42267L8.58263 0.336827C8.13353 -0.112276 7.33513 -0.112276 6.88602 0.336827L0.448888 6.77396C-0.000215136 7.22307 -0.000215136 8.02147 0.448888 8.47058L7.53472 15.5564C7.98382 16.0055 7.98382 16.8039 7.53472 17.253L0.448888 24.3389C-0.000215136 24.788 -0.000215136 25.5864 0.448888 26.0355L6.88602 32.4726C7.33513 32.9217 8.13353 32.9217 8.58263 32.4726L15.6685 25.3868C16.1176 24.9377 16.916 24.9377 17.3651 25.3868L24.4509 32.4726C24.9 32.9217 25.6984 32.9217 26.1475 32.4726L32.5847 26.0355C33.0338 25.5864 33.0338 24.788 32.5847 24.3389L25.4988 17.253C25.0497 16.8039 25.0497 16.0055 25.4988 15.5564L32.5847 8.47058C33.0837 8.02147 33.0837 7.27297 32.5847 6.77396Z"
                    fill="#00093C"
                  />
                  <path
                    d="M40.6685 49.0892V51.185H44.3112V52.6321H40.6685V55.4764H38.8721V47.6421H44.7603V49.0892H40.6685Z"
                    fill="black"
                  />
                  <path
                    d="M47.2058 54.678C46.607 54.0792 46.2577 53.181 46.2577 52.0333V47.6421H48.0541V51.9335C48.0541 53.3307 48.6529 54.0293 49.8006 54.0293C50.3495 54.0293 50.7986 53.8796 51.098 53.5303C51.3974 53.181 51.5471 52.682 51.5471 51.9335V47.6421H53.3435V52.0333C53.3435 53.181 53.0441 54.0792 52.3954 54.678C51.7966 55.2768 50.8984 55.6261 49.8006 55.6261C48.7028 55.6261 47.8046 55.2768 47.2058 54.678Z"
                    fill="black"
                  />
                  <path
                    d="M56.9361 49.1391H54.441V47.6421H61.2275V49.1391H58.7325V55.4764H56.9361V49.1391Z"
                    fill="black"
                  />
                  <path
                    d="M63.2733 54.678C62.6745 54.0792 62.3252 53.181 62.3252 52.0333V47.6421H64.1216V51.9335C64.1216 53.3307 64.7204 54.0293 65.8681 54.0293C66.417 54.0293 66.8661 53.8796 67.1655 53.5303C67.4649 53.181 67.6146 52.682 67.6146 51.9335V47.6421H69.411V52.0333C69.411 53.181 69.1116 54.0792 68.4629 54.678C67.8641 55.2768 66.9659 55.6261 65.8681 55.6261C64.7703 55.6261 63.922 55.2768 63.2733 54.678Z"
                    fill="black"
                  />
                  <path
                    d="M76.4971 55.4768L75.0001 53.2812H74.9003H73.3035V55.4768H71.5071V47.6924H74.9003C75.5989 47.6924 76.1977 47.7922 76.6967 48.0417C77.1957 48.2912 77.5949 48.5906 77.8943 49.0397C78.1438 49.4389 78.2935 49.9878 78.2935 50.5367C78.2935 51.1355 78.1438 51.6345 77.8943 52.0337C77.5949 52.4329 77.1957 52.7822 76.6967 52.9818L78.4432 55.4768H76.4971ZM76.048 49.4888C75.7486 49.2393 75.3494 49.1395 74.8005 49.1395H73.3035V51.884H74.8005C75.3494 51.884 75.7486 51.7842 76.048 51.5347C76.3474 51.2852 76.4472 50.9858 76.4472 50.5367C76.4971 50.0377 76.3474 49.7383 76.048 49.4888Z"
                    fill="black"
                  />
                  <path
                    d="M86.1279 54.0293V55.4764H80.09V47.6421H85.9782V49.0892H81.8864V50.7858H85.4792V52.2329H81.8864V54.0293H86.1279Z"
                    fill="black"
                  />
                  <path
                    d="M44.012 68.2512H40.3693L39.6707 69.9478H37.8243L41.3174 62.1633H43.1138L46.6068 69.9478H44.7106L44.012 68.2512ZM43.4631 66.9039L42.2156 63.9098L40.9681 66.9039H43.4631Z"
                    fill="black"
                  />
                  <path
                    d="M49.2017 69.5485C48.553 69.1992 48.054 68.7002 47.7047 68.1014C47.3554 67.5026 47.1558 66.804 47.1558 66.0056C47.1558 65.257 47.3554 64.5584 47.7047 63.9097C48.054 63.3109 48.6029 62.8119 49.2017 62.4626C49.8504 62.1133 50.549 61.9636 51.3474 61.9636C52.046 61.9636 52.6448 62.0634 53.1937 62.3129C53.7426 62.5624 54.1917 62.9117 54.5909 63.3608L53.4432 64.4087C52.8943 63.8099 52.2456 63.5105 51.4971 63.5105C50.9981 63.5105 50.5989 63.6103 50.1997 63.8099C49.8005 64.0095 49.5011 64.3089 49.3015 64.7081C49.1019 65.1073 49.0021 65.5065 49.0021 66.0056C49.0021 66.5046 49.1019 66.9038 49.3015 67.303C49.5011 67.7022 49.8005 68.0016 50.1997 68.2012C50.5989 68.4008 50.9981 68.5006 51.4971 68.5006C52.2955 68.5006 52.9442 68.2012 53.4432 67.5525L54.5909 68.6004C54.2416 69.0495 53.7426 69.3988 53.1937 69.6483C52.6448 69.8978 52.046 69.9976 51.3474 69.9976C50.5989 70.0475 49.8504 69.8978 49.2017 69.5485Z"
                    fill="black"
                  />
                  <path
                    d="M61.1277 68.2512H57.485L56.7864 69.9478H54.9401L58.4331 62.1633H60.2295L63.7225 69.9478H61.8263L61.1277 68.2512ZM60.5788 66.9039L59.3313 63.9098L58.0838 66.9039H60.5788Z"
                    fill="black"
                  />
                  <path
                    d="M64.8704 62.1133H68.4133C69.2616 62.1133 70.0101 62.263 70.6588 62.6123C71.3075 62.9117 71.8065 63.4107 72.1558 63.9596C72.5051 64.5584 72.7047 65.2071 72.7047 66.0055C72.7047 66.8039 72.5051 67.4526 72.1558 68.0514C71.8065 68.6502 71.3075 69.0993 70.6588 69.3987C70.0101 69.6981 69.2616 69.8977 68.4133 69.8977H64.8704V62.1133ZM68.3135 68.4506C69.1119 68.4506 69.7107 68.251 70.1598 67.8019C70.6089 67.3528 70.8584 66.754 70.8584 66.0554C70.8584 65.3069 70.6089 64.7081 70.1598 64.3089C69.7107 63.8598 69.062 63.6602 68.3135 63.6602H66.6668V68.5005H68.3135V68.4506Z"
                    fill="black"
                  />
                  <path
                    d="M80.4391 68.5005V69.9476H74.4011V62.1133H80.2894V63.5604H76.1975V65.257H79.8403V66.6542H76.1975V68.5005H80.4391Z"
                    fill="black"
                  />
                  <path
                    d="M89.3214 69.9476V65.257L87.026 69.0993H86.2276L83.9322 65.3568V69.9476H82.2356V62.1133H83.7326L86.6268 66.9536L89.521 62.1133H91.0181V69.9476H89.3214Z"
                    fill="black"
                  />
                  <path
                    d="M96.9561 67.1532V69.9476H95.1596V67.1532L92.1157 62.1133H94.0618L96.1577 65.6063L98.2036 62.1133H100L96.9561 67.1532Z"
                    fill="black"
                  />
                </svg>
              </a>
            </Link>

            <nav className="header__nav">
              <ul className="header__nav_list">
                <li className="header__nav_list_item">
                  <Link className="header__nav_list_item" to="/all">
                    <img src={All} alt="" /> Все курсы
                  </Link>
                </li>
                <li className="header__nav_list_item">
                  <Link className="header__nav_list_item" to="/seremony">
                    Мероприятия
                  </Link>
                </li>
                <li className="header__nav_list_item">Базы знаний</li>
                <li className="header__nav_list_item">Карьера</li>
              </ul>
            </nav>

            <div className="header__info_box">
              <span className="selected" onClick={handleSelectClick}>
                <img src={Loc} alt="" />
                {selectedOption}
                <img className={isOpen ? "arrow" : ""} src={Arr} alt="" />
              </span>

              <div className={`custom-select ${isOpen ? "open" : "options"}`}>
                <ul className="options">
                  <li>
                    <input
                      type="radio"
                      id="option1"
                      name="option"
                      value="НижнийНовгород"
                      onChange={handleOptionSelect}
                    />
                    <label htmlFor="option1">Нижний Новгород</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="option2"
                      name="option"
                      value="Дзержинск"
                      onChange={handleOptionSelect}
                    />
                    <label htmlFor="option2">Дзержинск</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="option3"
                      name="option"
                      value="On-line"
                      onChange={handleOptionSelect}
                    />
                    <label htmlFor="option3">On-line</label>
                  </li>
                </ul>
              </div>

              <a className="telnum" href="tel:88009503398 ">
                8 800 950-33-98{" "}
              </a>

              <button className="regbtn">
                <img src={Usr} alt="" />
                Войти
              </button>
            </div>

            <span onClick={handleNavToggle}>
              {isNavOpen ? (
                <img
                  style={{
                    background: "#00093c",
                    width: "40px",
                    height: "40px",
                  }}
                  className="close"
                  src={close}
                  alt=""
                />
              ) : (
                <img className="hamburger" src={Ham} alt="" />
              )}
            </span>
            <nav className={`sidebar ${isNavOpen ? "open" : ""}`}>
              <ul>
                <li>
                  <Link className="link" to="/">
                    <img src={All} alt="" />
                    Все курсы
                  </Link>
                  <Link className="link" to="/">
                    Home
                  </Link>

                  <Link to="/about">Об академии</Link>
                  <Link to="/seremony">Мероприятия</Link>
                  <Link to="/news">Новости</Link>

                  <Link to="/Базазнаний">База знаний</Link>
                  <Link to="/Карьера">Карьера</Link>
                  <Link to="/contact">Контакты</Link>

                  <span className="selected" onClick={handleSelectClick}>
                    <img src={Loc} alt="" />
                    Нижний Новгород
                    <img className={isOpen ? "arrow" : ""} src={Arr} alt="" />
                  </span>

                  <div className={`custom-select ${isOpen ? "open" : ""}`}>
                    <ul className="options">
                      <li>
                        <input
                          type="radio"
                          id="option1"
                          name="option"
                          value="НижнийНовгород"
                          onChange={handleOptionSelect}
                        />
                        <label htmlFor="option1">Нижний Новгород</label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          id="option2"
                          name="option"
                          value="Дзержинск"
                          onChange={handleOptionSelect}
                        />
                        <label htmlFor="option2">Дзержинск</label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          id="option3"
                          name="option"
                          value="On-line"
                          onChange={handleOptionSelect}
                        />
                        <label htmlFor="option3">On-line</label>
                      </li>
                    </ul>
                  </div>

                  <Link className="regbtn" to="/register">
                    <img src={Usr} alt="" />
                    Войти
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
