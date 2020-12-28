import React, { Component } from "react";
import "./styles/BadgeDetails.css";
import header from "../images/platziconf-logo.svg";
import api from "../api";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import Badge from "../components/Badge";
import { Link } from "react-router-dom";

class BadgeDetails extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading) {
      return <PageLoading loader={true} />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    const badge = this.state.data;
    return (
      <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={header} alt="Logo de la conferencia" />{" "}
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>
                  {badge.firstName} {badge.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                jobTitle={badge.jobTitle}
                twitter={badge.twitter}
                email={badge.email}
              />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <div>
                  <Link
                    className="btn btn-primary mb-4"
                    to={`/badge/${badge.id}/edit`}
                  >
                    Edit
                  </Link>
                </div>
                <div>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeDetails;
