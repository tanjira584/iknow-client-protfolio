import React from "react";
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.png";
import project4 from "../../images/project4.png";

const Protfolio = () => {
    return (
        <div className="protfolio-area p-5">
            <h2 className="mb-5" style={{ color: "#037fff" }}>
                Protfolio
            </h2>
            <div className="row g-5">
                <div className="col-md-6">
                    <div className="project">
                        <div className="img">
                            <img src={project1} alt="" className="img-fluid" />
                        </div>
                        <div className="overlay">
                            <div className="btns">
                                <h4 className="fst-italic text-center">
                                    Inventory Management
                                </h4>
                                <p className="m-0 text-center p-2">
                                    This is a Inventory management website.
                                    Registered User & Dealer can advertise their
                                    used-car or new-cars for sale.
                                </p>
                                <button className="resume-btn">Preview</button>{" "}
                                <button className="resume-btn">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="project">
                        <div className="img">
                            <img src={project2} alt="" className="img-fluid" />
                        </div>
                        <div className="overlay">
                            <div className="btns">
                                <h4 className="fst-italic text-center">
                                    Product Analytic
                                </h4>
                                <p className="m-0 text-center p-2">
                                    Love the watch, fast delivery. It seems to
                                    go with most things in her wardrobe.
                                </p>
                                <button className="resume-btn">Preview</button>{" "}
                                <button className="resume-btn">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="project">
                        <div className="img">
                            <img src={project3} alt="" className="img-fluid" />
                        </div>
                        <div className="overlay">
                            <div className="btns">
                                <h4 className="fst-italic text-center">
                                    Tools Manufacturer
                                </h4>
                                <p className="m-0 text-center p-2">
                                    This is a tools equipment store eCommerce
                                    website. The developer mainly focused on
                                    dashboard functionality.
                                </p>
                                <button className="resume-btn">Preview</button>{" "}
                                <button className="resume-btn">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="project">
                        <div className="img">
                            <img src={project4} alt="" className="img-fluid" />
                        </div>
                        <div className="overlay">
                            <div className="btns">
                                <h4 className="fst-italic text-center">
                                    Canun Lawyer
                                </h4>
                                <p className="m-0 text-center p-2">
                                    A lawyer is a person who is qualified to
                                    advise people about the law and represent
                                    them in court.
                                </p>
                                <button className="resume-btn">Preview</button>{" "}
                                <button className="resume-btn">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Protfolio;
