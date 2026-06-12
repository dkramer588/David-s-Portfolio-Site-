import CaseStudyBlocks from "@/components/CaseStudyBlocks";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import TwoVideoRow from "@/components/TwoVideoRow";

export const metadata = {
  title: "COD:M Esports — Influencer · David Kramer",
  description: "The creator pipeline that grew organic global reach for COD: Mobile esports.",
};

const twoVideoRow = (
  <TwoVideoRow
    videos={[
      {
        videoId: "Wty_66VIJFU",
        caption:
          "Highly requested in comment sections, Learn Gaming was the first creator from India to be featured on a COD official channel.",
      },
      {
        videoId: "LhxPKvwX9_I",
        caption:
          "Recent world championship winner Vaguee paired with established COD creators for validation and reach that grew his following off the back of that recognition.",
      },
    ]}
  />
);

export default function EsportsInfluencerPage() {
  return (
    <CaseStudyBlocks
      blocks={[
        {
          number: "01",
          label: "The Incubator",
          title: "The Community First Pipeline Earning Organic Global Reach",
          body: (
            <p>
              I featured rising competitive players on the esports YouTube channel, giving them visibility and growing
              their followings organically. The best of them graduated into the formal creator club, where they began
              making content for the main COD: Mobile channel. What started as grassroots recognition became a
              structured pipeline that fed new talent into the program year over year.
            </p>
          ),
          imagePlaceholder: "",
          textOnly: true,
          customRow: twoVideoRow,
        },
        {
          number: "01",
          label: "The Incubator",
          body: (
            <p>
              Dozens of creators came through that pipeline. Organizations grew alongside their creators including
              Tribe Gaming, Andbox, and Wolves Esports who developed their own mobile rosters and creator presences
              because of the ecosystem the World Championship built. The program didn't just produce competitive
              players. It produced new voices that expanded COD:M's global reach.
            </p>
          ),
          caption: "The announcement of Wolves Esports entering Call of Duty Mobile.",
          imagePlaceholder: "Wolves Esports",
          imageSrc: "/Esports/Influencer/ESI-01.jpg",
          reverse: true,
        },
        {
          number: "02",
          label: "Community First by Design",
          title: "The First Time the Community Built Something That Made It Into the Game.",
          body: (
            <>
              <p>
                As the program matured I looked for ways to make the World Championship feel like it belonged to the
                community. For the 2021 World Championship I brought in some of the top COD:M creators to design the
                in-game rewards.
              </p>
              <p>
                It was the first time in COD: Mobile history that influencers designed content that was actually built
                into the game.
              </p>
            </>
          ),
          caption:
            "Integrated into the 2021 launch strategy, behind-the-scenes content to re-engage players while the event was live.",
          imagePlaceholder: "2021 Creator Collab",
          imageContent: <YouTubeEmbed videoId="QnxX1hWDj90" />,
        },
      ]}
      prevSlug={{ href: "/work/codm-esports/social", label: "Social" }}
      nextSlug={{ href: "/#work", label: "Back to Case Studies" }}
    />
  );
}
