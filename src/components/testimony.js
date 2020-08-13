import React, { Component } from 'react';
import Slider from 'react-slick';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

export class Testimony extends Component {  
    render() {
        const testimony = {
            arrows:true,
            infinite: true,
            autoplay: true,
            speed: 6000,
            autoplaySpeed: 6000,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
            
        }
        return (
            <div>
                <div className="container-fluid what-client-says text-center">
                   <div className="container text-center">
                    <h3 className="header-text text-center"> What are the clients says</h3>
                    <hr className="header-text-hr" />
                            
                    <Slider {...testimony} className="Slider slider-whatClientsays">
                        <div className="whatclientsaysrow " >
                            <div className="row" >
                                <div className="col-12 text-center whatclientsaysdiv">
                                    <img src="https://cdn.pixabay.com/photo/2017/11/23/07/47/babe-2972221__340.jpg" alt="can't see" className="whatClientsaysPic"style={{textAlign:'center'}}/>
                                </div>
                            </div>    
                            <h4>John Doe</h4>
                            <p>
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however
                            </p>
                        </div>

                        <div className="whatclientsaysrow ">
                        <div className="row" >
                                <div className="col-12 text-center whatclientsaysdiv">
                                    <img src="https://cdn.pixabay.com/photo/2019/07/06/12/44/baby-4320396__340.jpg" alt="can't see" className="whatClientsaysPic"style={{textAlign:'center'}}/>
                                </div>
                            </div>    
                            <h4>John Doe</h4>
                            <p>
                                “Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
                            </p>
                        </div>

                        <div className="whatclientsaysrow ">
                            <div className="row" >
                                <div className="col-12 text-center whatclientsaysdiv">
                                    <img src="https://cdn.pixabay.com/photo/2020/03/24/05/37/family-4962878__340.jpg" alt="can't see" className="whatClientsaysPic"style={{textAlign:'center'}}/>
                                </div>
                            </div>    
                            <h4>John Doe</h4>
                            <p>
                                “Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
                            </p>
                        </div>                       
                    </Slider>
                    
                   </div>
               </div>

            </div>
        )
    }
}

export default Testimony
