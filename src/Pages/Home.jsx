import React from "react";
import { mainLogo, heroImg, HomeVid1, CronexImg } from "../Components/Image";

const Home = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="global-styles">
          <div className="style-overrides w-embed"></div>
          <div className="color-schemes w-embed"></div>
          <div className="hubspot-styles w-embed">Custom Styles</div>
        </div>
        <div
          data-animation="default"
          className="navbar_component w-nav"
          data-easing2="ease"
          fs-scrolldisable-element="smart-nav"
          data-easing="ease"
          data-collapse="medium"
          role="banner"
          data-duration="400"
          ms-code-scroll-offset="100"
        >
          <div className="embed-css w-embed"></div>
          <div className="padding-global">
            <div className="container-large">
              <div className="navbar_container">
                <a
                  href="/"
                  aria-current="page"
                  className="navbar_logo-link w-nav-brand w--current"
                >
                  {/* <img
                    sizes="(max-width: 479px) 98vw, (max-width: 767px) 99vw, (max-width: 1024px) 100vw, 1024px"
                    alt=""
                    src={mainLogo}
                    loading="lazy"
                    className="navbar_logo is-base"
                  /> */}
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67fe4f18661e2bddbf344297_logo-alternate.avif"
                    alt=""
                    className="navbar_logo is-alternate"
                  />
                </a>
                <nav role="navigation" className="navbar_menu w-nav-menu">
                  <div className="navbar_menu-links">
                    <a href="/partners" className="navbar_link">
                      Home
                    </a>
                    <a href="/partners" className="navbar_link">
                      About
                    </a>

                    <div
                      data-delay="200"
                      data-hover="true"
                      data-w-id="45aa616c-9c0b-48ec-e743-226d434582d2"
                      className="navbar_menu-dropdown w-dropdown"
                    >
                      <div className="navbar_dropdown-toggle w-dropdown-toggle">
                        <div>Services</div>
                        <div className="dropdown-chevron w-embed">
                          <svg
                            currentwidth=" 100%"
                            currentheight=" 100%"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <nav className="navbar_dropdown-list w-dropdown-list">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/68073900553fde64672694da_navbar_dropdown_background.avif"
                          alt=""
                          className="navbar_dropdown_background"
                        />
                        <div className="navbar_dropdown-link-list is-2col">
                          <a
                            href="/integrations/google-secops"
                            className="navbar_dropdown-link w-inline-block"
                          >
                            <div className="navbar_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  currentwidth="currentwidth"
                                  currentheight="currentheight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar_text-wrapper">
                              <div className="text-size-small">
                                Google SecOps
                              </div>
                            </div>
                            <div className="icon-embed-xxsmall hide w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--ic"
                                currentwidth="100%"
                                currentheight="100%"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"
                                ></path>
                              </svg>
                            </div>{" "}
                          </a>
                          <a
                            href="/integrations/microsoft-sentinel"
                            className="navbar_dropdown-link w-inline-block"
                          >
                            <div className="navbar_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  currentwidth="currentwidth"
                                  currentheight="currentheight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar_text-wrapper">
                              <div className="text-size-small">
                                Microsoft Sentinel
                              </div>
                            </div>
                            <div className="icon-embed-xxsmall hide w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--ic"
                                currentwidth="100%"
                                currentheight="100%"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"
                                ></path>
                              </svg>
                            </div>{" "}
                          </a>
                          <a
                            href="/integrations/amazon-security-lake"
                            className="navbar_dropdown-link w-inline-block"
                          >
                            <div className="navbar_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  currentwidth="currentwidth"
                                  currentheight="currentheight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar_text-wrapper">
                              <div className="text-size-small">
                                Amazon Security Lake
                              </div>
                            </div>
                            <div className="icon-embed-xxsmall hide w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--ic"
                                currentwidth="100%"
                                currentheight="100%"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"
                                ></path>
                              </svg>
                            </div>{" "}
                          </a>
                          <a
                            href="/integrations/splunk"
                            className="navbar_dropdown-link w-inline-block"
                          >
                            <div className="navbar_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  currentwidth="currentwidth"
                                  currentheight="currentheight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar_text-wrapper">
                              <div className="text-size-small">Splunk</div>
                            </div>
                            <div className="icon-embed-xxsmall hide w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--ic"
                                currentwidth="100%"
                                currentheight="100%"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"
                                ></path>
                              </svg>
                            </div>{" "}
                          </a>
                          <a
                            href="/integrations/exabeam"
                            className="navbar_dropdown-link w-inline-block"
                          >
                            <div className="navbar_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  currentwidth="currentwidth"
                                  currentheight="currentheight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar_text-wrapper">
                              <div className="text-size-small">Exabeam</div>
                            </div>
                            <div className="icon-embed-xxsmall hide w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--ic"
                                currentwidth="100%"
                                currentheight="100%"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"
                                ></path>
                              </svg>
                            </div>{" "}
                          </a>
                          <a
                            href="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/6823884343146fe95837b1b6_QRadar%20-%20SOLUTION%20BRIEF%20(3).pdf"
                            target="_blank"
                            className="navbar_dropdown-link w-inline-block"
                          >
                            <div className="navbar_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  currentwidth="currentwidth"
                                  currentheight="currentheight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar_text-wrapper">
                              <div className="text-size-small">IBM QRadar</div>
                            </div>
                            <div className="icon-embed-xxsmall hide w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--ic"
                                currentwidth="100%"
                                currentheight="100%"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"
                                ></path>
                              </svg>
                            </div>{" "}
                          </a>
                          <a
                            href="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/688cf93bb54ef8a8e8161312_d5a9ae24d974f8d61e870afb39d344de_680dd0f27278b6c273c10ff8_DataBahn-for-Snowflake.pdf"
                            target="_blank"
                            className="navbar_dropdown-link w-inline-block"
                          >
                            <div className="navbar_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  currentwidth="currentwidth"
                                  currentheight="currentheight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar_text-wrapper">
                              <div className="text-size-small">Snowflake</div>
                            </div>
                            <div className="icon-embed-xxsmall hide w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--ic"
                                currentwidth="100%"
                                currentheight="100%"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"
                                ></path>
                              </svg>
                            </div>{" "}
                          </a>
                          <a
                            href="/integrations/databricks"
                            className="navbar_dropdown-link w-inline-block"
                          >
                            <div className="navbar_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  currentwidth="currentwidth"
                                  currentheight="currentheight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar_text-wrapper">
                              <div className="text-size-small">Databricks</div>
                            </div>
                            <div className="icon-embed-xxsmall hide w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--ic"
                                currentwidth="100%"
                                currentheight="100%"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"
                                ></path>
                              </svg>
                            </div>{" "}
                          </a>
                          <a
                            href="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/683707fed047e6b4803a626c_Solution%20Brief%20-%20Securonix.pdf"
                            target="_blank"
                            className="navbar_dropdown-link w-inline-block"
                          >
                            <div className="navbar_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  currentwidth="currentwidth"
                                  currentheight="currentheight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar_text-wrapper">
                              <div className="text-size-small">Securonix</div>
                            </div>
                            <div className="icon-embed-xxsmall hide w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--ic"
                                currentwidth="100%"
                                currentheight="100%"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"
                                ></path>
                              </svg>
                            </div>{" "}
                          </a>
                          <a
                            href="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/683707fea71832bc6eccaa22_Solution%20Brief%20-%20Devo.pdf"
                            target="_blank"
                            className="navbar_dropdown-link w-inline-block"
                          >
                            <div className="navbar_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  currentwidth="currentwidth"
                                  currentheight="currentheight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar_text-wrapper">
                              <div className="text-size-small">Devo</div>
                            </div>
                            <div className="icon-embed-xxsmall hide w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--ic"
                                currentwidth="100%"
                                currentheight="100%"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"
                                ></path>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </nav>
                    </div>
                    <a href="/partners" className="navbar_link">
                      Projects
                    </a>
                    <a href="/partners" className="navbar_link">
                      Blogs
                    </a>
                  </div>
                  <div className="navbar_menu-buttons">
                    <div className="navbar_button is-base">
                      <a
                        data-wf--button-primary--variant="base"
                        href="/book-a-demo"
                        className="button-primary w-inline-block"
                      >
                        <div className="button_content">
                          <div className="text-size-regular">Get in Touch</div>
                          <div className="arrow">
                            <div className="icon-embed-custom1 w-embed">
                              <svg
                                className="arrow_svg"
                                currentwidth=" 100%"
                                currentheight=" 100%"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.6666 15.6667C10.2064 15.6667 9.83337 15.2936 9.83337 14.8333C9.83337 14.3731 10.2064 14 10.6666 14C11.1269 14 11.5 14.3731 11.5 14.8333C11.5 15.2936 11.1269 15.6667 10.6666 15.6667Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M10.6666 5.66666C10.2064 5.66666 9.83337 5.29357 9.83337 4.83334C9.83337 4.3731 10.2064 4 10.6666 4C11.1269 4 11.5 4.3731 11.5 4.83334C11.5 5.29357 11.1269 5.66666 10.6666 5.66666Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M13.1667 15.6667C12.7064 15.6667 12.3333 15.2936 12.3333 14.8333C12.3333 14.3731 12.7064 14 13.1667 14C13.6269 14 14 14.3731 14 14.8333C14 15.2936 13.6269 15.6667 13.1667 15.6667Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M13.1667 5.66666C12.7064 5.66666 12.3333 5.29357 12.3333 4.83334C12.3333 4.3731 12.7064 4 13.1667 4C13.6269 4 14 4.3731 14 4.83334C14 5.29357 13.6269 5.66666 13.1667 5.66666Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M13.1667 8.16666C12.7064 8.16666 12.3333 7.79358 12.3333 7.33334C12.3333 6.8731 12.7064 6.5 13.1667 6.5C13.6269 6.5 14 6.8731 14 7.33334C14 7.79358 13.6269 8.16666 13.1667 8.16666Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M13.1667 13.1667C12.7064 13.1667 12.3333 12.7936 12.3333 12.3333C12.3333 11.8731 12.7064 11.5 13.1667 11.5C13.6269 11.5 14 11.8731 14 12.3333C14 12.7936 13.6269 13.1667 13.1667 13.1667Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M15.6667 8.16666C15.2064 8.16666 14.8333 7.79358 14.8333 7.33334C14.8333 6.8731 15.2064 6.5 15.6667 6.5C16.1269 6.5 16.5 6.8731 16.5 7.33334C16.5 7.79358 16.1269 8.16666 15.6667 8.16666Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M15.6667 13.1667C15.2064 13.1667 14.8333 12.7936 14.8333 12.3333C14.8333 11.8731 15.2064 11.5 15.6667 11.5C16.1269 11.5 16.5 11.8731 16.5 12.3333C16.5 12.7936 16.1269 13.1667 15.6667 13.1667Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M15.6667 10.6667C15.2064 10.6667 14.8333 10.2936 14.8333 9.83334C14.8333 9.3731 15.2064 9 15.6667 9C16.1269 9 16.5 9.3731 16.5 9.83334C16.5 10.2936 16.1269 10.6667 15.6667 10.6667Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M18.1667 10.6667C17.7064 10.6667 17.3333 10.2936 17.3333 9.83334C17.3333 9.3731 17.7064 9 18.1667 9C18.6269 9 19 9.3731 19 9.83334C19 10.2936 18.6269 10.6667 18.1667 10.6667Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M1.5 15.6667C1.03975 15.6667 0.666748 15.2936 0.666748 14.8333C0.666748 14.3731 1.03975 14 1.5 14C1.96025 14 2.33337 14.3731 2.33337 14.8333C2.33337 15.2936 1.96025 15.6667 1.5 15.6667Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M1.5 5.66666C1.03975 5.66666 0.666748 5.29357 0.666748 4.83334C0.666749 4.3731 1.03975 4 1.5 4C1.96025 4 2.33337 4.3731 2.33337 4.83334C2.33337 5.29357 1.96025 5.66666 1.5 5.66666Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M4.00004 15.6667C3.5398 15.6667 3.16671 15.2936 3.16671 14.8333C3.16671 14.3731 3.5398 14 4.00004 14C4.46027 14 4.83337 14.3731 4.83337 14.8333C4.83337 15.2936 4.46027 15.6667 4.00004 15.6667Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M4.00004 5.66666C3.5398 5.66666 3.16671 5.29357 3.16671 4.83334C3.16671 4.3731 3.5398 4 4.00004 4C4.46027 4 4.83337 4.3731 4.83337 4.83334C4.83337 5.29357 4.46027 5.66666 4.00004 5.66666Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M4.00004 8.16666C3.5398 8.16666 3.16671 7.79358 3.16671 7.33334C3.16671 6.8731 3.5398 6.5 4.00004 6.5C4.46027 6.5 4.83337 6.8731 4.83337 7.33334C4.83337 7.79358 4.46027 8.16666 4.00004 8.16666Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M4.00004 13.1667C3.5398 13.1667 3.16671 12.7936 3.16671 12.3333C3.16671 11.8731 3.5398 11.5 4.00004 11.5C4.46027 11.5 4.83337 11.8731 4.83337 12.3333C4.83337 12.7936 4.46027 13.1667 4.00004 13.1667Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M6.50004 8.16666C6.0398 8.16666 5.66671 7.79358 5.66671 7.33334C5.66671 6.8731 6.0398 6.5 6.50004 6.5C6.96027 6.5 7.33337 6.8731 7.33337 7.33334C7.33337 7.79358 6.96027 8.16666 6.50004 8.16666Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M6.50004 13.1667C6.0398 13.1667 5.66671 12.7936 5.66671 12.3333C5.66671 11.8731 6.0398 11.5 6.50004 11.5C6.96027 11.5 7.33337 11.8731 7.33337 12.3333C7.33337 12.7936 6.96027 13.1667 6.50004 13.1667Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M6.50004 10.6667C6.0398 10.6667 5.66671 10.2936 5.66671 9.83334C5.66671 9.3731 6.0398 9 6.50004 9C6.96027 9 7.33337 9.3731 7.33337 9.83334C7.33337 10.2936 6.96027 10.6667 6.50004 10.6667Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M9.00004 10.6667C8.5398 10.6667 8.16671 10.2936 8.16671 9.83334C8.16671 9.3731 8.5398 9 9.00004 9C9.46027 9 9.83337 9.3731 9.83337 9.83334C9.83337 10.2936 9.46027 10.6667 9.00004 10.6667Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="button-primary_pattern"></div>
                        <div className="button-primary_border"></div>
                      </a>
                    </div>
                    <div className="navbar_button is-alternate">
                      <a
                        data-wf--button-secondary--variant="alternate"
                        href="/book-a-demo"
                        className="button-secondary w-variant-50b92dba-0048-4c60-e748-9428bdc750ca w-inline-block"
                      >
                        <div className="button-secondary_content w-variant-50b92dba-0048-4c60-e748-9428bdc750ca">
                          <div className="button_content">
                            <div className="text-size-regular text-gradient-blue-3">
                              Get Started
                            </div>
                          </div>
                          <div className="button_glow"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </nav>
                <div className="navbar_menu-button w-nav-button">
                  <div className="menu-icon">
                    <div className="menu-icon_line-top"></div>
                    <div className="menu-icon_line-middle">
                      <div className="menu-icon_line-middle-inner"></div>
                    </div>
                    <div className="menu-icon_line-bottom"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar_background"></div>
        </div>

        <main className="main-wrapper">
          <header id="header" className="section_home_header">
            <div className="padding-global">
              <div className="container-large">
                <div className="home_header_component">
                  <div className="w-layout-grid home_header_layout">
                    <div className="home_header_left-wrapper">
                      <div className="bg-tiles_component">
                        <div className="bg-tiles_list is-home-header">
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                            <div className="bg-tiles_dot"></div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                            <div className="bg-tiles_dot"></div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                            <div className="bg-tiles_dot"></div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                            <div className="bg-tiles_dot"></div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                            <div className="bg-tiles_dot"></div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                            <div className="bg-tiles_dot"></div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                            <div className="bg-tiles_dot"></div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                            <div className="bg-tiles_dot"></div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                            <div className="bg-tiles_dot"></div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                            <div className="bg-tiles_dot"></div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                            <div className="bg-tiles_dot"></div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                            <div className="bg-tiles_dot"></div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                            <div className="bg-tiles_dot"></div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                            <div className="bg-tiles_dot"></div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                            <div className="bg-tiles_dot"></div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                          </div>
                          <div className="bg-tiles_item">
                            <div className="bg-tiles_wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                                alt=""
                                className="bg-tiles_image"
                              />
                            </div>
                          </div>
                          <div className="bg-tiles_ray_down is-1"></div>
                          <div className="bg-tiles_ray_down is-2"></div>
                          <div className="bg-tiles_ray_down is-3"></div>
                          <div className="bg-tiles_ray_up is-1"></div>
                          <div className="bg-tiles_ray_up is-2"></div>
                          <div className="bg-tiles_ray_left is-1"></div>
                          <div className="bg-tiles_ray_left is-2"></div>
                          <div className="bg-tiles_ray_right is-1"></div>
                        </div>
                      </div>
                      <div className="home_header_content">
                        <div className="padding-section-large">
                          <div slide-in-header="" className="tag">
                            <div>
                              <small>Innovation. Intelligence. Impact.</small>
                            </div>
                            <div className="tag_button hide">
                              <div className="icon-embed-custom1 w-embed">
                                <svg
                                  currentwidth=" 100%"
                                  currentheight=" 100%"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.83334 14.1667L14.1667 5.83334M14.1667 5.83334H5.83334M14.1667 5.83334V14.1667"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="spacer-small"></div>
                          <h1
                            slide-in-header=""
                            className="heading-style-h1 text-gradient-horizontal"
                          >
                            Building the Digital<br></br>
                            <span className="text-gradient-blue">
                              Future of Finance
                            </span>
                          </h1>
                          <div className="spacer-small"></div>
                          <p slide-in-header="" className="text-size-medium">
                            At CroneX Tech, we empower financial institutions
                            with secure, scalable, and intelligent digital
                            ecosystems. From Mutual Funds to Stock Markets,
                            Insurance, and transaction-driven platforms, we
                            build technology that enhances performance,
                            accelerates growth, and ensures absolute trust in
                            every interaction.
                          </p>
                          <div className="spacer-medium"></div>
                          <div slide-in-header="" className="button-group">
                            <a
                              data-wf--button-primary--variant="base"
                              href="#"
                              className="button-primary w-inline-block"
                            >
                              <div className="button_content">
                                <div className="text-size-regular">
                                  Explore our Services
                                </div>
                                <div className="arrow">
                                  <div className="icon-embed-custom1 w-embed">
                                    <svg
                                      className="arrow_svg"
                                      currentwidth=" 100%"
                                      currentheight=" 100%"
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M10.6666 15.6667C10.2064 15.6667 9.83337 15.2936 9.83337 14.8333C9.83337 14.3731 10.2064 14 10.6666 14C11.1269 14 11.5 14.3731 11.5 14.8333C11.5 15.2936 11.1269 15.6667 10.6666 15.6667Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M10.6666 5.66666C10.2064 5.66666 9.83337 5.29357 9.83337 4.83334C9.83337 4.3731 10.2064 4 10.6666 4C11.1269 4 11.5 4.3731 11.5 4.83334C11.5 5.29357 11.1269 5.66666 10.6666 5.66666Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M13.1667 15.6667C12.7064 15.6667 12.3333 15.2936 12.3333 14.8333C12.3333 14.3731 12.7064 14 13.1667 14C13.6269 14 14 14.3731 14 14.8333C14 15.2936 13.6269 15.6667 13.1667 15.6667Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M13.1667 5.66666C12.7064 5.66666 12.3333 5.29357 12.3333 4.83334C12.3333 4.3731 12.7064 4 13.1667 4C13.6269 4 14 4.3731 14 4.83334C14 5.29357 13.6269 5.66666 13.1667 5.66666Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M13.1667 8.16666C12.7064 8.16666 12.3333 7.79358 12.3333 7.33334C12.3333 6.8731 12.7064 6.5 13.1667 6.5C13.6269 6.5 14 6.8731 14 7.33334C14 7.79358 13.6269 8.16666 13.1667 8.16666Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M13.1667 13.1667C12.7064 13.1667 12.3333 12.7936 12.3333 12.3333C12.3333 11.8731 12.7064 11.5 13.1667 11.5C13.6269 11.5 14 11.8731 14 12.3333C14 12.7936 13.6269 13.1667 13.1667 13.1667Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M15.6667 8.16666C15.2064 8.16666 14.8333 7.79358 14.8333 7.33334C14.8333 6.8731 15.2064 6.5 15.6667 6.5C16.1269 6.5 16.5 6.8731 16.5 7.33334C16.5 7.79358 16.1269 8.16666 15.6667 8.16666Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M15.6667 13.1667C15.2064 13.1667 14.8333 12.7936 14.8333 12.3333C14.8333 11.8731 15.2064 11.5 15.6667 11.5C16.1269 11.5 16.5 11.8731 16.5 12.3333C16.5 12.7936 16.1269 13.1667 15.6667 13.1667Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M15.6667 10.6667C15.2064 10.6667 14.8333 10.2936 14.8333 9.83334C14.8333 9.3731 15.2064 9 15.6667 9C16.1269 9 16.5 9.3731 16.5 9.83334C16.5 10.2936 16.1269 10.6667 15.6667 10.6667Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M18.1667 10.6667C17.7064 10.6667 17.3333 10.2936 17.3333 9.83334C17.3333 9.3731 17.7064 9 18.1667 9C18.6269 9 19 9.3731 19 9.83334C19 10.2936 18.6269 10.6667 18.1667 10.6667Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.5 15.6667C1.03975 15.6667 0.666748 15.2936 0.666748 14.8333C0.666748 14.3731 1.03975 14 1.5 14C1.96025 14 2.33337 14.3731 2.33337 14.8333C2.33337 15.2936 1.96025 15.6667 1.5 15.6667Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.5 5.66666C1.03975 5.66666 0.666748 5.29357 0.666748 4.83334C0.666749 4.3731 1.03975 4 1.5 4C1.96025 4 2.33337 4.3731 2.33337 4.83334C2.33337 5.29357 1.96025 5.66666 1.5 5.66666Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M4.00004 15.6667C3.5398 15.6667 3.16671 15.2936 3.16671 14.8333C3.16671 14.3731 3.5398 14 4.00004 14C4.46027 14 4.83337 14.3731 4.83337 14.8333C4.83337 15.2936 4.46027 15.6667 4.00004 15.6667Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M4.00004 5.66666C3.5398 5.66666 3.16671 5.29357 3.16671 4.83334C3.16671 4.3731 3.5398 4 4.00004 4C4.46027 4 4.83337 4.3731 4.83337 4.83334C4.83337 5.29357 4.46027 5.66666 4.00004 5.66666Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M4.00004 8.16666C3.5398 8.16666 3.16671 7.79358 3.16671 7.33334C3.16671 6.8731 3.5398 6.5 4.00004 6.5C4.46027 6.5 4.83337 6.8731 4.83337 7.33334C4.83337 7.79358 4.46027 8.16666 4.00004 8.16666Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M4.00004 13.1667C3.5398 13.1667 3.16671 12.7936 3.16671 12.3333C3.16671 11.8731 3.5398 11.5 4.00004 11.5C4.46027 11.5 4.83337 11.8731 4.83337 12.3333C4.83337 12.7936 4.46027 13.1667 4.00004 13.1667Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M6.50004 8.16666C6.0398 8.16666 5.66671 7.79358 5.66671 7.33334C5.66671 6.8731 6.0398 6.5 6.50004 6.5C6.96027 6.5 7.33337 6.8731 7.33337 7.33334C7.33337 7.79358 6.96027 8.16666 6.50004 8.16666Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M6.50004 13.1667C6.0398 13.1667 5.66671 12.7936 5.66671 12.3333C5.66671 11.8731 6.0398 11.5 6.50004 11.5C6.96027 11.5 7.33337 11.8731 7.33337 12.3333C7.33337 12.7936 6.96027 13.1667 6.50004 13.1667Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M6.50004 10.6667C6.0398 10.6667 5.66671 10.2936 5.66671 9.83334C5.66671 9.3731 6.0398 9 6.50004 9C6.96027 9 7.33337 9.3731 7.33337 9.83334C7.33337 10.2936 6.96027 10.6667 6.50004 10.6667Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M9.00004 10.6667C8.5398 10.6667 8.16671 10.2936 8.16671 9.83334C8.16671 9.3731 8.5398 9 9.00004 9C9.46027 9 9.83337 9.3731 9.83337 9.83334C9.83337 10.2936 9.46027 10.6667 9.00004 10.6667Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="button-primary_pattern"></div>
                              <div className="button-primary_border"></div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src={heroImg}
                      loading="lazy"
                      slide-in-header=""
                      alt=""
                      className="home_header_image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section id="logos" className="section_logo">
            <div className="padding-global">
              <div className="container-large">
                <div className="padding-section-large padding-bottom">
                  <div className="logo_content">
                    <div className="text-align-center">
                      <div className="max-width-large align-center">
                        <div slide-in="" className="text-size-large">
                          Our Associated Partners.
                        </div>
                      </div>
                    </div>
                    <div className="spacer-small"></div>
                    <div className="logo_component">
                      <div className="logo_list-wrapper w-dyn-list">
                        <div
                          reveal-list=""
                          role="list"
                          className="logo_list w-dyn-items"
                        >
                          <div
                            reveal-item=""
                            role="listitem"
                            className="logo_item w-dyn-item"
                          >
                            <div className="logo_wrapper">
                              <img
                                currentwidth="Auto"
                                loading="eager"
                                alt=""
                                src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/681dcdf46463971d998f9d14_GPS_Horizontal_White_Text_Reg_Mark_RGB.svg"
                                className="logos_logo"
                              />
                            </div>
                          </div>
                          <div
                            reveal-item=""
                            role="listitem"
                            className="logo_item w-dyn-item"
                          >
                            <div className="logo_wrapper">
                              <img
                                currentwidth="Auto"
                                loading="eager"
                                alt=""
                                src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680e4180601b9517741e8d7a_image%20138.avif"
                                className="logos_logo"
                              />
                            </div>
                          </div>
                          <div
                            reveal-item=""
                            role="listitem"
                            className="logo_item w-dyn-item"
                          >
                            <div className="logo_wrapper">
                              <img
                                currentwidth="Auto"
                                loading="eager"
                                alt=""
                                src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680e416234808eee31dd3ec2_Group%2058-1.avif"
                                className="logos_logo"
                              />
                            </div>
                          </div>
                          <div
                            reveal-item=""
                            role="listitem"
                            className="logo_item w-dyn-item"
                          >
                            <div className="logo_wrapper">
                              <img
                                currentwidth="Auto"
                                loading="eager"
                                alt=""
                                src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680e413e3446ace65a7add6d_Group%2058.avif"
                                className="logos_logo"
                              />
                            </div>
                          </div>
                          <div
                            reveal-item=""
                            role="listitem"
                            className="logo_item w-dyn-item"
                          >
                            <div className="logo_wrapper">
                              <img
                                currentwidth="Auto"
                                loading="eager"
                                alt=""
                                src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680e41155b46e54492f144ca_mobia-logo.avif"
                                className="logos_logo"
                              />
                            </div>
                          </div>
                          <div
                            reveal-item=""
                            role="listitem"
                            className="logo_item w-dyn-item"
                          >
                            <div className="logo_wrapper">
                              <img
                                currentwidth="Auto"
                                loading="eager"
                                alt=""
                                src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684ab64b5a72de1c4b20e379_Frame%202147225260.svg"
                                className="logos_logo"
                              />
                            </div>
                          </div>
                          <div
                            reveal-item=""
                            role="listitem"
                            className="logo_item w-dyn-item"
                          >
                            <div className="logo_wrapper">
                              <img
                                currentwidth="Auto"
                                loading="eager"
                                alt=""
                                src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68c80816dc5c95ff7b8943b1_Inspira%20Logo.avif"
                                className="logos_logo"
                              />
                            </div>
                          </div>
                          <div
                            reveal-item=""
                            role="listitem"
                            className="logo_item w-dyn-item"
                          >
                            <div className="logo_wrapper">
                              <img
                                currentwidth="Auto"
                                loading="eager"
                                alt=""
                                src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680e40b61314941692d90ac1_Group.avif"
                                className="logos_logo"
                              />
                            </div>
                          </div>
                          <div
                            reveal-item=""
                            role="listitem"
                            className="logo_item w-dyn-item"
                          >
                            <div className="logo_wrapper">
                              <img
                                currentwidth="Auto"
                                loading="eager"
                                alt=""
                                src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680e4090dfbff60dbb8afb57_Eyu.avif"
                                className="logos_logo"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="logo_list-wrapper w-dyn-list">
                        <div
                          reveal-list=""
                          role="list"
                          className="logo_list w-dyn-items"
                        >
                          <div
                            reveal-item=""
                            role="listitem"
                            className="logo_item w-dyn-item"
                          >
                            <div className="logo_wrapper">
                              <img
                                currentwidth="30"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/681dcdf46463971d998f9d14_GPS_Horizontal_White_Text_Reg_Mark_RGB.svg"
                                className="logos_logo"
                              />
                            </div>
                          </div>
                          <div
                            reveal-item=""
                            role="listitem"
                            className="logo_item w-dyn-item"
                          >
                            <div className="logo_wrapper">
                              <img
                                currentwidth="30"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680e4180601b9517741e8d7a_image%20138.avif"
                                className="logos_logo"
                              />
                            </div>
                          </div>
                          <div
                            reveal-item=""
                            role="listitem"
                            className="logo_item w-dyn-item"
                          >
                            <div className="logo_wrapper">
                              <img
                                currentwidth="30"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680e416234808eee31dd3ec2_Group%2058-1.avif"
                                className="logos_logo"
                              />
                            </div>
                          </div>
                          <div
                            reveal-item=""
                            role="listitem"
                            className="logo_item w-dyn-item"
                          >
                            <div className="logo_wrapper">
                              <img
                                currentwidth="30"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680e413e3446ace65a7add6d_Group%2058.avif"
                                className="logos_logo"
                              />
                            </div>
                          </div>
                          <div
                            reveal-item=""
                            role="listitem"
                            className="logo_item w-dyn-item"
                          >
                            <div className="logo_wrapper">
                              <img
                                currentwidth="30"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680e41155b46e54492f144ca_mobia-logo.avif"
                                className="logos_logo"
                              />
                            </div>
                          </div>
                          <div
                            reveal-item=""
                            role="listitem"
                            className="logo_item w-dyn-item"
                          >
                            <div className="logo_wrapper">
                              <img
                                currentwidth="30"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684ab64b5a72de1c4b20e379_Frame%202147225260.svg"
                                className="logos_logo"
                              />
                            </div>
                          </div>
                          <div
                            reveal-item=""
                            role="listitem"
                            className="logo_item w-dyn-item"
                          >
                            <div className="logo_wrapper">
                              <img
                                currentwidth="30"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68c80816dc5c95ff7b8943b1_Inspira%20Logo.avif"
                                className="logos_logo"
                              />
                            </div>
                          </div>
                          <div
                            reveal-item=""
                            role="listitem"
                            className="logo_item w-dyn-item"
                          >
                            <div className="logo_wrapper">
                              <img
                                currentwidth="30"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680e40b61314941692d90ac1_Group.avif"
                                className="logos_logo"
                              />
                            </div>
                          </div>
                          <div
                            reveal-item=""
                            role="listitem"
                            className="logo_item w-dyn-item"
                          >
                            <div className="logo_wrapper">
                              <img
                                currentwidth="30"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680e4090dfbff60dbb8afb57_Eyu.avif"
                                className="logos_logo"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="logo_overlay"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section_home_platform">
            <div className="padding-global">
              <div className="container-large">
                <div className="padding-section-medium padding-bottom">
                  <div className="home_platform_component">
                    <div className="max-width-xlarge align-center">
                      <div className="text-align-center">
                        <h2 className="heading-style-h3">
                          <span className="text-gradient-grey">
                            Empowering{" "}
                          </span>
                          <span className="text-gradient-blue">
                            {" "}
                            Tomorrow’s Finance{" "}
                          </span>
                          <span className="text-gradient-grey">
                            With Intelligent Technology
                          </span>
                        </h2>
                        <div className="spacer-xsmall"></div>
                        <div>
                          <p className="text-size-large">
                            CroneX Tech is a forward-thinking IT solutions
                            company delivering advanced Software, Cloud, AI, and
                            Digital Transformation services to global
                            enterprises. With deep expertise in FinTech—covering
                            Mutual Funds, Stock Markets, Insurance, and
                            transaction-heavy systems—we build secure, scalable,
                            and high-performance digital ecosystems that drive
                            real business impact.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-large"></div>
                    <div className="home_platform_video w-embed">
                      <video
                        style={{ width: "100%" }}
                        currentheight="auto"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                      >
                        <source src={HomeVid1} type="video/mp4" playsInline />
                        Your browser does not support the video tag.
                      </video>
                      {/* <img style={{ width: "100%" }} src={CronexImg} alt="" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="why" className="section_why">
            <div className="padding-global">
              <div className="container-large">
                <div className="padding-section-medium">
                  <div className="why_component">
                    <div>
                      <div className="max-width-xlarge">
                        <div slide-in="" className="tag">
                          Our Services
                        </div>
                        <div className="spacer-1-25rem"></div>
                        <h2 slide-in="" className="heading-style-h2">
                          <span className="text-gradient-grey">
                            Digital Services That <br></br>
                          </span>
                          <span className="text-gradient-blue">
                            Think, Move, and Evolve.{" "}
                          </span>
                        </h2>
                        <div className="max-width-large">
                          <p
                            slide-in=""
                            className="text-size-large text-color-secondary"
                          >
                            At CroneX Tech, we deliver end-to-end technology
                            solutions that empower organizations to innovate,
                            scale, and stay secure in the digital era.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-xlarge"></div>
                    <div className="w-layout-grid why_list-wrapper">
                      <div
                        id="w-node-_53188e1c-f765-33ab-e83e-8ae5a9742b25-1c2c275d"
                        className="w-layout-grid why_list no-scrollbar"
                      >
                        <div className="code-embed w-embed"></div>
                        <div slide-in="" className="why_item">
                          <a
                            href="/leadership"
                            className="why_item-link w-inline-block"
                          >
                            <div className="why_background-image-wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eca5d786370cc1f2221836_home_why_bg.avif"
                                alt=""
                                className="why_background-image"
                              />
                            </div>
                            <div className="why_card-content">
                              <div className="why_card-content-top">
                                <div className="why_item-icon-wrapper">
                                  <img
                                    loading="lazy"
                                    src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eca5ef46967d4078eafee9_Why%20Databhan%20Section%20-%20%20Icons.avif"
                                    alt=""
                                    className="icon-1x1-large"
                                  />
                                </div>
                                <div className="spacer-1-25rem"></div>
                                <h3 className="heading-style-h6 text-gradient-vertical">
                                  Software Development
                                </h3>
                                <div className="spacer-0-75rem"></div>
                                <p>
                                  We build secure, scalable, and
                                  high-performance software solutions tailored
                                  to your business needs. Our team specializes
                                  in creating robust applications that automate
                                  workflows, enhance user experience, and
                                  support complex enterprise operations.
                                </p>
                              </div>
                              <div className="spacer-xsmall"></div>
                              <div className="button-group">
                                <div className="home_why_button">
                                  <div className="text-size-medium">
                                    View More
                                  </div>
                                  <div className="icon-embed-custom1 w-embed">
                                    <svg
                                      currentwidth="16"
                                      currentheight="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6 3L11 8L6 13"
                                        stroke="CurrentColor"
                                        strokeWidth="1.5"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div slide-in="" className="why_item">
                          <a
                            href="/platform"
                            className="why_item-link w-inline-block"
                          >
                            <div className="why_background-image-wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eca5d786370cc1f2221836_home_why_bg.avif"
                                alt=""
                                className="why_background-image"
                              />
                            </div>
                            <div className="why_card-content">
                              <div className="why_card-content-top">
                                <div className="why_item-icon-wrapper">
                                  <img
                                    loading="lazy"
                                    src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eca5ef7c4cc6267efb6afc_Why%20Databhan%20Section%20-%20%20Icons-1.avif"
                                    alt=""
                                    className="icon-1x1-large"
                                  />
                                </div>
                                <div className="spacer-1-25rem"></div>
                                <h3 className="heading-style-h6 text-gradient-vertical">
                                  Web App Development
                                </h3>
                                <div className="spacer-0-75rem"></div>
                                <p>
                                  We design and develop fast, secure, and
                                  responsive websites and web applications that
                                  deliver seamless user experiences across all
                                  devices. From high-performance business
                                  portals to interactive enterprise platforms,
                                  our solutions combine modern UI/UX, scalable
                                  architecture, and powerful backend systems.
                                </p>
                              </div>
                              <div className="spacer-xsmall"></div>
                              <div className="button-group">
                                <div className="home_why_button">
                                  <div className="text-size-medium">
                                    View More
                                  </div>
                                  <div className="icon-embed-custom1 w-embed">
                                    <svg
                                      currentwidth="16"
                                      currentheight="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6 3L11 8L6 13"
                                        stroke="CurrentColor"
                                        strokeWidth="1.5"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div slide-in="" className="why_item">
                          <a
                            href="/about-us"
                            className="why_item-link w-inline-block"
                          >
                            <div className="why_background-image-wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eca5d786370cc1f2221836_home_why_bg.avif"
                                alt=""
                                className="why_background-image"
                              />
                            </div>
                            <div className="why_card-content">
                              <div className="why_card-content-top">
                                <div className="why_item-icon-wrapper">
                                  <img
                                    loading="lazy"
                                    src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eca5ef12edb3cfea884dae_Why%20Databhan%20Section%20-%20%20Icons-2.avif"
                                    alt=""
                                    className="icon-1x1-large"
                                  />
                                </div>
                                <div className="spacer-1-25rem"></div>
                                <h3 className="heading-style-h6 text-gradient-vertical">
                                  Simple and Intuitive to Use
                                </h3>
                                <div className="spacer-0-75rem"></div>
                                <p>
                                  You don’t need a setup guide, technical
                                  background, special training, or IT support to
                                  start using DataBahn. It’s simple, intuitive,
                                  and ready to go immediately–even if you’re not
                                  a technical expert. We built DataBahn with a
                                  clear mission: to democratize data management.
                                </p>
                              </div>
                              <div className="spacer-xsmall"></div>
                              <div className="button-group">
                                <div className="home_why_button">
                                  <div className="text-size-medium">
                                    View More
                                  </div>
                                  <div className="icon-embed-custom1 w-embed">
                                    <svg
                                      currentwidth="16"
                                      currentheight="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6 3L11 8L6 13"
                                        stroke="CurrentColor"
                                        strokeWidth="1.5"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div slide-in="" className="why_item">
                          <a
                            href="/roi-calculator"
                            className="why_item-link w-inline-block"
                          >
                            <div className="why_background-image-wrapper">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eca5d786370cc1f2221836_home_why_bg.avif"
                                alt=""
                                className="why_background-image"
                              />
                            </div>
                            <div className="why_card-content">
                              <div className="why_card-content-top">
                                <div className="why_item-icon-wrapper">
                                  <img
                                    loading="lazy"
                                    src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eca5ef01080e715eb2c564_Why%20Databhan%20Section%20-%20%20Icons-3.avif"
                                    alt=""
                                    className="icon-1x1-large"
                                  />
                                </div>
                                <div className="spacer-1-25rem"></div>
                                <h3 className="heading-style-h6 text-gradient-vertical">
                                  Rapid Time to Value
                                </h3>
                                <div className="spacer-0-75rem"></div>
                                <p>
                                  DataBahn gets your data flowing fast, turning
                                  it into value immediately. While others leave
                                  you busy connecting sources or troubleshooting
                                  pipelines, you&#x27;re already seeing insights
                                  and taking action.
                                </p>
                              </div>
                              <div className="spacer-xsmall"></div>
                              <div className="button-group">
                                <div className="home_why_button">
                                  <div className="text-size-medium">
                                    View More
                                  </div>
                                  <div className="icon-embed-custom1 w-embed">
                                    <svg
                                      currentwidth="16"
                                      currentheight="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6 3L11 8L6 13"
                                        stroke="CurrentColor"
                                        strokeWidth="1.5"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div id="usecases" className="section_data-fabrics_tabs">
            <div className="code-embed w-embed"></div>
            <div className="top-light_dot"></div>
            <img
              src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ec94666a30d21bfc5dd251_light.svg"
              loading="lazy"
              alt=""
              className="top-light_glow"
            />
            <div className="padding-global">
              <div className="container-large">
                <div className="data-fabrics_tabs_wrapper">
                  <div className="padding-section-large">
                    <div className="max-width-xlarge align-center">
                      <div className="data-fabrics_tabs_content">
                        <div className="text-align-center">
                          <div className="max-width-xlarge align-center">
                            <div slide-in="" className="tag">
                              DATA FABRICS
                            </div>
                            <div className="spacer-xsmall"></div>
                            <div className="data-fabrics_tabs_heading">
                              <h2 slide-in="" className="heading-style-h2">
                                ‍
                                <span className="text-gradient-grey">
                                  The ultimate data fabric built for{" "}
                                </span>
                                <span
                                  id="typewriter"
                                  className="text-gradient-blue"
                                >
                                  security
                                </span>
                                <span className="text-gradient-grey">
                                  {" "}
                                  data
                                </span>
                                ‍
                              </h2>
                            </div>
                            <div className="spacer-small"></div>
                            <p
                              slide-in=""
                              className="text-size-large text-color-secondary"
                            >
                              We’ve helped teams automate data integration,
                              management, and optimization to save them millions
                              in costs and countless hours of effort. Now it’s
                              your turn. Effortlessly manage four data types
                              with DataBahn to supercharge your data operations
                            </p>
                            <div className="spacer-medium"></div>
                            <div slide-in="" className="tagline">
                              <div className="tagline_line-left"></div>
                              <div className="arrow is-blue">
                                <div className="icon-embed-xsmall w-embed">
                                  <svg
                                    className="arrow_svg"
                                    currentwidth=" 100%"
                                    currentheight=" 100%"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.00012 16.1618C9.46038 16.1618 9.83337 15.7887 9.83337 15.3285C9.83337 14.8682 9.46037 14.4951 9.00012 14.4951C8.53987 14.4951 8.16675 14.8682 8.16675 15.3285C8.16675 15.7887 8.53988 16.1618 9.00012 16.1618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M9.00012 6.16178C9.46037 6.16178 9.83337 5.78869 9.83337 5.32845C9.83337 4.86822 9.46037 4.49512 9.00012 4.49512C8.53987 4.49512 8.16675 4.86822 8.16675 5.32845C8.16675 5.78869 8.53987 6.16178 9.00012 6.16178Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M6.50009 16.1618C6.96032 16.1618 7.33341 15.7887 7.33341 15.3285C7.33341 14.8682 6.96032 14.4951 6.50009 14.4951C6.03985 14.4951 5.66675 14.8682 5.66675 15.3285C5.66675 15.7887 6.03985 16.1618 6.50009 16.1618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M6.50009 6.16178C6.96032 6.16178 7.33341 5.78869 7.33341 5.32845C7.33341 4.86822 6.96032 4.49512 6.50009 4.49512C6.03985 4.49512 5.66675 4.86822 5.66675 5.32845C5.66675 5.78869 6.03985 6.16178 6.50009 6.16178Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M6.50009 8.66178C6.96032 8.66178 7.33341 8.28869 7.33341 7.82845C7.33341 7.36822 6.96032 6.99512 6.50009 6.99512C6.03985 6.99512 5.66675 7.36822 5.66675 7.82845C5.66675 8.28869 6.03985 8.66178 6.50009 8.66178Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M6.50009 13.6618C6.96032 13.6618 7.33341 13.2887 7.33341 12.8285C7.33341 12.3682 6.96032 11.9951 6.50009 11.9951C6.03985 11.9951 5.66675 12.3682 5.66675 12.8285C5.66675 13.2887 6.03985 13.6618 6.50009 13.6618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M4.00009 8.66178C4.46032 8.66178 4.83341 8.28869 4.83341 7.82845C4.83341 7.36822 4.46032 6.99512 4.00009 6.99512C3.53985 6.99512 3.16675 7.36822 3.16675 7.82845C3.16675 8.28869 3.53985 8.66178 4.00009 8.66178Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M4.00009 13.6618C4.46032 13.6618 4.83341 13.2887 4.83341 12.8285C4.83341 12.3682 4.46032 11.9951 4.00009 11.9951C3.53985 11.9951 3.16675 12.3682 3.16675 12.8285C3.16675 13.2887 3.53985 13.6618 4.00009 13.6618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M4.00009 11.1618C4.46032 11.1618 4.83341 10.7887 4.83341 10.3285C4.83341 9.86822 4.46032 9.49512 4.00009 9.49512C3.53985 9.49512 3.16675 9.86822 3.16675 10.3285C3.16675 10.7887 3.53985 11.1618 4.00009 11.1618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M1.50009 11.1618C1.96032 11.1618 2.33341 10.7887 2.33341 10.3285C2.33341 9.86822 1.96032 9.49512 1.50009 9.49512C1.03985 9.49512 0.666749 9.86822 0.666749 10.3285C0.666749 10.7887 1.03985 11.1618 1.50009 11.1618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M18.1668 16.1618C18.627 16.1618 19 15.7887 19 15.3285C19 14.8682 18.627 14.4951 18.1668 14.4951C17.7065 14.4951 17.3334 14.8682 17.3334 15.3285C17.3334 15.7887 17.7065 16.1618 18.1668 16.1618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M18.1668 6.16178C18.627 6.16178 19 5.78869 19 5.32845C19 4.86822 18.627 4.49512 18.1668 4.49512C17.7065 4.49512 17.3334 4.86822 17.3334 5.32845C17.3334 5.78869 17.7065 6.16178 18.1668 6.16178Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M15.6667 16.1618C16.127 16.1618 16.5 15.7887 16.5 15.3285C16.5 14.8682 16.127 14.4951 15.6667 14.4951C15.2065 14.4951 14.8334 14.8682 14.8334 15.3285C14.8334 15.7887 15.2065 16.1618 15.6667 16.1618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M15.6667 6.16178C16.1269 6.16178 16.5 5.78869 16.5 5.32845C16.5 4.86822 16.1269 4.49512 15.6667 4.49512C15.2065 4.49512 14.8334 4.86822 14.8334 5.32845C14.8334 5.78869 15.2065 6.16178 15.6667 6.16178Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M15.6667 8.66178C16.127 8.66178 16.5 8.28869 16.5 7.82845C16.5 7.36822 16.1269 6.99512 15.6667 6.99512C15.2065 6.99512 14.8334 7.36822 14.8334 7.82845C14.8334 8.28869 15.2065 8.66178 15.6667 8.66178Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M15.6667 13.6618C16.127 13.6618 16.5 13.2887 16.5 12.8285C16.5 12.3682 16.127 11.9951 15.6667 11.9951C15.2065 11.9951 14.8334 12.3682 14.8334 12.8285C14.8334 13.2887 15.2065 13.6618 15.6667 13.6618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M13.1667 8.66178C13.6269 8.66178 14 8.28869 14 7.82845C14 7.36822 13.6269 6.99512 13.1667 6.99512C12.7065 6.99512 12.3334 7.36822 12.3334 7.82845C12.3334 8.28869 12.7065 8.66178 13.1667 8.66178Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M13.1667 13.6618C13.627 13.6618 14 13.2887 14 12.8285C14 12.3682 13.627 11.9951 13.1667 11.9951C12.7065 11.9951 12.3334 12.3682 12.3334 12.8285C12.3334 13.2887 12.7065 13.6618 13.1667 13.6618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M13.1667 11.1618C13.627 11.1618 14 10.7887 14 10.3285C14 9.86822 13.6269 9.49512 13.1667 9.49512C12.7065 9.49512 12.3334 9.86822 12.3334 10.3285C12.3334 10.7887 12.7065 11.1618 13.1667 11.1618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M10.6667 11.1618C11.127 11.1618 11.5 10.7887 11.5 10.3285C11.5 9.86822 11.127 9.49512 10.6667 9.49512C10.2065 9.49512 9.83337 9.86822 9.83337 10.3285C9.83337 10.7887 10.2065 11.1618 10.6667 11.1618Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div className="tagline_text">
                                We can help you Manage
                              </div>
                              <div className="arrow is-blue">
                                <div className="icon-embed-xsmall w-embed">
                                  <svg
                                    className="arrow_svg"
                                    currentwidth=" 100%"
                                    currentheight=" 100%"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.6666 15.6667C10.2064 15.6667 9.83337 15.2936 9.83337 14.8333C9.83337 14.3731 10.2064 14 10.6666 14C11.1269 14 11.5 14.3731 11.5 14.8333C11.5 15.2936 11.1269 15.6667 10.6666 15.6667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M10.6666 5.66666C10.2064 5.66666 9.83337 5.29357 9.83337 4.83334C9.83337 4.3731 10.2064 4 10.6666 4C11.1269 4 11.5 4.3731 11.5 4.83334C11.5 5.29357 11.1269 5.66666 10.6666 5.66666Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M13.1667 15.6667C12.7064 15.6667 12.3333 15.2936 12.3333 14.8333C12.3333 14.3731 12.7064 14 13.1667 14C13.6269 14 14 14.3731 14 14.8333C14 15.2936 13.6269 15.6667 13.1667 15.6667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M13.1667 5.66666C12.7064 5.66666 12.3333 5.29357 12.3333 4.83334C12.3333 4.3731 12.7064 4 13.1667 4C13.6269 4 14 4.3731 14 4.83334C14 5.29357 13.6269 5.66666 13.1667 5.66666Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M13.1667 8.16666C12.7064 8.16666 12.3333 7.79358 12.3333 7.33334C12.3333 6.8731 12.7064 6.5 13.1667 6.5C13.6269 6.5 14 6.8731 14 7.33334C14 7.79358 13.6269 8.16666 13.1667 8.16666Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M13.1667 13.1667C12.7064 13.1667 12.3333 12.7936 12.3333 12.3333C12.3333 11.8731 12.7064 11.5 13.1667 11.5C13.6269 11.5 14 11.8731 14 12.3333C14 12.7936 13.6269 13.1667 13.1667 13.1667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M15.6667 8.16666C15.2064 8.16666 14.8333 7.79358 14.8333 7.33334C14.8333 6.8731 15.2064 6.5 15.6667 6.5C16.1269 6.5 16.5 6.8731 16.5 7.33334C16.5 7.79358 16.1269 8.16666 15.6667 8.16666Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M15.6667 13.1667C15.2064 13.1667 14.8333 12.7936 14.8333 12.3333C14.8333 11.8731 15.2064 11.5 15.6667 11.5C16.1269 11.5 16.5 11.8731 16.5 12.3333C16.5 12.7936 16.1269 13.1667 15.6667 13.1667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M15.6667 10.6667C15.2064 10.6667 14.8333 10.2936 14.8333 9.83334C14.8333 9.3731 15.2064 9 15.6667 9C16.1269 9 16.5 9.3731 16.5 9.83334C16.5 10.2936 16.1269 10.6667 15.6667 10.6667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M18.1667 10.6667C17.7064 10.6667 17.3333 10.2936 17.3333 9.83334C17.3333 9.3731 17.7064 9 18.1667 9C18.6269 9 19 9.3731 19 9.83334C19 10.2936 18.6269 10.6667 18.1667 10.6667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M1.5 15.6667C1.03975 15.6667 0.666748 15.2936 0.666748 14.8333C0.666748 14.3731 1.03975 14 1.5 14C1.96025 14 2.33337 14.3731 2.33337 14.8333C2.33337 15.2936 1.96025 15.6667 1.5 15.6667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M1.5 5.66666C1.03975 5.66666 0.666748 5.29357 0.666748 4.83334C0.666749 4.3731 1.03975 4 1.5 4C1.96025 4 2.33337 4.3731 2.33337 4.83334C2.33337 5.29357 1.96025 5.66666 1.5 5.66666Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M4.00004 15.6667C3.5398 15.6667 3.16671 15.2936 3.16671 14.8333C3.16671 14.3731 3.5398 14 4.00004 14C4.46027 14 4.83337 14.3731 4.83337 14.8333C4.83337 15.2936 4.46027 15.6667 4.00004 15.6667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M4.00004 5.66666C3.5398 5.66666 3.16671 5.29357 3.16671 4.83334C3.16671 4.3731 3.5398 4 4.00004 4C4.46027 4 4.83337 4.3731 4.83337 4.83334C4.83337 5.29357 4.46027 5.66666 4.00004 5.66666Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M4.00004 8.16666C3.5398 8.16666 3.16671 7.79358 3.16671 7.33334C3.16671 6.8731 3.5398 6.5 4.00004 6.5C4.46027 6.5 4.83337 6.8731 4.83337 7.33334C4.83337 7.79358 4.46027 8.16666 4.00004 8.16666Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M4.00004 13.1667C3.5398 13.1667 3.16671 12.7936 3.16671 12.3333C3.16671 11.8731 3.5398 11.5 4.00004 11.5C4.46027 11.5 4.83337 11.8731 4.83337 12.3333C4.83337 12.7936 4.46027 13.1667 4.00004 13.1667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M6.50004 8.16666C6.0398 8.16666 5.66671 7.79358 5.66671 7.33334C5.66671 6.8731 6.0398 6.5 6.50004 6.5C6.96027 6.5 7.33337 6.8731 7.33337 7.33334C7.33337 7.79358 6.96027 8.16666 6.50004 8.16666Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M6.50004 13.1667C6.0398 13.1667 5.66671 12.7936 5.66671 12.3333C5.66671 11.8731 6.0398 11.5 6.50004 11.5C6.96027 11.5 7.33337 11.8731 7.33337 12.3333C7.33337 12.7936 6.96027 13.1667 6.50004 13.1667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M6.50004 10.6667C6.0398 10.6667 5.66671 10.2936 5.66671 9.83334C5.66671 9.3731 6.0398 9 6.50004 9C6.96027 9 7.33337 9.3731 7.33337 9.83334C7.33337 10.2936 6.96027 10.6667 6.50004 10.6667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M9.00004 10.6667C8.5398 10.6667 8.16671 10.2936 8.16671 9.83334C8.16671 9.3731 8.5398 9 9.00004 9C9.46027 9 9.83337 9.3731 9.83337 9.83334C9.83337 10.2936 9.46027 10.6667 9.00004 10.6667Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div className="tagline_line-right"></div>
                            </div>
                          </div>
                        </div>
                        <div className="spacer-small"></div>
                        <div
                          data-current="Tab 1"
                          data-easing="ease"
                          data-duration-in="0"
                          data-duration-out="0"
                          className="data-fabrics_tabs_component w-tabs"
                        >
                          <div
                            reveal-list=""
                            className="tabs-menu no-scrollbar w-tab-menu"
                          >
                            <a
                              data-w-tab="Tab 1"
                              reveal-item=""
                              className="tab-link w-inline-block w-tab-link w--current"
                            >
                              <div className="tab-link_glow"></div>
                              <div className="tab-link_content">
                                <div className="icon-embed-custom1 w-embed">
                                  <svg
                                    currentwidth=" 100%"
                                    currentheight=" 100%"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5.83333 8.82835V6.32835C5.83337 5.41116 6.13605 4.51961 6.69441 3.79196C7.25278 3.06431 8.03564 2.54124 8.92157 2.30385C9.80751 2.06646 10.747 2.12802 11.5944 2.47899C12.4418 2.82996 13.1497 3.45073 13.6083 4.24502M10.8333 13.8284C10.8333 14.2886 10.4602 14.6617 10 14.6617C9.53976 14.6617 9.16667 14.2886 9.16667 13.8284C9.16667 13.3681 9.53976 12.995 10 12.995C10.4602 12.995 10.8333 13.3681 10.8333 13.8284ZM4.16667 8.82835H15.8333C16.7538 8.82835 17.5 9.57454 17.5 10.495V17.1617C17.5 18.0822 16.7538 18.8283 15.8333 18.8283H4.16667C3.24619 18.8283 2.5 18.0822 2.5 17.1617V10.495C2.5 9.57454 3.24619 8.82835 4.16667 8.82835Z"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                <div>Security Data</div>
                              </div>
                              <div className="tab-link_border"></div>{" "}
                            </a>
                            <a
                              data-w-tab="Tab 2"
                              reveal-item=""
                              className="tab-link w-inline-block w-tab-link"
                            >
                              <div className="tab-link_content">
                                <div className="icon-embed-custom1 w-embed">
                                  <svg
                                    currentwidth=" 100%"
                                    currentheight=" 100%"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10 14.6619V17.9952M12.6667 4.57853L11.9167 4.2452M12.6667 6.41187L11.9167 6.7452M14.0834 3.16187L13.75 2.41187M14.0834 7.82853L13.75 8.57853M16.25 2.41187L15.9167 3.16187M16.25 8.57853L15.9167 7.82853M18.0834 4.2452L17.3334 4.57853M18.0834 6.7452L17.3334 6.41187M18.3334 11.3285V12.9952C18.3334 13.4372 18.1578 13.8611 17.8452 14.1737C17.5326 14.4863 17.1087 14.6619 16.6667 14.6619H3.33335C2.89133 14.6619 2.4674 14.4863 2.15484 14.1737C1.84228 13.8611 1.66669 13.4372 1.66669 12.9952V4.66187C1.66669 4.21984 1.84228 3.79591 2.15484 3.48335C2.4674 3.17079 2.89133 2.9952 3.33335 2.9952H9.16669M6.66669 17.9952H13.3334M17.5 5.4952C17.5 6.87591 16.3807 7.9952 15 7.9952C13.6193 7.9952 12.5 6.87591 12.5 5.4952C12.5 4.11449 13.6193 2.9952 15 2.9952C16.3807 2.9952 17.5 4.11449 17.5 5.4952Z"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                <div>Application Data</div>
                              </div>
                              <div className="tab-link_glow"></div>
                              <div className="tab-link_border"></div>{" "}
                            </a>
                            <a
                              data-w-tab="Tab 3"
                              reveal-item=""
                              className="tab-link w-inline-block w-tab-link"
                            >
                              <div className="tab-link_content">
                                <div className="icon-embed-custom1 w-embed">
                                  <svg
                                    currentwidth=" 100%"
                                    currentheight=" 100%"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M18.3334 10.4952C18.3334 15.0976 14.6024 18.8285 10 18.8285M18.3334 10.4952C18.3334 5.89283 14.6024 2.16187 10 2.16187M18.3334 10.4952H1.66669M10 18.8285C5.39765 18.8285 1.66669 15.0976 1.66669 10.4952M10 18.8285C7.86022 16.5817 6.66669 13.5979 6.66669 10.4952C6.66669 7.39248 7.86022 4.40866 10 2.16187M10 18.8285C12.1398 16.5817 13.3334 13.5979 13.3334 10.4952C13.3334 7.39248 12.1398 4.40866 10 2.16187M1.66669 10.4952C1.66669 5.89283 5.39765 2.16187 10 2.16187"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                <div>IOT / OT Data</div>
                              </div>
                              <div className="tab-link_glow"></div>
                              <div className="tab-link_border"></div>{" "}
                            </a>
                            <a
                              data-w-tab="Tab 4"
                              reveal-item=""
                              className="tab-link w-inline-block w-tab-link"
                            >
                              <div className="tab-link_content">
                                <div className="icon-embed-custom1 w-embed">
                                  <svg
                                    currentwidth=" 100%"
                                    currentheight=" 100%"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.8333 14.6618V7.99512M15 14.6618V4.66178M2.5 2.99512V16.3285C2.5 16.7705 2.67559 17.1944 2.98816 17.507C3.30072 17.8195 3.72464 17.9951 4.16667 17.9951H17.5M6.66667 14.6618V12.1618"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                <div>Observability Data</div>
                              </div>
                              <div className="tab-link_glow"></div>
                              <div className="tab-link_border"></div>
                            </a>
                          </div>
                          <div
                            slide-in=""
                            className="data-fabrics_tabs_tab-content w-tab-content"
                          >
                            <div
                              data-w-tab="Tab 1"
                              className="data-fabrics_tabs_pane w-tab-pane w--tab-active"
                            >
                              <div className="data-fabrics_tabs_pane-content">
                                <div
                                  data-duration-in="0"
                                  data-duration-out="0"
                                  data-current="Tab 1"
                                  data-easing="ease"
                                  className="data-fabrics_tab_component w-tabs"
                                >
                                  <div
                                    r-automatic-tabs="10"
                                    id="w-node-fad3f47d-28b1-cd18-ec49-848aad1474bb-1c2c275d"
                                    className="data-fabrics_tab_menu w-tab-menu"
                                  >
                                    <a
                                      data-w-tab="Tab 1"
                                      className="data-fabrics_tab_link w-inline-block w-tab-link w--current"
                                    >
                                      <div className="data-fabrics_tab_content">
                                        <div className="spacer-xsmall"></div>
                                        <h3 className="heading-style-h6 text-color-primary">
                                          Seamless Data Collection &amp;
                                          Integration
                                        </h3>
                                        <div className="data-fabrics_tab_details">
                                          <div className="spacer-small"></div>
                                          <p className="text-color-secondary">
                                            Easily collect security data using
                                            built-in connectors, agents, or
                                            advanced agentless methods–no matter
                                            how incompatible your existing tools
                                            are.
                                          </p>
                                          <div className="spacer-small"></div>
                                          <div className="data-fabrics_tab_list">
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                500+
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Plug-and-play connectors for
                                                easy onboarding
                                              </div>
                                            </div>
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                80%
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Less manual effort for new data
                                                onboarding
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="spacer-xsmall"></div>
                                        <div className="data-fabrics_tab_progress-track">
                                          <div className="data-fabrics_tab_progress"></div>
                                        </div>
                                      </div>{" "}
                                    </a>
                                    <a
                                      data-w-tab="Tab 2"
                                      className="data-fabrics_tab_link w-inline-block w-tab-link"
                                    >
                                      <div className="data-fabrics_tab_content">
                                        <div className="spacer-xsmall"></div>
                                        <h3 className="heading-style-h6 text-color-primary">
                                          Optimize SIEM &amp; Data Storage
                                        </h3>
                                        <div className="data-fabrics_tab_details">
                                          <div className="spacer-small"></div>
                                          <p className="text-color-secondary">
                                            Only pay SIEM licensing for data you
                                            actually use. Leverage AI-based
                                            filtering to automatically route
                                            less-critical data to low-cost
                                            storage.
                                          </p>
                                          <div className="spacer-small"></div>
                                          <div className="data-fabrics_tab_list">
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                50%+
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Reduced security storage and
                                                licensing costs
                                              </div>
                                            </div>
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                14 Days
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Guaranteed time-to-value from
                                                deployment
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="spacer-xsmall"></div>
                                        <div className="data-fabrics_tab_progress-track">
                                          <div className="data-fabrics_tab_progress"></div>
                                        </div>
                                      </div>{" "}
                                    </a>
                                    <a
                                      data-w-tab="Tab 3"
                                      className="data-fabrics_tab_link w-inline-block w-tab-link"
                                    >
                                      <div className="data-fabrics_tab_content">
                                        <div className="spacer-xsmall"></div>
                                        <h3 className="heading-style-h6 text-color-primary">
                                          Real-Time Pipeline Visibility &amp;
                                          Insights
                                        </h3>
                                        <div className="data-fabrics_tab_details">
                                          <div className="spacer-small"></div>
                                          <p className="text-color-secondary">
                                            Maintain continuous visibility with
                                            24/7 pipeline health monitoring,
                                            automatic anomaly alerts, and
                                            built-in failover &amp; resiliency.
                                          </p>
                                          <div className="spacer-small"></div>
                                          <div className="data-fabrics_tab_list">
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                100%
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Lossless and resilient data
                                                collection
                                              </div>
                                            </div>
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                80%+
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Improved telemetry coverage and
                                                actionable insights
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="spacer-xsmall"></div>
                                        <div className="data-fabrics_tab_progress-track">
                                          <div className="data-fabrics_tab_progress"></div>
                                        </div>
                                      </div>{" "}
                                    </a>
                                    <a
                                      data-w-tab="Tab 4"
                                      className="data-fabrics_tab_link w-inline-block w-tab-link"
                                    >
                                      <div className="data-fabrics_tab_content">
                                        <div className="spacer-xsmall"></div>
                                        <h3 className="heading-style-h6 text-color-primary">
                                          Complete Data Ownership &amp;
                                          Governance
                                        </h3>
                                        <div className="data-fabrics_tab_details">
                                          <div className="spacer-small"></div>
                                          <p className="text-color-secondary">
                                            Take full ownership of your data
                                            with AI-powered metadata tagging,
                                            automated data quarantine for
                                            sensitive information, and complete
                                            data sovereignty.
                                          </p>
                                          <div className="spacer-small"></div>
                                          <div className="data-fabrics_tab_list">
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                99%
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Data visibility, eliminating
                                                blind spots
                                              </div>
                                            </div>
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                50%
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Lower data management and
                                                security ops costs
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="spacer-xsmall"></div>
                                        <div className="data-fabrics_tab_progress-track">
                                          <div className="data-fabrics_tab_progress"></div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="home_tab_tabs-content w-tab-content">
                                    <div
                                      data-w-tab="Tab 1"
                                      className="home_tab_tab-pane w-tab-pane w--tab-active"
                                    ></div>
                                    <div
                                      data-w-tab="Tab 2"
                                      className="home_tab_tab-pane w-tab-pane"
                                    ></div>
                                    <div
                                      data-w-tab="Tab 3"
                                      className="home_tab_tab-pane w-tab-pane"
                                    ></div>
                                    <div
                                      data-w-tab="Tab 4"
                                      className="home_tab_tab-pane w-tab-pane"
                                    ></div>
                                  </div>
                                </div>
                                <div className="data-fabrics_tabs_video w-embed">
                                  <video
                                    autoPlay
                                    loop
                                    muted
                                    currentheight="100%"
                                    playsInline
                                  >
                                    <source
                                      src="https://github.com/rahulxchanana/databahn/raw/refs/heads/main/Security_Compressed.mp4"
                                      type="video/mp4"
                                    />
                                  </video>
                                </div>
                              </div>
                            </div>
                            <div
                              data-w-tab="Tab 2"
                              className="data-fabrics_tabs_pane w-tab-pane"
                            >
                              <div className="data-fabrics_tabs_pane-content">
                                <div
                                  data-duration-in="400"
                                  data-duration-out="200"
                                  data-current="Tab 2"
                                  data-easing="ease"
                                  className="data-fabrics_tab_component w-tabs"
                                >
                                  <div className="home_tab_tabs-content w-tab-content">
                                    <div
                                      data-w-tab="Tab 1"
                                      className="home_tab_tab-pane w-tab-pane"
                                    ></div>
                                    <div
                                      data-w-tab="Tab 2"
                                      className="home_tab_tab-pane w-tab-pane w--tab-active"
                                    ></div>
                                    <div
                                      data-w-tab="Tab 3"
                                      className="home_tab_tab-pane w-tab-pane"
                                    ></div>
                                    <div
                                      data-w-tab="Tab 4"
                                      className="home_tab_tab-pane w-tab-pane"
                                    ></div>
                                  </div>
                                  <div
                                    r-automatic-tabs="10"
                                    id="w-node-_0a4d2295-64f2-6c86-5a67-f3c6786508c8-1c2c275d"
                                    className="data-fabrics_tab_menu w-tab-menu"
                                  >
                                    <a
                                      data-w-tab="Tab 1"
                                      className="data-fabrics_tab_link w-inline-block w-tab-link"
                                    >
                                      <div className="data-fabrics_tab_content">
                                        <div className="spacer-xsmall"></div>
                                        <h3 className="heading-style-h6 text-color-primary">
                                          Agentless &amp; Flexible Data
                                          Collection
                                        </h3>
                                        <div className="data-fabrics_tab_details">
                                          <div className="spacer-small"></div>
                                          <p className="text-color-secondary">
                                            Quickly onboard application data
                                            with versatile plug-and-play
                                            connectors, traditional agents, or
                                            innovative agentless solutions -
                                            reducing onboarding complexity.
                                          </p>
                                          <div className="spacer-small"></div>
                                          <div className="data-fabrics_tab_list">
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                200+
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Connectors for easy onboarding;
                                                supports custom apps.
                                              </div>
                                            </div>
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                10x
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Faster data onboarding and
                                                solution integration
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="spacer-xsmall"></div>
                                        <div className="data-fabrics_tab_progress-track">
                                          <div className="data-fabrics_tab_progress"></div>
                                        </div>
                                      </div>{" "}
                                    </a>
                                    <a
                                      data-w-tab="Tab 2"
                                      className="data-fabrics_tab_link w-inline-block w-tab-link w--current"
                                    >
                                      <div className="data-fabrics_tab_content">
                                        <div className="spacer-xsmall"></div>
                                        <h3 className="heading-style-h6 text-color-primary">
                                          Optimized Data Quality &amp;
                                          Resilience
                                        </h3>
                                        <div className="data-fabrics_tab_details">
                                          <div className="spacer-small"></div>
                                          <p className="text-color-secondary">
                                            Automate your data validation,
                                            cleansing, and enrichment processes,
                                            ensuring instant usability and
                                            reliability.
                                          </p>
                                          <div className="spacer-small"></div>
                                          <div className="data-fabrics_tab_list">
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                100%
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Lossless and reliable data
                                                ingestion &amp; collection.
                                              </div>
                                            </div>
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                80%
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Lesser manual effort and time
                                                for data operations
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="spacer-xsmall"></div>
                                        <div className="data-fabrics_tab_progress-track">
                                          <div className="data-fabrics_tab_progress"></div>
                                        </div>
                                      </div>{" "}
                                    </a>
                                    <a
                                      data-w-tab="Tab 3"
                                      className="data-fabrics_tab_link w-inline-block w-tab-link"
                                    >
                                      <div className="data-fabrics_tab_content">
                                        <div className="spacer-xsmall"></div>
                                        <h3 className="heading-style-h6 text-color-primary">
                                          Comprehensive Data Governance
                                        </h3>
                                        <div className="data-fabrics_tab_details">
                                          <div className="spacer-small"></div>
                                          <p className="text-color-secondary">
                                            Gain complete visibility into your
                                            application data with Reef-powered
                                            metadata tagging, compliance
                                            tracking, and audit-ready data
                                            lineage.
                                          </p>
                                          <div className="spacer-small"></div>
                                          <div className="data-fabrics_tab_list">
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                90%+
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Reduced manual auditing and
                                                compliance efforts.
                                              </div>
                                            </div>
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                100%
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Full data history recall and
                                                replay for complete auditability
                                                and tracking
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="spacer-xsmall"></div>
                                        <div className="data-fabrics_tab_progress-track">
                                          <div className="data-fabrics_tab_progress"></div>
                                        </div>
                                      </div>{" "}
                                    </a>
                                    <a
                                      data-w-tab="Tab 4"
                                      className="data-fabrics_tab_link w-inline-block w-tab-link"
                                    >
                                      <div className="data-fabrics_tab_content">
                                        <div className="spacer-xsmall"></div>
                                        <h3 className="heading-style-h6 text-color-primary">
                                          Simplified Data Control &amp;
                                          Democratization
                                        </h3>
                                        <div className="data-fabrics_tab_details">
                                          <div className="spacer-small"></div>
                                          <p className="text-color-secondary">
                                            Securely control application data
                                            access with automated
                                            transformations, sensitive data
                                            quarantine, and intuitive access
                                            management - empowering innovation.
                                          </p>
                                        </div>
                                        <div className="spacer-xsmall"></div>
                                        <div className="data-fabrics_tab_progress-track">
                                          <div className="data-fabrics_tab_progress"></div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="data-fabrics_tabs_video w-embed">
                                  <video
                                    autoPlay
                                    loop
                                    muted
                                    currentheight="100%"
                                    playsInline
                                  >
                                    <source
                                      src="https://github.com/rahulxchanana/databahn/raw/refs/heads/main/Application_Compressed.mp4"
                                      type="video/mp4"
                                    />
                                  </video>
                                </div>
                              </div>
                            </div>
                            <div
                              data-w-tab="Tab 3"
                              className="data-fabrics_tabs_pane w-tab-pane"
                            >
                              <div className="data-fabrics_tabs_pane-content">
                                <div
                                  data-duration-in="400"
                                  data-duration-out="200"
                                  data-current="Tab 1"
                                  data-easing="ease"
                                  className="data-fabrics_tab_component w-tabs"
                                >
                                  <div
                                    r-automatic-tabs="10"
                                    id="w-node-bd722fe6-46bc-394d-6ace-3b0e48cca585-1c2c275d"
                                    className="data-fabrics_tab_menu w-tab-menu"
                                  >
                                    <a
                                      data-w-tab="Tab 1"
                                      className="data-fabrics_tab_link w-inline-block w-tab-link w--current"
                                    >
                                      <div className="data-fabrics_tab_content">
                                        <div className="spacer-xsmall"></div>
                                        <h3 className="heading-style-h6 text-color-primary">
                                          Seamless IoT/OT Data Integration
                                        </h3>
                                        <div className="data-fabrics_tab_details">
                                          <div className="spacer-small"></div>
                                          <p className="text-color-secondary">
                                            Automate sensor data collection and
                                            standardization from PLCs, SCADA
                                            systems, and remote IoT locations
                                            with ease.
                                          </p>
                                          <div className="spacer-small"></div>
                                          <div className="data-fabrics_tab_list">
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                90%
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Reduction in IoT onboarding and
                                                integration time.
                                              </div>
                                            </div>
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                99.99%
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Continuous uptime from real-time
                                                data streaming.
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="spacer-xsmall"></div>
                                        <div className="data-fabrics_tab_progress-track">
                                          <div className="data-fabrics_tab_progress"></div>
                                        </div>
                                      </div>{" "}
                                    </a>
                                    <a
                                      data-w-tab="Tab 2"
                                      className="data-fabrics_tab_link w-inline-block w-tab-link"
                                    >
                                      <div className="data-fabrics_tab_content">
                                        <div className="spacer-xsmall"></div>
                                        <h3 className="heading-style-h6 text-color-primary">
                                          Edge-to-Cloud Pipeline Optimization
                                        </h3>
                                        <div className="data-fabrics_tab_details">
                                          <div className="spacer-small"></div>
                                          <p className="text-color-secondary">
                                            Leverage AI-driven edge analytics to
                                            significantly reduce irrelevant data
                                            volume before transmission, cutting
                                            cloud bandwidth costs.
                                          </p>
                                          <div className="spacer-small"></div>
                                          <div className="data-fabrics_tab_list">
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                80%
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Savings in cloud data-transfer
                                                costs.
                                              </div>
                                            </div>
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                70%
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Irrelevant data volume
                                                eliminated with AI.
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="spacer-xsmall"></div>
                                        <div className="data-fabrics_tab_progress-track">
                                          <div className="data-fabrics_tab_progress"></div>
                                        </div>
                                      </div>{" "}
                                    </a>
                                    <a
                                      data-w-tab="Tab 3"
                                      className="data-fabrics_tab_link w-inline-block w-tab-link"
                                    >
                                      <div className="data-fabrics_tab_content">
                                        <div className="spacer-xsmall"></div>
                                        <h3 className="heading-style-h6 text-color-primary">
                                          Real-Time Operational Insights &amp;
                                          Visibility
                                        </h3>
                                        <div className="data-fabrics_tab_details">
                                          <div className="spacer-small"></div>
                                          <p className="text-color-secondary">
                                            Instantly visualize and manage
                                            operational KPIs with centralized
                                            AI-powered analytics dashboards,
                                            proactively detecting equipment
                                            anomalies and reducing downtime.
                                          </p>
                                          <div className="spacer-small"></div>
                                          <div className="data-fabrics_tab_list">
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                99.99%
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Uptime and reliability of
                                                operational data.
                                              </div>
                                            </div>
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                90%
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Reduction in unplanned downtime.
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="spacer-xsmall"></div>
                                        <div className="data-fabrics_tab_progress-track">
                                          <div className="data-fabrics_tab_progress"></div>
                                        </div>
                                      </div>{" "}
                                    </a>
                                    <a
                                      data-w-tab="Tab 4"
                                      className="data-fabrics_tab_link w-inline-block w-tab-link"
                                    >
                                      <div className="data-fabrics_tab_content">
                                        <div className="spacer-xsmall"></div>
                                        <h3 className="heading-style-h6 text-color-primary">
                                          Lower Total Cost of Ownership
                                        </h3>
                                        <div className="data-fabrics_tab_details">
                                          <div className="spacer-small"></div>
                                          <p className="text-color-secondary">
                                            Reduce total ownership costs through
                                            faster edge-based processing,
                                            optimized cloud storage, and
                                            decreased infrastructure demands.
                                          </p>
                                          <div className="spacer-small"></div>
                                          <div className="data-fabrics_tab_list">
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                35%+
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Reduction in infrastructure
                                                expenses.
                                              </div>
                                            </div>
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                50%
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Increased operational efficiency
                                                and cost savings.
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="spacer-xsmall"></div>
                                        <div className="data-fabrics_tab_progress-track">
                                          <div className="data-fabrics_tab_progress"></div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="home_tab_tabs-content w-tab-content">
                                    <div
                                      data-w-tab="Tab 1"
                                      className="home_tab_tab-pane w-tab-pane w--tab-active"
                                    ></div>
                                    <div
                                      data-w-tab="Tab 2"
                                      className="home_tab_tab-pane w-tab-pane"
                                    ></div>
                                    <div
                                      data-w-tab="Tab 3"
                                      className="home_tab_tab-pane w-tab-pane"
                                    ></div>
                                    <div
                                      data-w-tab="Tab 4"
                                      className="home_tab_tab-pane w-tab-pane"
                                    ></div>
                                  </div>
                                </div>
                                <div className="data-fabrics_tabs_video w-embed">
                                  <video
                                    autoPlay
                                    loop
                                    muted
                                    currentheight="100%"
                                    playsInline
                                  >
                                    <source
                                      src="https://github.com/rahulxchanana/databahn/raw/refs/heads/main/Iot_Compressed.mp4"
                                      type="video/mp4"
                                    />
                                  </video>
                                </div>
                              </div>
                            </div>
                            <div
                              data-w-tab="Tab 4"
                              className="data-fabrics_tabs_pane w-tab-pane"
                            >
                              <div className="data-fabrics_tabs_pane-content">
                                <div
                                  data-duration-in="400"
                                  data-duration-out="200"
                                  data-current="Tab 1"
                                  data-easing="ease"
                                  className="data-fabrics_tab_component w-tabs"
                                >
                                  <div
                                    r-automatic-tabs="10"
                                    id="w-node-_74b44d5b-dd83-8c76-0718-e7f0f0a24ea4-1c2c275d"
                                    className="data-fabrics_tab_menu w-tab-menu"
                                  >
                                    <a
                                      data-w-tab="Tab 1"
                                      className="data-fabrics_tab_link w-inline-block w-tab-link w--current"
                                    >
                                      <div className="data-fabrics_tab_content">
                                        <div className="spacer-xsmall"></div>
                                        <h3 className="heading-style-h6 text-color-primary">
                                          Intelligent Observability Cost
                                          Reduction
                                        </h3>
                                        <div className="data-fabrics_tab_details">
                                          <div className="spacer-small"></div>
                                          <p className="text-color-secondary">
                                            Automatically filter telemetry data
                                            relevance with AI, significantly
                                            cutting observability platform and
                                            SIEM costs
                                          </p>
                                          <div className="spacer-small"></div>
                                          <div className="data-fabrics_tab_list">
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                70%
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Reduction in observability data
                                                processing costs without
                                                performance trade-offs.
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="spacer-xsmall"></div>
                                        <div className="data-fabrics_tab_progress-track">
                                          <div className="data-fabrics_tab_progress"></div>
                                        </div>
                                      </div>{" "}
                                    </a>
                                    <a
                                      data-w-tab="Tab 2"
                                      className="data-fabrics_tab_link w-inline-block w-tab-link"
                                    >
                                      <div className="data-fabrics_tab_content">
                                        <div className="spacer-xsmall"></div>
                                        <h3 className="heading-style-h6 text-color-primary">
                                          Real-Time Edge Insights
                                        </h3>
                                        <div className="data-fabrics_tab_details">
                                          <div className="spacer-small"></div>
                                          <p className="text-color-secondary">
                                            Easily collect security data using
                                            built-in connectors, agents, or
                                            advanced agentless methods - no
                                            matter how incompatible your
                                            existing tools are.
                                          </p>
                                          <div className="spacer-small"></div>
                                          <div className="data-fabrics_tab_list">
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                500+
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Plug-and-play connectors for
                                                easy onboarding
                                              </div>
                                            </div>
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                70%
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Faster time-to-value through
                                                pre-built telemetry templates
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="spacer-xsmall"></div>
                                        <div className="data-fabrics_tab_progress-track">
                                          <div className="data-fabrics_tab_progress"></div>
                                        </div>
                                      </div>{" "}
                                    </a>
                                    <a
                                      data-w-tab="Tab 3"
                                      className="data-fabrics_tab_link w-inline-block w-tab-link"
                                    >
                                      <div className="data-fabrics_tab_content">
                                        <div className="spacer-xsmall"></div>
                                        <h3 className="heading-style-h6 text-color-primary">
                                          Automated Compliance &amp; Data
                                          Quality
                                        </h3>
                                        <div className="data-fabrics_tab_details">
                                          <div className="spacer-small"></div>
                                          <p className="text-color-secondary">
                                            Ensure compliance and usability with
                                            automated data enrichment, PII
                                            masking, and validation prior to
                                            downstream use.
                                          </p>
                                          <div className="spacer-small"></div>
                                          <div className="data-fabrics_tab_list">
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                90%
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Faster issue detection and
                                                actionable insights.
                                              </div>
                                            </div>
                                            <div className="data-fabrics_tab_item">
                                              <div className="heading-style-h6 text-color-primary">
                                                70%
                                              </div>
                                              <div className="spacer-0-75rem"></div>
                                              <div className="text-size-tiny text-color-secondary">
                                                Faster time-to-value through
                                                pre-built telemetry templates
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="spacer-xsmall"></div>
                                        <div className="data-fabrics_tab_progress-track">
                                          <div className="data-fabrics_tab_progress"></div>
                                        </div>
                                      </div>{" "}
                                    </a>
                                    <a
                                      data-w-tab="Tab 4"
                                      className="data-fabrics_tab_link w-inline-block w-tab-link"
                                    >
                                      <div className="data-fabrics_tab_content">
                                        <div className="spacer-xsmall"></div>
                                        <h3 className="heading-style-h6 text-color-primary">
                                          Intuitive Visual Pipeline Management
                                        </h3>
                                        <div className="data-fabrics_tab_details">
                                          <div className="spacer-small"></div>
                                          <p className="text-color-secondary">
                                            Effortlessly visualize, build, and
                                            manage your observability data
                                            pipelines with simple, intuitive
                                            interfaces - reducing complexity.
                                          </p>
                                        </div>
                                        <div className="spacer-xsmall"></div>
                                        <div className="data-fabrics_tab_progress-track">
                                          <div className="data-fabrics_tab_progress"></div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="home_tab_tabs-content w-tab-content">
                                    <div
                                      data-w-tab="Tab 1"
                                      className="home_tab_tab-pane w-tab-pane w--tab-active"
                                    ></div>
                                    <div
                                      data-w-tab="Tab 2"
                                      className="home_tab_tab-pane w-tab-pane"
                                    ></div>
                                    <div
                                      data-w-tab="Tab 3"
                                      className="home_tab_tab-pane w-tab-pane"
                                    ></div>
                                    <div
                                      data-w-tab="Tab 4"
                                      className="home_tab_tab-pane w-tab-pane"
                                    ></div>
                                  </div>
                                </div>
                                <div className="data-fabrics_tabs_video w-embed">
                                  <video
                                    autoPlay
                                    loop
                                    muted
                                    currentheight="100%"
                                    playsInline
                                  >
                                    <source
                                      src="https://files.tryflowdrive.com/iLj9erYZP_Observability-D01.mp4"
                                      type="video/mp4"
                                    />
                                  </video>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-tiles_component">
                    <div className="bg-tiles_list">
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_ray_down is-1"></div>
                      <div className="bg-tiles_ray_down is-2"></div>
                      <div className="bg-tiles_ray_down is-3"></div>
                      <div className="bg-tiles_ray_up is-1"></div>
                      <div className="bg-tiles_ray_up is-2"></div>
                      <div className="bg-tiles_ray_left is-1"></div>
                      <div className="bg-tiles_ray_left is-2"></div>
                      <div className="bg-tiles_ray_right is-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="section_home_testimonials">
            <div className="padding-global">
              <div className="container-large">
                <div className="padding-section-medium">
                  <div className="testimonials_top-wrapper">
                    <div slide-in="" className="tag">
                      Testimonials
                    </div>
                    <div className="spacer-small"></div>
                    <h2 slide-in="" className="heading-style-h2">
                      <span className="text-gradient-grey">
                        Don&#x27;t just take our word for it; our customers{" "}
                      </span>
                      <span className="text-gradient-blue">say it best</span>
                    </h2>
                  </div>
                  <div className="spacer-large"></div>
                  <div
                    reveal-list=""
                    className="home_testimonials_list-wrapper no-scrollbar"
                  >
                    <div className="code-embed w-embed"></div>
                    <div className="home_testimonials_list is-top">
                      <div
                        reveal-item=""
                        id="w-node-f28e81ae-c56d-109a-0b80-6578a7b79dd0-1c2c275d"
                        className="home_testimonials_item is-large"
                      >
                        <div className="text-size-large">
                          “DataBahn’s approach has truly simplified Sentinel,
                          making it more efficient and cost-effective. Excited
                          <br />
                          to see what’s next!&quot;
                        </div>
                        <div className="spacer-large"></div>
                        <div className="home_testimonials_author-wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680e7ea062ee533af97d4e5a_SIEM%20(1).avif"
                            loading="lazy"
                            sizes="(max-width: 1080px) 100vw, 1080px"
                            srcSet="
                            https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680e7ea062ee533af97d4e5a_SIEM%20(1)-p-500.avif  500w,
                            https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680e7ea062ee533af97d4e5a_SIEM%20(1).avif       1080w
                          "
                            alt=""
                            className="home_testimonials_author-image"
                          />
                          <div>
                            <div className="text-size-medium text-weight-semibold text-color-primary">
                              John Nolan
                            </div>
                            <div className="text-color-tertiary">
                              Information Security Engineer, McAfee
                            </div>
                          </div>
                        </div>
                        <div className="home_testimonials_gradient-2"></div>
                        <div className="home_testimonials_gradient-1"></div>
                        <div className="home_testimonials_border"></div>
                      </div>
                      <div
                        reveal-item=""
                        className="home_testimonials_item is-large"
                      >
                        <div className="text-size-large">
                          &quot;We have recently started a journey with DataBahn
                          (
                          <a target="_blank" href="http://databahn.ai/">
                            DataBahn.ai
                          </a>
                          ) and I can’t speak highly enough about the product or
                          the amazing team at DataBahn. Take the time to explore
                          this technology and learn what this could mean for
                          you.&quot;
                        </div>
                        <div className="spacer-large"></div>
                        <div className="home_testimonials_author-wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680bf2155b46385c0f6047a2_Greg%20Stewart.avif"
                            loading="lazy"
                            alt=""
                            className="home_testimonials_author-image"
                          />
                          <div>
                            <div className="text-size-medium text-weight-semibold text-color-primary">
                              Greg Stewart
                            </div>
                            <div className="text-color-tertiary">
                              Senior Director, Cybersecurity, Threat
                              Intelligence &amp; Incident Response
                            </div>
                          </div>
                        </div>
                        <div className="home_testimonials_gradient-2"></div>
                        <div className="home_testimonials_gradient-1"></div>
                        <div className="home_testimonials_border"></div>
                      </div>
                      <div
                        reveal-item=""
                        id="w-node-b737643b-737d-a0af-dbad-29cb36ac6743-1c2c275d"
                        className="home_testimonials_item"
                      >
                        <div>
                          <div className="home_testimonials_number">
                            $<span fs-numbercount-element="number">350</span>K
                          </div>
                          <div className="spacer-xxtiny"></div>
                          <div className="text-size-medium">
                            annual savings in SIEM licensing and data storage
                            costs.
                          </div>
                        </div>
                        <div className="spacer-xlarge"></div>
                        <div className="testimonials_comany_text_wrap">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67f3921505670d6f3ac93321_Slack.avif"
                            loading="lazy"
                            alt=""
                            className="home_testimonails_logo hide"
                          />
                          <div className="text-color-primary text-weight-medium">
                            US Investment Management Firm
                          </div>
                        </div>
                        <div className="home_testimonials_gradient-2"></div>
                        <div className="home_testimonials_gradient-1"></div>
                        <div className="home_testimonials_border"></div>
                      </div>
                    </div>
                    <div className="home_testimonials_list is-bottom">
                      <div
                        reveal-item=""
                        id="w-node-edaca46f-6f0e-f591-f7af-c94841540607-1c2c275d"
                        className="home_testimonials_item"
                      >
                        <div>
                          <div className="home_testimonials_number">
                            $<span fs-numbercount-element="number">254</span>K
                          </div>
                          <div className="spacer-xxtiny"></div>
                          <div className="text-size-medium">
                            annual savings in SIEM licensing and data storage
                            costs.
                          </div>
                        </div>
                        <div className="spacer-xlarge"></div>
                        <div className="testimonials_comany_text_wrap">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67f3921505670d6f3ac93321_Slack.avif"
                            loading="lazy"
                            alt=""
                            className="home_testimonails_logo hide"
                          />
                          <div className="text-color-primary text-weight-medium">
                            US Cybersecurity Technology Firm
                          </div>
                        </div>
                        <div className="home_testimonials_gradient-2"></div>
                        <div className="home_testimonials_gradient-1"></div>
                        <div className="home_testimonials_border"></div>
                      </div>
                      <div
                        reveal-item=""
                        className="home_testimonials_item is-large"
                      >
                        <div className="text-size-large">
                          “We achieved efficient visibility and robust security
                          without the operational headaches. We reduced 70% of
                          our data going to our SIEM. And here’s the
                          game-changer: no ingress, egress, or API fees.&quot;
                        </div>
                        <div className="spacer-large"></div>
                        <div className="home_testimonials_author-wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680e7ea05378b7b440b5bcfd_SIEM%20(2).avif"
                            loading="lazy"
                            sizes="(max-width: 1080px) 100vw, 1080px"
                            srcSet="
                            https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680e7ea05378b7b440b5bcfd_SIEM%20(2)-p-500.avif  500w,
                            https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680e7ea05378b7b440b5bcfd_SIEM%20(2).avif       1080w
                          "
                            alt=""
                            className="home_testimonials_author-image"
                          />
                          <div>
                            <div className="text-size-medium text-weight-semibold text-color-primary">
                              Abraham Selvaraj
                            </div>
                            <div className="text-color-tertiary">
                              Director, Information Security, ThinkOn
                            </div>
                          </div>
                        </div>
                        <div className="home_testimonials_gradient-2"></div>
                        <div className="home_testimonials_gradient-1"></div>
                        <div className="home_testimonials_border"></div>
                      </div>
                      <div
                        reveal-item=""
                        id="w-node-c1405e6d-cede-77b6-985c-89c53c894f5a-1c2c275d"
                        className="home_testimonials_item is-large"
                      >
                        <div className="text-size-large">
                          &quot;DataBahn amplifies the value of Sentinel. It
                          changes how we look at data.&quot;
                        </div>
                        <div className="spacer-large"></div>
                        <div className="home_testimonials_author-wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680c060651c90e89d38ceba3_Travis%20Farral.avif"
                            loading="lazy"
                            sizes="(max-width: 800px) 100vw, 800px"
                            srcSet="
                            https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680c060651c90e89d38ceba3_Travis%20Farral-p-500.avif 500w,
                            https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680c060651c90e89d38ceba3_Travis%20Farral.avif       800w
                          "
                            alt=""
                            className="home_testimonials_author-image"
                          />
                          <div>
                            <div className="text-size-medium text-weight-semibold text-color-primary">
                              Travis Farral
                              <br />
                            </div>
                            <div className="text-color-tertiary">
                              Vice President and Chief Information Security
                              Officer at Archaea Energy
                            </div>
                          </div>
                        </div>
                        <div className="home_testimonials_gradient-2"></div>
                        <div className="home_testimonials_gradient-1"></div>
                        <div className="home_testimonials_border"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="products" className="section_home-products">
            <div className="padding-global">
              <div className="container-regular">
                <div className="padding-section-medium">
                  <div className="products_accordion_component">
                    <div className="text-align-center">
                      <div className="align-center max-width-large">
                        <h2
                          slide-in=""
                          className="heading-style-h2 text-gradient-grey"
                        >
                          The <span className="text-gradient-blue">allies</span>{" "}
                          your data has been waiting for
                        </h2>
                      </div>
                    </div>
                    <div className="spacer-xlarge"></div>
                    <div className="max-width-large align-center">
                      <div
                        fs-accordion-single="true"
                        fs-accordion-element="group"
                        fs-accordion-initial="none"
                        className="w-layout-grid products_acordion_list"
                      >
                        <div className="code-embed w-embed w-script"></div>
                        <div
                          fs-accordion-element="accordion"
                          slide-in=""
                          className="products_accordion_item"
                        >
                          <div
                            fs-accordion-element="trigger"
                            tabIndex="0"
                            role="button"
                            aria-expanded="false"
                            className="products_accordion_question"
                          >
                            <div className="products_accordion_question-content">
                              <div className="products_accordion_question-left">
                                <div className="products_accordion_indicator-component">
                                  <div className="products_accordion_indicator-light"></div>
                                </div>
                                <div className="products_accordion_heading">
                                  <h2 className="heading-style-h6 text-color-primary">
                                    Smart Edge
                                  </h2>
                                  <div className="text-color-secondary">
                                    Collect and Optimize Your Data, Right from
                                    the Edge
                                  </div>
                                </div>
                              </div>
                              <div className="products_accordion_icon-wrappper">
                                <div
                                  fs-accordion-element="arrow"
                                  className="products_accordion_icon"
                                >
                                  <div className="products_accordion_icon_line-horizontal"></div>
                                  <div className="products_accordion_icon_line-vertical"></div>
                                </div>
                              </div>
                            </div>
                            <img
                              src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67fcd23381b2afa8c44e3ae4_home_products_accordion.avif"
                              loading="lazy"
                              sizes="(max-width: 1269px) 100vw, 1269px"
                              srcSet="
                              https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67fcd23381b2afa8c44e3ae4_home_products_accordion-p-500.avif  500w,
                              https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67fcd23381b2afa8c44e3ae4_home_products_accordion.avif       1269w
                            "
                              alt=""
                              className="products_accordion_question-background"
                            />
                          </div>
                          <div className="products_accordion_tag-list">
                            <div className="products_accordion_tag-item">
                              <div className="products_accordion_tag-content">
                                <div className="text-size-small text-weight-medium">
                                  Agentless Collection
                                </div>
                              </div>
                            </div>
                            <div className="products_accordion_tag-item">
                              <div className="products_accordion_tag-content">
                                <div className="text-size-small text-weight-medium">
                                  Mesh Architecture
                                </div>
                              </div>
                            </div>
                            <div className="products_accordion_tag-item">
                              <div className="products_accordion_tag-content">
                                <div className="text-size-small text-weight-medium">
                                  Edge Analytics
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            fs-accordion-element="content"
                            className="products_accordion_answer"
                          >
                            <div className="spacer-small"></div>
                            <div className="products_accordion_answer-content">
                              <div className="products_accordion_answer-left">
                                <p className="text-color-secondary text-size-small">
                                  Smart Edge makes data collection simple and
                                  reliable. Using agentless technology and
                                  advanced edge analytics, it easily collects
                                  data from cloud, on-premise, or vendor
                                  sources. You can instantly onboard new
                                  sources, reduce costs, and ensure your data
                                  stays resilient–no matter the scale or
                                  complexity.
                                </p>
                                <div className="button-group">
                                  <a
                                    data-wf--button-secondary--variant="base"
                                    href="/products/smart-edge"
                                    className="button-secondary w-inline-block"
                                  >
                                    <div className="button-secondary_content">
                                      <div className="button_content">
                                        <div className="text-size-regular text-gradient-blue-3">
                                          Learn more
                                        </div>
                                        <div className="icon-embed-custom1 text-color-blue w-embed">
                                          <svg
                                            currentwidth=" 100%"
                                            currentheight=" 100%"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M7.5 15L12.5 10L7.5 5"
                                              stroke="currentColor"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="button_glow"></div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <img
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680be5edebaa49744c946521_Graphics%20Content.avif"
                                loading="lazy"
                                currentwidth="635"
                                sizes="(max-width: 767px) 100vw, 635px"
                                alt=""
                                srcSet="
                                https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680be5edebaa49744c946521_Graphics%20Content-p-500.avif  500w,
                                https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680be5edebaa49744c946521_Graphics%20Content.avif       1270w
                              "
                                className="products_accordion_image"
                              />
                            </div>
                            <div className="spacer-small"></div>
                          </div>
                        </div>
                        <div
                          fs-accordion-element="accordion"
                          slide-in=""
                          className="products_accordion_item"
                        >
                          <div
                            aria-expanded="false"
                            fs-accordion-element="trigger"
                            tabIndex="0"
                            role="button"
                            className="products_accordion_question"
                          >
                            <div className="products_accordion_question-content">
                              <div className="products_accordion_question-left">
                                <div className="products_accordion_indicator-component">
                                  <div className="products_accordion_indicator-light"></div>
                                </div>
                                <div className="products_accordion_heading">
                                  <h3 className="heading-style-h6 text-color-primary">
                                    Highway
                                  </h3>
                                  <div className="text-color-secondary">
                                    The Express Lane for Data Orchestration
                                  </div>
                                </div>
                              </div>
                              <div className="products_accordion_icon-wrappper">
                                <div
                                  fs-accordion-element="arrow"
                                  className="products_accordion_icon"
                                >
                                  <div className="products_accordion_icon_line-horizontal"></div>
                                  <div className="products_accordion_icon_line-vertical"></div>
                                </div>
                              </div>
                            </div>
                            <img
                              src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67fcd23381b2afa8c44e3ae4_home_products_accordion.avif"
                              loading="lazy"
                              sizes="(max-width: 1269px) 100vw, 1269px"
                              srcSet="
                              https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67fcd23381b2afa8c44e3ae4_home_products_accordion-p-500.avif  500w,
                              https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67fcd23381b2afa8c44e3ae4_home_products_accordion.avif       1269w
                            "
                              alt=""
                              className="products_accordion_question-background"
                            />
                          </div>
                          <div className="products_accordion_tag-list">
                            <div className="products_accordion_tag-item">
                              <div className="products_accordion_tag-content">
                                <div className="text-size-small text-weight-medium">
                                  AI-driven Filtering
                                </div>
                              </div>
                            </div>
                            <div className="products_accordion_tag-item">
                              <div className="products_accordion_tag-content">
                                <div className="text-size-small text-weight-medium">
                                  Schema Drift Management
                                </div>
                              </div>
                            </div>
                            <div className="products_accordion_tag-item">
                              <div className="products_accordion_tag-content">
                                <div className="text-size-small text-weight-medium">
                                  Cost Optimization
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            fs-accordion-element="content"
                            className="products_accordion_answer"
                          >
                            <div className="spacer-small"></div>
                            <div className="products_accordion_answer-content">
                              <div className="products_accordion_answer-left">
                                <p className="text-color-secondary text-size-small">
                                  Highway simplifies how your data moves through
                                  your systems. It automatically cleans,
                                  transforms, and routes data to reduce volume
                                  and control costs. With Highway, your data
                                  stays clear, reliable, and easily
                                  accessible–without vendor lock-in or
                                  unnecessary complexity.
                                </p>
                                <div className="button-group">
                                  <a
                                    data-wf--button-secondary--variant="base"
                                    href="/products/highway"
                                    className="button-secondary w-inline-block"
                                  >
                                    <div className="button-secondary_content">
                                      <div className="button_content">
                                        <div className="text-size-regular text-gradient-blue-3">
                                          Learn more
                                        </div>
                                        <div className="icon-embed-custom1 text-color-blue w-embed">
                                          <svg
                                            currentwidth=" 100%"
                                            currentheight=" 100%"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M7.5 15L12.5 10L7.5 5"
                                              stroke="currentColor"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="button_glow"></div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <img
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680be5edf401c7076b84c4ac_Graphics%20Content-1.avif"
                                loading="lazy"
                                currentwidth="635"
                                sizes="(max-width: 767px) 100vw, 635px"
                                alt=""
                                srcSet="
                                https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680be5edf401c7076b84c4ac_Graphics%20Content-1-p-500.avif  500w,
                                https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680be5edf401c7076b84c4ac_Graphics%20Content-1.avif       1270w
                              "
                                className="products_accordion_image"
                              />
                            </div>
                            <div className="spacer-small"></div>
                          </div>
                        </div>
                        <div
                          fs-accordion-element="accordion"
                          slide-in=""
                          className="products_accordion_item"
                        >
                          <div
                            fs-accordion-element="trigger"
                            tabIndex="0"
                            role="button"
                            aria-expanded="false"
                            className="products_accordion_question"
                          >
                            <div className="products_accordion_question-content">
                              <div className="products_accordion_question-left">
                                <div className="products_accordion_indicator-component">
                                  <div className="products_accordion_indicator-light"></div>
                                </div>
                                <div className="products_accordion_heading">
                                  <h3 className="heading-style-h6 text-color-primary">
                                    Cruz
                                  </h3>
                                  <div className="text-color-secondary">
                                    Your AI Data Engineer in a Box
                                  </div>
                                </div>
                              </div>
                              <div className="products_accordion_icon-wrappper">
                                <div
                                  fs-accordion-element="arrow"
                                  className="products_accordion_icon"
                                >
                                  <div className="products_accordion_icon_line-horizontal"></div>
                                  <div className="products_accordion_icon_line-vertical"></div>
                                </div>
                              </div>
                            </div>
                            <img
                              src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67fcd23381b2afa8c44e3ae4_home_products_accordion.avif"
                              loading="lazy"
                              sizes="(max-width: 1269px) 100vw, 1269px"
                              srcSet="
                              https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67fcd23381b2afa8c44e3ae4_home_products_accordion-p-500.avif  500w,
                              https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67fcd23381b2afa8c44e3ae4_home_products_accordion.avif       1269w
                            "
                              alt=""
                              className="products_accordion_question-background"
                            />
                          </div>
                          <div className="products_accordion_tag-list">
                            <div className="products_accordion_tag-item">
                              <div className="products_accordion_tag-content">
                                <div className="text-size-small text-weight-medium">
                                  Autonomous Parsing
                                </div>
                              </div>
                            </div>
                            <div className="products_accordion_tag-item">
                              <div className="products_accordion_tag-content">
                                <div className="text-size-small text-weight-medium">
                                  Pipeline Automation
                                </div>
                              </div>
                            </div>
                            <div className="products_accordion_tag-item">
                              <div className="products_accordion_tag-content">
                                <div className="text-size-small text-weight-medium">
                                  Proactive Monitoring
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            fs-accordion-element="content"
                            className="products_accordion_answer"
                          >
                            <div className="spacer-small"></div>
                            <div className="products_accordion_answer-content">
                              <div className="products_accordion_answer-left">
                                <p className="text-color-secondary text-size-small">
                                  Cruz simplifies managing security data
                                  pipelines by automating collection,
                                  monitoring, and troubleshooting from start to
                                  finish. It proactively spots and resolves
                                  pipeline issues, meaning less manual work for
                                  you and more reliable, continuous data flow.
                                </p>
                                <div className="button-group">
                                  <a
                                    data-wf--button-secondary--variant="base"
                                    href="/products/cruz-ai-agent-for-security-data"
                                    className="button-secondary w-inline-block"
                                  >
                                    <div className="button-secondary_content">
                                      <div className="button_content">
                                        <div className="text-size-regular text-gradient-blue-3">
                                          Learn more
                                        </div>
                                        <div className="icon-embed-custom1 text-color-blue w-embed">
                                          <svg
                                            currentwidth=" 100%"
                                            currentheight=" 100%"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M7.5 15L12.5 10L7.5 5"
                                              stroke="currentColor"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="button_glow"></div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <img
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680be5ed53afe6ceedc2f98c_Graphics%20Content-2.avif"
                                loading="lazy"
                                currentwidth="635"
                                sizes="(max-width: 767px) 100vw, 635px"
                                alt=""
                                srcSet="
                                https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680be5ed53afe6ceedc2f98c_Graphics%20Content-2-p-500.avif  500w,
                                https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680be5ed53afe6ceedc2f98c_Graphics%20Content-2.avif       1270w
                              "
                                className="products_accordion_image"
                              />
                            </div>
                            <div className="spacer-small"></div>
                          </div>
                        </div>
                        <div
                          fs-accordion-element="accordion"
                          slide-in=""
                          className="products_accordion_item"
                        >
                          <div
                            aria-expanded="false"
                            fs-accordion-element="trigger"
                            tabIndex="0"
                            role="button"
                            className="products_accordion_question"
                          >
                            <div className="products_accordion_question-content">
                              <div className="products_accordion_question-left">
                                <div className="products_accordion_indicator-component">
                                  <div className="products_accordion_indicator-light"></div>
                                </div>
                                <div className="products_accordion_heading">
                                  <h3 className="heading-style-h6 text-color-primary">
                                    Reef
                                  </h3>
                                  <div className="text-color-secondary">
                                    Your AI-Ready Intelligence Hub
                                  </div>
                                </div>
                              </div>
                              <div className="products_accordion_icon-wrappper">
                                <div
                                  fs-accordion-element="arrow"
                                  className="products_accordion_icon"
                                >
                                  <div className="products_accordion_icon_line-horizontal"></div>
                                  <div className="products_accordion_icon_line-vertical"></div>
                                </div>
                              </div>
                            </div>
                            <img
                              src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67fcd23381b2afa8c44e3ae4_home_products_accordion.avif"
                              loading="lazy"
                              sizes="(max-width: 1269px) 100vw, 1269px"
                              srcSet="
                              https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67fcd23381b2afa8c44e3ae4_home_products_accordion-p-500.avif  500w,
                              https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67fcd23381b2afa8c44e3ae4_home_products_accordion.avif       1269w
                            "
                              alt=""
                              className="products_accordion_question-background"
                            />
                          </div>
                          <div className="products_accordion_tag-list">
                            <div className="products_accordion_tag-item">
                              <div className="products_accordion_tag-content">
                                <div className="text-size-small text-weight-medium">
                                  Contextual Graph Database
                                </div>
                              </div>
                            </div>
                            <div className="products_accordion_tag-item">
                              <div className="products_accordion_tag-content">
                                <div className="text-size-small text-weight-medium">
                                  Multi-Source Correlation
                                </div>
                              </div>
                            </div>
                            <div className="products_accordion_tag-item">
                              <div className="products_accordion_tag-content">
                                <div className="text-size-small text-weight-medium">
                                  AI-ready Data
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            fs-accordion-element="content"
                            className="products_accordion_answer"
                          >
                            <div className="spacer-small"></div>
                            <div className="products_accordion_answer-content">
                              <div className="products_accordion_answer-left">
                                <p className="text-color-secondary text-size-small">
                                  Reef turns raw data into clear, contextual
                                  insights using advanced graph-database
                                  technology. Quickly deploy custom AI-driven
                                  agents for security analysis, vulnerability
                                  management, and strategic insights –helping
                                  you make smarter decisions faster, all based
                                  on your data.
                                </p>
                                <div className="button-group">
                                  <a
                                    data-wf--button-secondary--variant="base"
                                    href="/products/reef-ai-security-insights-layer"
                                    className="button-secondary w-inline-block"
                                  >
                                    <div className="button-secondary_content">
                                      <div className="button_content">
                                        <div className="text-size-regular text-gradient-blue-3">
                                          Learn more
                                        </div>
                                        <div className="icon-embed-custom1 text-color-blue w-embed">
                                          <svg
                                            currentwidth=" 100%"
                                            currentheight=" 100%"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M7.5 15L12.5 10L7.5 5"
                                              stroke="currentColor"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="button_glow"></div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <img
                                src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680be5edcc6bed95c6f0d6a1_Graphics%20Content-3.avif"
                                loading="lazy"
                                currentwidth="635"
                                sizes="(max-width: 767px) 100vw, 635px"
                                alt=""
                                srcSet="
                                https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680be5edcc6bed95c6f0d6a1_Graphics%20Content-3-p-500.avif  500w,
                                https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680be5edcc6bed95c6f0d6a1_Graphics%20Content-3.avif       1270w
                              "
                                className="products_accordion_image"
                              />
                            </div>
                            <div className="spacer-small"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="spacer-xlarge"></div>
                </div>
              </div>
            </div>
          </section>
          <section id="integrations" className="section_integrations">
            <div className="padding-global">
              <div className="container-large">
                <div className="home_products_component">
                  <div className="padding-section-large">
                    <div className="integrations_component">
                      <div className="integrations_animation w-embed"></div>
                      <div>
                        <div className="max-width-xlarge">
                          <div slide-in="" className="tag">
                            Integrations
                          </div>
                          <div className="spacer-small"></div>
                          <h2 slide-in="" className="heading-style-h2">
                            <span className="text-gradient-grey">
                              Plug, play, and accelerate with{" "}
                            </span>
                            <span
                              fs-numbercount-element="number"
                              className="text-gradient-blue"
                            >
                              500
                            </span>
                            <span className="text-gradient-blue">
                              + integrations
                            </span>
                          </h2>
                          <div className="spacer-xxsmall"></div>
                          <div className="max-width-large">
                            <p
                              slide-in=""
                              className="text-size-large text-color-secondary"
                            >
                              We&#x27;ve got your data ecosystem fully covered
                              across on-premise, cloud, and agent-based
                              security, application, and observability
                              solutions–with integrations far exceeding other
                              competing solutions.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="spacer-xxlarge"></div>
                      <div className="integrations_content">
                        <div slide-in="" className="integrations_row is-left">
                          <div className="integrations_list-wrapper is-left w-dyn-list">
                            <div
                              role="list"
                              className="integrations_list w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c19bbc2aa849199006f4d_Color%20Mode%3DNeutral-101.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c19b462f1d2de9e9b8f56_Color%20Mode%3DColor-105.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c18fbce6c60442e740a98_Color%20Mode%3DNeutral-95.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c18f14a746d32b4875507_Color%20Mode%3DColor-99.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1832bda595602ef60727_Color%20Mode%3DNeutral-89.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c182bd00bf3fb75f097eb_Color%20Mode%3DColor-93.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1719c2aa849199feb827_Color%20Mode%3DNeutral-83.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c16d9a49754c2b8a24a03_Color%20Mode%3DColor-87.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c16073b832c354510055e_Color%20Mode%3DNeutral-76.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdd227e4ac0a76312ed20_mandoo.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c14d9a96c462ddd71646a_Color%20Mode%3DNeutral-68.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdde15a6503da1145bbf0_citrix.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c13a2cef7569d5e3897e9_Color%20Mode%3DNeutral-62.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1399c2aa849199fc783b_Color%20Mode%3DColor-66.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c12e2a49754c2b89ff5b0_Color%20Mode%3DNeutral-56.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684be0925bd0a5643adab087_powershell.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c11e6aaf7a245df03c714_Color%20Mode%3DNeutral-50.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684be108b7b382d5c57d89d7_bluecoat.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1076d1276501ab992df7_Color%20Mode%3DNeutral-43.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c106f41574a51fba27f5f_Color%20Mode%3DColor-44.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0f5c0cdd7eda08708a18_Color%20Mode%3DNeutral-36.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0f5353a6a0b50e81bf8b_Color%20Mode%3DColor-37.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0e4f0d92ba213ca84e27_Color%20Mode%3DNeutral-30.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0e35dd1bc75bc5d79873_Color%20Mode%3DColor-31.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0d6993926eb11e45d710_Color%20Mode%3DNeutral-24.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0d71c8fcb26beccd546c_Color%20Mode%3DColor-25.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809173d6502c438781adf4b_Color%20Mode%3DNeutral-20.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684be404bfaeef7ac6199271_securonix.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809164847c4b2f5af4955cb_Color%20Mode%3DNeutral-14.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68091641b71c4b04e3a35c34_Color%20Mode%3DColor-15.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68091522af41cd1b6ec86fad_Color%20Mode%3DNeutral-7.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68091527a39cecc8e1c3251f_Color%20Mode%3DColor-8.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680913f4d9d84b405a33e8d4_Color%20Mode%3DNeutral-1.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680913ec72933e379f67a9bc_Color%20Mode%3DColor-1.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                            </div>
                          </div>
                          <div className="integrations_list-wrapper is-left w-dyn-list">
                            <div
                              role="list"
                              className="integrations_list w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c19bbc2aa849199006f4d_Color%20Mode%3DNeutral-101.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c19b462f1d2de9e9b8f56_Color%20Mode%3DColor-105.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c18fbce6c60442e740a98_Color%20Mode%3DNeutral-95.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c18f14a746d32b4875507_Color%20Mode%3DColor-99.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1832bda595602ef60727_Color%20Mode%3DNeutral-89.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c182bd00bf3fb75f097eb_Color%20Mode%3DColor-93.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1719c2aa849199feb827_Color%20Mode%3DNeutral-83.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c16d9a49754c2b8a24a03_Color%20Mode%3DColor-87.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c16073b832c354510055e_Color%20Mode%3DNeutral-76.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdd227e4ac0a76312ed20_mandoo.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c14d9a96c462ddd71646a_Color%20Mode%3DNeutral-68.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdde15a6503da1145bbf0_citrix.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c13a2cef7569d5e3897e9_Color%20Mode%3DNeutral-62.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1399c2aa849199fc783b_Color%20Mode%3DColor-66.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c12e2a49754c2b89ff5b0_Color%20Mode%3DNeutral-56.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684be0925bd0a5643adab087_powershell.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c11e6aaf7a245df03c714_Color%20Mode%3DNeutral-50.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684be108b7b382d5c57d89d7_bluecoat.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1076d1276501ab992df7_Color%20Mode%3DNeutral-43.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c106f41574a51fba27f5f_Color%20Mode%3DColor-44.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0f5c0cdd7eda08708a18_Color%20Mode%3DNeutral-36.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0f5353a6a0b50e81bf8b_Color%20Mode%3DColor-37.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0e4f0d92ba213ca84e27_Color%20Mode%3DNeutral-30.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0e35dd1bc75bc5d79873_Color%20Mode%3DColor-31.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0d6993926eb11e45d710_Color%20Mode%3DNeutral-24.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0d71c8fcb26beccd546c_Color%20Mode%3DColor-25.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809173d6502c438781adf4b_Color%20Mode%3DNeutral-20.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684be404bfaeef7ac6199271_securonix.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809164847c4b2f5af4955cb_Color%20Mode%3DNeutral-14.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68091641b71c4b04e3a35c34_Color%20Mode%3DColor-15.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68091522af41cd1b6ec86fad_Color%20Mode%3DNeutral-7.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68091527a39cecc8e1c3251f_Color%20Mode%3DColor-8.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680913f4d9d84b405a33e8d4_Color%20Mode%3DNeutral-1.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680913ec72933e379f67a9bc_Color%20Mode%3DColor-1.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div slide-in="" className="integrations_row is-right">
                          <div className="integrations_list-wrapper is-right w-dyn-list">
                            <div
                              role="list"
                              className="integrations_list w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c19dd889ed306079a8dce_Color%20Mode%3DNeutral-102.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c19d7f7da084a35d79fe4_Color%20Mode%3DColor-106.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c19195caf54ff21125d99_Color%20Mode%3DNeutral-96.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bd86d5dfdb841ec06f3b6_netgate.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c185862f1d2de9e9ae6fe_Color%20Mode%3DNeutral-90.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c185381313c160c8fa414_Color%20Mode%3DColor-94.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c173fbda595602ef556ab_Color%20Mode%3DNeutral-84.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c173406331570c16b098a_Color%20Mode%3DColor-88.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1633902459b377d1f1d3_Color%20Mode%3DNeutral-78.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c162bd00bf3fb75ef3fdd_Color%20Mode%3DColor-82.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c14feb0eaac3796651908_Color%20Mode%3DNeutral-69.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c14f5ca5a968ab6c3f53a_Color%20Mode%3DColor-73.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c13c8b53bd89ce54cb594_Color%20Mode%3DNeutral-63.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c13bf5f5a753ad4b113cb_Color%20Mode%3DColor-67.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1307c3486e1ef1068d29_Color%20Mode%3DNeutral-57.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c12fece6c60442e701be7_Color%20Mode%3DColor-61.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c12084caf0b02317381f6_Color%20Mode%3DNeutral-51.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1201ee2f2a94456a6725_Color%20Mode%3DColor-55.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c10baf64636d728081cba_Color%20Mode%3DNeutral-44.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1094e335fe792cf80a45_Color%20Mode%3DColor-45.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0f8793926eb11e476e73_Color%20Mode%3DNeutral-37.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0f7a312ddff9122aa922_Color%20Mode%3DColor-38.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0e810cdd7eda086fc007_Color%20Mode%3DNeutral-31.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0e786cd2889174b04a43_Color%20Mode%3DColor-32.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0d8a71258dbf9ba744ca_Color%20Mode%3DNeutral-25.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0d8f9400629f71b448d2_Color%20Mode%3DColor-26.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68091760d383e04ed5dd5a1c_Color%20Mode%3DNeutral-21.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68091756ae5c47568332e01a_Color%20Mode%3DColor-22.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809167c9f4d7ee105481b41_Color%20Mode%3DNeutral-15.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68091674b07355908041c638_Color%20Mode%3DColor-16.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809154580a696f3a0388b25_Color%20Mode%3DNeutral-8.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809153e2ff346307357c799_Color%20Mode%3DColor-9.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68091431d8798e81b6d53fab_Color%20Mode%3DNeutral-2.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680914398f63849e2971dd86_Color%20Mode%3DColor-2.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                            </div>
                          </div>
                          <div className="integrations_list-wrapper is-right w-dyn-list">
                            <div
                              role="list"
                              className="integrations_list w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c19dd889ed306079a8dce_Color%20Mode%3DNeutral-102.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c19d7f7da084a35d79fe4_Color%20Mode%3DColor-106.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c19195caf54ff21125d99_Color%20Mode%3DNeutral-96.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bd86d5dfdb841ec06f3b6_netgate.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c185862f1d2de9e9ae6fe_Color%20Mode%3DNeutral-90.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c185381313c160c8fa414_Color%20Mode%3DColor-94.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c173fbda595602ef556ab_Color%20Mode%3DNeutral-84.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c173406331570c16b098a_Color%20Mode%3DColor-88.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1633902459b377d1f1d3_Color%20Mode%3DNeutral-78.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c162bd00bf3fb75ef3fdd_Color%20Mode%3DColor-82.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c14feb0eaac3796651908_Color%20Mode%3DNeutral-69.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c14f5ca5a968ab6c3f53a_Color%20Mode%3DColor-73.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c13c8b53bd89ce54cb594_Color%20Mode%3DNeutral-63.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c13bf5f5a753ad4b113cb_Color%20Mode%3DColor-67.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1307c3486e1ef1068d29_Color%20Mode%3DNeutral-57.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c12fece6c60442e701be7_Color%20Mode%3DColor-61.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c12084caf0b02317381f6_Color%20Mode%3DNeutral-51.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1201ee2f2a94456a6725_Color%20Mode%3DColor-55.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c10baf64636d728081cba_Color%20Mode%3DNeutral-44.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1094e335fe792cf80a45_Color%20Mode%3DColor-45.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0f8793926eb11e476e73_Color%20Mode%3DNeutral-37.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0f7a312ddff9122aa922_Color%20Mode%3DColor-38.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0e810cdd7eda086fc007_Color%20Mode%3DNeutral-31.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0e786cd2889174b04a43_Color%20Mode%3DColor-32.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0d8a71258dbf9ba744ca_Color%20Mode%3DNeutral-25.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0d8f9400629f71b448d2_Color%20Mode%3DColor-26.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68091760d383e04ed5dd5a1c_Color%20Mode%3DNeutral-21.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68091756ae5c47568332e01a_Color%20Mode%3DColor-22.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809167c9f4d7ee105481b41_Color%20Mode%3DNeutral-15.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68091674b07355908041c638_Color%20Mode%3DColor-16.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809154580a696f3a0388b25_Color%20Mode%3DNeutral-8.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809153e2ff346307357c799_Color%20Mode%3DColor-9.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68091431d8798e81b6d53fab_Color%20Mode%3DNeutral-2.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680914398f63849e2971dd86_Color%20Mode%3DColor-2.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div slide-in="" className="integrations_row is-left">
                          <div className="integrations_list-wrapper is-left w-dyn-list">
                            <div
                              role="list"
                              className="integrations_list w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c19f6889ed306079a9e35_Color%20Mode%3DNeutral-103.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c19f2bf3e6ba359c2c1e1_Color%20Mode%3DColor-107.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c19388c81fe8e2e6f2960_Color%20Mode%3DNeutral-97.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bd90d0830a837b6e9ba14_starlim.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c187862f1d2de9e9afaa2_Color%20Mode%3DNeutral-91.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bda7592c8dfbfd88bdb44_carbon-black.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1781034539f25a26e1fb_Color%20Mode%3DNeutral-85.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c177b889ed30607990c2b_Color%20Mode%3DColor-89.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1661450d0160fe5042f0_Color%20Mode%3DNeutral-79.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdd001eb824254095557b_darktrace.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c153634d3994a79699089_Color%20Mode%3DNeutral-71.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1531902459b377d1526b_Color%20Mode%3DColor-75.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c151a4caf0b023175c925_Color%20Mode%3DNeutral-70.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1513bf3e6ba359bf3961_Color%20Mode%3DColor-74.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c13f591a7e027f3f9ea73_Color%20Mode%3DNeutral-64.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c13eda1a1d7dff49442d1_Color%20Mode%3DColor-68.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c13265002a2a76c3d40bf_Color%20Mode%3DNeutral-58.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684be043745ecc3d215b1c03_prisma.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c122eca5a968ab6c22578_Color%20Mode%3DNeutral-52.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1224a25e1d0740be4fe9_Color%20Mode%3DColor-56.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c10fe235984dfa707d08a_Color%20Mode%3DNeutral-46.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c10f1dd1bc75bc5d98bd5_Color%20Mode%3DColor-47.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c10d871afb8757e8902e8_Color%20Mode%3DNeutral-45.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c10cf0ec40d9ca493944c_Color%20Mode%3DColor-46.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0fafcb9add0c35631956_Color%20Mode%3DNeutral-38.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0fa205b20ac4e4eb76a2_Color%20Mode%3DColor-39.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0eb097aa18215ed50ca1_Color%20Mode%3DNeutral-32.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684be384b1f4adeb40a1bec9_net-scope.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0da9217179b6c3e96014_Color%20Mode%3DNeutral-26.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0dae466a265bce85c929_Color%20Mode%3DColor-27.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680917a15ff1d99671fd027d_Color%20Mode%3DNeutral-22.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680917956087481734a49262_Color%20Mode%3DColor-23.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809169eaf41cd1b6ec96174_Color%20Mode%3DNeutral-16.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680916944bdd011641be433b_Color%20Mode%3DColor-17.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680915999a2155917ce0db02_Color%20Mode%3DNeutral-9.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68091585acf203b1a230b8de_Color%20Mode%3DColor-10.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809146595b9962ad779158c_Color%20Mode%3DNeutral-3.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680914689a2155917ce0011d_Color%20Mode%3DColor-3.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                            </div>
                          </div>
                          <div className="integrations_list-wrapper is-left w-dyn-list">
                            <div
                              role="list"
                              className="integrations_list w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c19f6889ed306079a9e35_Color%20Mode%3DNeutral-103.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c19f2bf3e6ba359c2c1e1_Color%20Mode%3DColor-107.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c19388c81fe8e2e6f2960_Color%20Mode%3DNeutral-97.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bd90d0830a837b6e9ba14_starlim.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c187862f1d2de9e9afaa2_Color%20Mode%3DNeutral-91.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bda7592c8dfbfd88bdb44_carbon-black.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1781034539f25a26e1fb_Color%20Mode%3DNeutral-85.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c177b889ed30607990c2b_Color%20Mode%3DColor-89.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1661450d0160fe5042f0_Color%20Mode%3DNeutral-79.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdd001eb824254095557b_darktrace.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c153634d3994a79699089_Color%20Mode%3DNeutral-71.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1531902459b377d1526b_Color%20Mode%3DColor-75.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c151a4caf0b023175c925_Color%20Mode%3DNeutral-70.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1513bf3e6ba359bf3961_Color%20Mode%3DColor-74.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c13f591a7e027f3f9ea73_Color%20Mode%3DNeutral-64.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c13eda1a1d7dff49442d1_Color%20Mode%3DColor-68.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c13265002a2a76c3d40bf_Color%20Mode%3DNeutral-58.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684be043745ecc3d215b1c03_prisma.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c122eca5a968ab6c22578_Color%20Mode%3DNeutral-52.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1224a25e1d0740be4fe9_Color%20Mode%3DColor-56.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c10fe235984dfa707d08a_Color%20Mode%3DNeutral-46.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c10f1dd1bc75bc5d98bd5_Color%20Mode%3DColor-47.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c10d871afb8757e8902e8_Color%20Mode%3DNeutral-45.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c10cf0ec40d9ca493944c_Color%20Mode%3DColor-46.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0fafcb9add0c35631956_Color%20Mode%3DNeutral-38.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0fa205b20ac4e4eb76a2_Color%20Mode%3DColor-39.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0eb097aa18215ed50ca1_Color%20Mode%3DNeutral-32.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684be384b1f4adeb40a1bec9_net-scope.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0da9217179b6c3e96014_Color%20Mode%3DNeutral-26.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0dae466a265bce85c929_Color%20Mode%3DColor-27.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680917a15ff1d99671fd027d_Color%20Mode%3DNeutral-22.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680917956087481734a49262_Color%20Mode%3DColor-23.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809169eaf41cd1b6ec96174_Color%20Mode%3DNeutral-16.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680916944bdd011641be433b_Color%20Mode%3DColor-17.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680915999a2155917ce0db02_Color%20Mode%3DNeutral-9.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68091585acf203b1a230b8de_Color%20Mode%3DColor-10.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809146595b9962ad779158c_Color%20Mode%3DNeutral-3.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680914689a2155917ce0011d_Color%20Mode%3DColor-3.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div slide-in="" className="integrations_row is-right">
                          <div className="integrations_list-wrapper is-right w-dyn-list">
                            <div
                              role="list"
                              className="integrations_list w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1a194a746d32b4880691_Color%20Mode%3DNeutral-104.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bd7780bd552e2b015d27e_github.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1960d00bf3fb75f15cec_Color%20Mode%3DNeutral-98.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bd980d8c60339ec210ede_tenable.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c189c89913db8b0eafb0a_Color%20Mode%3DNeutral-92.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bda273646ea3c0cef9211_watch-guard.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c17ac889ed306079927bd_Color%20Mode%3DNeutral-86.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdc6ef7764660bcb0fe59_forcepoint.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1684d994508051e5242a_Color%20Mode%3DNeutral-80.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c16785002a2a76c3f68ad_Color%20Mode%3DColor-84.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1562902459b377d16e62_Color%20Mode%3DNeutral-72.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1559cef7569d5e39e13e_Color%20Mode%3DColor-76.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c14195459e7b5295f163e_Color%20Mode%3DNeutral-65.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdf40918c80ec8f2f67c0_vmware.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1347a1a1d7dff493b102_Color%20Mode%3DNeutral-59.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c133f06331570c16882ff_Color%20Mode%3DColor-63.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c124fd994508051e266fb_Color%20Mode%3DNeutral-53.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1246902459b377cf70a5_Color%20Mode%3DColor-57.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1121e093b9e77d93664b_Color%20Mode%3DNeutral-47.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c111b0ec40d9ca493d2ff_Color%20Mode%3DColor-48.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0fd4c8fcb26beccef2c1_Color%20Mode%3DNeutral-39.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0fc45baed161547d1066_Color%20Mode%3DColor-40.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0ed09a6bb6a6235410d4_Color%20Mode%3DNeutral-33.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0ec662d3f0130617f514_Color%20Mode%3DColor-34.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0dd2a8225d39ac53582e_Color%20Mode%3DNeutral-27.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0dd81ba5d28ba49a8642_Color%20Mode%3DColor-28.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680917c22a62c6ae6061f990_Color%20Mode%3DNeutral-23.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680917bbbc0e45a527216736_Color%20Mode%3DColor-24.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680916bd47c4b2f5af499db9_Color%20Mode%3DNeutral-17.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680916b6451d6ae379550fb1_Color%20Mode%3DColor-18.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680915b50ba6008af95df814_Color%20Mode%3DNeutral-10.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680915b9982ddaaefe9f2595_Color%20Mode%3DColor-11.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809148a8b1221be353438b6_Color%20Mode%3DNeutral-4.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809148e0e7eb9c0d0dc12fc_Color%20Mode%3DColor-4.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                            </div>
                          </div>
                          <div className="integrations_list-wrapper is-right w-dyn-list">
                            <div
                              role="list"
                              className="integrations_list w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1a194a746d32b4880691_Color%20Mode%3DNeutral-104.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bd7780bd552e2b015d27e_github.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1960d00bf3fb75f15cec_Color%20Mode%3DNeutral-98.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bd980d8c60339ec210ede_tenable.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c189c89913db8b0eafb0a_Color%20Mode%3DNeutral-92.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bda273646ea3c0cef9211_watch-guard.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c17ac889ed306079927bd_Color%20Mode%3DNeutral-86.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdc6ef7764660bcb0fe59_forcepoint.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1684d994508051e5242a_Color%20Mode%3DNeutral-80.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c16785002a2a76c3f68ad_Color%20Mode%3DColor-84.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1562902459b377d16e62_Color%20Mode%3DNeutral-72.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1559cef7569d5e39e13e_Color%20Mode%3DColor-76.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c14195459e7b5295f163e_Color%20Mode%3DNeutral-65.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdf40918c80ec8f2f67c0_vmware.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1347a1a1d7dff493b102_Color%20Mode%3DNeutral-59.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c133f06331570c16882ff_Color%20Mode%3DColor-63.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c124fd994508051e266fb_Color%20Mode%3DNeutral-53.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1246902459b377cf70a5_Color%20Mode%3DColor-57.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1121e093b9e77d93664b_Color%20Mode%3DNeutral-47.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c111b0ec40d9ca493d2ff_Color%20Mode%3DColor-48.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0fd4c8fcb26beccef2c1_Color%20Mode%3DNeutral-39.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0fc45baed161547d1066_Color%20Mode%3DColor-40.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0ed09a6bb6a6235410d4_Color%20Mode%3DNeutral-33.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0ec662d3f0130617f514_Color%20Mode%3DColor-34.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0dd2a8225d39ac53582e_Color%20Mode%3DNeutral-27.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0dd81ba5d28ba49a8642_Color%20Mode%3DColor-28.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680917c22a62c6ae6061f990_Color%20Mode%3DNeutral-23.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680917bbbc0e45a527216736_Color%20Mode%3DColor-24.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680916bd47c4b2f5af499db9_Color%20Mode%3DNeutral-17.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680916b6451d6ae379550fb1_Color%20Mode%3DColor-18.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680915b50ba6008af95df814_Color%20Mode%3DNeutral-10.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680915b9982ddaaefe9f2595_Color%20Mode%3DColor-11.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809148a8b1221be353438b6_Color%20Mode%3DNeutral-4.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809148e0e7eb9c0d0dc12fc_Color%20Mode%3DColor-4.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div slide-in="" className="integrations_row is-left">
                          <div className="integrations_list-wrapper is-left w-dyn-list">
                            <div
                              role="list"
                              className="integrations_list w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c197a5f5a753ad4b4be2d_Color%20Mode%3DNeutral-99.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c19755002a2a76c414335_Color%20Mode%3DColor-103.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c18be5459e7b52962220f_Color%20Mode%3DNeutral-93.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bda049bd684ae708972a2_trend-micro.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c17dab7bf3f6aaad97f05_Color%20Mode%3DNeutral-87.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdb6dbabc055895cbb9b4_forescout.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c16a3ee2f2a94456d3a95_Color%20Mode%3DNeutral-81.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdcca41a8d214738c00dd_flashpoint.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c158cadcc5bdc170a60d7_Color%20Mode%3DNeutral-73.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdd6979108d4c41f087b5_rubik.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1438ee2f2a94456bcbe4_Color%20Mode%3DNeutral-66.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bded582359c94187cd44c_delinea.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c136b34d3994a7968677a_Color%20Mode%3DNeutral-60.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdfe997ad5768e4702507_idecsi.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c126b5459e7b5295df1ec_Color%20Mode%3DNeutral-54.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684be0c3fa3e0955135d23d4_mimecast.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c117b62d3f0130619c96c_Color%20Mode%3DNeutral-48.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c118d92c0ed16cf48695a_Color%20Mode%3DColor-52.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c101ddd1bc75bc5d91849_Color%20Mode%3DNeutral-41.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c10131ba5d28ba49c4df3_Color%20Mode%3DColor-42.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0ffb312ddff9122b10b9_Color%20Mode%3DNeutral-40.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684be282e890656e2f9edbd6_vm.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0f021a9266ec8dc08a1a_Color%20Mode%3DNeutral-34.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0ef4d1276501ab9837ca_Color%20Mode%3DColor-35.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0df40c8eb7d51859c9a8_Color%20Mode%3DNeutral-28.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0deffc1db29c0f734933_Color%20Mode%3DColor-29.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680917f4895eb1ebaac5bb19_Color%20Mode%3DNeutral.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680917ed8e74d0a63def88b4_Color%20Mode%3DColor.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680916eaaf41cd1b6ec98f7a_Color%20Mode%3DNeutral-18.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680916e30ad0ba3b7bd3a239_Color%20Mode%3DColor-19.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680915e3d9d84b405a35347d_Color%20Mode%3DNeutral-11.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680915ecb8c800aca2bb5298_Color%20Mode%3DColor-12.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680914a6bd24f7ddf1f772db_Color%20Mode%3DNeutral-5.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680914adb61fe7ed6f04c94c_Color%20Mode%3DColor-5.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                            </div>
                          </div>
                          <div className="integrations_list-wrapper is-left w-dyn-list">
                            <div
                              role="list"
                              className="integrations_list w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c197a5f5a753ad4b4be2d_Color%20Mode%3DNeutral-99.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c19755002a2a76c414335_Color%20Mode%3DColor-103.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c18be5459e7b52962220f_Color%20Mode%3DNeutral-93.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bda049bd684ae708972a2_trend-micro.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c17dab7bf3f6aaad97f05_Color%20Mode%3DNeutral-87.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdb6dbabc055895cbb9b4_forescout.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c16a3ee2f2a94456d3a95_Color%20Mode%3DNeutral-81.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdcca41a8d214738c00dd_flashpoint.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c158cadcc5bdc170a60d7_Color%20Mode%3DNeutral-73.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdd6979108d4c41f087b5_rubik.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1438ee2f2a94456bcbe4_Color%20Mode%3DNeutral-66.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bded582359c94187cd44c_delinea.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c136b34d3994a7968677a_Color%20Mode%3DNeutral-60.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdfe997ad5768e4702507_idecsi.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c126b5459e7b5295df1ec_Color%20Mode%3DNeutral-54.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684be0c3fa3e0955135d23d4_mimecast.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c117b62d3f0130619c96c_Color%20Mode%3DNeutral-48.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c118d92c0ed16cf48695a_Color%20Mode%3DColor-52.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c101ddd1bc75bc5d91849_Color%20Mode%3DNeutral-41.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c10131ba5d28ba49c4df3_Color%20Mode%3DColor-42.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0ffb312ddff9122b10b9_Color%20Mode%3DNeutral-40.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684be282e890656e2f9edbd6_vm.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0f021a9266ec8dc08a1a_Color%20Mode%3DNeutral-34.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0ef4d1276501ab9837ca_Color%20Mode%3DColor-35.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0df40c8eb7d51859c9a8_Color%20Mode%3DNeutral-28.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0deffc1db29c0f734933_Color%20Mode%3DColor-29.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680917f4895eb1ebaac5bb19_Color%20Mode%3DNeutral.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680917ed8e74d0a63def88b4_Color%20Mode%3DColor.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680916eaaf41cd1b6ec98f7a_Color%20Mode%3DNeutral-18.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680916e30ad0ba3b7bd3a239_Color%20Mode%3DColor-19.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680915e3d9d84b405a35347d_Color%20Mode%3DNeutral-11.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680915ecb8c800aca2bb5298_Color%20Mode%3DColor-12.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680914a6bd24f7ddf1f772db_Color%20Mode%3DNeutral-5.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680914adb61fe7ed6f04c94c_Color%20Mode%3DColor-5.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div slide-in="" className="integrations_row is-right">
                          <div className="integrations_list-wrapper is-right w-dyn-list">
                            <div
                              role="list"
                              className="integrations_list w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c199af7da084a35d76b9a_Color%20Mode%3DNeutral-100.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bd82f0bd552e2b01637a6_thales.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c18d8a49754c2b8a38e5a_Color%20Mode%3DNeutral-94.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bd9c00b022f349ecb8f3d_sonicwall2.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c17f8ca5a968ab6c5c7ae_Color%20Mode%3DColor-92.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdb25e48a0ad953221b60_extrahop.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c16c3adcc5bdc170b1c42_Color%20Mode%3DNeutral-82.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdca1e245b17a0fcb5180_manage-engine.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c15eebf3e6ba359bfdac1_Color%20Mode%3DNeutral-75.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c15e3b53bd89ce54e2ae7_Color%20Mode%3DColor-79.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c15afffa85bb0ffc6e4d0_Color%20Mode%3DNeutral-74.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c15a8c97507c74523fdf0_Color%20Mode%3DColor-78.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1481c97507c7452341a7_Color%20Mode%3DNeutral-67.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c146fee2f2a94456bf080_Color%20Mode%3DColor-71.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1387034539f25a245f6c_Color%20Mode%3DNeutral-61.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdfbdb0e536afce33ed26_juniper.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c12a7ee2f2a94456ad5df_Color%20Mode%3DNeutral-55.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c129e034539f25a23c026_Color%20Mode%3DColor-59.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c11c00cdd7eda08722be6_Color%20Mode%3DNeutral-49.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c11b7cb9add0c35646f55_Color%20Mode%3DColor-53.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c104c1a9266ec8dc17b0e_Color%20Mode%3DNeutral-42.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c103c243de103cb26126f_Color%20Mode%3DColor-43.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0f3a6c6540b659f9199a_Color%20Mode%3DNeutral-35.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0f3397aa18215ed575cb_Color%20Mode%3DColor-36.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0e1a62d3f013061776ff_Color%20Mode%3DNeutral-29.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0e0e312ddff9122997cc_Color%20Mode%3DColor-30.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809182689bf611bb24cc63f_Neutral.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684be3c867d8f6c5f74ecfd1_databahn.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809171a1d0d3e76379af6a0_Color%20Mode%3DNeutral-19.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680917139d64b5182cab99dd_Color%20Mode%3DColor-20.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680916291618f088e4c7abef_Color%20Mode%3DNeutral-13.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68091623ad8112ccfb3916c2_Color%20Mode%3DColor-14.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680914e76ec6ae1c6ac7e560_Color%20Mode%3DNeutral-6.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680914d98b1221be353479f8_Color%20Mode%3DColor-7.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                            </div>
                          </div>
                          <div className="integrations_list-wrapper is-right w-dyn-list">
                            <div
                              role="list"
                              className="integrations_list w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c199af7da084a35d76b9a_Color%20Mode%3DNeutral-100.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bd82f0bd552e2b01637a6_thales.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c18d8a49754c2b8a38e5a_Color%20Mode%3DNeutral-94.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bd9c00b022f349ecb8f3d_sonicwall2.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c17f8ca5a968ab6c5c7ae_Color%20Mode%3DColor-92.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdb25e48a0ad953221b60_extrahop.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c16c3adcc5bdc170b1c42_Color%20Mode%3DNeutral-82.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdca1e245b17a0fcb5180_manage-engine.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c15eebf3e6ba359bfdac1_Color%20Mode%3DNeutral-75.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c15e3b53bd89ce54e2ae7_Color%20Mode%3DColor-79.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c15afffa85bb0ffc6e4d0_Color%20Mode%3DNeutral-74.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c15a8c97507c74523fdf0_Color%20Mode%3DColor-78.png"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1481c97507c7452341a7_Color%20Mode%3DNeutral-67.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c146fee2f2a94456bf080_Color%20Mode%3DColor-71.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c1387034539f25a245f6c_Color%20Mode%3DNeutral-61.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684bdfbdb0e536afce33ed26_juniper.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c12a7ee2f2a94456ad5df_Color%20Mode%3DNeutral-55.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c129e034539f25a23c026_Color%20Mode%3DColor-59.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c11c00cdd7eda08722be6_Color%20Mode%3DNeutral-49.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c11b7cb9add0c35646f55_Color%20Mode%3DColor-53.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c104c1a9266ec8dc17b0e_Color%20Mode%3DNeutral-42.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c103c243de103cb26126f_Color%20Mode%3DColor-43.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0f3a6c6540b659f9199a_Color%20Mode%3DNeutral-35.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0f3397aa18215ed575cb_Color%20Mode%3DColor-36.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0e1a62d3f013061776ff_Color%20Mode%3DNeutral-29.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680c0e0e312ddff9122997cc_Color%20Mode%3DColor-30.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809182689bf611bb24cc63f_Neutral.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/684be3c867d8f6c5f74ecfd1_databahn.svg"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6809171a1d0d3e76379af6a0_Color%20Mode%3DNeutral-19.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680917139d64b5182cab99dd_Color%20Mode%3DColor-20.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680916291618f088e4c7abef_Color%20Mode%3DNeutral-13.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68091623ad8112ccfb3916c2_Color%20Mode%3DColor-14.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                              <div
                                role="listitem"
                                className="integrations_item w-dyn-item"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eccfb51392af3e91a84d3f_Integration%20Card%20(1).avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_background"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680914e76ec6ae1c6ac7e560_Color%20Mode%3DNeutral-6.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680914d98b1221be353479f8_Color%20Mode%3DColor-7.avif"
                                  loading="lazy"
                                  alt=""
                                  className="integrations_icon-hover"
                                />
                                <div className="integrations_border"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="integrations_overlay"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-tiles_component">
                    <div className="bg-tiles_list">
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_ray_down is-1"></div>
                      <div className="bg-tiles_ray_down is-2"></div>
                      <div className="bg-tiles_ray_down is-3"></div>
                      <div className="bg-tiles_ray_up is-1"></div>
                      <div className="bg-tiles_ray_up is-2"></div>
                      <div className="bg-tiles_ray_left is-1"></div>
                      <div className="bg-tiles_ray_left is-2"></div>
                      <div className="bg-tiles_ray_right is-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="resources"
            className="section_resources"
            style={{ display: "none" }}
          >
            <div className="padding-global">
              <div className="container-large">
                <div className="home_resources">
                  <div className="padding-section-medium">
                    <div className="resources_content">
                      <div className="resources_heading">
                        <h2 slide-in="" className="text-color-alternate-accent">
                          Your starting point for
                          <span className="text-gradient-blue">
                            all things Databahn
                          </span>
                        </h2>
                      </div>
                      <div className="spacer-large"></div>
                      <div className="resources_component">
                        <div
                          id="w-node-b18841eb-a278-bf3a-8dc3-90d76e1a4641-6e1a4638"
                          className="resources_content-left"
                        >
                          <div className="code-embed w-embed"></div>
                          <div className="resources_left-wrapper">
                            <div className="home_resources_list-wrapper">
                              <div className="home_resources_list">
                                <a
                                  slide-in=""
                                  href="/case-studies"
                                  className="home_resources_item w-inline-block"
                                >
                                  <div className="home_resources_border"></div>
                                  <div>
                                    <div className="text-color-blue text-weight-semibold">
                                      Case Studies
                                    </div>
                                    <div className="spacer-0-25rem"></div>
                                    <div className="text-weight-semibold text-style-2lines text-color-alternate-primary">
                                      Success stories from companies like yours.
                                    </div>
                                  </div>{" "}
                                </a>
                                <a
                                  slide-in=""
                                  href="/blog"
                                  className="home_resources_item w-inline-block"
                                >
                                  <div className="home_resources_border"></div>
                                  <div>
                                    <div className="text-color-blue text-weight-semibold">
                                      Blogs
                                    </div>
                                    <div className="spacer-0-25rem"></div>
                                    <div className="text-weight-semibold text-style-2lines text-color-alternate-primary">
                                      The latest articles, news, blogs, and
                                      learnings from Databahn.
                                    </div>
                                  </div>{" "}
                                </a>
                                <a
                                  slide-in=""
                                  href="/solution-briefs"
                                  className="home_resources_item w-inline-block"
                                >
                                  <div className="home_resources_border"></div>
                                  <div>
                                    <div className="text-color-blue text-weight-semibold">
                                      Solution Briefs
                                    </div>
                                    <div className="spacer-0-25rem"></div>
                                    <div className="text-weight-semibold text-style-2lines text-color-alternate-primary">
                                      Learn how we help enterprises turn today’s
                                      data challenges into tomorrow’s
                                      opportunities
                                    </div>
                                  </div>{" "}
                                </a>
                                <a
                                  slide-in=""
                                  href="/webinars"
                                  className="home_resources_item w-inline-block"
                                >
                                  <div className="home_resources_border"></div>
                                  <div>
                                    <div className="text-color-blue text-weight-semibold">
                                      Webinars
                                    </div>
                                    <div className="spacer-0-25rem"></div>
                                    <div className="text-weight-semibold text-style-2lines text-color-alternate-primary">
                                      On‑demand webinars featuring industry
                                      experts, product showcases, and real‑world
                                      customer stories
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="resources_slider_component">
                          <div className="code-embed w-embed"></div>
                          <div className="resources_slider_list-wrapper swiper w-dyn-list">
                            <div
                              reveal-list=""
                              fs-cmsslider-element="list"
                              role="list"
                              className="resources_slider_list swiper-wrapper w-dyn-items"
                            >
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/composable-security-platforms-integrating-security-data-fabrics-into-the-soc-stack"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6931883ac0f86e94af042ac9_Composable%20Security%20Platforms%20Thumbnail.png"
                                    loading="lazy"
                                    alt=""
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Composable Security Platforms:
                                        Integrating Security Data Fabrics into
                                        the SOC Stack
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/cert-in-compliance-without-siem-sticker-shock-how-to-halve-your-siem-costs-and-keep-every-log"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/69306882dc19f624a9275c96_Cert%20In%20Compliance%20Thumbnail.png"
                                    loading="lazy"
                                    alt=""
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/69306882dc19f624a9275c96_Cert%20In%20Compliance%20Thumbnail-p-500.png   500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/69306882dc19f624a9275c96_Cert%20In%20Compliance%20Thumbnail-p-800.png   800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/69306882dc19f624a9275c96_Cert%20In%20Compliance%20Thumbnail-p-1080.png 1080w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/69306882dc19f624a9275c96_Cert%20In%20Compliance%20Thumbnail-p-1600.png 1600w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/69306882dc19f624a9275c96_Cert%20In%20Compliance%20Thumbnail.png        1920w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        CERT-In Compliance Without SIEM Sticker
                                        Shock: How to Halve Your SIEM Costs and
                                        Keep Every Log
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/policy-driven-security-data-fabric-automating-compliance-at-network-scale"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/69284743d068d4efb2ca1612_Policy-Driven%20data%20fabric%20blog%20cover.png"
                                    loading="lazy"
                                    alt="Policy-Driven Security Data Fabric: Automating Compliance at Network Scale"
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/69284743d068d4efb2ca1612_Policy-Driven%20data%20fabric%20blog%20cover-p-500.png   500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/69284743d068d4efb2ca1612_Policy-Driven%20data%20fabric%20blog%20cover-p-800.png   800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/69284743d068d4efb2ca1612_Policy-Driven%20data%20fabric%20blog%20cover-p-1080.png 1080w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/69284743d068d4efb2ca1612_Policy-Driven%20data%20fabric%20blog%20cover-p-1600.png 1600w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/69284743d068d4efb2ca1612_Policy-Driven%20data%20fabric%20blog%20cover.png        1920w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Policy-Driven Security Data Fabric:
                                        Automating Compliance at Network Scale
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/the-beacon-architecture-rethinking-multi-tenant-security-data-operations-for-mssps"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6926242e172c0c4dec58cb7c_Blog%20Covers!%20(4).png"
                                    loading="lazy"
                                    alt=""
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6926242e172c0c4dec58cb7c_Blog%20Covers!%20(4)-p-500.png   500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6926242e172c0c4dec58cb7c_Blog%20Covers!%20(4)-p-800.png   800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6926242e172c0c4dec58cb7c_Blog%20Covers!%20(4)-p-1080.png 1080w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6926242e172c0c4dec58cb7c_Blog%20Covers!%20(4)-p-1600.png 1600w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6926242e172c0c4dec58cb7c_Blog%20Covers!%20(4).png        1920w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        The Beacon Architecture: Rethinking
                                        multi-tenant security data operations
                                        for MSSPs
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/adding-context-to-security-event-logs-without-exploding-volume"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/692080459ce9418ac0a04cbe_Blog%20Covers!%20(3).png"
                                    loading="lazy"
                                    alt="Adding Context to Security Event Logs Without Exploding Volume | Databahn"
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/692080459ce9418ac0a04cbe_Blog%20Covers!%20(3)-p-500.png   500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/692080459ce9418ac0a04cbe_Blog%20Covers!%20(3)-p-800.png   800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/692080459ce9418ac0a04cbe_Blog%20Covers!%20(3)-p-1080.png 1080w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/692080459ce9418ac0a04cbe_Blog%20Covers!%20(3)-p-1600.png 1600w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/692080459ce9418ac0a04cbe_Blog%20Covers!%20(3).png        1920w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Adding Context to Security Event Logs
                                        Without Exploding Volume
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/smarter-security-alerts-for-data-pipelines-databahn"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/691f30bc322c3648a3ce2342_Smarter%20Security%20Alerts%20Blog%20Thumbnail%20(2).png"
                                    loading="lazy"
                                    alt=""
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/691f30bc322c3648a3ce2342_Smarter%20Security%20Alerts%20Blog%20Thumbnail%20(2)-p-500.png   500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/691f30bc322c3648a3ce2342_Smarter%20Security%20Alerts%20Blog%20Thumbnail%20(2)-p-800.png   800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/691f30bc322c3648a3ce2342_Smarter%20Security%20Alerts%20Blog%20Thumbnail%20(2)-p-1080.png 1080w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/691f30bc322c3648a3ce2342_Smarter%20Security%20Alerts%20Blog%20Thumbnail%20(2).png        1200w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Smarter Security Alerts for Data
                                        Pipelines | Databahn
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/dark-clouds-why-enterprises-are-re-evaluating-multi-cloud-architecture"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/69159026eb1f96ab1daab559_Blog%20Covers!%20(1).png"
                                    loading="lazy"
                                    alt="Why Enterprises Are Re-Evaluating Multi-Cloud Architecture"
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/69159026eb1f96ab1daab559_Blog%20Covers!%20(1)-p-500.png   500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/69159026eb1f96ab1daab559_Blog%20Covers!%20(1)-p-800.png   800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/69159026eb1f96ab1daab559_Blog%20Covers!%20(1)-p-1080.png 1080w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/69159026eb1f96ab1daab559_Blog%20Covers!%20(1)-p-1600.png 1600w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/69159026eb1f96ab1daab559_Blog%20Covers!%20(1).png        1920w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Dark Clouds: Why Enterprises are
                                        re-evaluating multi-cloud architecture
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/rethinking-siem-data-lake-vs-core-security-analytics"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/690a4c1577e07c14ec59ddd4_Rethinking%20SIEM%20blog%20Cover%20(1).png"
                                    loading="lazy"
                                    alt="Rethinking SIEM: Data Lake vs Core Security Analytics "
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/690a4c1577e07c14ec59ddd4_Rethinking%20SIEM%20blog%20Cover%20(1)-p-500.png   500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/690a4c1577e07c14ec59ddd4_Rethinking%20SIEM%20blog%20Cover%20(1)-p-800.png   800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/690a4c1577e07c14ec59ddd4_Rethinking%20SIEM%20blog%20Cover%20(1)-p-1080.png 1080w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/690a4c1577e07c14ec59ddd4_Rethinking%20SIEM%20blog%20Cover%20(1)-p-1600.png 1600w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/690a4c1577e07c14ec59ddd4_Rethinking%20SIEM%20blog%20Cover%20(1).png        1920w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Rethinking SIEM: Data Lake vs Core
                                        Security Analytics
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/from-access-to-agency-how-intelligent-agents-are-changing-data-governance"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/690a45ba7ace90f70fcb7e1d_AI%20Governance%20Blog%20Thumbnail%20(1).png"
                                    loading="lazy"
                                    alt="From Access to Agency: How Intelligent Agents Are Changing Data Governance | Databahn"
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/690a45ba7ace90f70fcb7e1d_AI%20Governance%20Blog%20Thumbnail%20(1)-p-500.png   500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/690a45ba7ace90f70fcb7e1d_AI%20Governance%20Blog%20Thumbnail%20(1)-p-800.png   800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/690a45ba7ace90f70fcb7e1d_AI%20Governance%20Blog%20Thumbnail%20(1)-p-1080.png 1080w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/690a45ba7ace90f70fcb7e1d_AI%20Governance%20Blog%20Thumbnail%20(1)-p-1600.png 1600w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/690a45ba7ace90f70fcb7e1d_AI%20Governance%20Blog%20Thumbnail%20(1).png        1920w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        From Access to Agency: How Intelligent
                                        Agents Are Changing Data Governance
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/ot-telemetry-the-next-frontier-for-security-and-ai"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/690224be6d80d5cc22349f1e_Blog%20Covers!.png"
                                    loading="lazy"
                                    alt="OT Telemetry: The next frontier for security and AI"
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/690224be6d80d5cc22349f1e_Blog%20Covers!-p-500.png   500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/690224be6d80d5cc22349f1e_Blog%20Covers!-p-800.png   800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/690224be6d80d5cc22349f1e_Blog%20Covers!-p-1080.png 1080w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/690224be6d80d5cc22349f1e_Blog%20Covers!-p-1600.png 1600w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/690224be6d80d5cc22349f1e_Blog%20Covers!.png        1920w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        OT Telemetry: The next frontier for
                                        security and AI
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/from-noise-to-knowledge-turning-security-data-into-actionable-insight"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68fb7ac3389d194f128ac067_Building%20a%20Foundation%20for%20Healthcare%20AI%20(8).png"
                                    loading="lazy"
                                    alt="From Noise to Knowledge: Turning Security Data into Actionable Insight | Databahn"
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68fb7ac3389d194f128ac067_Building%20a%20Foundation%20for%20Healthcare%20AI%20(8)-p-500.png   500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68fb7ac3389d194f128ac067_Building%20a%20Foundation%20for%20Healthcare%20AI%20(8)-p-800.png   800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68fb7ac3389d194f128ac067_Building%20a%20Foundation%20for%20Healthcare%20AI%20(8)-p-1080.png 1080w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68fb7ac3389d194f128ac067_Building%20a%20Foundation%20for%20Healthcare%20AI%20(8).png        1200w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        From Noise to Knowledge: Turning
                                        Security Data into Actionable Insight
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/data-engineering-automation-the-secret-sauce-for-scalable-security"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68f7dc4a9d19ce15093ac21f_Tues%20-%20Fri%20(1).png"
                                    loading="lazy"
                                    alt="Data Engineering Automation: The Secret Sauce for Scalable Security"
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68f7dc4a9d19ce15093ac21f_Tues%20-%20Fri%20(1)-p-500.png   500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68f7dc4a9d19ce15093ac21f_Tues%20-%20Fri%20(1)-p-800.png   800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68f7dc4a9d19ce15093ac21f_Tues%20-%20Fri%20(1)-p-1080.png 1080w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68f7dc4a9d19ce15093ac21f_Tues%20-%20Fri%20(1).png        1600w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Data Engineering Automation: The Secret
                                        Sauce for Scalable Security
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/sentinel-data-lake-databahn"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68efe2396eae0734f9321c97_Sentinel%20Data%20Lake%20(3).png"
                                    loading="lazy"
                                    alt=""
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68efe2396eae0734f9321c97_Sentinel%20Data%20Lake%20(3)-p-500.png   500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68efe2396eae0734f9321c97_Sentinel%20Data%20Lake%20(3)-p-800.png   800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68efe2396eae0734f9321c97_Sentinel%20Data%20Lake%20(3)-p-1080.png 1080w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68efe2396eae0734f9321c97_Sentinel%20Data%20Lake%20(3)-p-1600.png 1600w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68efe2396eae0734f9321c97_Sentinel%20Data%20Lake%20(3).png        1920w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide">
                                        Security Data Pipeline Platforms
                                      </div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Sentinel Data Lake: Expanding the
                                        Microsoft Security Ecosystem – and
                                        enhancing it with Databahn
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/building-a-foundation-for-healthcare-ai-why-strong-data-pipelines-matter-more-than-models"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68ee7e706c73127b7f4741e2_Building%20a%20Foundation%20for%20Healthcare%20AI%20(5).png"
                                    loading="lazy"
                                    alt="Healthcare AI: Why Strong Data Pipelines Matter More than Models | Databahn"
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68ee7e706c73127b7f4741e2_Building%20a%20Foundation%20for%20Healthcare%20AI%20(5)-p-500.png   500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68ee7e706c73127b7f4741e2_Building%20a%20Foundation%20for%20Healthcare%20AI%20(5)-p-800.png   800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68ee7e706c73127b7f4741e2_Building%20a%20Foundation%20for%20Healthcare%20AI%20(5)-p-1080.png 1080w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68ee7e706c73127b7f4741e2_Building%20a%20Foundation%20for%20Healthcare%20AI%20(5)-p-1600.png 1600w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68ee7e706c73127b7f4741e2_Building%20a%20Foundation%20for%20Healthcare%20AI%20(5).png        1920w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Building a Foundation for Healthcare AI:
                                        Why Strong Data Pipelines Matter More
                                        than Models
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/strengthening-compliance-and-trust-with-data-lineage-in-financial-services"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68e6d04f6d105a23b8b473dd_Building%20a%20Foundation%20for%20Healthcare%20AI%20(7).avif"
                                    loading="lazy"
                                    alt="Data Lineage in Financial Services "
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68e6d04f6d105a23b8b473dd_Building%20a%20Foundation%20for%20Healthcare%20AI%20(7)-p-500.avif  500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68e6d04f6d105a23b8b473dd_Building%20a%20Foundation%20for%20Healthcare%20AI%20(7)-p-800.avif  800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68e6d04f6d105a23b8b473dd_Building%20a%20Foundation%20for%20Healthcare%20AI%20(7).avif       1920w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Strengthening Compliance and Trust with
                                        Data Lineage in Financial Services
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/cybersecurity-awareness-month-2025-why-broken-data-pipelines-are-the-biggest-risk-youre-ignoring"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68e790a3ead8133eeed4785f_Tues%20-%20Fri.avif"
                                    loading="lazy"
                                    alt=""
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68e790a3ead8133eeed4785f_Tues%20-%20Fri-p-500.avif  500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68e790a3ead8133eeed4785f_Tues%20-%20Fri-p-800.avif  800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68e790a3ead8133eeed4785f_Tues%20-%20Fri.avif       1600w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Cybersecurity Awareness Month 2025: Why
                                        Broken Data Pipelines Are the Biggest
                                        Risk You’re Ignoring
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/recap-from-chaos-to-clarity-webinar"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68e015bcabc330a525bf3300_Interview%20BGs%20(2).avif"
                                    loading="lazy"
                                    alt=""
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68e015bcabc330a525bf3300_Interview%20BGs%20(2)-p-500.avif  500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68e015bcabc330a525bf3300_Interview%20BGs%20(2)-p-800.avif  800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68e015bcabc330a525bf3300_Interview%20BGs%20(2).avif       1920w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Recap | From Chaos to Clarity Webinar
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/mitre-under-att-ck-rethinking-cybersecuritys-gold-standard"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68d43a5827a0d9c0f695557e_Gen%20AI%20Transformation%20Cover%20Image%20(4).avif"
                                    loading="lazy"
                                    alt=""
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68d43a5827a0d9c0f695557e_Gen%20AI%20Transformation%20Cover%20Image%20(4)-p-500.avif  500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68d43a5827a0d9c0f695557e_Gen%20AI%20Transformation%20Cover%20Image%20(4)-p-800.avif  800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68d43a5827a0d9c0f695557e_Gen%20AI%20Transformation%20Cover%20Image%20(4).avif       1600w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        MITRE under ATT&amp;CK: Rethinking
                                        cybersecurity&#x27;s gold standard
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/databricks-databahn-the-next-era-of-data-intelligence-for-cybersecurity"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68dbdc8dd57b73774f69a617_Databricks%20%2B%20Databahn.avif"
                                    loading="lazy"
                                    alt="Databricks + Databahn - Data Intelligence Unlocked"
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68dbdc8dd57b73774f69a617_Databricks%20%2B%20Databahn-p-500.avif  500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68dbdc8dd57b73774f69a617_Databricks%20%2B%20Databahn-p-800.avif  800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68dbdc8dd57b73774f69a617_Databricks%20%2B%20Databahn.avif       1600w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Databricks The Next Era of Data
                                        Intelligence for Cybersecurity
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/how-to-optimize-sensitive-data-discovery-in-telemetry-and-pipelines"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68d2ddd5a18cf0e57091c08f_Building%20a%20Foundation%20for%20Healthcare%20AI%20(4).avif"
                                    loading="lazy"
                                    alt="How to Optimize Sensitive Data Discovery in telemetry and pipelines "
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68d2ddd5a18cf0e57091c08f_Building%20a%20Foundation%20for%20Healthcare%20AI%20(4)-p-500.avif  500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68d2ddd5a18cf0e57091c08f_Building%20a%20Foundation%20for%20Healthcare%20AI%20(4)-p-800.avif  800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68d2ddd5a18cf0e57091c08f_Building%20a%20Foundation%20for%20Healthcare%20AI%20(4).avif       1920w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        How to Optimize Sensitive Data Discovery
                                        in telemetry and pipelines
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/ai-powered-breaches-ai-is-turning-telemetry-into-an-attack-surface"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68cd6447d2894f5fb17c608d_Building%20a%20Foundation%20for%20Healthcare%20AI.avif"
                                    loading="lazy"
                                    alt="AI-powered breaches: AI is turning Telemetry into an attack surface"
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68cd6447d2894f5fb17c608d_Building%20a%20Foundation%20for%20Healthcare%20AI-p-500.avif  500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68cd6447d2894f5fb17c608d_Building%20a%20Foundation%20for%20Healthcare%20AI-p-800.avif  800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68cd6447d2894f5fb17c608d_Building%20a%20Foundation%20for%20Healthcare%20AI.avif       1920w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        AI-powered breaches: AI is turning
                                        Telemetry into an attack surface
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/the-case-for-flexible-data-routing-in-modern-data-management"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68cac7df1f3914d1b857b7e6_Flexible%20Data%20Routing%20Blog%20Cover.avif"
                                    loading="lazy"
                                    alt="Flexible Data Routing Blog Cover"
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68cac7df1f3914d1b857b7e6_Flexible%20Data%20Routing%20Blog%20Cover-p-500.avif   500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68cac7df1f3914d1b857b7e6_Flexible%20Data%20Routing%20Blog%20Cover-p-800.avif   800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68cac7df1f3914d1b857b7e6_Flexible%20Data%20Routing%20Blog%20Cover-p-1080.avif 1080w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68cac7df1f3914d1b857b7e6_Flexible%20Data%20Routing%20Blog%20Cover.avif        1920w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        The Case for Flexible Data Routing in
                                        Modern Data Management
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/siem-evaluation-checklist-for-modern-enterprises"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68b96e11d36ae8a4e12d35e3_SIEM%20Evaluation%20Blog%20-%20Cover.avif"
                                    loading="lazy"
                                    alt="SIEM Evaluation Checklist for Modern Enterprises"
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        SIEM Evaluation Checklist for Modern
                                        Enterprises
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/modernizing-legacy-data-infrastructure-for-the-ai-era"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68b6e1fe5a7e493946d9a8a6_Gen%20AI%20Transformation%20Cover%20Image%20(3).avif"
                                    loading="lazy"
                                    alt="Modernizing Legacy Data Infrastructure for the AI Era "
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68b6e1fe5a7e493946d9a8a6_Gen%20AI%20Transformation%20Cover%20Image%20(3)-p-500.avif  500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68b6e1fe5a7e493946d9a8a6_Gen%20AI%20Transformation%20Cover%20Image%20(3)-p-800.avif  800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68b6e1fe5a7e493946d9a8a6_Gen%20AI%20Transformation%20Cover%20Image%20(3).avif       1600w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Modernizing Legacy Data Infrastructure
                                        for the AI Era
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/how-modern-data-pipeline-tools-slash-siem-costs-and-storage-bills-without-sacrificing-logs"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68b5b91b3b96ba7135b6ad6a_Image.avif"
                                    loading="lazy"
                                    alt=""
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68b5b91b3b96ba7135b6ad6a_Image-p-500.avif  500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68b5b91b3b96ba7135b6ad6a_Image.avif       1024w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide">
                                        Security Data Pipeline Platforms
                                      </div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        How Modern Data Pipeline Tools Slash
                                        SIEM Costs and Storage Bills Without
                                        Sacrificing Logs
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/the-genai-enterprise-transformation"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68aca62c5932ed72909ccd7a_Gen%20AI%20Transformation%20Cover%20Image%20(2).avif"
                                    loading="lazy"
                                    alt="The GenAI Enterprise Transformation "
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68aca62c5932ed72909ccd7a_Gen%20AI%20Transformation%20Cover%20Image%20(2)-p-500.avif  500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68aca62c5932ed72909ccd7a_Gen%20AI%20Transformation%20Cover%20Image%20(2)-p-800.avif  800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68aca62c5932ed72909ccd7a_Gen%20AI%20Transformation%20Cover%20Image%20(2).avif       1600w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        The GenAI Enterprise Transformation
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/hybrid-data-pipeline-security-best-practices-telemetry-2025"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68a5bff86ac0e4849006eb41_Hybrid%20Data%20Pipelines%20Cover%20(2).avif"
                                    loading="lazy"
                                    alt="Hybrid Data Pipeline Security"
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68a5bff86ac0e4849006eb41_Hybrid%20Data%20Pipelines%20Cover%20(2)-p-500.avif  500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68a5bff86ac0e4849006eb41_Hybrid%20Data%20Pipelines%20Cover%20(2)-p-800.avif  800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68a5bff86ac0e4849006eb41_Hybrid%20Data%20Pipelines%20Cover%20(2).avif       1600w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide">
                                        Data Security Measures
                                      </div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Hybrid Data Pipeline Security: Best
                                        Practices for Telemetry in 2025
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/how-automated-data-parsing-can-benefit-your-business"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68a4bc0d91271b8bbd2aa128_Black%20Hat%20Video%20Elements%20(2).avif"
                                    loading="lazy"
                                    alt=""
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68a4bc0d91271b8bbd2aa128_Black%20Hat%20Video%20Elements%20(2)-p-500.avif   500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68a4bc0d91271b8bbd2aa128_Black%20Hat%20Video%20Elements%20(2)-p-800.avif   800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68a4bc0d91271b8bbd2aa128_Black%20Hat%20Video%20Elements%20(2)-p-1080.avif 1080w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68a4bc0d91271b8bbd2aa128_Black%20Hat%20Video%20Elements%20(2).avif        1600w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide">
                                        Security Data Pipeline Platforms
                                      </div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        How Does Automated Data Parsing Benefit
                                        Your Business?
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/rethinking-siem-migration-why-your-data-pipeline-layer-matters-more-than-ever"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68b182155fea0a4cf4c3e071_Modular%20Architecture%20Blog%20Cover%20(1200%20x%20627%20px)%20(5).avif"
                                    loading="lazy"
                                    alt="SIEM Migration with DataBahn"
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68b182155fea0a4cf4c3e071_Modular%20Architecture%20Blog%20Cover%20(1200%20x%20627%20px)%20(5)-p-500.avif   500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68b182155fea0a4cf4c3e071_Modular%20Architecture%20Blog%20Cover%20(1200%20x%20627%20px)%20(5)-p-800.avif   800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68b182155fea0a4cf4c3e071_Modular%20Architecture%20Blog%20Cover%20(1200%20x%20627%20px)%20(5)-p-1080.avif 1080w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68b182155fea0a4cf4c3e071_Modular%20Architecture%20Blog%20Cover%20(1200%20x%20627%20px)%20(5).avif        1920w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Rethinking SIEM Migration: Why Your Data
                                        Pipeline Layer Matters More Than Ever
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/black-hat-2025-recap-telemetry-ai-and-databahns-smart-agents-launch"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/689b52b1dd10f6d5905b856f_Black%20Hat%20Video%20Elements%20(4).avif"
                                    loading="lazy"
                                    alt=""
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/689b52b1dd10f6d5905b856f_Black%20Hat%20Video%20Elements%20(4)-p-500.avif  500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/689b52b1dd10f6d5905b856f_Black%20Hat%20Video%20Elements%20(4)-p-800.avif  800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/689b52b1dd10f6d5905b856f_Black%20Hat%20Video%20Elements%20(4).avif       1600w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide">
                                        Security Data Pipeline Platforms
                                      </div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Black Hat 2025 Recap: Telemetry, AI, and
                                        Databahn’s Smart Agents Launch
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/ciso-security-data-pipelines-cxo-insight-ep1"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68962ee4af6e366f785eb318_CXO%20INSIGHTS%20-%20Blog%20Banner.avif"
                                    loading="lazy"
                                    alt=""
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68962ee4af6e366f785eb318_CXO%20INSIGHTS%20-%20Blog%20Banner-p-500.avif   500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68962ee4af6e366f785eb318_CXO%20INSIGHTS%20-%20Blog%20Banner-p-800.avif   800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68962ee4af6e366f785eb318_CXO%20INSIGHTS%20-%20Blog%20Banner-p-1080.avif 1080w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68962ee4af6e366f785eb318_CXO%20INSIGHTS%20-%20Blog%20Banner.avif        1920w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide">
                                        Security Data Pipeline Platforms
                                      </div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Why your Security Data Stack is Obsolete
                                        - and what comes next
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/smart-edge-agents-for-endpoint-telemetry"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68909833f9f8eddbe1d22309_Blog%20-%20Endpoint%20Agents%20-%20Banner%20Image.avif"
                                    loading="lazy"
                                    alt=""
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68909833f9f8eddbe1d22309_Blog%20-%20Endpoint%20Agents%20-%20Banner%20Image-p-500.avif  500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68909833f9f8eddbe1d22309_Blog%20-%20Endpoint%20Agents%20-%20Banner%20Image-p-800.avif  800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68909833f9f8eddbe1d22309_Blog%20-%20Endpoint%20Agents%20-%20Banner%20Image.avif       1600w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide">
                                        Data Integration Techniques
                                      </div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        DataBahn Agents for Endpoint Telemetry
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/mckinsey-ai-banking-transformation-pipelines"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6866ae3f8534dc4df571497c_Blog%20Cover%20-%20ML%20Pipelines%20for%20Banking.avif"
                                    loading="lazy"
                                    alt=""
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6866ae3f8534dc4df571497c_Blog%20Cover%20-%20ML%20Pipelines%20for%20Banking-p-500.avif  500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6866ae3f8534dc4df571497c_Blog%20Cover%20-%20ML%20Pipelines%20for%20Banking-p-800.avif  800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6866ae3f8534dc4df571497c_Blog%20Cover%20-%20ML%20Pipelines%20for%20Banking.avif       1600w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide">
                                        Security Data Pipeline Platforms
                                      </div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        McKinsey says ML pipelines are the
                                        future of banking
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/databahn-raises-17mn-in-series-a-to-reimagine-security-data-management"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/685d5198ed1d91e56b0f2694_Raises%20%2417Mn%20(1560%20x%20930%20px)%20(3).avif"
                                    loading="lazy"
                                    alt=""
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/685d5198ed1d91e56b0f2694_Raises%20%2417Mn%20(1560%20x%20930%20px)%20(3)-p-500.avif  500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/685d5198ed1d91e56b0f2694_Raises%20%2417Mn%20(1560%20x%20930%20px)%20(3)-p-800.avif  800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/685d5198ed1d91e56b0f2694_Raises%20%2417Mn%20(1560%20x%20930%20px)%20(3).avif       1600w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        DataBahn.ai raises $17Mn in Series A to
                                        reimagine security data management
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/siem-alert-fatigue-false-positive"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/683f37e6b218ba56385274ab_Testimonial%20(1).avif"
                                    loading="lazy"
                                    alt=""
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/683f37e6b218ba56385274ab_Testimonial%20(1)-p-500.avif  500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/683f37e6b218ba56385274ab_Testimonial%20(1).avif       1200w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide">
                                        Security Data Pipeline Platforms
                                      </div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        The Cybersecurity Alert Fatigue Epidemic
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/the-rise-of-headless-cybersecurity"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68376cb65a79bc9dfd70371e_Blog%20Cover.avif"
                                    loading="lazy"
                                    alt=""
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68376cb65a79bc9dfd70371e_Blog%20Cover-p-500.avif  500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/68376cb65a79bc9dfd70371e_Blog%20Cover.avif       1250w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide">
                                        Security Data Pipeline Platforms
                                      </div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        The Rise of Headless Cybersecurity
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/security-data-pipeline-platforms-the-data-layer-optimizing-siems-and-socs"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6835c3080a91247e26072243_SACR%20Blog%20Header%20Image.avif"
                                    loading="lazy"
                                    alt="The Rise of Security Data Piplelines - SACR SDDP Report"
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6835c3080a91247e26072243_SACR%20Blog%20Header%20Image-p-500.avif  500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/6835c3080a91247e26072243_SACR%20Blog%20Header%20Image.avif       1400w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide">
                                        Security Data Pipeline Platforms
                                      </div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Security Data Pipeline Platforms: the
                                        Data Layer Optimizing SIEMs and SOCs
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/telemetry-data-pipeline-optimization"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680a0b4044bd66f2c5fe13f2_Cover-Telemetry-Blog.avif"
                                    loading="lazy"
                                    alt=""
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide">
                                        Data Security Measures
                                      </div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Telemetry Data Pipelines - and how they
                                        impact decision-making for enterprises
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/log-prioritization-volume-reduction-microsoft-sentinel"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680caa2ed4a3798fc7e5f336_Copy%20of%20Cover%20-%20Telemetry%20Blog.avif"
                                    loading="lazy"
                                    alt="Reduced Alert Fatigue Microsoft Sentinel||Sentinel Log Volume Reduction"
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680caa2ed4a3798fc7e5f336_Copy%20of%20Cover%20-%20Telemetry%20Blog-p-500.avif  500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680caa2ed4a3798fc7e5f336_Copy%20of%20Cover%20-%20Telemetry%20Blog-p-800.avif  800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680caa2ed4a3798fc7e5f336_Copy%20of%20Cover%20-%20Telemetry%20Blog.avif       1400w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Reduced Alert Fatigue: 50% Log Volume
                                        Reduction with AI-powered log
                                        prioritization
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/sentinel-best-practices-how-socs-can-optimize-sentinel-cost"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680cabaadd422f51788d7e29_Copy%20of%20Cover%20-%20Telemetry%20Blog%20(1).avif"
                                    loading="lazy"
                                    alt="|"
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680cabaadd422f51788d7e29_Copy%20of%20Cover%20-%20Telemetry%20Blog%20(1)-p-500.avif  500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680cabaadd422f51788d7e29_Copy%20of%20Cover%20-%20Telemetry%20Blog%20(1).avif       1400w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Sentinel best practices: How SOCs can
                                        optimize Sentinel costs &amp;
                                        performance
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/identity-data-management-how-databahn-solves-the-first-mile-data-challenge"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680a0b3f32ca6d3ad810df23_Copy-of-Cover-Telemetry-Blog.avif"
                                    loading="lazy"
                                    alt=""
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Identity Data Management - how DataBahn
                                        solves the &#x27;first-mile&#x27; data
                                        challenge
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/enabling-smarter-auditing-for-salesforce-customers"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680cad8f6e110628255776d2_Salesforce-Blog.avif"
                                    loading="lazy"
                                    alt="||"
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680cad8f6e110628255776d2_Salesforce-Blog-p-500.avif   500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680cad8f6e110628255776d2_Salesforce-Blog-p-800.avif   800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680cad8f6e110628255776d2_Salesforce-Blog-p-1080.avif 1080w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680cad8f6e110628255776d2_Salesforce-Blog.avif        2240w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide">
                                        Big Data Challenges
                                      </div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Enabling smarter auditing for Salesforce
                                        customers
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/introducing-cruz-an-ai-data-engineer-in-a-box"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680cb3445120df33e18b0949_Cruz-Article-3--2048x1099.avif"
                                    loading="lazy"
                                    alt="Cruz Banner Image"
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680cb3445120df33e18b0949_Cruz-Article-3--2048x1099-p-500.avif   500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680cb3445120df33e18b0949_Cruz-Article-3--2048x1099-p-800.avif   800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680cb3445120df33e18b0949_Cruz-Article-3--2048x1099-p-1080.avif 1080w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680cb3445120df33e18b0949_Cruz-Article-3--2048x1099.avif        2048w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Introducing Cruz: An AI Data Engineer
                                        In-a-Box
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/data-pipeline-management-and-security-data-fabrics"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680cb3c0dfac05f767e17aa1_Untitled-design-14-2048x914.avif"
                                    loading="lazy"
                                    alt="|"
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680cb3c0dfac05f767e17aa1_Untitled-design-14-2048x914-p-500.avif   500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680cb3c0dfac05f767e17aa1_Untitled-design-14-2048x914-p-800.avif   800w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680cb3c0dfac05f767e17aa1_Untitled-design-14-2048x914-p-1080.avif 1080w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680cb3c0dfac05f767e17aa1_Untitled-design-14-2048x914.avif        2048w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Data Pipeline Management and Security
                                        Data Fabrics
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/the-case-for-a-security-data-lake"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680a0b3a02ae25316bd8cadc_SDL-Blog-Banner.avif"
                                    loading="lazy"
                                    alt=""
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        The Case for a Security Data Lake
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/cybersecurity-data-fabric"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680a0b3852f0616cc3453070_Cyber-Security-Data-Fabric-blog.avif"
                                    loading="lazy"
                                    alt=""
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Cybersecurity Data Fabric: What on earth
                                        is security data fabric?
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/navigating-the-new-security-data-frontier-the-synergy-of-databahn-ai-aws-security-lake-and-ocsf"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680cb95efb50442c84898898_Navigating-the-New-Security-Data-Frontier.avif"
                                    loading="lazy"
                                    alt="|"
                                    sizes="100vw"
                                    srcSet="
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680cb95efb50442c84898898_Navigating-the-New-Security-Data-Frontier-p-500.avif  500w,
                                    https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680cb95efb50442c84898898_Navigating-the-New-Security-Data-Frontier.avif       1120w
                                  "
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Navigating the New Security Data
                                        Frontier: The Synergy of Databahn.ai,
                                        AWS Security Lake, and OCSF
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/scaling-security-operations-using-data-orchestration"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680a0b38decade33b4e838c4_Scaling-Security-Operations.avif"
                                    loading="lazy"
                                    alt=""
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        Scaling Security Operations using Data
                                        Orchestration
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                              <div
                                reveal-item=""
                                role="listitem"
                                className="resources_slider_item swiper-slide w-dyn-item"
                              >
                                <a
                                  href="/blog/the-ultimate-guide-to-microsoft-sentinel-optimization-for-enterprises"
                                  className="resources_slider_item-link w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/67efdcd0156bf5d1172de578/680a0b3815bfb7af46fae236_Sentinel-Optimization.avif"
                                    loading="lazy"
                                    alt=""
                                    className="resources_slider_image"
                                  />
                                  <div className="resources_slider_content">
                                    <div className="resources_slider_item-content">
                                      <div className="text-color-accent text-weight-semibold hide w-dyn-bind-empty"></div>
                                      <div className="spacer-0-25rem"></div>
                                      <h3 className="heading-style-h6 text-color-primary text-style-2lines">
                                        The Ultimate Guide to Microsoft Sentinel
                                        Optimization for Enterprises
                                      </h3>
                                    </div>
                                    <img
                                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ece520e1a80fb9113d2cb7_Card.avif"
                                      loading="lazy"
                                      alt=""
                                      className="resources_slider_content-background"
                                    />
                                    <div className="resources_slider_glow-1"></div>
                                    <div className="home_resources_gradient-2"></div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="spacer-small"></div>
                          <div slide-in="" className="resources_slider_buttons">
                            <div className="slider-arrow is-alternate is-prev">
                              <div className="slider-arrow-icon">
                                <div className="icon-embed-xsmall w-embed">
                                  <svg
                                    currentwidth=" 100%"
                                    currentheight=" 100%"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.00012 16.1618C9.46038 16.1618 9.83337 15.7887 9.83337 15.3285C9.83337 14.8682 9.46037 14.4951 9.00012 14.4951C8.53987 14.4951 8.16675 14.8682 8.16675 15.3285C8.16675 15.7887 8.53988 16.1618 9.00012 16.1618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M9.00012 6.16178C9.46037 6.16178 9.83337 5.78869 9.83337 5.32845C9.83337 4.86822 9.46037 4.49512 9.00012 4.49512C8.53987 4.49512 8.16675 4.86822 8.16675 5.32845C8.16675 5.78869 8.53987 6.16178 9.00012 6.16178Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M6.50009 16.1618C6.96032 16.1618 7.33341 15.7887 7.33341 15.3285C7.33341 14.8682 6.96032 14.4951 6.50009 14.4951C6.03985 14.4951 5.66675 14.8682 5.66675 15.3285C5.66675 15.7887 6.03985 16.1618 6.50009 16.1618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M6.50009 6.16178C6.96032 6.16178 7.33341 5.78869 7.33341 5.32845C7.33341 4.86822 6.96032 4.49512 6.50009 4.49512C6.03985 4.49512 5.66675 4.86822 5.66675 5.32845C5.66675 5.78869 6.03985 6.16178 6.50009 6.16178Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M6.50009 8.66178C6.96032 8.66178 7.33341 8.28869 7.33341 7.82845C7.33341 7.36822 6.96032 6.99512 6.50009 6.99512C6.03985 6.99512 5.66675 7.36822 5.66675 7.82845C5.66675 8.28869 6.03985 8.66178 6.50009 8.66178Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M6.50009 13.6618C6.96032 13.6618 7.33341 13.2887 7.33341 12.8285C7.33341 12.3682 6.96032 11.9951 6.50009 11.9951C6.03985 11.9951 5.66675 12.3682 5.66675 12.8285C5.66675 13.2887 6.03985 13.6618 6.50009 13.6618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M4.00009 8.66178C4.46032 8.66178 4.83341 8.28869 4.83341 7.82845C4.83341 7.36822 4.46032 6.99512 4.00009 6.99512C3.53985 6.99512 3.16675 7.36822 3.16675 7.82845C3.16675 8.28869 3.53985 8.66178 4.00009 8.66178Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M4.00009 13.6618C4.46032 13.6618 4.83341 13.2887 4.83341 12.8285C4.83341 12.3682 4.46032 11.9951 4.00009 11.9951C3.53985 11.9951 3.16675 12.3682 3.16675 12.8285C3.16675 13.2887 3.53985 13.6618 4.00009 13.6618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M4.00009 11.1618C4.46032 11.1618 4.83341 10.7887 4.83341 10.3285C4.83341 9.86822 4.46032 9.49512 4.00009 9.49512C3.53985 9.49512 3.16675 9.86822 3.16675 10.3285C3.16675 10.7887 3.53985 11.1618 4.00009 11.1618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M1.50009 11.1618C1.96032 11.1618 2.33341 10.7887 2.33341 10.3285C2.33341 9.86822 1.96032 9.49512 1.50009 9.49512C1.03985 9.49512 0.666749 9.86822 0.666749 10.3285C0.666749 10.7887 1.03985 11.1618 1.50009 11.1618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M18.1668 16.1618C18.627 16.1618 19 15.7887 19 15.3285C19 14.8682 18.627 14.4951 18.1668 14.4951C17.7065 14.4951 17.3334 14.8682 17.3334 15.3285C17.3334 15.7887 17.7065 16.1618 18.1668 16.1618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M18.1668 6.16178C18.627 6.16178 19 5.78869 19 5.32845C19 4.86822 18.627 4.49512 18.1668 4.49512C17.7065 4.49512 17.3334 4.86822 17.3334 5.32845C17.3334 5.78869 17.7065 6.16178 18.1668 6.16178Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M15.6667 16.1618C16.127 16.1618 16.5 15.7887 16.5 15.3285C16.5 14.8682 16.127 14.4951 15.6667 14.4951C15.2065 14.4951 14.8334 14.8682 14.8334 15.3285C14.8334 15.7887 15.2065 16.1618 15.6667 16.1618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M15.6667 6.16178C16.1269 6.16178 16.5 5.78869 16.5 5.32845C16.5 4.86822 16.1269 4.49512 15.6667 4.49512C15.2065 4.49512 14.8334 4.86822 14.8334 5.32845C14.8334 5.78869 15.2065 6.16178 15.6667 6.16178Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M15.6667 8.66178C16.127 8.66178 16.5 8.28869 16.5 7.82845C16.5 7.36822 16.1269 6.99512 15.6667 6.99512C15.2065 6.99512 14.8334 7.36822 14.8334 7.82845C14.8334 8.28869 15.2065 8.66178 15.6667 8.66178Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M15.6667 13.6618C16.127 13.6618 16.5 13.2887 16.5 12.8285C16.5 12.3682 16.127 11.9951 15.6667 11.9951C15.2065 11.9951 14.8334 12.3682 14.8334 12.8285C14.8334 13.2887 15.2065 13.6618 15.6667 13.6618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M13.1667 8.66178C13.6269 8.66178 14 8.28869 14 7.82845C14 7.36822 13.6269 6.99512 13.1667 6.99512C12.7065 6.99512 12.3334 7.36822 12.3334 7.82845C12.3334 8.28869 12.7065 8.66178 13.1667 8.66178Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M13.1667 13.6618C13.627 13.6618 14 13.2887 14 12.8285C14 12.3682 13.627 11.9951 13.1667 11.9951C12.7065 11.9951 12.3334 12.3682 12.3334 12.8285C12.3334 13.2887 12.7065 13.6618 13.1667 13.6618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M13.1667 11.1618C13.627 11.1618 14 10.7887 14 10.3285C14 9.86822 13.6269 9.49512 13.1667 9.49512C12.7065 9.49512 12.3334 9.86822 12.3334 10.3285C12.3334 10.7887 12.7065 11.1618 13.1667 11.1618Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M10.6667 11.1618C11.127 11.1618 11.5 10.7887 11.5 10.3285C11.5 9.86822 11.127 9.49512 10.6667 9.49512C10.2065 9.49512 9.83337 9.86822 9.83337 10.3285C9.83337 10.7887 10.2065 11.1618 10.6667 11.1618Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div>Previous</div>
                            </div>
                            <div className="slider-arrow is-alternate is-next">
                              <div>Next</div>
                              <div className="slider-arrow-icon">
                                <div className="icon-embed-xsmall w-embed">
                                  <svg
                                    currentwidth=" 100%"
                                    currentheight=" 100%"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.6666 15.6667C10.2064 15.6667 9.83337 15.2936 9.83337 14.8333C9.83337 14.3731 10.2064 14 10.6666 14C11.1269 14 11.5 14.3731 11.5 14.8333C11.5 15.2936 11.1269 15.6667 10.6666 15.6667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M10.6666 5.66666C10.2064 5.66666 9.83337 5.29357 9.83337 4.83334C9.83337 4.3731 10.2064 4 10.6666 4C11.1269 4 11.5 4.3731 11.5 4.83334C11.5 5.29357 11.1269 5.66666 10.6666 5.66666Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M13.1667 15.6667C12.7064 15.6667 12.3333 15.2936 12.3333 14.8333C12.3333 14.3731 12.7064 14 13.1667 14C13.6269 14 14 14.3731 14 14.8333C14 15.2936 13.6269 15.6667 13.1667 15.6667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M13.1667 5.66666C12.7064 5.66666 12.3333 5.29357 12.3333 4.83334C12.3333 4.3731 12.7064 4 13.1667 4C13.6269 4 14 4.3731 14 4.83334C14 5.29357 13.6269 5.66666 13.1667 5.66666Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M13.1667 8.16666C12.7064 8.16666 12.3333 7.79358 12.3333 7.33334C12.3333 6.8731 12.7064 6.5 13.1667 6.5C13.6269 6.5 14 6.8731 14 7.33334C14 7.79358 13.6269 8.16666 13.1667 8.16666Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M13.1667 13.1667C12.7064 13.1667 12.3333 12.7936 12.3333 12.3333C12.3333 11.8731 12.7064 11.5 13.1667 11.5C13.6269 11.5 14 11.8731 14 12.3333C14 12.7936 13.6269 13.1667 13.1667 13.1667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M15.6667 8.16666C15.2064 8.16666 14.8333 7.79358 14.8333 7.33334C14.8333 6.8731 15.2064 6.5 15.6667 6.5C16.1269 6.5 16.5 6.8731 16.5 7.33334C16.5 7.79358 16.1269 8.16666 15.6667 8.16666Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M15.6667 13.1667C15.2064 13.1667 14.8333 12.7936 14.8333 12.3333C14.8333 11.8731 15.2064 11.5 15.6667 11.5C16.1269 11.5 16.5 11.8731 16.5 12.3333C16.5 12.7936 16.1269 13.1667 15.6667 13.1667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M15.6667 10.6667C15.2064 10.6667 14.8333 10.2936 14.8333 9.83334C14.8333 9.3731 15.2064 9 15.6667 9C16.1269 9 16.5 9.3731 16.5 9.83334C16.5 10.2936 16.1269 10.6667 15.6667 10.6667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M18.1667 10.6667C17.7064 10.6667 17.3333 10.2936 17.3333 9.83334C17.3333 9.3731 17.7064 9 18.1667 9C18.6269 9 19 9.3731 19 9.83334C19 10.2936 18.6269 10.6667 18.1667 10.6667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M1.5 15.6667C1.03975 15.6667 0.666748 15.2936 0.666748 14.8333C0.666748 14.3731 1.03975 14 1.5 14C1.96025 14 2.33337 14.3731 2.33337 14.8333C2.33337 15.2936 1.96025 15.6667 1.5 15.6667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M1.5 5.66666C1.03975 5.66666 0.666748 5.29357 0.666748 4.83334C0.666749 4.3731 1.03975 4 1.5 4C1.96025 4 2.33337 4.3731 2.33337 4.83334C2.33337 5.29357 1.96025 5.66666 1.5 5.66666Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M4.00004 15.6667C3.5398 15.6667 3.16671 15.2936 3.16671 14.8333C3.16671 14.3731 3.5398 14 4.00004 14C4.46027 14 4.83337 14.3731 4.83337 14.8333C4.83337 15.2936 4.46027 15.6667 4.00004 15.6667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M4.00004 5.66666C3.5398 5.66666 3.16671 5.29357 3.16671 4.83334C3.16671 4.3731 3.5398 4 4.00004 4C4.46027 4 4.83337 4.3731 4.83337 4.83334C4.83337 5.29357 4.46027 5.66666 4.00004 5.66666Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M4.00004 8.16666C3.5398 8.16666 3.16671 7.79358 3.16671 7.33334C3.16671 6.8731 3.5398 6.5 4.00004 6.5C4.46027 6.5 4.83337 6.8731 4.83337 7.33334C4.83337 7.79358 4.46027 8.16666 4.00004 8.16666Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M4.00004 13.1667C3.5398 13.1667 3.16671 12.7936 3.16671 12.3333C3.16671 11.8731 3.5398 11.5 4.00004 11.5C4.46027 11.5 4.83337 11.8731 4.83337 12.3333C4.83337 12.7936 4.46027 13.1667 4.00004 13.1667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M6.50004 8.16666C6.0398 8.16666 5.66671 7.79358 5.66671 7.33334C5.66671 6.8731 6.0398 6.5 6.50004 6.5C6.96027 6.5 7.33337 6.8731 7.33337 7.33334C7.33337 7.79358 6.96027 8.16666 6.50004 8.16666Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M6.50004 13.1667C6.0398 13.1667 5.66671 12.7936 5.66671 12.3333C5.66671 11.8731 6.0398 11.5 6.50004 11.5C6.96027 11.5 7.33337 11.8731 7.33337 12.3333C7.33337 12.7936 6.96027 13.1667 6.50004 13.1667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M6.50004 10.6667C6.0398 10.6667 5.66671 10.2936 5.66671 9.83334C5.66671 9.3731 6.0398 9 6.50004 9C6.96027 9 7.33337 9.3731 7.33337 9.83334C7.33337 10.2936 6.96027 10.6667 6.50004 10.6667Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M9.00004 10.6667C8.5398 10.6667 8.16671 10.2936 8.16671 9.83334C8.16671 9.3731 8.5398 9 9.00004 9C9.46027 9 9.83337 9.3731 9.83337 9.83334C9.83337 10.2936 9.46027 10.6667 9.00004 10.6667Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="code-embed w-embed w-script">
                            <link
                              rel="stylesheet"
                              href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
                            />
                            <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-tiles_component">
                    <div className="bg-tiles_list">
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c08157bdcc68de8e31c64_Square%20180x180%20-%20White%20Blocks.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot is-alternate"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c06a4c46c2223ffa78632_Square%20180x180%20-%20White%20Blocks%20-%201.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot is-alternate"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c08157bdcc68de8e31c64_Square%20180x180%20-%20White%20Blocks.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot is-alternate"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c08157bdcc68de8e31c64_Square%20180x180%20-%20White%20Blocks.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot is-alternate"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c06a4c46c2223ffa78632_Square%20180x180%20-%20White%20Blocks%20-%201.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot is-alternate"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c08157bdcc68de8e31c64_Square%20180x180%20-%20White%20Blocks.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c08157bdcc68de8e31c64_Square%20180x180%20-%20White%20Blocks.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot is-alternate"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c08157bdcc68de8e31c64_Square%20180x180%20-%20White%20Blocks.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot is-alternate"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c06a4c46c2223ffa78632_Square%20180x180%20-%20White%20Blocks%20-%201.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot is-alternate"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c08157bdcc68de8e31c64_Square%20180x180%20-%20White%20Blocks.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot is-alternate"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c08157bdcc68de8e31c64_Square%20180x180%20-%20White%20Blocks.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot is-alternate"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c06a4c46c2223ffa78632_Square%20180x180%20-%20White%20Blocks%20-%201.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c06a4c46c2223ffa78632_Square%20180x180%20-%20White%20Blocks%20-%201.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot is-alternate"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c08157bdcc68de8e31c64_Square%20180x180%20-%20White%20Blocks.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot is-alternate"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c08157bdcc68de8e31c64_Square%20180x180%20-%20White%20Blocks.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot is-alternate"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c06a4c46c2223ffa78632_Square%20180x180%20-%20White%20Blocks%20-%201.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot is-alternate"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c08157bdcc68de8e31c64_Square%20180x180%20-%20White%20Blocks.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot is-alternate"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c08157bdcc68de8e31c64_Square%20180x180%20-%20White%20Blocks.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c06a4c46c2223ffa78632_Square%20180x180%20-%20White%20Blocks%20-%201.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c06a4c46c2223ffa78632_Square%20180x180%20-%20White%20Blocks%20-%201.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c06a4c46c2223ffa78632_Square%20180x180%20-%20White%20Blocks%20-%201.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c06a4c46c2223ffa78632_Square%20180x180%20-%20White%20Blocks%20-%201.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c06a4c46c2223ffa78632_Square%20180x180%20-%20White%20Blocks%20-%201.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper is-alternate">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685c06a4c46c2223ffa78632_Square%20180x180%20-%20White%20Blocks%20-%201.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_ray_down is-1 is-alternate"></div>
                      <div className="bg-tiles_ray_down is-2 is-alternate"></div>
                      <div className="bg-tiles_ray_down is-3 is-alternate"></div>
                      <div className="bg-tiles_ray_up is-1 is-alternate"></div>
                      <div className="bg-tiles_ray_up is-2 is-alternate"></div>
                      <div className="bg-tiles_ray_left is-1 is-alternate"></div>
                      <div className="bg-tiles_ray_left is-2 is-alternate"></div>
                      <div className="bg-tiles_ray_right is-1 is-alternate"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="faq" className="section_faq">
            <div className="padding-global">
              <div className="container-large">
                <div className="faq_wrapper">
                  <div className="container-regular">
                    <div className="padding-section-medium">
                      <div className="faq_component">
                        <div className="text-align-center">
                          <div className="align-center max-width-xlarge">
                            <div slide-in="" className="tag">
                              FAQs
                            </div>
                            <div className="spacer-xsmall"></div>
                            <h2 slide-in="" className="heading-style-h2">
                              <span className="text-gradient-blue">
                                Have Questions?
                              </span>
                              <span className="text-gradient-grey">
                                <br />
                                Here&#x27;s what we hear often
                              </span>
                            </h2>
                          </div>
                        </div>
                        <div className="spacer-xlarge"></div>
                        <div className=" align-center">
                          <div
                            fs-accordion-single="true"
                            fs-accordion-element="group"
                            fs-accordion-initial="none"
                            className="w-layout-grid faq_list"
                          >
                            <div className="component_code w-embed w-script"></div>
                            <div
                              fs-accordion-element="accordion"
                              slide-in=""
                              className="faq_item"
                            >
                              <div
                                aria-expanded="false"
                                fs-accordion-element="trigger"
                                tabIndex="0"
                                role="button"
                                className="faq_question"
                              >
                                <div className="faq_question-content">
                                  <h3 className="text-size-large">
                                    What is a Data Fabric / Data Pipeline
                                    Management Platform?
                                    <br />
                                  </h3>
                                  <div className="faq_icon-wrappper">
                                    <div
                                      fs-accordion-element="arrow"
                                      className="faq_icon"
                                    >
                                      <div className="faq_icon_line-horizontal"></div>
                                      <div className="faq_icon_line-vertical"></div>
                                    </div>
                                  </div>
                                </div>
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ecbe5f1ce4bbd10bbcf1c9_Question.avif"
                                  loading="lazy"
                                  sizes="(max-width: 1260px) 100vw, 1260px"
                                  srcSet="
                                  https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ecbe5f1ce4bbd10bbcf1c9_Question-p-500.avif  500w,
                                  https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ecbe5f1ce4bbd10bbcf1c9_Question-p-800.avif  800w,
                                  https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ecbe5f1ce4bbd10bbcf1c9_Question.avif       1260w
                                "
                                  alt=""
                                  className="faq_question-background"
                                />
                              </div>
                              <div
                                fs-accordion-element="content"
                                className="faq_answer"
                              >
                                <div className="spacer-small"></div>
                                <p className="text-color-secondary">
                                  DPM platforms are evaluated by how many
                                  sources and destinations they can manage and
                                  to what degree they can optimize the volume of
                                  data being orchestrated through them.
                                </p>
                                <div className="spacer-small"></div>
                                <div className="faq_gradient"></div>
                              </div>
                            </div>
                            <div
                              fs-accordion-element="accordion"
                              slide-in=""
                              className="faq_item"
                            >
                              <div
                                aria-expanded="false"
                                fs-accordion-element="trigger"
                                tabIndex="0"
                                role="button"
                                className="faq_question"
                              >
                                <div className="faq_question-content">
                                  <h3 className="text-size-large">
                                    What makes DataBahn different from
                                    traditional DPM tools and platforms?
                                    <br />
                                  </h3>
                                  <div className="faq_icon-wrappper">
                                    <div
                                      fs-accordion-element="arrow"
                                      className="faq_icon"
                                    >
                                      <div className="faq_icon_line-horizontal"></div>
                                      <div className="faq_icon_line-vertical"></div>
                                    </div>
                                  </div>
                                </div>
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ecbe5f1ce4bbd10bbcf1c9_Question.avif"
                                  loading="lazy"
                                  sizes="(max-width: 1260px) 100vw, 1260px"
                                  srcSet="
                                  https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ecbe5f1ce4bbd10bbcf1c9_Question-p-500.avif  500w,
                                  https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ecbe5f1ce4bbd10bbcf1c9_Question-p-800.avif  800w,
                                  https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ecbe5f1ce4bbd10bbcf1c9_Question.avif       1260w
                                "
                                  alt=""
                                  className="faq_question-background"
                                />
                              </div>
                              <div
                                fs-accordion-element="content"
                                className="faq_answer"
                              >
                                <div className="spacer-small"></div>
                                <p className="text-color-secondary">
                                  DataBahn goes beyond being a data pipeline by
                                  delivering a full-stack data management and AI
                                  transformation solution. We are the leading
                                  DPM solution (maximum number of integrations,
                                  most effective volume reductions, etc.) and
                                  also deliver AI-powered improvements that make
                                  us best-in-class.
                                  <br />
                                  <br />
                                  Our Agentic AI automates data engineering
                                  tasks by autonomously detecting log sources,
                                  creating pipelines, and parsing structured and
                                  unstructured data from standard and custom
                                  applications. It also tracks, monitors, and
                                  manages data flow, using backups and flagging
                                  any errors to ensure the data flows through.
                                  <br />
                                  <br />
                                  Our system collates, correlates, and tags the
                                  data to enable simplified access, and creates
                                  a database that enables custom AI agent or AI
                                  application development.
                                </p>
                                <div className="spacer-small"></div>
                                <div className="faq_gradient"></div>
                              </div>
                            </div>
                            <div
                              fs-accordion-element="accordion"
                              slide-in=""
                              className="faq_item"
                            >
                              <div
                                aria-expanded="false"
                                fs-accordion-element="trigger"
                                tabIndex="0"
                                role="button"
                                className="faq_question"
                              >
                                <div className="faq_question-content">
                                  <h3 className="text-size-large">
                                    Will the volume control and reduction of my
                                    tools reduce my tools&#x27; effectiveness?
                                    Is the volume reduction something I can
                                    control?
                                    <br />
                                  </h3>
                                  <div className="faq_icon-wrappper">
                                    <div
                                      fs-accordion-element="arrow"
                                      className="faq_icon"
                                    >
                                      <div className="faq_icon_line-horizontal"></div>
                                      <div className="faq_icon_line-vertical"></div>
                                    </div>
                                  </div>
                                </div>
                                <img
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ecbe5f1ce4bbd10bbcf1c9_Question.avif"
                                  loading="lazy"
                                  sizes="(max-width: 1260px) 100vw, 1260px"
                                  srcSet="
                                  https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ecbe5f1ce4bbd10bbcf1c9_Question-p-500.avif  500w,
                                  https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ecbe5f1ce4bbd10bbcf1c9_Question-p-800.avif  800w,
                                  https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ecbe5f1ce4bbd10bbcf1c9_Question.avif       1260w
                                "
                                  alt=""
                                  className="faq_question-background"
                                />
                              </div>
                              <div
                                fs-accordion-element="content"
                                className="faq_answer"
                              >
                                <div className="spacer-small"></div>
                                <p className="text-color-secondary">
                                  Our volume reduction functionality is
                                  completely under the control of our users.
                                  There are two modules - a library of volume
                                  reduction rules that will reduce SIEM and
                                  observability data.
                                  <br />
                                  Some of these rules are absolutely guaranteed
                                  not to impact their functioning (data
                                  deduplication, for example) while others are
                                  based on our collective experience of being
                                  less relevant or useful.
                                  <br />
                                  <br />
                                  Users can absolutely control which data goes
                                  where, and opt to keep sending those volumes
                                  to their SIEM or Observability solution.
                                </p>
                                <div className="spacer-small"></div>
                                <div className="faq_gradient"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-tiles_component">
                    <div className="bg-tiles_list">
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_ray_down is-1"></div>
                      <div className="bg-tiles_ray_down is-2"></div>
                      <div className="bg-tiles_ray_down is-3"></div>
                      <div className="bg-tiles_ray_up is-1"></div>
                      <div className="bg-tiles_ray_up is-2"></div>
                      <div className="bg-tiles_ray_left is-1"></div>
                      <div className="bg-tiles_ray_left is-2"></div>
                      <div className="bg-tiles_ray_right is-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="cta" className="section_form">
            <div className="padding-global">
              <div id="CTA-section" className="container-large">
                <div className="cta_wrapper">
                  <div className="padding-section-medium">
                    <div className="form_content">
                      <div className="text-align-center">
                        <div className="max-width-large align-center">
                          <h2
                            slide-in=""
                            className="heading-style-h2 text-color-primary"
                          >
                            <span className="text-gradient-grey">
                              Ready to accelerate towards{" "}
                            </span>
                            <span className="text-gradient-blue">
                              FinTech Solution.
                            </span>
                          </h2>
                          <div className="spacer-small"></div>
                        </div>
                      </div>
                      <div
                        slide-in=""
                        className="max-width-xsmall align-center"
                      >
                        <div className="cta_subheading_border"></div>
                        <div className="cta_subheading">
                          <div className="text-color-tertiary">
                            Don't be Shy, Just say Hi.
                          </div>
                        </div>
                        <div className="cta_subheading_border"></div>
                      </div>
                      <div className="spacer-large"></div>
                      <div
                        className="navbar_menu-buttons"
                        style={{ justifyContent: "center" }}
                      >
                        <div className="navbar_button is-base">
                          <a
                            data-wf--button-primary--variant="base"
                            href="/book-a-demo"
                            className="button-primary w-inline-block"
                          >
                            <div className="button_content">
                              <div className="text-size-regular">
                                Get in Touch
                              </div>
                              <div className="arrow">
                                <div className="icon-embed-custom1 w-embed">
                                  <svg
                                    className="arrow_svg"
                                    currentwidth=" 100%"
                                    currentheight=" 100%"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.6666 15.6667C10.2064 15.6667 9.83337 15.2936 9.83337 14.8333C9.83337 14.3731 10.2064 14 10.6666 14C11.1269 14 11.5 14.3731 11.5 14.8333C11.5 15.2936 11.1269 15.6667 10.6666 15.6667Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M10.6666 5.66666C10.2064 5.66666 9.83337 5.29357 9.83337 4.83334C9.83337 4.3731 10.2064 4 10.6666 4C11.1269 4 11.5 4.3731 11.5 4.83334C11.5 5.29357 11.1269 5.66666 10.6666 5.66666Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M13.1667 15.6667C12.7064 15.6667 12.3333 15.2936 12.3333 14.8333C12.3333 14.3731 12.7064 14 13.1667 14C13.6269 14 14 14.3731 14 14.8333C14 15.2936 13.6269 15.6667 13.1667 15.6667Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M13.1667 5.66666C12.7064 5.66666 12.3333 5.29357 12.3333 4.83334C12.3333 4.3731 12.7064 4 13.1667 4C13.6269 4 14 4.3731 14 4.83334C14 5.29357 13.6269 5.66666 13.1667 5.66666Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M13.1667 8.16666C12.7064 8.16666 12.3333 7.79358 12.3333 7.33334C12.3333 6.8731 12.7064 6.5 13.1667 6.5C13.6269 6.5 14 6.8731 14 7.33334C14 7.79358 13.6269 8.16666 13.1667 8.16666Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M13.1667 13.1667C12.7064 13.1667 12.3333 12.7936 12.3333 12.3333C12.3333 11.8731 12.7064 11.5 13.1667 11.5C13.6269 11.5 14 11.8731 14 12.3333C14 12.7936 13.6269 13.1667 13.1667 13.1667Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M15.6667 8.16666C15.2064 8.16666 14.8333 7.79358 14.8333 7.33334C14.8333 6.8731 15.2064 6.5 15.6667 6.5C16.1269 6.5 16.5 6.8731 16.5 7.33334C16.5 7.79358 16.1269 8.16666 15.6667 8.16666Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M15.6667 13.1667C15.2064 13.1667 14.8333 12.7936 14.8333 12.3333C14.8333 11.8731 15.2064 11.5 15.6667 11.5C16.1269 11.5 16.5 11.8731 16.5 12.3333C16.5 12.7936 16.1269 13.1667 15.6667 13.1667Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M15.6667 10.6667C15.2064 10.6667 14.8333 10.2936 14.8333 9.83334C14.8333 9.3731 15.2064 9 15.6667 9C16.1269 9 16.5 9.3731 16.5 9.83334C16.5 10.2936 16.1269 10.6667 15.6667 10.6667Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M18.1667 10.6667C17.7064 10.6667 17.3333 10.2936 17.3333 9.83334C17.3333 9.3731 17.7064 9 18.1667 9C18.6269 9 19 9.3731 19 9.83334C19 10.2936 18.6269 10.6667 18.1667 10.6667Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M1.5 15.6667C1.03975 15.6667 0.666748 15.2936 0.666748 14.8333C0.666748 14.3731 1.03975 14 1.5 14C1.96025 14 2.33337 14.3731 2.33337 14.8333C2.33337 15.2936 1.96025 15.6667 1.5 15.6667Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M1.5 5.66666C1.03975 5.66666 0.666748 5.29357 0.666748 4.83334C0.666749 4.3731 1.03975 4 1.5 4C1.96025 4 2.33337 4.3731 2.33337 4.83334C2.33337 5.29357 1.96025 5.66666 1.5 5.66666Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M4.00004 15.6667C3.5398 15.6667 3.16671 15.2936 3.16671 14.8333C3.16671 14.3731 3.5398 14 4.00004 14C4.46027 14 4.83337 14.3731 4.83337 14.8333C4.83337 15.2936 4.46027 15.6667 4.00004 15.6667Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M4.00004 5.66666C3.5398 5.66666 3.16671 5.29357 3.16671 4.83334C3.16671 4.3731 3.5398 4 4.00004 4C4.46027 4 4.83337 4.3731 4.83337 4.83334C4.83337 5.29357 4.46027 5.66666 4.00004 5.66666Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M4.00004 8.16666C3.5398 8.16666 3.16671 7.79358 3.16671 7.33334C3.16671 6.8731 3.5398 6.5 4.00004 6.5C4.46027 6.5 4.83337 6.8731 4.83337 7.33334C4.83337 7.79358 4.46027 8.16666 4.00004 8.16666Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M4.00004 13.1667C3.5398 13.1667 3.16671 12.7936 3.16671 12.3333C3.16671 11.8731 3.5398 11.5 4.00004 11.5C4.46027 11.5 4.83337 11.8731 4.83337 12.3333C4.83337 12.7936 4.46027 13.1667 4.00004 13.1667Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M6.50004 8.16666C6.0398 8.16666 5.66671 7.79358 5.66671 7.33334C5.66671 6.8731 6.0398 6.5 6.50004 6.5C6.96027 6.5 7.33337 6.8731 7.33337 7.33334C7.33337 7.79358 6.96027 8.16666 6.50004 8.16666Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M6.50004 13.1667C6.0398 13.1667 5.66671 12.7936 5.66671 12.3333C5.66671 11.8731 6.0398 11.5 6.50004 11.5C6.96027 11.5 7.33337 11.8731 7.33337 12.3333C7.33337 12.7936 6.96027 13.1667 6.50004 13.1667Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M6.50004 10.6667C6.0398 10.6667 5.66671 10.2936 5.66671 9.83334C5.66671 9.3731 6.0398 9 6.50004 9C6.96027 9 7.33337 9.3731 7.33337 9.83334C7.33337 10.2936 6.96027 10.6667 6.50004 10.6667Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M9.00004 10.6667C8.5398 10.6667 8.16671 10.2936 8.16671 9.83334C8.16671 9.3731 8.5398 9 9.00004 9C9.46027 9 9.83337 9.3731 9.83337 9.83334C9.83337 10.2936 9.46027 10.6667 9.00004 10.6667Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="button-primary_pattern"></div>
                            <div className="button-primary_border"></div>
                          </a>
                        </div>
                        <div className="navbar_button is-alternate">
                          <a
                            data-wf--button-secondary--variant="alternate"
                            href="/book-a-demo"
                            className="button-secondary w-variant-50b92dba-0048-4c60-e748-9428bdc750ca w-inline-block"
                          >
                            <div className="button-secondary_content w-variant-50b92dba-0048-4c60-e748-9428bdc750ca">
                              <div className="button_content">
                                <div className="text-size-regular text-gradient-blue-3">
                                  Get Started
                                </div>
                              </div>
                              <div className="button_glow"></div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-tiles_component">
                    <div className="bg-tiles_list">
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                        <div className="bg-tiles_dot"></div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_item">
                        <div className="bg-tiles_wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                            loading="lazy"
                            alt=""
                            className="bg-tiles_image"
                          />
                        </div>
                      </div>
                      <div className="bg-tiles_ray_down is-1"></div>
                      <div className="bg-tiles_ray_down is-2"></div>
                      <div className="bg-tiles_ray_down is-3"></div>
                      <div className="bg-tiles_ray_up is-1"></div>
                      <div className="bg-tiles_ray_up is-2"></div>
                      <div className="bg-tiles_ray_left is-1"></div>
                      <div className="bg-tiles_ray_left is-2"></div>
                      <div className="bg-tiles_ray_right is-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cta_background-gradient"></div>
          </section>
        </main>

        <footer className="footer_component">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-vertical padding-xxlarge">
                <div className="footer_wrapper">
                  <div className="footer_top-wrapper">
                    <div className="max-width-xsmall">
                      <div className="footer_left-wrapper">
                        <a href="#" className="footer_logo-link w-inline-block">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ebaa6ba00e7b767d1db02e_logo.avif"
                            alt=""
                            loading="lazy"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            srcSet="
                          https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ebaa6ba00e7b767d1db02e_logo-p-500.png 500w,
                          https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ebaa6ba00e7b767d1db02e_logo.avif 1024w
                        "
                            className="footer_logo"
                          />
                        </a>

                        <div className="spacer-small"></div>

                        <div className="footer_details-wrapper">
                          <div className="text-color-tertiary">
                            Our AI-native data pipeline management solution
                            automates, simplifies, and streamlines data so you
                            have the right insights at the right time
                            <br />
                            <br />
                            <br />
                            5700 Tennyson Parkway,
                            <br />
                            Plano, TX 75024, United States
                          </div>
                        </div>

                        <div className="spacer-small"></div>

                        <a
                          href="https://www.linkedin.com/company/databahn-ai/"
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
                        </a>

                        <div className="spacer-large"></div>

                        <div className="footer_certifications_list">
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/684ab6e81354be003468dbb7_Badge.svg"
                            alt=""
                            loading="lazy"
                            className="footer_certifications_item"
                          />
                          <img
                            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/684ab6f15ff6cc180626f80d_Badge-1.svg"
                            alt=""
                            loading="lazy"
                            className="footer_certifications_item"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Right Menu Section */}
                    <div className="footer_menu-wrapper">
                      <div>
                        <div className="footer_link-list">
                          <a href="/platform" className="footer_label">
                            Platform
                          </a>
                          <a href="/products" className="footer_label">
                            Products
                          </a>
                        </div>

                        <div className="spacer-xsmall"></div>

                        <div className="footer_link-list">
                          <a
                            className="text-style-link text-weight-semibold text-color-primary"
                            href="/products/smart-edge"
                          >
                            Smart Edge
                          </a>
                          <a
                            className="text-style-link text-weight-semibold text-color-primary"
                            href="/products/highway"
                          >
                            Highway
                          </a>
                          <a
                            className="text-style-link text-weight-semibold text-color-primary"
                            href="/products/cruz-ai-agent-for-security-data"
                          >
                            Cruz
                          </a>
                          <a
                            className="text-style-link text-weight-semibold text-color-primary"
                            href="/products/reef-ai-security-insights-layer"
                          >
                            Reef
                          </a>
                        </div>
                      </div>

                      <div>
                        <div className="text-size-small text-weight-medium text-style-allcaps">
                          Data Fabrics
                        </div>
                        <div className="spacer-xsmall"></div>

                        <div className="footer_link-list">
                          <a
                            className="text-style-link text-weight-semibold text-color-primary"
                            href="/data-fabrics/security-data-fabric"
                          >
                            Security Data Fabric
                          </a>
                        </div>
                      </div>

                      <div>
                        <a href="/usecases" className="footer_label">
                          Use cases
                        </a>
                        <div className="spacer-xsmall"></div>

                        <div className="footer_link-list">
                          <a
                            href="/use-cases/siem-cost-reduction"
                            className="text-style-link text-weight-semibold text-color-primary"
                          >
                            SIEM Cost Reduction
                          </a>
                          <a
                            href="/use-cases/siem-migration"
                            className="text-style-link text-weight-semibold text-color-primary"
                          >
                            SIEM Migration
                          </a>
                          <a
                            href="/use-cases/siem-evaluation"
                            className="text-style-link text-weight-semibold text-color-primary"
                          >
                            SIEM Evaluation
                          </a>
                          <a
                            href="/use-cases/observability-optimization"
                            className="text-style-link text-weight-semibold text-color-primary"
                          >
                            Observability Optimization
                          </a>
                          <a
                            href="/use-cases/iot-ot-integration"
                            className="text-style-link text-weight-semibold text-color-primary"
                          >
                            IoT/OT Integration
                          </a>
                        </div>
                      </div>

                      <div>
                        <div className="text-size-small text-weight-medium text-style-allcaps">
                          Integrations
                        </div>
                        <div className="spacer-xsmall"></div>

                        <div className="footer_link-list">
                          <a
                            href="/integrations/google-secops"
                            className="text-style-link text-weight-semibold text-color-primary"
                          >
                            Google SecOps
                          </a>
                          <a
                            href="/integrations/microsoft-sentinel"
                            className="text-style-link text-weight-semibold text-color-primary"
                          >
                            Microsoft Sentinel
                          </a>
                          <a
                            href="/integrations/amazon-security-lake"
                            className="text-style-link text-weight-semibold text-color-primary"
                          >
                            Amazon Security Lake
                          </a>
                          <a
                            href="/integrations/splunk"
                            className="text-style-link text-weight-semibold text-color-primary"
                          >
                            Splunk
                          </a>
                          <a
                            href="https://cdn.prod.website-files.com/xxx.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="text-style-link text-weight-semibold text-color-primary"
                          >
                            IBM QRadar
                          </a>
                        </div>
                      </div>

                      <div>
                        <div className="text-size-small text-weight-medium text-style-allcaps">
                          Resources
                        </div>
                        <div className="spacer-xsmall"></div>

                        <div className="footer_link-list">
                          <a
                            href="/case-studies"
                            className="text-style-link text-weight-semibold text-color-primary"
                          >
                            Case Studies
                          </a>
                          <a
                            href="/blog"
                            className="text-style-link text-weight-semibold text-color-primary"
                          >
                            Blog
                          </a>
                          <a
                            href="/solution-briefs"
                            className="text-style-link text-weight-semibold text-color-primary"
                          >
                            Solution Briefs
                          </a>
                          <a
                            href="/webinars"
                            className="text-style-link text-weight-semibold text-color-primary"
                          >
                            Webinars
                          </a>
                          <a
                            href="/roi-calculator#calculator"
                            className="text-style-link text-weight-semibold text-color-primary"
                          >
                            ROI Calculator
                          </a>
                        </div>
                      </div>

                      <div>
                        <div className="text-size-small text-weight-medium text-style-allcaps">
                          Company
                        </div>
                        <div className="spacer-xsmall"></div>

                        <div className="footer_link-list">
                          <a
                            href="/about-us"
                            className="text-style-link text-weight-semibold text-color-primary"
                          >
                            About Us
                          </a>
                          <a
                            href="/leadership"
                            className="text-style-link text-weight-semibold text-color-primary"
                          >
                            Leadership
                          </a>
                          <a
                            href="/newsroom"
                            className="text-style-link text-weight-semibold text-color-primary"
                          >
                            Newsroom
                          </a>
                          <a
                            href="/partners"
                            className="text-style-link text-weight-semibold text-color-primary"
                          >
                            Partners
                          </a>
                          <a
                            href="/roi-calculator"
                            className="text-style-link text-weight-semibold text-color-primary"
                          >
                            Why Databahn
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="footer_bottom-wrapper">
                    <div className="text-color-tertiary text-size-regular">
                      Copyright ©{" "}
                      <span className="footer_credit-year">2025</span> DataBahn.
                      All rights reserved.
                    </div>

                    <div className="footer_legal-list">
                      <a
                        href="/legal/terms-of-service"
                        className="text-style-link"
                      >
                        Terms of Service
                      </a>
                      <a
                        href="/legal/privacy-policy"
                        className="text-style-link"
                      >
                        Privacy Policy
                      </a>
                      <a href="#" className="text-style-link">
                        Cookies Settings
                      </a>
                    </div>

                    <a
                      href="#"
                      className="footer_status_component w-inline-block"
                    >
                      <div className="footer_status_dot"></div>
                      <div className="text-size-small text-weight-semibold text-color-primary">
                        All Systems Operational
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
