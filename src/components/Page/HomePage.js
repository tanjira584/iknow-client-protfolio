import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./HeaderPage.css";

const HomePage = () => {
    return (
        <div>
            <Header></Header>

            <div style={{ width: "100%", height: "500px" }}></div>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;
