import React from "react";
import bg from "../../images/bg.jpg";
import Typewriter from "typewriter-effect";

const HomeSection = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div>
                <div className="home-section d-flex flex-column justify-content-center align-items-center">
                    <h4>Hello, I'm </h4>
                    <h1>Tanjir Ahmed</h1>
                    <h3 style={{ color: "#E84D31" }}>
                        <Typewriter
                            options={{
                                strings: [
                                    "A Front-end web developer",
                                    "A professional UI/UX designer",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>
                    <h5 className="text-center">
                        I am a frontend web developer. I can provide clean code
                        and pixel perfect design. I also make website more &
                        more interactive with web animations.
                    </h5>
                    <a
                        className="resume-btn"
                        target="_blank"
                        rel="noreferrer"
                        href="https://drive.google.com/file/d/1c6rCAnTBiMcqWkd3aRf82YA-vMfFieFy/view?usp=sharing"
                    >
                        See Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomeSection;
