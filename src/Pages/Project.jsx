import React from "react";
import {
  projectImg2,
  projectImg3,
  projectImg4,
  projectImg6,
  projectImg7,
  projectImg8,
  projectImg9,
  projectImg10,
  projectImg11,
  projectImg12,
} from "../Components/Image";

const Project = () => {
  return (
    <>
      <div className="background-border_wrapper">
        <img
          loading="lazy"
          alt=""
          className="background-border_left"
          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ff857be08695343437f37f_product_hero_left_Box.avif"
        />
        <img
          loading="lazy"
          alt=""
          className="backhground_border_right"
          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ff857b97f89d74677594e7_product_hero_right_box.avif"
        />
      </div>

      <section
        className="section_home_platform"
        style={{ overflow: "visible" }}
      >
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="home_platform_component">
                <div className="max-width-xlarge align-center">
                  <div className="text-align-center">
                    <h2 className="heading-style-h3">
                      <span className="text-gradient-grey">
                        A Gallery of Our{" "}
                      </span>
                      <span className="text-gradient-blue">
                        {" "}
                        Digital Milestones{" "}
                      </span>
                    </h2>
                    <div className="spacer-xsmall"></div>
                    <div>
                      <p className="text-size-large">
                        We deliver customized IT services designed to elevate
                        your brand and drive meaningful results.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="spacer-large"></div>
              </div>

              <div className="projectGrid">
                <div className="projectHeading">
                  <h6>
                    <span className="text-gradient-blue">Hudson Foods</span>
                  </h6>
                  <p>
                    The platform allows customers to explore restaurants, browse
                    menus, place orders, and enjoy a smooth checkout process
                    through a clean and intuitive interface.
                    <ul>
                      <li>Clean and modern UI using Bootstrap components</li>
                      <li>Restaurant and food menu listing layout</li>
                      <li>Easy navigation and structured content flow</li>
                      <li>
                        Fast-loading and lightweight frontend architecture
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="projectCard">
                  <img
                    src="https://shub-jeet.netlify.app/images/projectImg2.png"
                    alt=""
                  />
                  <img src={projectImg2} alt="" />
                  <img src={projectImg3} alt="" />
                  <img src={projectImg4} alt="" />
                </div>
              </div>
              <div className="projectGrid">
                <div className="projectHeading">
                  <h6>
                    <span className="text-gradient-blue">Basel Grocery.</span>
                  </h6>
                  <p>
                    The platform enables users to browse grocery products,
                    explore categories, and experience an organized online
                    shopping flow with a clean and modern design.
                    <ul>
                      <li>
                        Modern design suitable for real-world grocery platforms
                      </li>
                      <li>
                        Modern design suitable for real-world grocery platforms
                      </li>
                      <li>Simple navigation and user-friendly interface</li>
                      <li>
                        Fast-loading and lightweight frontend architecture
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="projectCard">
                  <img
                    src="https://shub-jeet.netlify.app/images/projectImg3.png"
                    alt=""
                  />
                  <img src={projectImg6} alt="" />
                  <img src={projectImg7} alt="" />
                  <img src={projectImg8} alt="" />
                </div>
              </div>
              <div className="projectGrid">
                <div className="projectHeading">
                  <h6>
                    <span className="text-gradient-blue">Pesco Fashion</span>
                  </h6>
                  <p>
                    The Online Fashion and Clothing eCommerce Website and
                    Application is a responsive digital platform designed to
                    deliver a stylish and seamless shopping experience. The
                    platform allows users to explore fashion collections, browse
                    clothing categories, and view product details through a
                    clean, modern, and visually appealing interface.
                    <ul>
                      <li>
                        Modern design suitable for real-world grocery platforms
                      </li>
                      <li>
                        Modern design suitable for real-world grocery platforms
                      </li>
                      <li>Simple navigation and user-friendly interface</li>
                      <li>
                        Fast-loading and lightweight frontend architecture
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="projectCard">
                  <img src={projectImg9} alt="" />
                  <img src={projectImg10} alt="" />
                  <img src={projectImg11} alt="" />
                  <img src={projectImg12} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
