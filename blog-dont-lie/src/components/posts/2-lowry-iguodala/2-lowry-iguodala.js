import React from "react";
import Iguodala from "./images/iguodala.jpg";
import Lowry from "./images/lowry.jpg";

const Lowry_iguodala = () => ( 
  <div className="blog-post">
    <h1>Kyle Lowry, Andre Iguodala &amp; Finding Your Bliss</h1>
    <img className="post-full-width-image" src="http://resizer.shared.arcpublishing.com/gJ8k6gTDg6uvKQ_QjR2pu2POJMM=/arc-anglerfish-arc2-prod-bostonglobe/public/W4XKFMEOK4I6TA6IZZZ5GUGJF4.jpg" alt="lowry-lede-image"/>
    <p>This offseason was a transition period for the NBA. The Golden State Warriors' reign of terror has (seemingly) ended, and the new season feels like the dawn of a new phase for the league. Much of my basketball reflection over the summer was spent pondering the last five years and what I've learned from them. The more I thought about it, the more my mind kept returning to two players that defined the period (for me) by finding the perfect environment for their unique talents: Andre Iguodala and Kyle Lowry.</p>
    <p>The art of team-building in basketball fascinates me. The dynamic nature of the sport means interactions between teammates—whether they add to or detract from each other—are a chief consideration when GMs construct their rosters and coaches design their rotations. The best teams optimize their players by putting them in their ideal roles and building the right hierarchies.</p>
    <p>For most superstars and role players, this tends to happen almost by default. Superstars define their environment; they are the sun and everything else orbits their immense talent. With role players, their talents are so specific that their roles are predetermined (e.g. Kyle Korver will run off screens and hit shots; Andre Roberson will defend the most dangerous perimeter threat).</p>
    <p>It's the players in the middle that can sometimes fall by the wayside and never find their basketball nirvana. When the perfect harmony is struck and their role is perfectly optimized, these players can have an outsized impact on winning. That's what happened with Iguodala and Lowry, and the results were beautiful to watch.</p>
    <br/>
    <h3>Andre Iguodala</h3>
    <img className="post-full-width-image" src={Iguodala} alt="iguodala"/>
    <p>When I was younger and dumber, I remember being frustrated by Andre Iguodala. Why couldn't he become an "alpha scorer" with all those physical tools? I never digested the full scope of his brilliance until he joined the Golden State Warriors. The Warriors' offensive pecking order was clear. The presence of two alpha scorers freed Iguodala to slot into a more natural role as a connector for the offense.</p>
    <p>But it wasn't just the surrounding talent in The Bay that made Golden State Iguodala's basketball heaven; it was the schemes (on both ends) that relied on the intelligence of its players—Iguodala's greatest asset.</p>
    <p>Golden State's offense was a dizzying assortment of cuts, screens and passes that required players to read and react. The system leveraged Iguodala's two greatest offensive skills: passing and decision-making. On defense, Iguodala has always shined individually, but the Warriors featured smart players who were all on the same page.</p>
    <p>The Warriors had game-changing talent, but their schemes emphasized their collective basketball intelligence. It was a situation tailor-made for Andre Iguodala.</p>
    <br/>
    <h3>Kyle Lowry</h3>
    <img className="post-full-width-image" src={Lowry} alt="lowry"/>
    <p>Playing alongside a very-good-but-not-great offensive player (DeMar DeRozan) meant Kyle Lowry had to shoulder an offensive responsibility that was slightly too big. Before last season, the Raptors were a good defensive team that lacked the collective instinct to coalesce into a truly special unit. Masai Ujiri's moves to bring Kawhi Leonard, Danny Green and Marc Gasol to Toronto put Lowry in his basketball bliss.</p>
    <p>Kawhi's arrival bumped Lowry into his correct position on the offensive totem pole: Kawhi was the fulcrum; Lowry and Siakam were the levers. The midseason trade for Gasol added the missing piece to the puzzle, especially for Lowry. Gasol's passing ability served as the bridge between the iso-heavy Kawhi offense and the Lowry/Siakam-led beautiful game offense. On defense, the Raptors boasted lineups full of high-IQ players with the awareness and instincts to evolve into a suffocating defense.</p>
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} src="https://www.youtube.com/embed/X7sYnD8xF9M" frameborder="0"  allowfullscreen></iframe>
    </div>
    
  </div>
);

export default Lowry_iguodala;
