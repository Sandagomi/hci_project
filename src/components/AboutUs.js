import React from "react";
import "../css/AboutUs.css";
import a from "../Images/aboutus.jpg";
import b from "../Images/about-us_1.png";

const AboutUs = () => {
  return (
    <div className="maincontacthomecontainer">
      <div className="headline">
        The Moz Story <i class="asterisk loading icon"></i>
      </div>

      <div className="maincontactcontainer">




          <div className="head">
            <div class="ui segment">
                <div className="pera">
  <img class="ui large left floated image" src={a}/>
  
  <p>People tend to think that "About Us" pages have to sound formal to gain credibility and trust.
      But most people find it easier to trust real human beings, 
      rather than a description that sounds like it came from an automaton. 
      Trying to sound too professional on your "About Us" page results in stiff, 
      “safe” copy and design -- 
      the perfect way to make sure your company blends in with the masses.

Instead, 
<p>Eight Hour Day showcases the people behind the company and humanizes its brand. 
Introducing the founders by name and featuring the photos of them on the "About Us" page 
drives home the point that Nathan and Katie are 
-- as they so astutely put it -- 
"two individuals with a passion for creativity 
-- creativity makes us happy."</p>

When you’re designing your "About Us" page,
avoid industry jargon and replace it with an authentic voice 
-- yours -- to describe your product or service. 
Sure, it needs to be polished and free of errors, 
but it should always sound friendly and real.</p>

<img class="ui large right floated image" src={b}/>

  <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
   <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
   <p>In Harry’s world fate works not only through powers and objects such as prophecies, the Sorting Hat, wands, and the Goblet of Fire, but also through people. Repeatedly, other characters decide Harry’s future for him, depriving him of freedom and choice. For example, before his eleventh birthday, the Dursleys control Harry’s life, keeping from him knowledge of his past and understanding of his identity (Sorcerer’s 49). In Harry Potter and the Chamber of Secrets, Dobby repeatedly assumes control over events by intercepting Ron’s and Hermione’s letters during the summer; by sealing the barrier to Platform 93⁄4, causing Harry to miss the Hogwarts Express; and by sending a Bludger after Harry in a Quidditch match, breaking his wrist. Yet again, in Harry Potter and the Prisoner of Azkaban, many adults intercede while attempting to protect Harry from perceived danger, as Snape observes: “Everyone from the Minister of Magic downward has been trying to keep famous Harry Potter safe from Sirius Black” (284). All these characters, as enactors of fate, unknowingly drive Harry toward his destiny by attempting to control or to direct his life, while themselves controlled and directed by fate.</p>
















   <div class="ui cards">
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src={a}/>
      <div class="header">
        Elliot Fu
      </div>
      <div class="meta">
        Friends of Veronika
      </div>
      <div class="description">
        Elliot requested permission to view your contact details
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">Approve</div>
        <div class="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src={a}/>
      <div class="header">
        Jenny Hess
      </div>
      <div class="meta">
        New Member
      </div>
      <div class="description">
        Jenny wants to add you to the group <b>best friends</b>
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">Approve</div>
        <div class="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
</div>










   <div class="ui threaded comments">
  <h3 class="ui dividing header">Comments</h3>
  <div class="comment">
    <a class="avatar">
      <img src={a}/>
    </a>
    <div class="content">
      <a class="author">Matt</a>
      <div class="metadata">
        <span class="date">Today at 5:42PM</span>
      </div>
      <div class="text">
        How artistic!
      </div>
      <div class="actions">
        <a class="reply">Reply</a>
      </div>
    </div>
  </div>
  <div class="comment">
    <a class="avatar">
    <img src={a}/>
    </a>
    <div class="content">
      <a class="author">Elliot Fu</a>
      <div class="metadata">
        <span class="date">Yesterday at 12:30AM</span>
      </div>
      <div class="text">
        <p>This has been very useful for my research. Thanks as well!</p>
      </div>
      <div class="actions">
        <a class="reply">Reply</a>
      </div>
    </div>
    <div class="comments">
      <div class="comment">
        <a class="avatar">
        <img src={a}/>
        </a>
        <div class="content">
          <a class="author">Jenny Hess</a>
          <div class="metadata">
            <span class="date">Just now</span>
          </div>
          <div class="text">
            Elliot you are always so right :)
          </div>
          <div class="actions">
            <a class="reply">Reply</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="comment">
    <a class="avatar">
    <img src={a}/>
    </a>
    <div class="content">
      <a class="author">Joe Henderson</a>
      <div class="metadata">
        <span class="date">5 days ago</span>
      </div>
      <div class="text">
        Dude, this is awesome. Thanks so much
      </div>
      <div class="actions">
        <a class="reply">Reply</a>
      </div>
    </div>
  </div>
  <form class="ui reply form">
    <div class="field">
      <textarea></textarea>
    </div>
    <div class="ui blue labeled submit icon button">
      <i class="icon edit"></i> Add Reply
    </div>
  </form>
</div>











</div>
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default AboutUs;
