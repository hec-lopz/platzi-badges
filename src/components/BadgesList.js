import React, { Component } from "react";
import "./styles/BadgesList.css";
import { FaTwitter } from "react-icons/fa";

class BadgesList extends Component {
  render() {
    return (
      <ul className="list-unstyled BadgesList">
        {this.props.badges.map((badge) => {
          return (
            <li className="BadgesListItem" key={badge.id}>
              <img
                className="BadgesListItem__avatar"
                src={badge.avatarUrl}
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
