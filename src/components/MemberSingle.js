import React from "react";
import faker from 'faker';
import "../css/MemberSingle.css"



const MemberSingle = (props) => {


    return(
      <div className="singlecontent">
        <div className="membersingle-container">
        <div className="ui card">
          <div className="image">
            <img src={faker.image.avatar()} />
          </div>
          <div className="content">
             
            <a className="header">{faker.name.firstName()}</a>
            <div className="meta">
              <span className="date">Joined in 2011</span>
            </div>
            <div className="description">{faker.lorem.sentence()}</div>
          </div>
          <div className="extra content">
            <a>
              <i className="user icon"></i>
              {props.f_count} Friends
            </a>
          </div>
          <div className="updateButton"> <button class="positive ui button">Update</button></div>
        </div>
      </div>
      </div>
    )


}
export default MemberSingle;