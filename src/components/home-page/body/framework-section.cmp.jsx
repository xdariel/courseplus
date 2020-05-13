import React from 'react';
const FrameworkSection = () => {
    return (
        <div className="uk-section uk-section-primary ">
            <div className="uk-container-small uk-padding-small uk-margin-auto">
                <div className="uk-flex-middle" uk-grid="true">
                    <div className="uk-width-1-4@m uk-flex-first">
                        <svg width="168" height="155" viewBox="0 0 168 155" xmlns="http://www.w3.org/2000/svg"
                            style={{ 'color': 'rgb(255, 255, 255)' }} className="uk-svg">
                            <path fill="#fff"
                                d="M117.39,33.3L93.3,47.9l27.8,15.82v41.49l-37.32,20.74L47.08,105.2V73.04L23,60.65v58.9l59.91,35.17 L145,119.55V49.19L117.39,33.3z">
                            </path>
                            <path fill="#fff"
                                d="M136.98,4.84c0.92-0.19,1.72-1.03,1.72-2.29c0-1.41-1.01-2.55-2.82-2.55H131v10h5.01 c1.86,0,2.88-1.15,2.88-2.7C138.89,6.07,138.03,5.01,136.98,4.84z M133,2h3c0.55,0,1,0.45,1,1s-0.45,1-1,1h-3V2z M136.3,8H133V6h3.3 c0.55,0,1,0.45,1,1S136.85,8,136.3,8z">
                            </path>
                            <path fill="#fff" d="M141,10V0h7v2h-5v2h5v2h-5v2h5v2H141z"></path>
                            <path fill="#fff" d="M153,10V2h-3V0h8v2h-3v8H153z"></path>
                            <path fill="#fff"
                                d="M166.02,10l-0.76-2h-4.48l-0.77,2h-1.98l3.9-10h2.17l3.9,10H166.02z M163.02,1.77L161.44,6h3.16L163.02,1.77z">
                            </path>
                            <polygon fill="#fff" points="106.23,27.5 82.91,14 58.57,29.06 82.22,42.06 "></polygon>
                        </svg>
                    </div>
                    <div className="uk-width-expand">
                        <h5> Made With </h5>
                        <h1 className="uk-text-  uk-margin-remove-bottom"> Uikit framework </h1>
                        <p className=" uk-text-medium uk-text-light uk-margin-top">
                            A lightweight and modular front-end framework <br />
                            for developing fast and powerful web interfaces. </p>
                        <a href="https://getuikit.com/docs" className="btn btn-white btn-lg" style={{ 'color': '#273444' }}>Get
                        Started</a>
                        <a href="https://github.com/uikit/uikit"
                            className="btn btn-outline-white uk-margin-left btn-lg">Github</a>
                    </div>
                </div>
            </div>
        </div>);
}

export default FrameworkSection;