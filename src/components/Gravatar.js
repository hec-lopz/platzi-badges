import md5 from "md5";
import React from "react";

const Gravatar = (props) => {
  const email = props.email;
  const hash = md5(email);
  return (
    <React.Fragment>
      <img
        className={props.className}
        src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
        alt="Avatar"
      />
    </React.Fragment>
  );
};

export default Gravatar;
