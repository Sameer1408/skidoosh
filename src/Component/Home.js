import React, { useEffect, useState, useRef } from 'react';
import aboutImg from '../images/top.png'
import ContactForm from './ContactForm';
import Slider from "react-slick";

function Home({ }) {
    
    const pointer = useRef();
    const [showNav, setShowNav] = useState(false);
    const [up, setUp] = useState(true);
    const [wid,setWid] = useState(true);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: wid?3:1,
        slidesToScroll: wid?3:1
      };

      function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }

    const listenScroll = () => {

        let hieghtToHidden = 400;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (hieghtToHidden <= winScroll) {
            setShowNav(true);
            setUp(true);
        }
        else {
            setShowNav(false);
            setUp(false);
        }

        window.onscroll = function (e) {
            // console.log(this.oldScroll > this.scrollY, "direction");
            if (this.oldScroll > this.scrollY) {
                setUp(true);
            }
            else {
                setUp(false);
            }
            this.oldScroll = this.scrollY;
        }

        // console.log(winScroll, "winScroll");
        pointer.current.style.top = pointer?.current?.style?.top + winScroll + "px";

    };

    useEffect(() => {
        window.addEventListener("scroll", listenScroll);
        let obj =  getWindowDimensions();
        console.log(obj,"obj");
        if(obj.width<900)setWid(false);
    }, []);


    return (
        <div ref={pointer}>
            <div style={{ position: "relative" }}>
                <div className="top" >
                </div>
            </div>
            <section>
                <div class="" style={{ marginTop: "100px", marginBottom: "80px", width: "98.9%" }}>
                    <div class="row">
                        <div class="col-sm col-lg-6" >
                            <div className="aboutImg">
                            </div>
                        </div>
                        <div class="col-sm col-lg-6 topAbout" >
                            <div className="aboutDiv">
                                <h1 className="aboutheading">About Us</h1>
                                <p className="aboutPara">Welcome to Tarotcardanjana, where Anjana Jintikar, a tarot card reader, vastu shastra, and numerology expert, with over 15 years of experience, is ready to guide you. With a track record of serving 2000+ clients, Anjana brings profound wisdom to help you unlock your true potential. Through tarot card reading, vastu shastra, and numerology, she offers holistic guidance for self-discovery, future guidance, problem solving as well as personal growth. Experience the transformative power of Anjana's compassionate and personalized approach as you embark on a journey of joy, abundance, and fulfillment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="service container" style={{marginBottom:"50px"}}>
                    <h1 className="serviceHeading">
                        Services Offered
                    </h1>
                    <div class="" style={{textAlign:"center"}}>
                        <div class="row">
                            <div class="col-sm">
                                <div className="Card">
                                <div className="cardImg1"></div>
                                <h3 className="cardH">Tarot Card</h3>
                                <p> Discover your destiny with Anjana Jintikar, a tarot card reading expert. Unveiling the secrets of the cards, she offers profound guidance and empowers you to make informed decisions on your life's journey. Trust in Anjana's wisdom for clarity, insight, and self-discovery.
</p>
                                </div>
                            </div>
                            <div class="col-sm">
                            <div className="Card">
                                <div className="cardImg2"></div>
                                <h3 className="cardH">Vastu Shashtra</h3>
                                <p>  Experience the transformative power of Vastu Shastra with Anjana Jintikar, an expert consultant. Optimize energy flow, enhance well-being, and create harmonious spaces for a balanced and prosperous life. 
</p>
                                </div>
                            </div>
                            <div class="col-sm">
                            <div className="Card">
                                <div className="cardImg3"></div>
                                <h3 className="cardH">Numerology</h3>
                                <p> Unlock the hidden patterns of your life with Numerology Expert Anjana Jintikar. Discover the influence of numbers, make informed decisions, and find greater fulfillment. 
</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section>
               <div className="enq container">
                <div className="enqImg"></div>
                <h1 className="enqH">Enquiry about the course </h1>
                <p className="enqP">
                 Discover the mystical world of Tarot cards in our exclusive 7-day Tarot Card Reading Course! Designed for beginners, this immersive course provides a comprehensive overview of the 78 Tarot cards, unlocking their secrets and meanings. With our affordable pricing, now everyone can embark on this enchanting journey of divination. Join us to develop your intuitive abilities, gain profound insights, and receive a certification upon completion. Unveil the mysteries of Tarot and empower your spiritual journey today!
                </p>
               </div> 
            </section>
            <section>
                <div>
                <ContactForm/>
                </div>
            </section>
            <section>
             <div className="container">
                  
         <div>
        <h2 className="RH">Reviews </h2>
        <Slider {...settings}>

          <div className="revDiv">
          <div className="reSDiv">
            <p className="rePara">
            She is always cooperative,friendly, her guidance and support is really invaluable.<br/>
            She is having great physique n mystic powers and always contributing towards humanity.
            <br/>
            All the best..love n divine grace.May you excel in all aspects of life love n prayers..
            </p>
            <h4 className="reSH">
                - {" "}Kirti Varma
            </h4>
            </div>
          </div>

          <div className="revDiv">
          <div className="reSDiv">
          <p className="rePara">
          Not only a card reader but also a therapist and a amazing motivational speaker ☺️
            </p>
            <h4 className="reSH">
                - {" "}Vaibhavi Sutar

            </h4>
            </div>
          </div>
          <div className="revDiv">

          <div className="reSDiv">
          <p className="rePara">
          It was a wonderful interaction with Anjana. First time for me in life but was interesting
            </p>
            <h4 className="reSH"> - {" "}Atul Talegaonkar</h4>
            </div>
          </div>
          <div className="revDiv">
          <div className="reSDiv">
          <p className="rePara">
          HIGHLY RECOMMENDED..best tarot card reading in bhopal. her predictions are highly accurate..she can solve your any problem,very friendly..</p>
            <h4 className="reSH"> - {" "}Priyanka Jintikar </h4>
          </div>
          </div>
     
        </Slider>
      </div>
                </div>
            </section>
        </div>
    )
}

export default Home