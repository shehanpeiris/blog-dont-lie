import React from "react";
import ReactPlayer from "react-player";
import FeaturedImage from "./images/suns-team.jpg";
import AronBaynes from "./images/baynes.jpg";
import Foul from "./images/foul.jpg";
import DevinBooker from "./images/booker.jpg";
import KellyOubre from "./images/oubre.jpg";

const Phoenix_suns = () => ( 
  <div className="blog-post">
    <h1>4 Things About the Phoenix Suns' Scorching Start</h1>
    <img className="post-full-width-image" src={FeaturedImage} alt="phoenix-suns-featured"/>
    <p>The Phoenix Suns have been one of the warmest, fuzziest, feel-goodiest stories of the early NBA season. I might be addicted to them because, so far, I physically cannot stop injecting them directly into my venous system.</p>
    <p>Entering the season, Phoenix were high on my personal League Pass rankings, but that was mostly for educational purposes (how do Devin Booker and DeAndre Ayton look on a semi-functional NBA team?). I was not emotionally prepared to fall in love with this fun, scrappy, physical, unified bunch. But I have. So I wanted to write about a few things that jumped out to me as I've binge-watched the Suns.</p>
    <br/>
    <h3>Aron Baynes 4 MVP</h3>
    <img className="post-full-width-image" src={AronBaynes} alt="aron-baynes"/>
    <p>Pardon my French, but WHAT THE FUCK IS HAPPENING HERE? Sacré bleu.</p>
    <p>I've always thought Aron Baynes was a very useful player. He does all the little stuff that contributes to winning but escapes the box score. Well, he's now no stranger to the box score. Baynesy is averaging 16.2 points per game thanks to some red-hot three-point shooting on his tippy-toes (50% on 4.4 3PA per game).</p>
    <p>The shooting will likely cool off, but so far it's been an integral part of the Suns' third-ranked offense <a href="https://cleaningtheglass.com/stats/league/summary" target="blank">(112.2 ORtg per Cleaning The Glass)</a>. Everyone in the rotation is willing to take threes, which has created space for dribble penetration and cuts to the basket.</p>
    <p>Despite his reputation, the numbers suggest Baynes' positive contributions to this Suns team are solely on the offensive end. <a href="https://cleaningtheglass.com/stats/team/24/onoff#tab-team_efficiency" target="blank">According to Cleaning The Glass</a>, Baynes has been the most negatively impactful defensive player on the Phoenix roster—the Suns concede 11.0 more points per 100 possessions with Baynes on the floor. Even though this Blog Don't Lie, I feel like those numbers do.</p>
    <p>Maybe I'm missing something (I probably am), but when I watch the Suns it feels like Baynes is an integral part of their defense. You can constantly hear him bellowing instructions, and it's impossible to miss opponents bouncing off his gigantic frame. Baynes has also provided some veteran leadership to the young players on the team (because who's going to talk back to Aron Freaking Baynes?). Look at him imparting wisdom on Kelly Oubre after Oubre picked up two quick fouls playing physical defense on Kawhi Leonard and urging his teammates (from the bench) to get back on defense after a turnover.</p>
    <ReactPlayer url="https://streamable.com/xr5bf" width="100%" />
    <p>Perhaps one reason the numbers are so unfavorable: he fouls like crazy—6.3 fouls per 36 minutes. That's probably part of the reason he's only getting 26.0 minutes per game since DeAndre Ayton's suspension. But honestly, I don't really mind the fouling. Why? I'm glad I asked.</p>
    <br/>
    <h3>Phoenix Defense: Fair or Foul?</h3>
    <img className="post-full-width-image" src={Foul} alt="suns-fouls"/>
    <p>The Suns are fouling the shit out of their opponents. Adjusted for pace, they're among the league leaders in fouls committed, opponent free-throw attempts and opponent free throw rate (FTM/FGA).</p>
    <p>But fouling isn't inherently bad for defenses. I looked at defensive data from the past five seasons and found no correlation between the three aforementioned stats and defensive rating. Phoenix has been one of the league's most foul-happy teams in the last few seasons, but it feels different this year.</p>
    <p>It may just be the confirmation bias talking, but their fouls this season feel like a byproduct of effort and physicality—they seem to commit at least four fouls per game running through screens because they're working so hard to stay attached to their man (fine, I made up that number, but it's probably close to accurate).</p>
    <ReactPlayer url="https://streamable.com/hirn9" width="100%" />
    <p>Opponents feel these Phoenix Suns. This team is no longer a rest day on the schedule. Maybe at some point the fouling will come back to hurt to them. But if I'm Monty Williams, I'm thrilled this club has embraced a gritty, defensive-minded identity. If fouls are the price to pay for that identity, so be it.</p>
    <br/>
    <h3>Devin Booker Rising From the Ashes</h3>
    <img className="post-full-width-image" src={DevinBooker} alt="devin-booker"/>
    <p>I am so happy for Devin Booker right now. For the first time in a few years, he is on a team that:</p>
    <ul>
      <li>has NBA-level talent; and</li>
      <li>makes a modicum of sense in terms of roster construction.</li>
    </ul>
    <p>Surrounded by NBA players, we're seeing the complete package from Booker. He's carrying the Phoenix offense with his delightfully diverse skill set. His percentages finally match his picture-perfect stroke. He's brutalizing smaller players with a vicious post game. He showed a sincere willingness to pass the ball last year, but he now has teammates who can make plays off his passes, and his dimes are more on-target now.</p>
    <p>His usage has scaled back a little, allowing him to expend more energy on the defensive end. There are still lapses (especially off-ball), but he's busting his ass in on-ball situations.</p>
    <ReactPlayer url="https://streamable.com/ipb1g" width="100%" />
    <p>I didn't know what to make of Booker entering the season. The skill set was clear, but my grade for him was an "Incomplete" because it felt unfair to base any evaluation on the disaster that was last season. This year, no caveats are necessary. Booker has been exceptional and has officially arrived as a bona fide star.</p>
    <br/>
    <h3>Kelly Oubre Jr.'s Growth (&amp; Fascinating Free Agency)</h3>
    <img className="post-full-width-image" src={KellyOubre} alt="kelly-oubre"/>
    <p>I've largely been skeptical about Kelly Oubre Jr.'s ceiling. He was undoubtedly a useful rotation player, but I doubted the defense, questioned the shot, and distrusted the decision-making. He posted great numbers after relocating to Arizona last year, but admittedly I wasn't watching a ton of Suns games (or Wizards games for that matter) and dismissed those numbers as empty-calorie fodder.</p>
    <p>As it currently stands, consider me a cautious Oubre optimist. I've been impressed with the not-yet-24-year-old. The shot looks fluid and repeatable. The defense has been less hyperactive, and he seems more content to play sound positional defense instead of gambling for steals/blocks.</p>
    <p>He still has a tendency to make bad decisions when he overdribbles and too frequently drives into traffic, but Monty Williams' offense is generally putting Oubre in good spots attacking from advantage situations where he has space to fire a three or slash to the rim. Over half of his shots are around the rim—an elite proportion for non-bigs (<a href="https://cleaningtheglass.com/stats/player/2798#tab-shooting_frequency" target="blank">97th percentile for forwards per CTG</a>).</p>
    <p>I'm keeping a close eye on Oubre because he has the potential to be a fascinating free agent in 2021. He signed a 2-year deal this past summer for ~$15M per year, meaning he'll hit the market again in 2021 as a unique free agent: unrestricted at just 25 years of age.</p>
    <p>The 2021 free agency class has:</p>
    <ul>
      <li>plenty of star power (Giannis Antetokounmpo, Anthony Davis, Kawhi Leonard, Paul George, LeBron James)</li>
      <li>plenty of All-NBA caliber players in the 28-32 age range (Blake Griffin, Jrue Holiday, Rudy Gobert, Victor Oladipo, Andre Drummond)</li>
      <li>plenty of good role player types in the 28-32 age range (Spencer Dinwiddie, Josh Richardson, Steven Adams, Jerami Grant, Otto Porter)</li>
      <li>plenty of enticing Restricted Free Agents who will be hard to pry away from incumbent teams (Donovan Mitchell, Jayson Tatum, Jonathan Isaac, De'Aaron Fox)</li>
      <li>one young role player type with enough upside to be a very interesting target: Kelly Oubre Jr. (maybe you'd argue Dante Exum would fall into this tier, but I need to see more from him)</li>
    </ul>
    <p>Oubre's game still needs more polish, but he could become an interesting chess piece in the 2021 free-agency landscape if he continues to improve. So far, I like what I've seen from him to start the season.</p>
    <br/>
    <br/>
    <p>It feels like these Suns are real, and that's more important to me from a big-picture perspective than through the lens of whatever happens this season. Booker and Ayton (when he returns) have opportunities to grow in a system where the ball is moving on offense and everyone competes on defense. Considering where the franchise was one year ago, that's a major cause for celebration and optimism.</p>
  </div>
);

export default Phoenix_suns;
