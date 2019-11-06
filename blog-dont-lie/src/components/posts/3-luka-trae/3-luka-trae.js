import React from "react";
import ReactPlayer from "react-player";
import Trae from "./images/trae.jpg";
import Luka from "./images/luka.jpg";

const Luka_trae = () => ( 
  <div className="blog-post">
    <h1>For Trae Young &amp; Luka Doncic, Every Pass is 'One Pass Away'</h1>
    <img className="post-full-width-image" src="https://img.bleacherreport.net/img/images/photos/003/788/518/hi-res-e94f252195e0c432122aa9de57e0832e_crop_north.jpg?1548715098&w=3072&h=2048" alt="luka-trae-lede"/>
    <p>For as much as we discuss 1-on-1 defensive matchups, guarding NBA stars is more about team defense and help rotations. The great offensive players inevitably put defenses in positions where multiple defenders are committed to the ball (i.e. they force help rotations).</p>
    <p>When this happens, defenses need to make choices about how to defend the rest of the floor from a numbers disadvantage. A core philosophy underlying the design of those help rotations is the concept of taking away the passing outlets that are "one pass away."</p>
    <p>Most players won't be able to make the pass all the way to the other side of the floor with speed and accuracy. If they swing the ball through teammates or loft a high-arcing pass, the defense normally has enough time to recover and minimize the damage.</p>
    <p>But what about the rare players who CAN make those passes on time and on target? These players torment defenses because every pass is "one pass away". Two such players have displayed this ability surprisingly early in their careers, cementing their status as surgical offensive initiators: Luka Doncic &amp; Trae Young.</p>
    <br/>
    <h3>Trae Young</h3>
    <img className="post-full-width-image" src={Trae} alt="trae"/>
    <p>Trae's passing vision and court awareness is a sight to behold. Due to his small stature, Trae needs to get rid of the ball early, but that means he often catches defenses off-guard with the timing of his passes.</p>
    <ReactPlayer url="https://streamable.com/b9yav" width="100%" />
    <p>Opponents have begun aggressively trapping Trae, neutralizing him (to some degree) with size and length. If traps come quickly enough from long-armed defenders, his vision is obstructed and he's physically incapable of reading the floor and/or getting a pass through the thicket of arms enveloping him.</p>
    <ReactPlayer url="https://streamable.com/bchkh" width="100%" />
    <p>Does his size make things difficult? Undoubtedly. He has a smaller margin for error because he can get swallowed up by bigger defenders. That said, Damian Lillard is a wonderful example of a smaller player who learned how to deal with these kinds of traps.</p>
    <p>Furthermore, Trae has already shown unparalleled creativity with his passing—something I'm guessing he developed as a way to overcome his small frame. He uses a bevy of fakes and movement—of the ball, his hands, his hips and his feet—to create passing angles (he likes to use a reverse-pivot to quickly flip his hips and fling a pass through the newly created window).</p>
    <ReactPlayer url="https://streamable.com/z2auw" width="100%" />
    <p>Trae has already demonstrated advanced pick-and-roll mastery. The traps are going to keep coming his way (especially with John Collins suspended for 25 games). It will be fascinating to track Trae's growth as he learns how to deal with everything defenses throw at him.</p>
    <br/>
    <h3>Luka Doncic</h3>
    <img className="post-full-width-image" src={Luka} alt="luka"/>
    <p>Luka Doncic is a prime example of why we fetishize players who combine size with passing ability. There are plays Luka makes that Trae Young (an equally gifted passer) physically cannot because of their size difference.</p>
    <ReactPlayer url="https://streamable.com/3inqu" width="100%" />
    <p>Because of his height, Luka can see over traps and read the back-line defense. He has an easier time creating passing windows, often relying on his size to make overhead passes or jump passes to get past the defense.</p>
    <p>He can sometimes get a little too cute trying to force highlight passes. His tendency to make difficult jump passes gets him in trouble when he gets caught in the air without knowing where he's passing.</p>
    <ReactPlayer url="https://streamable.com/kvdx2" width="100%" />
    <p>Luka can rifle a one-handed-off-the-dribble pass across the court with his right hand (partly why defenses have started trying to force him left more frequently). He has the poise to sometimes just hold the ball above his head, waiting for the help defense to commit before launching a missile to wherever the defense isn't.</p>
    <p>This season, Luka seems to better understand how to leverage his size as a passer. In a thrilling game against the Los Angeles Lakers, Avery Bradley's pressure defense initially seemed to disrupt Luka's mojo. As the game progressed, however, he seemed more conscientious about using his strength to keep Bradley on his hip and occupy two defenders while being in complete control.</p>
    <ReactPlayer url="https://streamable.com/wz2qe" width="100%" />
    <br/>
    <br/>
    <p>The passes shown above are incredibly difficult reads that reveal a sky-high basketball IQ and an ability to quickly decipher defensive rotations. That Trae and Luka are making these reads so early in their careers reflects their preternatural playmaking ability.</p>
    <p>The two young stars will be forever linked because they were traded for one another, but their games are eerily similar in many ways. Both are already offensive centerpieces, primarily because every pass on the floor is usually "one pass away".</p>
  </div>
);

export default Luka_trae;
