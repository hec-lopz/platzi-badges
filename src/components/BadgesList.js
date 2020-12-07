import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesList.css";
import { FaTwitter } from "react-icons/fa";
import Gravatar from "./Gravatar";

class BadgesList extends Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link to="/badges/new" className="btn btn-primary">
            Create a new badge
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unstyled BadgesList">
        {this.props.badges.map((badge) => {
          return (
            <li className="BadgesListItem" key={badge.id}>
              <Gravatar
                className="BadgesListItem__avatar"
                email={badge.email}
                alt=""
              />
              <div className="BadgeListItem__text-container">
                <p className="font-weight-bold">
                  {badge.firstName} {badge.lastName}
                </p>
                <p className="BadgeListItem__twitter">
                  <FaTwitter className="BadgeListItem__twitter-icon" />
                  {badge.twitter}
                </p>
                <p className="BadgeListItem__jobTitle">{badge.jobTitle}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
