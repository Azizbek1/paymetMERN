import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem } from 'mdb-react-ui-kit';
const Slider = () => {
    return (
        <div>
             <MDBCarousel showControls  fade>
                    <MDBCarouselInner>
                        <MDBCarouselItem className='active'>
                            <div className="header__top header__top-slider1">
                                <div className="container">
                                    <div className="col-md-4 header__left">
                                        <h1 className="header__title">
                                             Легко отправить<br />   Легко получить
                                        </h1>  
                                        <p className="header__text">Быстрый, Круглосуточный, Безопасный и Выгодный сервис денежных переводов,который позволяет вам отправлять денежные средства в СНГ стран.</p>
                                    </div>
                                </div>
                            </div>
                        </MDBCarouselItem>
                        <MDBCarouselItem>
                             <div className="header__top header__top-slider2">
                                <div className="container">
                                    <div className="col-md-4 header__left">
                                        <h1 className="header__title">
                                        Легко отправить <br />  Легко получить
                                        </h1>  
                                        <p className="header__text">Быстрый, Круглосуточный, Безопасный и Выгодный сервис денежных переводов,который позволяет вам отправлять денежные средства в СНГ стран.</p>
                                    </div>
                                </div>
                            </div>
                        </MDBCarouselItem>
                        <MDBCarouselItem>
                            <div className="header__top header__top-slider3">
                                <div className="container">
                                    <div className="col-md-4 header__left">
                                        <h1 className="header__title">
                                        Легко отправить <br />  Легко получить
                                        </h1>  
                                        <p className="header__text">Быстрый, Круглосуточный, Безопасный и Выгодный сервис денежных переводов,который позволяет вам отправлять денежные средства в СНГ стран.</p>
                                    </div>
                                </div>
                            </div>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
            </MDBCarousel>
        </div>
    );
}

export default Slider;
