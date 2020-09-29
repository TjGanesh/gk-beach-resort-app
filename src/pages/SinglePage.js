import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class SinglePage extends Component {
  constructor(props) {
    //  eslint-disable-next-line
    super(props);
    console.log(this.props.match.params.slug);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room found...</h3>
          <Link to="/" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section class="single-room">
          <div class="single-room-images">
            {images.map((item, index) => {
              return <img src={item} alt={index} alt={name} />;
            })}
          </div>
          <div class="single-room-info">
            <article class="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <artticle class="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "Breakfast provided"}</h6>
            </artticle>
          </div>
        </section>
        <section class="room-extras">
          {extras.map((item, index) => {
            return <li key={index}> -{item}</li>;
          })}
        </section>
      </>
    );
  }
}
