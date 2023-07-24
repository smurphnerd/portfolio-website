import { Helmet } from "react-helmet";
import { TheButterflyEffectThumbnail } from "../../../assets/thumbnails";
import { Blog } from "../../../components/Blog";
import { BlogImage } from "../../../components/BlogImage";
import CrazyBrainstorm from "./crazy_brainstorm.jpg";
import FamilyTree from "./family-tree.png";
import BflyRegister from "./bfly-register.png";
import BflyFunctions from "./bfly-functions.png";
import TreeDiagram from "./d3js-tree.png";
import { InTextAnchor } from "../../../components/InTextAnchor";
import { YoutubeEmbed } from "../../../components/YoutubeEmbed";

export const TheButterflyEffect: React.FC = () => (
  <>
    <Helmet>
      <title>The Butterfly Effect</title>
    </Helmet>
    <Blog
      thumbnail={TheButterflyEffectThumbnail}
      title="The Butterfly Effect"
      date="Tuesday 2 August 2022"
      body={
        <>
          <p>
            A couple of months ago, I applied for a bunch of tech related
            placements (a requirement for completing my uni degree).
            Unfortunately, since my course leans more towards the Accounting
            side rather than IT, I got rejected from every single one of those
            companies. I started stressing out because by the time I heard back
            from everyone, there were no more applications that were still open.
            At the time, I thought I was going to get kicked out of my course so
            I started frantically typing into the notes app on my phone to try
            to brainstorm a way out of the situation I was in. Like, what were
            my current options? And if I chose one of those options, what were
            the subsequent consequences that could happen? And from <i>those</i>
            &nbsp;consequences, what could happen? And how about what could
            happen from <i>those</i>? I realise while writing this that I sound
            like a crazy control freak, but it was a really stressful situation
            at the time for me.
          </p>
          <p>
            By the end of this crazed brainstorming session, I had realised two
            things. The first thing being that it wasn't the end of the world. I
            would just contact my course's coordinator and see if I could defer
            my placement period to the next semester. And while I wait for the
            next semester to come around, I'd just put my head down and learn as
            much about programming as I could, so that by next semester, I'd
            have so much experience that any company would be crazy not to take
            me on for placement. And that's exactly what I did. The second thing
            I realised was that my notes app was a complete mess. It was a
            miracle I could understand what I had written at all. My trying to
            list out every possibility that could arise from every previous
            possibility forced me to have to label each sentence just so I could
            remember what was connected to what. By the end of it all, I had
            sentences labelled things like '1.2.2.2' and '2.1.2.2.1' just so I
            could understand everything. You know what, since you've been so
            kind to read this far, I'm going to embarrass myself by showing you
            what I'm talking about. I present, Sean's premature mid-life crisis:
          </p>
          <BlogImage src={CrazyBrainstorm} alt="Crazy brainstorm" />
          <p>
            Oh yeah I also wanted to open up my own bar which is why there are a
            bunch of mentions about 'until I have enough money'. Anyway, the
            reason why I bring all this up is because I knew I needed something
            that would allow me to better organise my ideas in a way that didn't
            look like such a mess, and would allow anyone to understand what I
            was talking about without having to 'refer to 2.1.2.2.1'. And so
            sprung my inspiration for 'The Butterfly Effect'.
          </p>
          <p>
            If you want a quick summary of what this app does and some of the
            components it entails, check out this video:
          </p>
          <YoutubeEmbed embedId="33XMdI9fVxc" />
          <p>
            The main idea of this app is that, like that screenshot on my notes
            app, you can express sentences or ideas in a hierarchical structure.
            This can be useful for a number of reasons, a classic example being
            the family tree.
          </p>
          <BlogImage src={FamilyTree} alt="Family tree" />
          <h2>Working on the Project</h2>
          <p>
            All in all, the project took me three and a bit weeks to complete.
            I'm really pleased with how it turned out although there were a few
            additions that I would've liked to add which I'll mention later on.
            The rest of this blog is going to get quite techy so if you're one
            of my friends or family reading this, you might not understand all
            the jargon. Anyway, the tech that was used to build this app was:
          </p>
          <ul>
            <li>
              the
              <InTextAnchor
                href="https://flask.palletsprojects.com/en/2.2.0/"
                text="Flask framework"
              />
            </li>
            <li>sqlite3</li>
            <li>HTML</li>
            <li>CSS, and</li>
            <li>JavaScript.</li>
          </ul>
          <p>
            Flask and sqlite3 are two technologies that were taught to us during
            CS50 which is why I decided to use them in this project. I like to
            think of Flask as being the underlying infrastructure for the app.
            This means that it is responsible for displaying any required pages
            whenever the user makes a GET request as well as taking in, and
            processing any data that the user sends in a POST request. Flask is
            also used for keeping track of cookies and other session data which
            enables the user to maintain their work even if they were to close
            the page.
          </p>
          <p>
            Sqlite3 was the database that was used for keeping track of all user
            data as well as storing any input that the user gives, enabling them
            to save their work. The first part is pretty straightforward. After
            the user registers for an account with a username and password, an
            automatically generated id (the PK), the user's username, and an
            encrypted version of their password (obtained by using
            <InTextAnchor
              href="https://werkzeug.palletsprojects.com/en/2.1.x/utils/"
              text="werkzeug.security"
              afterSpace={false}
            />
            ) are stored in the 'users' table. Having this information is
            necessary to ensure that correct passwords are being given whenever
            a user tries to log onto an account as well as to be able to match
            any information that is given to the owner of that information.
          </p>
          <BlogImage src={BflyRegister} alt="Register page" />
          <p>
            There are two other tables in the database: the 'nodes' table and
            the 'children' table. In this project, a node refers to any piece of
            data that the user provides. In the family tree example, the string
            of text "My family tree" is a node, "Siblings" is a node, "Cait" is
            a node etc. Anytime the user adds a new node to their hierarchical
            tree, there are four pieces of data that get stored in the 'nodes'
            table. An id (PK), the user's id to whom the node belongs (the FK),
            what the message/text is, and a boolean representing whether or not
            the node is the root node (eg. "My family tree" would be a root
            node). The final piece of the puzzle is the 'children' table.
            Without this table, all we have are a bunch of nodes floating around
            that have no relation to one another. For every relationship where a
            parent node has a child node, this relationship is stored in the
            'children' table. For example, there is a relationship between "My
            family tree", which is the parent node of "Siblings" - the child
            node. In the same way, "Siblings" is the parent node of "Cait" - the
            child node. Thus, the 'children' table simply stores the id of the
            parent node as well as the id of the child node.
          </p>
          <p>
            The final part of the project's backend was adding the final
            functionality to give the user full control of their tree. There
            were five main functions the user could work with as seen in the
            image below:
          </p>
          <BlogImage src={BflyFunctions} alt="Functions" />
          <p>
            The plus sign allows the user to create a new root node, ie. start a
            new project. The 'set as default' button works with Flask sessions
            to set and display one of the user's projects as their default
            project. The final three buttons allow the user to add a child to a
            node, edit the message of a node and delete a node respectively. The
            implementation of these functions was pretty straightforward,
            however, the delete function was quite interesting because of the
            fact that if one node is deleted, all of its children must be
            subsequently deleted. This meant that I had to come up with a
            solution to recursively delete all of the node's children before the
            main node could be deleted, which was fun to work on. I always love
            recursion, it makes my brain feel massive.
          </p>
          <p>
            And that's pretty much it for the project's backend. As for the
            frontend, there isn't too much to say. This project allowed me to
            get really comfortable with working with HTML and CSS and learning a
            bunch of cool styling techniques. I no longer have to look up 'how
            to center a div' every 10 minutes which is a plus. The design choice
            was inspired by the VSCode interface (since I'm incapable of coming
            up with original designs myself). I was also forced to learn a lot
            of new JavaScript to get the effects that I wanted including async
            functions so that I would be able to load the user's data tree
            (formatted as a .json file) before prettying it up.
          </p>
          <h2>Final Thoughts</h2>
          <p>
            There are a few things that I would redo or add-on to this project
            if I could travel back in time. I've recently learned about
            something called
            <InTextAnchor
              href="https://flask-sqlalchemy.palletsprojects.com/"
              text="Flask-SQLAlchemy"
            />
            which I'm pretty sure would've made working with databases a lot
            easier than sqlite3. There are also some minor features that I kind
            of got lazy with, such as the app's error messages which are just
            the browser's default pop-up alerts. In my defense, Poptropica uses
            those alerts for their error messages as well, and I'm sure they
            were a multi-million dollar company in their prime. The final thing
            that I would've liked to have added was some sort of more visual
            diagram representation of the user's tree. Something really cool
            like this:
          </p>
          <BlogImage
            src={TreeDiagram}
            alt="Tree diagram from d3js"
            caption={
              <>
                Source:
                <InTextAnchor
                  href="https://bost.ocks.org/mike/fisheye/"
                  text="Mike Bostok"
                />
              </>
            }
          />
          <p>
            I spent over a week trying to learn either the
            <InTextAnchor href="https://d3js.org/" text="d3js" />
            or
            <InTextAnchor href="https://www.elgrapho.com/" text="ElGrapho" />
            framework just so I could have my own graph in the app. But the more
            I learned, the more I realised just how many components were
            actually involved in data visualisation. Making something as simple
            as a graph was nowhere near as easy as I thought it'd be. The reason
            why I scrapped the idea was because, at this time, the rest of the
            project was pretty much complete and I was already really happy with
            it. I knew it would be enough to pass the CS50 final project so I
            didn't think it would be worth going through another couple of weeks
            of learning about data visualisation when I could just submit and
            move onto my next project idea.
          </p>
          <p>
            In any case, I think this project was a really good learning
            experience. I'm a lot more confident in web development now. I am
            considering reworking this website once I find the time, as I know
            there are a lot of flaws in it. Who knows, maybe when you're reading
            this, the rennovations have already taken place and this is one of
            the coolest websites you've ever seen!
          </p>
          <p>
            Also if you're a real person and you've actually read up until the
            end, you're a G. I honestly didn't expect anyone to get this far so
            props to you! &lt;3.
          </p>
        </>
      }
    />
  </>
);
