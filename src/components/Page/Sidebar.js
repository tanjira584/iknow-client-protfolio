import {
    faFacebookF,
    faGithub,
    faLinkedinIn,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import myImg from "../../images/my-img.png";

const Sidebar = () => {
    return (
        <div className="sidebar-area">
            <div className="px-5 py-3 border-bottom">
                <div className="my-img">
                    <img src={myImg} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="main-menu">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={(navInfo) =>
                                navInfo.isActive ? "active" : " "
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={(navInfo) =>
                                navInfo.isActive ? "active" : " "
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/resume"
                            className={(navInfo) =>
                                navInfo.isActive ? "active" : " "
                            }
                        >
                            resume
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/portfolio"
                            className={(navInfo) =>
                                navInfo.isActive ? "active" : " "
                            }
                        >
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            className={(navInfo) =>
                                navInfo.isActive ? "active" : " "
                            }
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={(navInfo) =>
                                navInfo.isActive ? "active" : " "
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="social-icons text-center pb-3">
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
                        <a href=" " style={{ backgroundColor: "#26A6D1" }}>
                            <FontAwesomeIcon
                                className="icon"
                                icon={faTwitter}
                            ></FontAwesomeIcon>
                        </a>
                    </li>
                    <li>
                        <a href=" " style={{ backgroundColor: "#E84D31" }}>
                            <FontAwesomeIcon
                                className="icon"
                                icon={faGithub}
                            ></FontAwesomeIcon>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/tanjir-dev/"
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
    );
};

export default Sidebar;
