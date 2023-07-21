import Project from "../../components/Project";
import { VaultThumbnail } from "../../assets/thumbnails";
import { Helmet } from "react-helmet";

const Vault = () => {
  return (
    <>
      <Helmet>
        <title>Vault</title>
      </Helmet>
      <Project
        thumbnail={VaultThumbnail}
        title="Vault app"
        client="Vault payments"
        blurb="A rewards card app that allows businesses to securely issue branded Mastercards to their employees and customers. Conditions can be placed on these cards to restrict how they can be used."
        about={
          <>
            <p>
              This is a project I'm doing at my placement at&nbsp;
              <a href="https://seventhbeam.com/" target="blank">
                Seventh beam
              </a>
              . Seventh Beam has been hired to merge Vault's two separate native
              iOS/Android applications into a single app built with Flutter.
            </p>
            <p>
              Working on Vault has allowed me to gain a better understanding of
              the entire lifespan of a project. I've been able to see just how
              important each role in a team really is - not just the developers.
              My role on the team is to help out with the frontend where I work
              on developing UIs and data mapping. Using a new language like
              Flutter as well as having to work with APIs has allowed me to
              learn new concepts like states, refs and future functions.
            </p>
            <p>
              Overall, I'm really thankful for the mentors I've had during this
              project who continue to provide me with difficult challenges and
              push me out of my comfort zone. Thanks to them, I've been able to
              learn a great deal.
            </p>
          </>
        }
        techSheet={["Flutter"]}
        resources={[
          <>
            Check out the&nbsp;
            <a href="https://www.vaultps.com.au/products/" target="blank">
              Vault app
            </a>
          </>,
        ]}
        otherProjects={{ next: "butterfly-effect", previous: "ilearn" }}
      />
    </>
  );
};

export default Vault;
