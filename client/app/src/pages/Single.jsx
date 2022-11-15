import React from "react";
import Edit from "../img/edit.gif";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1668396855491-8fc25bc7f6f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1668366322537-f63f5c1e62c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <div className="info">
            <span>Houcine Ncib</span>
            <p>Posted 2 day ago</p>
          </div>
          <div className="edit">
            <Link to={`/write/?edit=2`}>
              <img
                src={Edit}
                alt=""
              />
            </Link>

            <img
              src={Delete}
              alt=""
            />
          </div>
        </div>
        <h1>To the Left of Normal</h1>
        <p>
          Alex rode a rollercoaster in the fall — the Cyclone, on Coney Island.
          Until that day he knew for a fact he was afraid of heights, thanks to
          a panic attack on a Disney World ride years before. But after he was
          diagnosed with OCD at sixteen, he began to keep a journal. As he
          started to recover, he wrote down everything he knew about himself:
          his favorite season (winter), his favorite color (red), the bands that
          he liked, his biggest fears. And as his illness receded, he found that
          the answers changed. His preferred season became spring; his color of
          choice, yellow. And he realized that he wasn’t afraid of heights. Or
          of people, or of staying alive after all. A miserable prologue: That’s
          how Alex defines every moment before he broke down in his boarding
          school bedroom, crying and vomiting for two long days until the school
          doctor asked him the question he didn’t know he’d been waiting to
          answer: Do you think you might need help? Before his diagnosis, he
          believed he just wasn’t built to function in society. “It was a relief
          to know it had a name,” he said. “And that other people had it.”
          Alex’s existence was OCD. He divided the world into multiples of
          three. He touched objects three times, repeated mantras three times,
          recited lines from books three times. And then he obsessed, calling or
          texting his father, who is a doctor, several times an hour with fears
          about his health. There wasn’t space left in his brain for anything
          else. He didn’t have friendships. He didn’t have hobbies. He went
          through the motions for show — playing sports, excelling at school.
          “There was no real person doing those things,” he said. “I learned to
          act how a normal kid should, but it was all a façade.” The façade
          wasn’t entirely effective. Alex’s schoolmates didn’t realize he was
          ill, but they did realize something was off. “I was bullied for
          twitching, for being strange, for being a nerd, for being reclusive,
          for hanging round the teachers,” he said. “I was stuffed in a locker
          once.” After touching a door handle or shaking someone’s hand, Alex
          would hastily sanitize his hands with Purell. “I couldn’t focus until
          I’d done it,” he said. In the company of others, he’d try to suppress
          the urge for as long as possible, for fear of the mockery that would
          follow. “I would hold out as long as I could until my mind exploded.”
          He lived numbly. “It was a constant state of a really bad state,” he
          said. “There’d be objectively good days, where from the outside, you’d
          think good things were happening, but it wouldn’t even register with
          me.” The inevitable end, Alex believed, was suicide. He couldn’t
          foresee living past sixteen. He imagined his gears wearing out, his
          engine failing, with no spark of humanity inside to reanimate them.
          The only reason he didn’t try to kill himself was because he was too
          busy obsessing, counting over and over to three. Recovery, through
          cognitive behavioral therapy and medication, was slow and
          excruciating. “If I had a million and one worries and could knock it
          down to a million by the end of the week, that was the biggest
          achievement in the world,” he said. Even now, at twenty-four, he
          considers himself years behind his peers in terms of social
          development. He performs confidence, conceals his conviction that
          he’ll only wind up rejected, and hopes that one day it will become the
          default.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
