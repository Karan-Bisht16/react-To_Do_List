import React from "react";

function Footer() {
    return (
        <div className="custom-footer">
            <div className="addn-info">
                <h3> &nbsp; Created with ❤️</h3>
                <h4>By Karan Bisht</h4>
                <div className="links">
                    <a href="https://instagram.com/karan_b1603" target="_blank">
                        <img src="./images/instagram.png" width="25px" /></a>
                    <a href="https://twitter.com/karan_b1603" target="_blank">
                        <img src="./images/twitter.png" width="25px" /></a>
                    <a href="https://github.com/Karan-Bisht16" target="_blank">
                        <img src="./images/github.png" width="25px" /></a>
                    <a href="https://www.linkedin.com/in/karan-bisht-583918254/" target="_blank">
                        <img src="./images/linkedin.png" width="25px" /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;