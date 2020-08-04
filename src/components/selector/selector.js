import React, { PureComponent } from 'react';
import './selector.css';

export default class Selector extends PureComponent {

  render() {

    return (
      <div className="row">
        <div className="col">
          <ul className="widget-list">
            <li className="list-item">
              <a href="#" className="widget-link">Зяблик</a>
              <a href="#" className="widget-link">Клёст</a>
              <a href="#" className="widget-link">Горлица</a>
              <a href="#" className="widget-link">Дятел</a>
              <a href="#" className="widget-link">Удод</a>
              <a href="#" className="widget-link last">Стриж</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <div className="bird-details-card">
            <div className="card-body">
              <img src="images/5f217bad0979b7bf4b806dad_48979125763_e2534f54bd.jpg" width="200" height="155" alt="" className="bird-image"/>
              <ul className="list-group-list-group-flush">
                <li className="list-group-item">
                  <h4 className="heading">Зяблик</h4>
                  <div className="text-block">Fringilla coelebs</div>
                  <div className="audio-player">
                    <div className="playback-button"></div>
                    <div className="range-box">
                      <div wp_range_slider="cena:10" className="range-slider">
                        <div className="ui-slider-range"></div>
                        <div className="ui-slider-handle"></div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bird-description">
              <p className="paragraph">В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.</p>
            </div>
          </div>
      </div>
    </div>
    );
  }
}
