import './FrenchToast.css';

import msg from './Message.png';
import metxt from './metxt.png';
import metxtgreen from './metxtgreen.png';
import momtxt from './momtxt.png';
import arrow from './arrow.gif';
import nd from './nd.png';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function FrenchToast() {

  const firsttexts = 1
  const intro = firsttexts + 2
  const birds = intro + 6
  const mj = birds + 1
  const jaybird = mj + 3
  const set = jaybird + 2
  const page1 = set + 6
  const page2 = page1 + 5
  const page3 = page2 + 6
  const page4 = page3 + 6
  const page5 = page4 + 2.5
  const pages = 2 + page5

  const alignCenter = {
    color: 'white', marginLeft: '58vw', justifyContent: 'left', backgroundImage: `url(${metxt})`, textAlign: 'left',
    width: '40vw', height: '10vh', backgroundSize: '100% 100%', minHeight: '5vh', display: 'flex', alignItems: 'left', paddingLeft: '1.5vw'
  }
  const alignCentergreen = {
    color: 'white', marginLeft: '58vw', justifyContent: 'left', backgroundImage: `url(${metxtgreen})`, textAlign: 'left',
    width: '40vw', height: '10vh', backgroundSize: '100% 100%', minHeight: '5vh', display: 'flex', alignItems: 'left', paddingLeft: '1.5vw'
  }
  const momtxtstyle = {
    color: 'white', marginLeft: '2vw', justifyContent: 'left', backgroundImage: `url(${momtxt})`, textAlign: 'left',
    width: '40vw', height: '10vh', backgroundSize: '100% 100%', minHeight: '5vh', display: 'flex', alignItems: 'left', paddingLeft: '1.5vw'
  }
  const momtxtstyleexp = {
    color: 'white', marginLeft: '2vw', justifyContent: 'left', backgroundImage: `url(${momtxt})`, textAlign: 'left',
    width: '40vw', height: 'fit-content', backgroundSize: '100% 100%', minHeight: '5vh', display: 'flex', alignItems: 'left', paddingLeft: '1.5vw'
  }

  return (
    <div className="App">
      <Parallax pages={pages}>

        {/**First Text */}

        <ParallaxLayer sticky={{ start: (firsttexts - 1), end: (firsttexts - 1) }}
          style={{
            backgroundImage: `url(${msg})`,
            backgroundSize: 'cover'
          }} />
        <ParallaxLayer sticky={{ start: (firsttexts - 1), end: (pages - 5) }}
          style={{
            display: 'flex',
            top: '85vh', marginLeft: '47.5vw',
            width: '10vw', height: '10vh'
          }}> <img src={arrow} alt="" /></ParallaxLayer>
        <ParallaxLayer sticky={{ start: firsttexts, end: (firsttexts) }} style={{ ...momtxtstyleexp, top: '8vh' }}>
          <div className='metext'><p className='metextcontent'>Hey Jay! T and I are dropping by a new Mexican place tonight that Ruth recommended - Mi Rancho. She said they have great tacos al pastor, which I know are your favorite food (even though it's neither my excellent french toast, nor even kosher). Let me know if you can make it, no pressure. Love you.</p></div>
        </ParallaxLayer>

        {/**Intro*/}
        <ParallaxLayer sticky={{ start: intro - 1, end: intro - 1 }} style={{ top: '2vh', height: '80vh', marginLeft: '15vw', width: '70vw', textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
          <div><h2>I click my phone off, and continue wandering the streets of Chicago’s Oak Park, trying to think of reasons not to smoke. In the hours it had taken me to, well, not think of a reason, the sun had made its way to the horizon, reaching up to paint the scattered clouds a dark blue with vermillion outline, patterning across an even oranger sky behind it.</h2>
            <br />
            <h2>I know I shouldn’t smoke. For god’s sake, every kid knows they shouldn’t smoke. Everyone knows. I know that my lungs shouldn’t hurt when I breathe deeply. I know that my heart shouldn’t rock furiously before reaching the second flight of stairs. I know my leg shouldn’t bounce so many times a day it's a travesty my calves don’t look like Schwarzenegger’s. If these were reason enough, then 14-year-old Jay wouldn’t have lit up a second time, and I wouldn’t be spending my entire day walking these streets trying to convince myself to quit. Then again, it would be nice to exercise without needing a break. Almost, just nearly, barely, but not quite as nice as it might be to have one more smoke.</h2>
          </div>
        </ParallaxLayer>

        {/**Second Text */}
        <ParallaxLayer sticky={{ start: (birds - 6), end: (birds - 1) }}
          style={{
            backgroundImage: `url(${msg})`,
            backgroundSize: 'cover'
          }} />

        <ParallaxLayer sticky={{ start: (birds - 5), end: (birds - 1) }} style={{ ...momtxtstyle, top: '8vh' }}>
          <div className='metext'><p className='metextcontent'>It hatched!</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (birds - 4), end: (birds - 1) }} style={{ ...alignCenter, top: '20vh' }}>
          <div className='metext'><p className='metextcontent'>What</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (birds - 3), end: (birds - 1) }} style={{ ...momtxtstyle, top: '32vh' }}>
          <div className='metext'><p className='metextcontent'>The hawk my guys rescued? With the broken wing and the eggs? One hatched!</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (birds - 2.4), end: (birds - 1) }} style={{ ...alignCenter, top: '44vh' }}>
          <div className='metext'><p className='metextcontent'>Oh nice</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (birds - 1.8), end: (birds - 1) }} style={{ ...momtxtstyle, top: '56vh' }}>
          <div className='metext'><p className='metextcontent'>Very nice indeed. Nicer to have a net positive weekend for the hawk population.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (birds - 1), end: (birds - 1) }} style={{ ...momtxtstyle, top: '68vh' }}>
          <div className='metext'><p className='metextcontent'>Your cousins are in town this week - will you be in the area and wanting dinner too?</p></div>
        </ParallaxLayer>

        {/**Intro*/}
        <ParallaxLayer sticky={{ start: mj - 1, end: mj }} style={{ top: '2vh', height: '80vh', marginLeft: '15vw', width: '70vw', textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
          <div><h2>My mom used to smoke. That’s probably why she croaked so early. That, or the ice cream, or the boring desk job, or the sitting around knitting
            instead of exercising. I used to think, what if I were Michael Jordan’s son? I would’ve grown up with some discipline. I mean - I figured it out,
            you know, eventually. I didn’t need a famous billionaire athlete parent to become who I am. But maybe with that head start, having self-control
            installed instead of learned, I could’ve been even better. Sure, my mom volunteers to help birds on the weekends, but hell if I was 6'5" I could’ve
            made the NBA myself. Yet, I’ve made the most of myself, despite her. In three hours I’ll be headlining the Laugh Factory, because I actually got off
            my ass and made myself famous. And the people will laugh, because I put in the work to make them laugh, because I wrote the best jokes and I
            practiced the most, but most importantly, because I had the discipline to achieve self-respect, and they can sense that when I’m on stage.
            No matter where you are, you know, people can smell if you don’t respect yourself.</h2> <br />
            <h2 className='next'>I swear I can still smell my mom now.

            </h2> <br />
            <h2 className='next'> I give in for the moment and kiss my Marlboro once more, its light rebelling against the night’s hasty descent.</h2></div>
        </ParallaxLayer>

        {/**Jaybird*/}
        <ParallaxLayer sticky={{ start: (jaybird - 3), end: jaybird - 1 }}
          style={{
            backgroundImage: `url(${msg})`,
            backgroundSize: 'cover'
          }} />

        <ParallaxLayer sticky={{ start: (jaybird - 2), end: jaybird - 1 }} style={{ ...momtxtstyle, height: '15vh', top: '8vh' }}>
          <div className='metext'><p className='metextcontent'>Hey Jaybird. I was feeling down today, and was remembering how I used to be able to just get you a new comic book, and your elation would fix the day right up for me. Crazy what makes us happy at different points in our life, no? </p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (jaybird - 1), end: jaybird - 1 }} style={{ ...momtxtstyle, height: '15vh', top: '24vh' }}>
          <div className='metext'><p className='metextcontent'>Anywho, I sent a spiderman plushie to your apartment - it's small, so you can hide it when you have girls over. I wouldn’t want to embarrass you. Anyway, I love you small boy, I hope you’re keeping the big 🍎 fun.</p></div>
        </ParallaxLayer>


        <ParallaxLayer sticky={{ start: set - 2, end: set - 2 }} style={{ top: '2vh', height: '80vh', marginLeft: '15vw', width: '70vw', textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
          <div><h2>The set is going well. It really comes down to the opening joke - if that goes well, the audience is willing to ride out wherever you’re going the rest of the night. If my mom was a comedian, she would’ve cried every time she got on stage. Her eyes would be begging for the audience’s approval until they couldn’t plead anymore and released tears. I’m on such a roll I stall so I can remember the new material I want to work on. As I think, a fan calls out.</h2>
            <h2>“Jayson!”</h2>
            <h2>“Yeah?”</h2>
            <h2>“Happy Birthday!”</h2>
            <h2>“You know it’s my birthday?” </h2>
            <h2>“Yeah!”</h2>
            <h2>“You know it’s my birthday... and you didn’t bring a gift?”</h2>
            <h2>The crowd laughs, and he beams. “Well, what do you want?”</h2>
            <h2>I chuckle, pleased with how well I handled the situation and planning a retort. Then,
              when I attempt to feed the microphone more words, my mouth finds none. My throat asks my chest for some, but finds it completely caved in. </h2></div>
        </ParallaxLayer>


        <ParallaxLayer sticky={{ start: set - 1, end: set - 1 }} style={{ top: '2vh', height: '80vh', marginLeft: '15vw', width: '70vw', textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
          <div><h2>My eyes dart away from the crowd and through the stage below me. From the dirt and through the floorboards seep up live wriggling tree roots that somehow only I seem to be able to see, and they slowly slide their way up my body until they become arms, arms which wrap around my chest to hug me. The roots continue past my neck and become fingers, running themselves soothingly through my scalp. They march forward to my forehead, pass themselves as lips, and plant themselves on my forehead. </h2>
            <br /><h2>I'm on a stage, on my birthday, alone. </h2>
            <br /><h2>But I know what I want.</h2>
            <br /><h2>I race outside, then reach for a smoke, but I can’t, because my throat feels glued shut, and the legions of tears racing each other down my face would extinguish it anyway. While walking wherever my feet will take me, I open my phone, then messages, then for the first time today, I scroll to the bottom of the chat and start typing.</h2></div>
        </ParallaxLayer>



        {/**Final Texts*/}
        <ParallaxLayer sticky={{ start: (page1 - 5.9), end: (page5) }}
          style={{
            backgroundImage: `url(${msg})`,
            backgroundSize: 'cover'
          }} />

        <ParallaxLayer sticky={{ start: (page1 - 5), end: (page1 - .5) }} style={{ ...alignCentergreen, top: '8vh' }}>
          <div className='metext'><p className='metextcontent'>Hey ma. It's Jay.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page1 - 4), end: (page1 - .5) }} style={{ ...alignCentergreen, top: '20vh' }}>
          <div className='metext'><p className='metextcontent'>How are we sure Jesus was Jewish?</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page1 - 3), end: (page1 - .5) }} style={{ ...alignCentergreen, top: '32vh' }}>
          <div className='metext'><p className='metextcontent'>His mother told everyone he was god.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page1 - 2), end: (page1 - .5) }} style={{ ...alignCentergreen, top: '44vh' }}>
          <div className='metext'><p className='metextcontent'>You told me that one, I always loved it.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page1 - 1.5), end: (page1 - .5) }} style={{ ...alignCentergreen, top: '56vh' }}>
          <div className='metext'><p className='metextcontent'>I wish I believed in me like you believe in me. But I don't. I'm never enough of anything, except asshole.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page1 - 1), end: (page1 - .5) }} style={{ ...alignCentergreen, top: '68vh' }}>
          <div className='metext'><p className='metextcontent'>It's my birthday mom.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page1 - .5), end: (page1 - .5) }} style={{ ...alignCentergreen, top: '80vh' }}>
          <div className='metext'><p className='metextcontent'>But you know that.</p></div>
        </ParallaxLayer>

        {/*PAGE2*/}

        <ParallaxLayer sticky={{ start: (page2 - 4), end: (page2 - .5) }} style={{ ...alignCentergreen, top: '8vh' }}>
          <div className='metext'><p className='metextcontent'>It’s my birthday, and I’m here, alone, in this huge, cold city.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page2 - 3), end: (page2 - .5) }} style={{ ...alignCentergreen, top: '20vh' }}>
          <div className='metext'><p className='metextcontent'>And I want your french toast.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page2 - 2), end: (page2 - .5) }} style={{ ...alignCentergreen, top: '32vh' }}>
          <div className='metext'><p className='metextcontent'>And I can't have it.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page2 - 1.5), end: (page2 - .5) }} style={{ ...alignCentergreen, top: '44vh' }}>
          <div className='metext'><p className='metextcontent'>I can’t have it, because you can’t make it anymore.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page2 - 1), end: (page2 - .5) }} style={{ ...alignCentergreen, top: '56vh' }}>
          <div className='metext'><p className='metextcontent'>And IHOP’s french toast tastes like shit compared to yours.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page2 - .5), end: (page2 - .5) }} style={{ ...alignCentergreen, top: '68vh' }}>
          <div className='metext'><p className='metextcontent'>They’re a fucking mess over there at IHOP, mom, I tell you what.</p></div>
        </ParallaxLayer>

        {/*PAGE3*/}

        <ParallaxLayer sticky={{ start: (page3 - 5), end: (page3 - .5) }} style={{ ...alignCentergreen, top: '8vh', height: '18vh' }}>
          <div className='metext'><p className='metextcontent'>The food isn’t made with love, and not a single waitress is even close to as pretty or as smart as you are, mom. They don't make Monty Python references I won't get. They never send me New York Times articles about things I said liked in passing five years ago. I've never gotten a spiderman plushie with my pancakes.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page3 - 4), end: (page3 - .5) }} style={{ ...alignCentergreen, top: '28vh' }}>
          <div className='metext'><p className='metextcontent'>And while this is admittedly less relevant to you, they keep changing their fucking name.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page3 - 3), end: (page3 - .5) }} style={{ ...alignCentergreen, top: '40vh', height: '8vh' }}>
          <div className='metext'><p className='metextcontent'>IHOB.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page3 - 2), end: (page3 - .5) }} style={{ ...alignCentergreen, top: '50vh' }}>
          <div className='metext'><p className='metextcontent'>If you owned a multinational breakfast restaurant chain, you’d never pull stupid stunts like that, mom.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page3 - 1.5), end: (page3 - .5) }} style={{ ...alignCentergreen, top: '62vh', height: '15vh' }}>
          <div className='metext'><p className='metextcontent'>You’d just wait at the door, and you’d be knitting, and you’d be telling everyone how strong your triceps you used to be when you milked cows, and they’d be so happy listening to you, like I always am.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page3 - 1), end: (page3 - .5) }} style={{ ...alignCentergreen, top: '78vh', height: '8vh' }}>
          <div className='metext'><p className='metextcontent'>And when I walked in?</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page3 - .5), end: (page3 - .5) }} style={{ ...alignCentergreen, top: '88vh', height: '8vh' }}>
          <div className='metext'><p className='metextcontent'>Too late, after being too busy, too many times?</p></div>
        </ParallaxLayer>

        {/*PAGE4*/}

        <ParallaxLayer sticky={{ start: (page4 - 5), end: (page4 - 1) }} style={{ ...alignCentergreen, top: '8vh' }}>
          <div className='metext'><p className='metextcontent'>You’d make me feel like I was the best son a mother could have, or ever want.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page4 - 4), end: (page4 - 1) }} style={{ ...alignCentergreen, top: '20vh' }}>
          <div className='metext'><p className='metextcontent'>Because all you ever wanted was for me to be happy.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page4 - 3), end: (page4 - 1) }} style={{ ...alignCentergreen, top: '32vh' }}>
          <div className='metext'><p className='metextcontent'>But you don’t own IHOP.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page4 - 2), end: (page4 - 1) }} style={{ ...alignCentergreen, top: '44vh' }}>
          <div className='metext'><p className='metextcontent'>And you won’t.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page4 - 1.5), end: (page4 - 1) }} style={{ ...alignCentergreen, top: '56vh' }}>
          <div className='metext'><p className='metextcontent'>And you never will.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page4 - 1), end: (page4 - 1) }} style={{ ...alignCentergreen, top: '68vh' }}>
          <div className='metext'><p className='metextcontent'>And I’ll never see you again, and I miss you so so much mom, and I’m so so goddamn sorry.</p></div>
        </ParallaxLayer>

        {/*PAGE5*/}

        <ParallaxLayer sticky={{ start: (page5 - 2), end: (page5) }} style={{ ...alignCentergreen, top: '8vh' }}>
          <div className='metext'><p className='metextcontent'>I hope you can see the hawks from up there mom.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page5 - 1), end: (page5) }} style={{ ...alignCentergreen, top: '20vh' }}>
          <div className='metext'><p className='metextcontent'>Lord knows they deserve you more than I do.</p></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: (page5), end: (page5) }} style={{ top: '32vh' }}>
          <div style={{
            color: 'red', marginLeft: '58vw', justifyContent: 'right', textAlign: 'right',
            width: '40vw', backgroundSize: '100% 100%', minHeight: '5vh', display: 'flex', alignItems: 'left', paddingLeft: '1.5vw'
          }}><p style={{ textAlign: 'center' }}>Not delivered</p><img src={nd} alt="" style={{ height: '2.5vh', paddingLeft: '.3vw' }} /></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: page5 + 1, end: pages }} style={{ top: '2vh', height: '80vh', marginLeft: '10vw', width: '80vw', textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
          <h2>As I cross the DuSable bridge, the brisk night’s crisp river air fills my beaten lungs with a soothing, cleansing chill. <br /><br /> I throw my pack in the river.</h2>
        </ParallaxLayer>
      </Parallax>
    </div >
  )
}

export default FrenchToast
