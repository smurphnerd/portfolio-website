import { Helmet } from "react-helmet";
import { Blog } from "../../../components/Blog";
import { WhyIStartedProgrammingThumbnail } from "../../../assets/thumbnails";
import LossRatio from "./loss-ratio.png";
import Week0CS50 from "./week0-cs50.png";
import FreeCodeCampSolidity from "./freeCodeCamp-solidity.png";
import { BlogImage } from "../../../components/BlogImage";
import { InTextAnchor } from "../../../components/InTextAnchor";

export const WhyIStartedProgramming = () => (
  <>
    <Helmet>
      <title>Why I Started Programming</title>
    </Helmet>
    <Blog
      thumbnail={WhyIStartedProgrammingThumbnail}
      title="Why I Started Programming"
      date="Thursday 16 June 2022"
      body={
        <>
          <p>
            The first time I touched any programming language was over a year
            ago in my uni course’s programming concepts class. It wasn’t a love
            at first sight story at all. I didn’t see the use for learning such
            a thing at the time, so I put in the bare minimum to get the credit.
          </p>
          <p>
            Fast-forward to the 2021 end of year crypto bull run, I get into
            cryptocurrency at one of the worst times possible. Poor investing
            choices aside, I became very intersted in how blockchain worked and
            all of the possibilities for problems that such a technology could
            solve. Also, around this time, I got my first car and was hit with
            the hefty insurance quote (especially because I’d previously had my
            license suspended due to speeding). I refused to accept that car
            insurance could cost this much so I decided to research exactly
            where my money would be going. To my surprise, I found out that
            because of the overhead that insurance companies incur, as well as
            their obligation to their shareholders/investors, only 66% of
            premiums are actually used to payout claims.
          </p>
          <BlogImage
            src={LossRatio}
            alt="66% loss ratio"
            caption={
              <>
                Source:
                <InTextAnchor
                  href="https://assets.kpmg/content/dam/kpmg/au/pdf/2016/general-insurance-industry-review-2016.pdf"
                  text="KPMG insurance industry review"
                />
              </>
            }
          />
          <p>
            This got me wondering whether this could be something that
            blockchain technology could solve which is what led me to
            discovering
            <InTextAnchor href="https://www.etherisc.com/" text="Etherisc" />-
            an open source organisation that develops decentralised insurance
            products. So yeah, the reason why I got into programming was to
            learn blockchain development so that I could build by decentralised
            car insurance to save me that extra $550 per year - I hear how silly
            it sounds as I'm writing this.
          </p>
          <p>
            I realised that if I wanted to become a blockchain developer, I had
            to learn Solidity which is the programming language used in
            Ethereum. Thus, in mid April, the first ever coding course I
            undertook was one of
            <InTextAnchor
              href="https://www.youtube.com/c/Freecodecamp"
              text="freeCodeCamp's"
            />
            Solidity-full-course videos.
          </p>
          <BlogImage
            src={FreeCodeCampSolidity}
            alt="freeCodeCamp video"
            caption={
              <>
                Video:
                <InTextAnchor
                  href="https://youtu.be/M576WGiDBdQ"
                  text="https://youtu.be/M576WGiDBdQ"
                />
              </>
            }
          />
          <p>
            As you can probably guess, this was not the right place for a
            beginner programmer to start learning. While I was able to learn the
            basics of Solidity and blockchain development, the pace at which I
            was learning was painfully slow. I was constantly running into
            environment related issues that would take me hours to figure out
            how to solve. And when reviewing code I had written after a given
            lesson had finished, I found myself having to constantly look up
            what the syntax or concepts meant before I could fully understand
            it. It got to a point where I just became so frustrated that I knew
            I had to dial it back and learn basic programming prerequisites
            first.
          </p>
          <p>
            After taking a step back from Solidity, I decided that maybe Python
            was the language I should learn. After all, Python is also used in
            blockchain development, so it wasn't like I was wasting my time or
            anything. I went through
            <InTextAnchor
              href="https://www.w3schools.com/python/"
              text="w3school's"
            />
            Python tutorial and would read the Python's offical
            <InTextAnchor
              href="https://docs.python.org/3/tutorial/index.html"
              text="docs"
            />
            at any chance I'd get; may that be while on the train to and from
            uni, or in the morning on my mate's mattress, hungover and waiting
            for the others to get up (it's ok, you can judge me). I also did
            some of
            <InTextAnchor
              href="https://www.youtube.com/c/TechWithTim"
              text="Tech With Tim's"
            />
            Python tutorials to help wrap my ahead around Object Oriented
            Programming. I even started this project relating to tree data
            structres which I'm thinking of finishing off and submitting as my
            final CS50 project.
          </p>
          <p>
            Speaking of which, this brings me to the next, and current chapter
            of my programming journey - CS50. In all of the "how to get better
            at coding" videos that would come up on my Youtube recommendations,
            there was always one commonality: CS50. Eventually, on May 23, I
            made my
            <InTextAnchor
              href="https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
              text="edX"
            />
            account and started the course.
          </p>
          <BlogImage src={Week0CS50} alt="cs50 week 0" />
          <p>
            This has been, by far, the best course I have ever taken online or
            in real life. I can't believe that content like this is free. If
            you've somehow found this page and are also wanting to learn
            programming, this is the best way to start. David Malan, the
            lecturer, is such a good teacher and makes every aspect of the
            course feel exciting.
          </p>
          <p>
            But, yeah, that's where I'm at now. Making this website is actually
            cs50's week 8 problem set, so hopefully this passes! After I finish
            this course, I'm hoping I'll have the means necessary to get back
            into Solidity and get my discounted insurance.
          </p>
        </>
      }
    />
  </>
);
