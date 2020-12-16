import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesList.css";
import { FaTwitter } from "react-icons/fa";
import Gravatar from "./Gravatar";

class BadgesListItem extends Component {
  render() {
    return (
      <li className="BadgesListItem" key={this.props.badge.id}>
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
        />
        <div className="BadgeListItem__text-container">
          <p className="font-weight-bold">
            {this.props.badge.firstName} {this.props.badge.lastName}
          </p>
          <p className="BadgeListItem__twitter">
            <FaTwitter className="BadgeListItem__twitter-icon" />
            {this.props.badge.twitter}
          </p>
          <p className="BadgeListItem__jobTitle">{this.props.badge.jobTitle}</p>
        </div>
      </li>
    );
  }
}

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
        {this.props.badges.reverse().map((badge) => {
          return (
            <Link
              className="text-reset text-decoration-none"
              to={`/badges/${badge.id}/edit`}
            >
              <BadgesListItem badge={badge} />
            </Link>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
