import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Inventory from "./Inventory";
import MainBody from "./MainBody";
import Manufacturer from "./Manufacturer";
import Analytic from "./Analytic";
import Canun from "./Canun";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";

const SingleProject = () => {
    const [canvas, setOffcanvas] = useState(false);
    const { page } = useParams();
    const handleOffcanvas = (canvas) => {
        setOffcanvas(canvas);
    };
    let element;
    if (page === "inventory") {
        element = <Inventory></Inventory>;
    } else if (page === "canun") {
        element = <Canun></Canun>;
    } else if (page === "manufacturer") {
        element = <Manufacturer></Manufacturer>;
    } else if (page === "analytic") {
        element = <Analytic></Analytic>;
    }
    return (
        <div className="bg-black">
            <Header handleOffcanvas={handleOffcanvas}></Header>
            <div className="container-md">
                <div className="row">
                    <div className="col-md-3 position-relative">
                        <Sidebar canvas={canvas}></Sidebar>
                    </div>
                    <div className="col-md-9">
                        <MainBody>{element}</MainBody>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SingleProject;
