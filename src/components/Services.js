import React, { Component } from "react";
import Title from "./Title";
import {
  FcCollaboration,
  FcBusinessman,
  FcGraduationCap,
  FcLandscape,
} from "react-icons/fc";

export default class Services extends Component {
  state = {
    services: [
      {
        logo: <FcCollaboration />,
        title: "Collabs",
        description:
          "More than a headless CMS, Contentful is the API-first content management platform to create, manage and publish content on any digital channel.",
      },
      {
        logo: <FcBusinessman />,
        title: "Business Meetups",
        description:
          "More than a headless CMS, Contentful is the API-first content management platform to create, manage and publish content on any digital channel.",
      },
      {
        logo: <FcGraduationCap />,
        title: "Educational Meetups",
        description:
          "More than a headless CMS, Contentful is the API-first content management platform to create, manage and publish content on any digital channel.",
      },
      {
        logo: <FcLandscape />,
        title: "Land Scaping",
        description:
          "More than a headless CMS, Contentful is the API-first content management platform to create, manage and publish content on any digital channel.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.logo}</span>
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
