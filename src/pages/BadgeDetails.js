import React from "react";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";
import { Link } from "react-router-dom";

const BadgeDetails = (props) => {
  const badge = props.badge;
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
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>
              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <DeleteBadgeModal
                  onDeleteBadge={props.onDeleteBadge}
                  onClose={props.onCloseModal}
                  isOpen={props.modalIsOpen}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeDetails;
