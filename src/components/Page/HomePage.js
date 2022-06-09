import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./HeaderPage.css";
import MainBody from "./MainBody";
import Sidebar from "./Sidebar";

const HomePage = () => {
    return (
        <div className="bg-black w-100 h-100">
            <Header></Header>
            <div className="container-md">
                <div className="row">
                    <div className="col-md-3 position-relative">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-9">
                        <MainBody></MainBody>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default HomePage;
