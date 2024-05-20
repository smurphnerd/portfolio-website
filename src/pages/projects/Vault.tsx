import { Project } from ".";
import { FlutterIcon } from "../../assets/icons";
import { VaultThumbnail } from "../../assets/thumbnails";
import { InTextAnchor } from "../../components/InTextAnchor";

const Vault: Project = {
  thumbnail: VaultThumbnail,
  title: "Vault app",
  client: "Vault payments",
  blurb:
    "A rewards card app that allows businesses to securely issue branded Mastercards to their employees and customers. Conditions can be placed on these cards to restrict how they can be used.",
  route: "vault",
  about: (
    <>
      <p>
        This was a project I did at my placement at
        <InTextAnchor href="https://seventhbeam.com/" text="Seventh Beam." />
        Seventh Beam had been hired to merge Vault's two separate native
        iOS/Android applications into a single app built with Flutter.
      </p>
      <p>
        Working on Vault allowed me to gain a better understanding of the entire
        lifespan of a project. I was able to see just how important each role in
        a team really is - not just the developers. My role on the team was to
        help out with the frontend where I worked on developing UIs and data
        mapping. Using a new language like Flutter as well as having to work
        with APIs allowed me to learn new concepts like states, refs and future
        functions.
      </p>
      <p>
        Overall, I'm really thankful for the mentors I had during this project
        who continued to provide me with difficult challenges and push me out of
        my comfort zone. Thanks to them, I was able to learn a great deal.
      </p>
    </>
  ),
  techSheet: ["Flutter"],
  resources: [
    <>
      Check out the
      <InTextAnchor href="https://www.vaultps.com.au/" text="Vault app" />
    </>,
  ],
  languages: [FlutterIcon],
  date: "March - June 2023",
};

export default Vault;
