import React from 'react'
import './Contact.scss';
import rightlongarr from '../../assets/rightlongarr.svg';
import gphone from '../../assets/gphone.svg';
import gmail from '../../assets/gmail.svg';
import gloc from '../../assets/gloc.svg';
import gvk from '../../assets/gvk.svg';
import ginsta from '../../assets/ginsta.svg';
import gfb from '../../assets/gfb.svg';
import gyt from '../../assets/gyt.svg';
import gtg from '../../assets/gtg.svg';
import yandex from '../../assets/yandex.svg';
import Footer from '../../components/Footer/Footer'
const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="container">
          <p>
            Главная <img src={rightlongarr} alt="" /> Контакты
          </p>

          <h2>Контакты</h2>
          <div className="contact__wrapper">
            <iframe
              src="https://yandex.uz/map-widget/v1/?ll=-122.435935%2C37.769741&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoyMjQwNTc2ODgyEklVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EsIENhbGlmb3JuaWEsIFNhbiBGcmFuY2lzY28gQ291bnR5LCBTYW4gRnJhbmNpc2NvIgoN0uT0whWUCRdC&z=12.16"
              width="560"
              height="400"
              frameborder="1"
              allowfullscreen="true"
            ></iframe>

            <div className="left_side">
              <ul>
                <li>
                  <img src={gphone} alt="" />
                  <a className="tel" href="tel:88009503398 ">
                    8 800 950-33-98{" "}
                  </a>
                </li>

                <li>
                  <img src={gmail} alt="" />
                  <a href="mailto:info@hodfutureacademy.ru">
                    info@hodfutureacademy.ru
                  </a>
                </li>

                <li>
                  <img src={gloc} alt="" />
                  <address>г. Москва, ул. Ленина, д. 50</address>
                </li>

                <li>
                  <div className="social_links">
                    <img src={gvk} alt="" />
                    <img src={ginsta} alt="" />
                    <img src={gfb} alt="" />
                    <img src={gyt} alt="" />
                    <img src={gtg} alt="" />
                  </div>
                </li>
                <li>
                  <button>
                    <img src={yandex} alt="" />
                  </button>
                </li>
              </ul>
            </div>

            <div className="right_side">
              <div>
                <iframe
                  src="https://yandex.uz/map-widget/v1/?ll=-122.435935%2C37.769741&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoyMjQwNTc2ODgyEklVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EsIENhbGlmb3JuaWEsIFNhbiBGcmFuY2lzY28gQ291bnR5LCBTYW4gRnJhbmNpc2NvIgoN0uT0whWUCRdC&z=12.16"
                  width="560"
                  height="400"
                  frameborder="1"
                  allowfullscreen="true"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact