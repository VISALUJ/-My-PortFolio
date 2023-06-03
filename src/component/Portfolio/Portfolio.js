import React from "react"
import "./Portfolio.css"
import Card from "./Card"
// import Portfolio_data from "./Portfolio_data"
import img from "../image/Website.png"
import img2 from "../image/Ai.jpg"
import img3 from "../image/to-do-list.png"
import img4 from "../image/Shopping site.png"
import img5 from "../image/1_v4JL51N_PaGBm5l3uXUQ0w.png"
import img6 from "../image/Object api.png"
const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
        
          <div className='heading text-center '>
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My Portfolio</h1>
          </div>
<div className="hello">
          <div className='content grid'>
          <Card title="Website" image={img}></Card>
        <Card title="To-do App" image={img3}></Card>
          <Card title="Website" image={img2}></Card>
          <Card title="Shopping Site" image={img4}></Card>
          <Card title="Image Gallery" image={img5}></Card>
          <Card title="Animal detection App" image={img6}></Card>
          </div></div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
