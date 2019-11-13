import React, { useState } from "react";

const TeamMemberForm = props => {

  return (
    <form className="fromSass">
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="title"
          type="text"
          name="title"
        />
      </div>
      <div>
        <label htmlFor="email">E-Mail</label>
        <input
          id="email"
          type="text"
          name="email"
        />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <input
          id="role"
          type="text"
          name="role"
        />
      </div>
    </form>
  );
};

export default TeamMemberForm;
