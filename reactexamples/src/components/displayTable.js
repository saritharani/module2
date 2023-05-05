import React from "react";
class TableForm extends React.Component {
  state = {
    title: "Emp Details",
    empDetails: [
      {
        id: 101,
        name: "abc1",
        designation: "analyst",
        location: "india",
        timing: "morning",
        profileImage: "https://picsum.photos/500/100"
      },
      {
        id: 102,
        name: "abc2",
        designation: "analyst2",
        location: "india2",
        timing: "evening",
        profileImage: "https://picsum.photos/500/100"
      },
      {
        id: 103,
        name: "abc3",
        designation: "analyst3",
        location: "india3",
        timing: "night",
        profileImage: "https://picsum.photos/500/100"
      }
    ]
  };
  render() {
    return (
      <div className="container">
        <h2>{this.state.title}</h2>
        <table className="table table-striped">
          <thead className="bg-dark text-white">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>designation</th>
              <th>location</th>
              <th>timing</th>
              <th>profileImage</th>
            </tr>
          </thead>
          <tbody>{this.renderAllEmpDetail()}</tbody>
        </table>
      </div>
    );
  }
  renderAllEmpDetail() {
    return this.state.empDetails.map(eachEmp => (
      <tr key={eachEmp.id}>
        <td>{eachEmp.id}</td>
        <td>{eachEmp.name}</td>
        <td>{eachEmp.designation}</td>
        <td>{eachEmp.location}</td>
        <td>{eachEmp.timing}</td>
        <td>
          <img
            src={eachEmp.profileImage}
            width="100px"
            height="50px"
            alt="this is for profile pic"
          ></img>
        </td>
      </tr>
    ));
  }
}

export default TableForm;
