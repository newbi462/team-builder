import React, { useState } from "react";

const TeamMemberForm = props => {
  const [formTeamMembers, setFormTeamMembers] = useState([
    {
      name: "",
      email: "",
      role: ""
    }
  ]);



  const onFormChange = fooBarBanna => {
    setFormTeamMembers({ ...formTeamMembers, [fooBarBanna.target.name]: fooBarBanna.target.value });
  };

  const submitTheForm = notAfooBanna => {
    notAfooBanna.preventDefault();
    props.addTeamMembers(formTeamMembers);
    setFormTeamMembers({
      name: "",
      email: "",
      role: ""
    });
  };

  return (
    <form onSubmit={submitTheForm} className="fromSass">
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={onFormChange}
          value={formTeamMembers.name}
        />
      </div>
      <div>
        <label htmlFor="email">E-Mail</label>
        <input
          id="email"
          type="text"
          name="email"
          onChange={onFormChange}
          value={formTeamMembers.email}
        />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <input
          id="role"
          type="text"
          name="role"
          onChange={onFormChange}
          value={formTeamMembers.role}
        />
      </div>
      <button type="submit">Add Me</button>
    </form>
  );
};

export default TeamMemberForm;
