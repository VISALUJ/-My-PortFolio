import React from "react"
import "./Home.css"

import skill1 from "../pic/638-6386507_10-years-of-experience-react-native-logo-svg.png"
import skill2 from "../pic/web-development-html-logo-world-wide-web-consortium-create-html-signature.jpg"
import skill3 from "../pic/css-background-transparent-blue-3.png"
import skill4 from "../pic/OIPs.jpg"

import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Visal</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Web devloper.", " Web designer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I am a Bsc Computer Science gratuate and a Mern Stack Webdevloper. And Iam eager to fulfil my dreams in the field of IT </p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill4} alt='' />
                </button>
               
              </div>
            </div>
          </div>
         
          </div>
        
      </section>
    </>
  )
}

export default Home
