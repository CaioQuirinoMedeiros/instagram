import React, { Component } from "react";
import moment from "moment";
import "moment/locale/pt-br";
import io from "socket.io-client";

import api from "../services/api";

import "./Feed.css";

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

class Feed extends Component {
  state = {
    feed: []
  };

  async componentDidMount() {
    this.registerToSocket();
    const response = await api.get("posts");

    this.setState({ feed: response.data });
  }

  registerToSocket = () => {
    const socket = io(process.env.REACT_APP_API_URL || "http://localhost:3333");

    socket.on("post", newPost => {
      this.setState({ feed: [newPost, ...this.state.feed] });
    });

    socket.on("like", likedPost => {
      this.setState({
        feed: this.state.feed.map(post =>
          post._id === likedPost._id ? likedPost : post
        )
      });
    });
  };

  handleLike = async id => {
    await api.post(`posts/${id}/like`);
  };

  render() {
    const { feed } = this.state;

    return (
      <section id="post-list">
        {feed.map(post => (
          <article key={post._id}>
            <header>
              <div className="user-info">
                <span>{post.author}</span>
                <span className="place">{post.place}</span>
              </div>

              <img src={more} alt="Mais" />
            </header>

            <img
              src={
                (process.env.REACT_APP_API_URL || "http://localhost:3333") +
                `/files/${post.image}`
              }
              alt=""
            />

            <footer>
              <div className="actions">
                <button type="button" onClick={() => this.handleLike(post._id)}>
                  <img src={like} alt="Like" />
                </button>
                <img src={comment} alt="Comment" />
                <img src={send} alt="Send" />
              </div>

              <strong>{post.likes} curtidas</strong>

              <p>
                {post.description} <span>{post.hashtags}</span>
              </p>

              <span>{moment(post.createdAt).fromNow()}</span>
            </footer>
          </article>
        ))}
      </section>
    );
  }
}

export default Feed;
