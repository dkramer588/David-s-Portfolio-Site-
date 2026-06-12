import CaseStudyBlocks from "@/components/CaseStudyBlocks";

export const metadata = {
  title: "COD:M Esports — Partnerships · David Kramer",
  description: "The sponsorship strategy behind the COD: Mobile World Championship — Sony Mobile, Razer, ASUS ROG, and beyond.",
};

export default function EsportsPartnershipsPage() {
  return (
    <CaseStudyBlocks
      blocks={[
        {
          number: "01",
          label: "The Sony Mobile Partnership",
          title: "Authentic Access to an Audience Sony Couldn't Reach Alone",
          body: (
            <>
              <p>I developed the concepts, activations, and deliverables that made the Sony Mobile title sponsorship worth signing. The goal was to give Sony direct access to the esports player and the regional reach the World Championship had built.</p>
              <p>The activations I developed included a pick-em bracket sweepstakes hosted on Sony's Xperia site to drive traffic and collect emails, and influencer device reviews where top COD:M creators posted honest testimonials of the Xperia phone to their own channels, reaching the exact demographic Sony was targeting.</p>
            </>
          ),
          caption: "Creator-led device reviews deployed to COD:M's highest-engaged audience and used in broadcast segments.",
          imagePlaceholder: "Sony Creator Reviews",
          imageSrc: "/Esports/Partnerships/ESP-01.jpg",
          reverse: true,
        },
        {
          number: "01",
          label: "The Sony Mobile Partnership",
          body: (
            <p>Logo lockups ran across broadcasts, in-game events, and even featured on the maps while tens of millions of players were participating in the event. Sony reported significant bumps in device sales following each partnered campaign.</p>
          ),
          caption: "Sony Mobile branding integrated directly into the maps players competed on.",
          imagePlaceholder: "Sony In-Map Branding",
          imageSrc: "/Esports/Partnerships/ESP-02.jpg",
        },
        {
          number: "02",
          label: "Broadcast Sponsorships",
          title: "Packaging Esports Inventory Into Signed Deals",
          body: (
            <p>I built and delivered sponsorship packages that covered the cost of running the program. The inventory I helped develop and pitch included product placements, caster shoutouts, shoulder content, branded segments, and made-for-broadcast ads.</p>
          ),
          caption: "Razer sponsorship on caster desk, product placement used by players.",
          imagePlaceholder: "Razer Broadcast Sponsorship",
          imageSrc: "/Esports/Partnerships/ESP-03.jpg",
          reverse: true,
        },
        {
          number: "02",
          label: "Broadcast Sponsorships",
          body: (
            <p>Each deal was built around the same principle: giving partners meaningful access to the esports player through formats that served the broadcast rather than interrupting it. The sponsorship revenue those deals generated helped fund the program and validated the audience we had built as a commercially attractive one.</p>
          ),
          caption: "ASUS ROG used in 2022 and secured due to the recognition of the Sony sponsorship success.",
          imagePlaceholder: "ASUS ROG Sponsorship",
          imageSrc: "/Esports/Partnerships/ESP-04.jpg",
        },
      ]}
      prevSlug={{ href: "/work/codm-esports/influencer", label: "Influencer" }}
      nextSlug={{ href: "/#work", label: "Back to Case Studies" }}
    />
  );
}
