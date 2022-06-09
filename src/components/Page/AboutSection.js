import React from "react";
import myImg from "../../images/my-img3.png";

const AboutSection = () => {
    return (
        <div className="about-area p-5" id="about">
            <h2 className="mb-5" style={{ color: "#037fff" }}>
                About Me
            </h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="about-content">
                        <h2>
                            I am <span>Tanjir Ahmed</span>
                        </h2>
                        <p>
                            I am a frontend web developer. I can provide clean
                            code and pixel perfect design. I also make website
                            more & more interactive with web animations.
                        </p>
                        <ul className="mb-4">
                            <li>
                                <span>Full Name</span> Tanjir Ahmed
                            </li>
                            <li>
                                <span>Email</span> tanjir.dev@gmail.com
                            </li>
                            <li>
                                <span>Nationality</span> Bangladesh
                            </li>
                            <li>
                                <span>Languages</span> Bangla, English.
                            </li>
                            <li>
                                <span>Address</span> Dhaka, Bangladesh.
                            </li>
                            <li>
                                <span>Freelance</span> Available
                            </li>
                        </ul>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://drive.google.com/file/d/1c6rCAnTBiMcqWkd3aRf82YA-vMfFieFy/view?usp=sharing"
                            className="resume-btn"
                        >
                            See Resume
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="img">
                        <img
                            src={myImg}
                            alt=""
                            className="img-fluid"
                            style={{ width: "100%" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AboutSection;
