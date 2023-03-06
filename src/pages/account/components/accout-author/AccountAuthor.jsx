import React from "react";

export default function AccountAuthor({ user }) {
  const { firstName, lastName, createdAt } = user.message;
  const since_year = createdAt.toString().split("-")[0];

  return (
    <div className="account_author">
      <div className="thumbnail">
        <div className="author_img">
          <img src="/assets/img/users/pro_pic-min.png" alt="User" />
        </div>
      </div>
      <h5 className="author_name">{`${firstName} ${lastName}`}</h5>
      <span className="joining_date">
        {since_year} ilindən etibarən bizimlə
      </span>
    </div>
  );
}
