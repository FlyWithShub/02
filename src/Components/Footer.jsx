import React from "react";
import { mainLogo } from "../Components/Image";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer_component">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-vertical padding-xxlarge">
              <div className="footer_wrapper">
                <div className="footer_top-wrapper">
                  <div className="max-width-xsmall">
                    <div className="footer_left-wrapper">
                      <NavLink
                        to="/"
                        className="footer_logo-link w-inline-block"
                      >
                        
                        <img
                          src={mainLogo}
                          alt=""
                          loading="lazy"
                          sizes="(max-width: 1024px) 100vw, 1024px"
                          className="footer_logo"
                        />
                      </NavLink>

                      <div className="spacer-small"></div>

                      <div className="footer_details-wrapper">
                        <div className="text-color-tertiary">
                          Innovation. Intelligence. Impact.
                        </div>
                      </div>

                      <div className="spacer-small"></div>

                      <div className="social-mediaDiv">
                        <NavLink
                          to="#"
                          target="_blank"
                          rel="noreferrer"
                          className="social_link w-inline-block"
                        >
                          <div className="icon-embed-xsmall w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              width="100%"
                              height="100%"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                cx="4.983"
                                cy="5.009"
                                r="2.188"
                                fill="currentColor"
                              ></circle>
                              <path
                                d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </NavLink>
                        <NavLink
                          to="#"
                          target="_blank"
                          rel="noreferrer"
                          className="social_link w-inline-block"
                        >
                          <div className="icon-embed-xsmall w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              width="100%"
                              height="100%"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                cx="4.983"
                                cy="5.009"
                                r="2.188"
                                fill="currentColor"
                              ></circle>
                              <path
                                d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </NavLink>
                        <NavLink
                          to="#"
                          target="_blank"
                          rel="noreferrer"
                          className="social_link w-inline-block"
                        >
                          <div className="icon-embed-xsmall w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              width="100%"
                              height="100%"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                cx="4.983"
                                cy="5.009"
                                r="2.188"
                                fill="currentColor"
                              ></circle>
                              <path
                                d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </NavLink>
                      </div>

                      <div className="spacer-large"></div>
                    </div>
                  </div>

                  {/* Right Menu Section */}
                  <div className="footer_menu-wrapper">
                    <div>
                      <div className="text-size-small text-weight-medium text-style-allcaps">
                        Services
                      </div>
                      <div className="spacer-xsmall"></div>

                      <div className="footer_link-list">
                        <NavLink
                          to="#"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          FinTech-Specific
                        </NavLink>
                        <NavLink
                          to="#"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          Software Dev
                        </NavLink>
                        <NavLink
                          to="#"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          Web Application
                        </NavLink>

                        <NavLink
                          to="#"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          Cloud Solutions
                        </NavLink>
                        <NavLink
                          to="#"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          Cybersecurity
                        </NavLink>
                        <NavLink
                          to="#"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          Digital Marketing
                        </NavLink>

                        <NavLink
                          to="#"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          AI Services
                        </NavLink>
                        <NavLink
                          to="#"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          Salesforce
                        </NavLink>
                      </div>
                    </div>

                    <div>
                      <div className="text-size-small text-weight-medium text-style-allcaps">
                        Resources
                      </div>
                      <div className="spacer-xsmall"></div>

                      <div className="footer_link-list">
                        <NavLink
                          to="/"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          Home
                        </NavLink>
                        <NavLink
                          to="#"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          About Us
                        </NavLink>
                        <NavLink
                          to="#"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          Projects
                        </NavLink>
                        <NavLink
                          to="#"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          Blogs
                        </NavLink>
                        <NavLink
                          to="#"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          Contact Us
                        </NavLink>
                      </div>
                    </div>

                    <div>
                      <div className="text-size-small text-weight-medium text-style-allcaps">
                        Company
                      </div>
                      <div className="spacer-xsmall"></div>

                      <div className="footer_link-list">
                        <NavLink
                          to="#"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          +91 88270 57950
                        </NavLink>
                        <NavLink
                          to="#"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          shubhjeetchakraborty@gmail.com
                        </NavLink>
                        <NavLink
                          to="#"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          123 Vijay Nagar Indore 452010
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footer_bottom-wrapper">
                  <div className="text-color-tertiary text-size-regular">
                    Copyright © <span className="footer_credit-year">2025</span>{" "}
                    CroneX Tech All rights reserved.
                  </div>

                  <div className="footer_legal-list">
                    <NavLink to="#" className="text-style-link">
                      Terms of Service
                    </NavLink>
                    <NavLink to="#" className="text-style-link">
                      Privacy Policy
                    </NavLink>
                    <NavLink to="#" className="text-style-link">
                      Cookies Settings
                    </NavLink>
                  </div>

                  <NavLink
                    to="#"
                    className="footer_status_component w-inline-block"
                  >
                    <div className="footer_status_dot"></div>
                    <div className="text-size-small text-weight-semibold text-color-primary">
                      Webinar
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
