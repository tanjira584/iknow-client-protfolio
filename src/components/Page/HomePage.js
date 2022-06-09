import React, { useState } from "react";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import Header from "./Header";
import "./HeaderPage.css";
import HomeSection from "./HomeSection";
import Protfolio from "./Protfolio";
import MainBody from "./MainBody";
import Sidebar from "./Sidebar";
import Contact from "./Contact";

const HomePage = () => {
    const [canvas, setOffcanvas] = useState(false);
    const handleOffcanvas = (canvas) => {
        setOffcanvas(canvas);
    };

    return (
        <div className="bg-black w-100 h-100">
            <Header handleOffcanvas={handleOffcanvas}></Header>
            <div className="container-md">
                <div className="row">
                    <div className="col-md-3 position-relative">
                        <Sidebar canvas={canvas}></Sidebar>
                    </div>
                    <div className="col-md-9">
                        <MainBody>
                            <HomeSection></HomeSection>
                            <AboutSection></AboutSection>
                            <Protfolio></Protfolio>
                            <Contact></Contact>
                        </MainBody>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default HomePage;
