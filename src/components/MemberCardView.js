import React from "react";
import {Link} from "react-router-dom"
import "../css/MemberCardView.css";

const MemberCardView = (props) => {
  return (
    <div className="main_card_container">
      <div className="ui card">
        <div className="image">
          <img src={props.img} />
        </div>
        <div className="content">
        <Link to="/MemberSingle"><a className="header">{props.name}</a></Link>
          <div className="meta">
            <span className="date">Joined in {props.year}</span>
          </div>
          <div className="description">{props.sentence}</div>
        </div>
        <div className="extra content">
          <a>
            <i className="user icon"></i>
            {props.f_count} Friends
          </a>
        </div>
      </div>
    </div>
  );
};
export default MemberCardView;
