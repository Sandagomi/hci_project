import React from 'react';

const MemberCardView = (props) => {




    return(
        <div className="main_card_container">
             <div class="ui card">
                 <div class="image">
                     <img src={props.img}/>
                 </div>
             <div class="content">
                     <a class="header">{props.name}</a>
               <div class="meta">
                    <span class="date">Joined in {props.year}</span>
             </div>
             <div class="description">
                  {props.sentence}
             </div>
             </div>
                 <div class="extra content">
                     <a>
                         <i class="user icon"></i>
                           {props.f_count} Friends
                     </a>
                 </div>
            </div>
        </div>
    )


}
export default MemberCardView;