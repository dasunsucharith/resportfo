import React from 'react'
import './About.css'
import AImg from '../../img/a-img.jpg'
import Award from '../../img/award.png'

function About() {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={AImg} alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                It is a long established fact that a reader will be distracted by the readable
                content
            </p>
            <p className="a-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis totam nesciunt, quas laboriosam eligendi, harum quasi minima necessitatibus deleniti enim sapiente in culpa. Iste magnam minima ipsam officia, quos neque!
                Fugiat obcaecati similique perspiciatis doloremque repellendus reprehenderit odio quis iste vero excepturi autem, eligendi adipisci sit quos deleniti dolorem molestiae eaque. Quae, architecto ut deleniti fugit cupiditate quos eum sapiente.
            </p>
            <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">International Design Awards 2021</h4>
                    <p className="a-award-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores molestiae in itaque nam temporibus aspernatur neque, veritatis rerum, dolorem accusantium et libero, repudiandae eaque. Voluptatibus debitis assumenda architecto soluta.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About