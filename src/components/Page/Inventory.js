import React from "react";
import home from "../../images/m-home.png";
import inventory from "../../images/m-inventory.png";
import add from "../../images/m-add.png";
import update from "../../images/m-update.png";

const Inventory = () => {
    return (
        <div className="single-project p-5">
            <div className="text-white-50">
                <h2 className="mb-4" style={{ color: "#037fff" }}>
                    Auto Car Shop{" "}
                    <span className="text-white-50 fst-italic">
                        (Inventory Management)
                    </span>
                </h2>
                <p style={{ fontSize: "20px", fontWeight: "500" }}>
                    This is a Inventory management website. Registered User &
                    Dealer can advertise their used-car or new-cars for sale.
                </p>
                <h5 style={{ color: "#037fff" }}>Main Features: </h5>
                <ul>
                    <li style={{ fontSize: "17px", fontWeight: "500" }}>
                        To advertise unlimited products, User must create an
                        account as a Dealer.
                    </li>
                    <li style={{ fontSize: "17px", fontWeight: "500" }}>
                        Without Dealership , any logged in user can advertise
                        most 5 products.
                    </li>
                    <li style={{ fontSize: "17px", fontWeight: "500" }}>
                        Users can Search a specific car By Make, Type, Model,
                        Price, Location.
                    </li>
                </ul>
                <h5 style={{ color: "#037fff" }}>Tools:</h5>
                <p style={{ fontSize: "18px", fontWeight: "500" }}>
                    HTML5, CSS3, ReactJS(necessary tools like axios,
                    react-hook-form, react-query ....etc), NodeJS, ExpressJS,
                    MongoDB, Bootstrap, Stripe, SendGrid, Firebase, Heroku, JWT,
                    Payment Gateway and Mail Sender integrated.
                </p>
            </div>
            <div className="demo-area">
                <h3 className="text-center mb-5" style={{ color: "#037fff" }}>
                    Demo
                </h3>
                <div className="row g-5">
                    <div className="col-md-6">
                        <div className="demo">
                            <div className="img">
                                <img
                                    src={home}
                                    alt=""
                                    className="img-fluid"
                                    style={{ width: "100%" }}
                                />
                            </div>
                            <h5>Home Page</h5>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="demo">
                            <div className="img">
                                <img
                                    src={inventory}
                                    alt=""
                                    className="img-fluid"
                                    style={{ width: "100%" }}
                                />
                            </div>
                            <h5>Inventory Page</h5>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="demo">
                            <div className="img">
                                <img
                                    src={add}
                                    alt=""
                                    className="img-fluid"
                                    style={{ width: "100%" }}
                                />
                            </div>
                            <h5>Product Add Page</h5>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="demo">
                            <div className="img">
                                <img
                                    src={update}
                                    alt=""
                                    className="img-fluid"
                                    style={{ width: "100%" }}
                                />
                            </div>
                            <h5>Product Update Page</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
