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
import Resume from "./Resume";
import BlogSection from "./BlogSection";
import Services from "./Services";
import { useParams } from "react-router-dom";

const HomePage = () => {
    const [canvas, setOffcanvas] = useState(false);
    const handleOffcanvas = (canvas) => {
        setOffcanvas(canvas);
    };
    const { page } = useParams();
    console.log(page);
    let element;
    if (!page) {
        element = <HomeSection></HomeSection>;
    } else if (page === "portfolio") {
        element = <Protfolio></Protfolio>;
    } else if (page === "contact") {
        element = <Contact></Contact>;
    } else if (page === "resume") {
        element = <Resume></Resume>;
    } else if (page === "blog") {
        element = <BlogSection></BlogSection>;
    } else if (page === "services") {
        element = <Services></Services>;
    } else if (page === "about") {
        element = <AboutSection></AboutSection>;
    }

    return (
        <div className="bg-black w-100 h-100">
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

export default HomePage;
