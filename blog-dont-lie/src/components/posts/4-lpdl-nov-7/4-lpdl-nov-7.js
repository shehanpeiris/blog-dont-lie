import React from "react";
import {TwitterTweetEmbed} from "react-twitter-embed";
import ReactPlayer from "react-player";
import FeaturedImage from "./images/title-danny.jpg";
import DannyGreen from "./images/danny-green.jpg";
import LeaguePass from "./images/nba-league-pass.jpg";
import KyleOQuinn from "./images/kyle-oquinn.jpg";

const Lpdl_nov7 = () => ( 
  <div className="blog-post">
    <h1>League Pass Don't Lie (11/7): The Danny Green Cut, League Pass DOES Lie, Kyle O'Quarterback</h1>
    <img className="post-full-width-image" src={FeaturedImage} alt="lpdl-featured"/>
    <p>If you're an NBA fan, you're probably familiar with Zach Lowe's weekly "10 Things" column, where he writes some quick-hitters on an assortment of basketball trends, quirks, wrinkles &amp; minutiae.</p>
    <p>League Pass Don't Lie is exactly the same thing, barring a few minor differences:</p>
    <ul>
      <li>It'll only be 3 things, and it'll probably be every other week (I have a job, people. Sadly that job isn't watching NBA basketball until my eyes bleed...yet).</li>
      <li>I'm exponentially less insightful and intelligent than Zach Lowe.</li>
    </ul>
    <p>Here's what caught my eye on League Pass from the first 2.5 weeks of the NBA season:</p>
    <br/>
    <h3>The Danny Green Cut</h3>
    <img className="post-full-width-image" src={DannyGreen} alt="danny-green"/>
    <p>Danny Green does so many "little things" on a basketball court. One of my favorites is the way he sneaks along the baseline from one corner to the other. It's such an uncommon movement that it can sow confusion among defenders—if they even notice he's teleported across the floor.</p>
    <ReactPlayer url="https://streamable.com/awc1u" width="100%" />
    <p>The first time I really noticed this cut was when Green set an <a href="https://www.youtube.com/watch?v=j3JSWmM8F9E" target="blank">NBA record with 27 three-pointers in the 2013 NBA Finals</a>. He outfoxed the Miami Heat defense over and over again thanks to this cut and it's never left his toolbox.</p>
    <p>Danny Green is probably not the first player to deploy this specific cut, but I'm pretty sure he uses it more than anybody—and does so to devastating effect.</p>
    <br/>
    <h3>League Pass DOES Lie</h3>
    <img className="post-full-width-image" src={LeaguePass} alt="league-pass"/>
    <p>Please forgive me, but I'm going to vent a little. The season may have started with an October 22nd double-header, but the real NBA season starts on the first night with a ton of games. Before long, however, the joy of flipping back-and-forth between a handful of games will soon fade. It's replaced by a now-annual tradition of self-loathing. Why do I pay $200/year for NBA League Pass?</p>
    <p>The answer is because I'm a junkie and the folks running League Pass are my dealers. I typically watch games after the fact, meaning I can turn to... other sources for my hoops fix. But I need League Pass for live viewing and so, to quote Always Sunny's Frank Reynolds, <a href="https://www.youtube.com/watch?v=3sYSt26kh6Y">"you gotta pay the troll toll."</a></p>
    <p>But why do we actually need to pay this kind of toll? I'm not even going to pretend to understand the difficulties of running a live streaming operation. But I know other leagues do a better job of it than the NBA, and it's a major failure from one of the world's most forward-thinking, tech-savvy leagues.</p>
    <p>I just hope we can someday get to a point where complaints like these aren't justifiably and consistently aired by basketball fans:</p>
    <div className="embedded-tweet">
      <TwitterTweetEmbed
        tweetId={"1189732754612572160"}
      />
    </div>
    <div className="embedded-tweet">
      <TwitterTweetEmbed
        tweetId={"1189379816069484544"}
      />
    </div>
    <div className="embedded-tweet">
      <TwitterTweetEmbed
        tweetId={"1191927298129321984"}
      />
    </div>
    <br/>
    <h3>Kyle O'Quarterback</h3>
    <img className="post-full-width-image" src={KyleOQuinn} alt="kyle-oquinn"/>
    <p>You know what they say about a man with big feet...</p>
    <p>That if said man is taller than 6'9" and can throw a bounce pass, I'm going to love him. I'm a sucker for bigs who can pass the rock. Sue me.</p>
    <p>One such big who flashed a deft passing touch earlier in the week was the Philadelphia 76ers' Kyle O'Quinn, aka KOQB. O'Quinn was deputizing for the suspended Joel Embiid against the Blazers when he racked up 5 assists—two shy of his career-high. Some of them were absolute beauties:</p>
    <ReactPlayer url="https://streamable.com/d6mc8" width="100%" />
    <p>This is hardly new for the big fella. When he was with the New York Knicks, a decent chunk of his touches came at the elbows where he could pick out cutters for easy buckets.</p>
    <p>O'Quinn probably isn't going to make-or-break the Sixers' title hopes. If they're fully healthy for the playoffs, he might not even be in the rotation. But his passing is a useful skill set to get them through a regular season where Embiid will probably (hopefully?) get his fair share of rest.</p>
    <p>For a Sixers offense that can be a slog at times, they'll need every dose of creativity and easy points they can get.</p>
  </div>
);

export default Lpdl_nov7;
