import {
    faFacebookF,
    faGithub,
    faLinkedinIn,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import logo from "../../images/light.png";

const Header = ({ handleOffcanvas }) => {
    const [canvas, setCanvas] = useState(false);
    const handleCanvas = () => {
        setCanvas(!canvas);
        handleOffcanvas(canvas);
    };
    return (
        <header className="py-4 header-top bg-black">
            <div className="container-md">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <img style={{ height: "50px" }} src={logo} alt="" />
                    </div>
                    <button
                        onClick={handleCanvas}
                        className="py-2 px-3 d-block d-md-none"
                    >
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </button>
                    <div className="social-icons d-none d-md-block">
                        <ul>
                            <li>
                                <a
                                    href=" "
                                    style={{
                                        backgroundColor: "#3B5998",
                                        color: "#fff",
                                    }}
                                >
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faFacebookF}
                                    ></FontAwesomeIcon>
                                </a>
                            </li>
                            <li>
                                <a
                                    href=" "
                                    style={{ backgroundColor: "#26A6D1" }}
                                >
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faTwitter}
                                    ></FontAwesomeIcon>
                                </a>
                            </li>
                            <li>
                                <a
                                    href=" "
                                    style={{ backgroundColor: "#E84D31" }}
                                >
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faGithub}
                                    ></FontAwesomeIcon>
                                </a>
                            </li>
                            <li>
                                <a
                                    href=" "
                                    style={{ backgroundColor: "#007AB9" }}
                                >
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faLinkedinIn}
                                    ></FontAwesomeIcon>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
