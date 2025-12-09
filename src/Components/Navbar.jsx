import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="section_platform_header">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="platform_header_component">
                {/* TEXT SECTION */}
                <div className="text-align-center">
                  <div className="max-width-xlarge align-center">
                    {/* Tag */}
                    <div
                      slide-in-header=""
                      className="tag"
                      style={{
                        opacity: 1,
                        visibility: "inherit",
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      Data Pipeline MANAGEMENT Platform
                    </div>

                    <div className="spacer-1-25rem"></div>

                    {/* Heading */}
                    <h1
                      slide-in-header=""
                      style={{
                        opacity: 1,
                        visibility: "inherit",
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      <span className="text-gradient-grey">Platform that</span>
                      <span className="text-gradient-blue"> goes beyond</span>
                      <span className="text-gradient-grey">
                        {" "}
                        pipeline management
                      </span>
                    </h1>

                    <div className="spacer-xsmall"></div>

                    {/* Paragraph */}
                    <p
                      slide-in-header=""
                      className="text-size-medium"
                      style={{
                        opacity: 1,
                        visibility: "inherit",
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      Our unified data platform blends operational pipeline
                      orchestration with deep context and control—so you can
                      ingest, transform, and operationalize data across modern,
                      hybrid environments. More than just movement, it brings
                      meaning to enterprise data with built-in intelligence,
                      governance, and observability.
                    </p>
                  </div>
                </div>

                <div className="spacer-large"></div>

                {/* HERO IMAGE */}
                <div
                  slide-in-header=""
                  className="platform_header_video-wrapper"
                  style={{
                    opacity: 1,
                    visibility: "inherit",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <img
                    src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680eea2479d0f53c03bc612a_pleatform%20hero.avif"
                    loading="lazy"
                    sizes="(max-width: 3601px) 100vw, 3601px"
                    srcSet="
                    https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680eea2479d0f53c03bc612a_pleatform%20hero-p-500.avif 500w,
                    https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680eea2479d0f53c03bc612a_pleatform%20hero-p-800.avif 800w,
                    https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680eea2479d0f53c03bc612a_pleatform%20hero-p-1080.avif 1080w,
                    https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680eea2479d0f53c03bc612a_pleatform%20hero.avif 3601w
                  "
                    alt=""
                    className="platform_header_video"
                  />
                </div>

                <div className="spacer-large"></div>

                {/* BUTTON */}
                <div
                  slide-in=""
                  className="button-group is-center"
                  style={{
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  <a
                    data-wf--button-primary--variant="base"
                    href="#CTA-section"
                    className="button-primary w-inline-block"
                  >
                    <div className="button_content">
                      <div className="text-size-regular">Book a Demo</div>
                      <div className="arrow">
                        <div className="icon-embed-custom1 w-embed">
                          <svg
                            className="arrow_svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* SVG dots */}
                            <path
                              d="M10.6666 15.6667C10.2064 15.6667 9.83337 15.2936 9.83337 14.8333C9.83337 14.3731 10.2064 14 10.6666 14C11.1269 14 11.5 14.3731 11.5 14.8333C11.5 15.2936 11.1269 15.6667 10.6666 15.6667Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M10.6666 5.66666C10.2064 5.66666 9.83337 5.29357 9.83337 4.83334C9.83337 4.3731 10.2064 4 10.6666 4C11.1269 4 11.5 4.3731 11.5 4.83334C11.5 5.29357 11.1269 5.66666 10.6666 5.66666Z"
                              fill="currentColor"
                            ></path>

                            {/* ...keeping all other SVG dot paths unchanged */}
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="button-primary_pattern"></div>
                    <div className="button-primary_border"></div>
                  </a>
                </div>

                {/* OPTIONAL STAR ANIMATION CONTAINER */}
                <div className="top-visual_stars-animation w-embed w-script"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section_platform_stats">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium padding-bottom">
              <div className="integrations_stats_component">
                <div className="text-align-center">
                  <div className="max-width-xlarge align-center">
                    <div className="max-width-large align-center">
                      <h2>
                        <span className="text-gradient-grey">
                          Our data footprint
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="spacer-large"></div>

                <div className="platform_stats_list">
                  {/* Item 1 */}
                  <div className="stats_item">
                    <div className="stats_item-content">
                      <div className="stats_number text-gradient-grey">
                        <span>1024</span>+
                      </div>
                      <div className="spacer-xlarge"></div>
                      <p className="text-size-medium">
                        Petabytes of data processed daily
                      </p>
                    </div>

                    <img
                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ffadce96578145506a1ae4_Card.avif"
                      loading="lazy"
                      alt=""
                      className="stats_item-background"
                    />

                    <div className="stats_glow"></div>
                    <div className="stats_border"></div>
                  </div>

                  {/* Item 2 */}
                  <div className="stats_item">
                    <div className="stats_item-content">
                      <div className="stats_number text-gradient-grey">
                        <span>50</span>%
                      </div>
                      <div className="spacer-xlarge"></div>
                      <p className="text-size-medium">
                        Average cost savings for enterprises
                      </p>
                    </div>

                    <img
                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ffb4f44d05ea2e6e79594d_Card.avif"
                      loading="lazy"
                      alt=""
                      className="stats_item-background"
                    />

                    <div className="stats_glow is-green"></div>
                    <div className="stats_border is-green"></div>
                  </div>

                  {/* Item 3 */}
                  <div className="stats_item">
                    <div className="stats_item-content">
                      <div className="stats_number text-gradient-grey">
                        <span>90</span>%
                      </div>
                      <div className="spacer-xlarge"></div>
                      <p className="text-size-medium">Faster insights</p>
                    </div>

                    <img
                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ffadce96578145506a1ae4_Card.avif"
                      loading="lazy"
                      alt=""
                      className="stats_item-background"
                    />

                    <div className="stats_glow"></div>
                    <div className="stats_border"></div>
                  </div>

                  {/* Item 4 */}
                  <div className="stats_item">
                    <div className="stats_item-content">
                      <div className="stats_number text-gradient-grey">
                        <span>99</span>%
                      </div>
                      <div className="spacer-xlarge"></div>
                      <p className="text-size-medium">
                        Improved visibility across your data
                      </p>
                    </div>

                    <img
                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/6804757fab8b6374760f917e_magenta.avif"
                      loading="lazy"
                      alt=""
                      className="stats_item-background"
                    />

                    <div className="stats_glow is-magenta"></div>
                    <div className="stats_border is-magenta"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <header className="section_header">
        <div className="background-border_wrapper">
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ff857be08695343437f37f_product_hero_left_Box.avif"
            alt=""
            className="background-border_left"
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ff857b97f89d74677594e7_product_hero_right_box.avif"
            alt=""
            className="backhground_border_right"
          />
        </div>

        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="header_component">
                <div className="w-layout-grid header_content">
                  {/* LEFT SIDE CONTENT */}
                  <div className="header_content-left">
                    <div className="tag">
                      EDGE&nbsp;TELEMETRY&nbsp;COLLECTOR
                    </div>

                    <div className="spacer-1-25rem"></div>

                    <h1 className="heading-style-h2">
                      <span className="text-gradient-grey">
                        Connecting data nodes smartly
                      </span>
                    </h1>

                    <div className="spacer-xsmall"></div>

                    <p className="text-size-medium">
                      When data whispers, we listen. Edge networks harvest{" "}
                      <br />
                      insights from digital frontiers
                    </p>

                    <div className="spacer-large"></div>

                    <div className="button-group">
                      <a
                        href="/book-a-demo"
                        className="button-primary w-inline-block"
                      >
                        <div className="button_content">
                          <div className="text-size-regular">Book a Demo</div>
                          <div className="arrow">
                            <div className="icon-embed-custom1 w-embed">
                              <svg
                                className="arrow_svg"
                                width="100%"
                                height="100%"
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
                                  d="M9.00004 10.6667C8.5398 10.6667 8.16671 10.2936 8.16671 9.83334C8.16671 9.3731 8.5398 9 9.00004 9C9.46027 9 9.83337 9.3731 9.83337 9.83334C9.83337 10.2936 9.46027 10.6667 9.00004 10.6667Z"
                                  fill="currentColor"
                                  style={{ opacity: 0.062 }}
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

                  {/* RIGHT IMAGE */}
                  <div className="header_image-wrapper">
                    <img
                      loading="eager"
                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/686f7b3d96a72698818289ba_smart-edge.avif"
                      alt=""
                      className="feature_image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section_about_story">
        <div className="about_story_background-wrapper">
          <img
            sizes="(max-width: 2160px) 100vw, 2160px"
            srcSet="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/6860ec4bb5a054ab91f3cc37_Showcase%20Section-p-500.avif 500w, https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/6860ec4bb5a054ab91f3cc37_Showcase%20Section-p-800.avif 800w, https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/6860ec4bb5a054ab91f3cc37_Showcase%20Section-p-1080.avif 1080w, https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/6860ec4bb5a054ab91f3cc37_Showcase%20Section.avif 2160w"
            src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/6860ec4bb5a054ab91f3cc37_Showcase%20Section.avif"
            alt=""
            loading="lazy"
            className="about_story_background"
          />
        </div>
        <div className="padding-global">
          <div className="container-small">
            <div className="padding-section-medium">
              <div className="about_story_component">
                <div className="text-align-center">
                  <h2
                    slide-in=""
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      opacity: 1,
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    <span className="text-gradient-grey">The Origin Story</span>
                  </h2>
                  <div className="spacer-large"></div>
                  <p
                    slide-in=""
                    className="text-size-medium"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      opacity: 1,
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    We didn’t start with a product. We started with a
                    frustration. Members of our founding team spent years inside
                    some of the most advanced security platforms in the world.
                    We saw how hard it was to get clean, reliable data into the
                    right tools. We watched teams waste time firefighting
                    pipelines, managing duct-tape connectors, and paying too
                    much for data they barely used. It wasn’t a visibility
                    issue. It was an architecture issue.
                  </p>
                  <div className="spacer-large"></div>
                  <div
                    slide-in=""
                    className="heading-style-h5"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      opacity: 1,
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    <span className="text-gradient-grey">So we built</span>{" "}
                    <span className="text-gradient-blue-3">DataBahn.</span>
                  </div>
                  <div className="spacer-large"></div>
                  <p
                    slide-in=""
                    className="text-size-medium"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      opacity: 1,
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    A platform that does the hard stuff - ingestion, enrichment,
                    governance, AI readiness - without making you reinvent the
                    wheel. Something precise, fast, and built to last. Because
                    we’ve been in the seat. And we knew there had to be a better
                    way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
