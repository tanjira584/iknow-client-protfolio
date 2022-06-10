import {
    faCode,
    faMobile,
    faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Services = () => {
    return (
        <div className="service-area p-5">
            <div className=" mb-5 pb-4">
                <h2 className="mb-5" style={{ color: "#037fff" }}>
                    Services
                </h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="service">
                            <FontAwesomeIcon
                                className="icon"
                                icon={faPaintBrush}
                            ></FontAwesomeIcon>
                            <h4>Web Design</h4>
                            <p className="m-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Autem tenetur ratione quod.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service">
                            <FontAwesomeIcon
                                className="icon"
                                icon={faCode}
                            ></FontAwesomeIcon>
                            <h4>Web Development</h4>
                            <p className="m-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Autem tenetur ratione quod.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service">
                            <FontAwesomeIcon
                                className="icon"
                                icon={faMobile}
                            ></FontAwesomeIcon>
                            <h4>Mobile Application</h4>
                            <p className="m-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Autem tenetur ratione quod.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="review-area">
                <h2 className="mb-5" style={{ color: "#037fff" }}>
                    Reviews
                </h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="review">
                            <div className="content">
                                <p className="fst-italic m-0">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Expedita impedit nobis
                                    tempore quaerat quibusdam, aliquid maxime
                                    tempora.
                                </p>
                            </div>
                            <div className="info">
                                <h5>John Doe</h5>
                                <h6>Web Developer, ABC Company</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="review">
                            <div className="content">
                                <p className="fst-italic m-0">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Expedita impedit nobis
                                    tempore quaerat quibusdam, aliquid maxime
                                    tempora.
                                </p>
                            </div>
                            <div className="info">
                                <h5>Kerl Alex</h5>
                                <h6>Client</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
