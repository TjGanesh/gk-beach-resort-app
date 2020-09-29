import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { isLoading, featuredRooms: rooms } = this.context;

    let featured = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {isLoading ? <Loading /> : featured}
        </div>
      </section>
    );
  }
}
