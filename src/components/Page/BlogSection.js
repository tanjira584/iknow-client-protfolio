import React from "react";
import blog1 from "../../images/blog1.jpg";
import blog2 from "../../images/blog2.jpg";
import blog3 from "../../images/blog3.jpg";

const BlogSection = () => {
    return (
        <div className="blog-area p-5">
            <h2 className="mb-5" style={{ color: "#037fff" }}>
                Blogs
            </h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="blog">
                        <div className="img">
                            <img src={blog1} alt="" className="img-fluid" />
                        </div>
                        <div className="content">
                            <h5>ReactJS</h5>
                            <h4>How to create a website using ReactJS</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="blog">
                        <div className="img">
                            <img src={blog2} alt="" className="img-fluid" />
                        </div>
                        <div className="content">
                            <h5>NextJS</h5>
                            <h4>How to create a website using NextJS</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="blog">
                        <div className="img">
                            <img src={blog3} alt="" className="img-fluid" />
                        </div>
                        <div className="content">
                            <h5>NodeJS</h5>
                            <h4>How to create a server using NodeJS</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
