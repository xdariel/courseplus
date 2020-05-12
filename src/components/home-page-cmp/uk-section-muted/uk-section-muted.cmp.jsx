import React from 'react';
const UkSectionMuted = () => {
    return (
        <div className="uk-section uk-section-muted pb-2">
            <div className="uk-container uk-align-center uk-margin-remove-bottom uk-position-relative uk-margin-medium-top">
                <div className="uk-margin-small" uk-grid="true">
                    <div className="uk-width-1-3@m uk-width-1-2@s uk-first-column">
                        <a  className="uk-link-heading uk-text-lead uk-text-bold"> <i className=" uil-graduation-hat"></i>
                            CoursePlus </a>
                        <div className="uk-width-xlarge tm-footer-description">A unique and beautiful collection of UI elements
                        that are all flexible and modular. building the website of your dreams.</div>
                    </div>
                    <div className="uk-width-expand@m uk-width-1-2@s">
                        <ul className="uk-list  tm-footer-list">
                            <li>
                                <a > Browse Our Library </a>
                            </li>
                            <li>
                                <a > Tutorials/Articles </a>
                            </li>
                            <li>
                                <a > Scripts and themes</a>
                            </li>
                            <li>
                                <a > Ebooks</a>
                            </li>
                        </ul>
                    </div>
                    <div className="uk-width-expand@m uk-width-1-2@s">
                        <ul className="uk-list tm-footer-list">
                            <li>
                                <a > About us </a>
                            </li>
                            <li>
                                <a > Contact Us </a>
                            </li>
                            <li>
                                <a > Privacy </a>
                            </li>
                            <li>
                                <a > Policy </a>
                            </li>
                        </ul>
                    </div>
                    <div className="uk-width-expand@m uk-width-1-2@s">
                        <ul className="uk-list  tm-footer-list">
                            <li>
                                <a >Web Design </a>
                            </li>
                            <li>
                                <a >Web Development </a>
                            </li>
                            <li>
                                <a > iOS Development </a>
                            </li>
                            <li>
                                <a > PHP Development </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="uk-postion-absoult uk-margin-remove uk-position-bottom-right" style={{ 'bottom': '8px', 'right': '60px' }}
                    uk-tooltip="title: Visit Our Site; pos: top-center"> Powered By <a 
                        className="uk-text-bold uk-link-reset"> CoursePlus </a></p>
                <div className="uk-margin-small" uk-grid="true">
                    <div className="uk-width-1-2@m uk-width-1-2@s uk-first-column">
                        <p className="uk-text-small"><i className="far fa-copyright"></i> 2019 <span
                            className="uk-text-bold">CoursePlus</span> . All rights reserved.</p>
                    </div>
                    <div className="uk-width-1-3@m uk-width-1-2@s">
                        <a  className="uk-icon-button uk-link-reset"
                            uk-tooltip="title: Our Youtube Chanal; pos: top-center"><i className="fab fa-youtube"
                                style={{ 'color': '#fb7575  !important' }}></i></a>
                        <a  className="uk-icon-button uk-link-reset"
                            uk-tooltip="title: Our Facebook; pos: top-center"><i className="fab fa-Facebook"
                                style={{ 'color': '#9160ec  !important' }}></i></a>
                        <a  className="uk-icon-button uk-link-reset"
                            uk-tooltip="title: Our Instagram; pos: top-center"><i className="fab fa-Instagram"
                                style={{ 'color': '#dc2d2d  !important' }}></i></a>
                        <a  className="uk-icon-button uk-link-reset"
                            uk-tooltip="title: Our linkedin; pos: top-center"><i className="fab fa-linkedin "
                                style={{ 'color': '#6949a5 !important' }}></i></a>
                        <a  className="uk-icon-button uk-link-reset"
                            uk-tooltip="title: Our google-plus; pos: top-center"><i className="fab fa-google-plus"
                                style={{ 'color': '#f77070 !important' }}></i></a>
                        <a  className="uk-icon-button uk-link-reset" uk-tooltip="title: Our Twitter; pos: top-center">
                            <i className="fab fa-twitter" style={{ 'color': '#6f23ff !important' }}></i></a>
                    </div>
                </div>
            </div>
        </div>);
}

export default UkSectionMuted;