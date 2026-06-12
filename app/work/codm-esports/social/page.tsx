import CaseStudyBlocks from "@/components/CaseStudyBlocks";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export const metadata = {
  title: "COD:M Esports — Social · David Kramer",
  description: "The social strategy behind the COD: Mobile World Championship — every post earned its place.",
};

export default function EsportsSocialPage() {
  return (
    <CaseStudyBlocks
      blocks={[
        {
          number: "01",
          label: "The Champs Launch Strategy",
          title: "Every Post Had a Job. Every Drop Built the Next One.",
          body: (
            <>
              <p>I developed the social strategy behind every World Championship launch around the philosophy that nothing goes out unless it earns its place.</p>
              <p>Each cycle started with a teaser, seeding press pickup, creator conversation, and building followers from anticipation before the announcement. The rewards reveal came next, embedded inside the first full announcement trailer alongside the qualification dates.</p>
            </>
          ),
          caption: "The annual brand reveal. Every year a new identity, every year a new reason to pay attention.",
          imagePlaceholder: "Champs Launch Teaser",
          imageContent: <YouTubeEmbed videoId="6tb39Vwgz3E" />,
          reverse: true,
        },
        {
          number: "01",
          label: "The Champs Launch Strategy",
          body: (
            <p>Social drove awareness to our target audience and in-game drove action. One connected and synced system to build an emotional investment and offer up some free rewards.</p>
          ),
          caption: "Year over year, the first look at a brand new World Championship identity. The teaser that set the tone for everything that followed.",
          imagePlaceholder: "Social to In-Game Funnel",
          imageContent: <YouTubeEmbed videoId="gGR_xHIg17Q" />,
        },
        {
          number: "01",
          label: "The Champs Launch Strategy",
          body: (
            <p>That system carried all the way through to broadcast. I built a roadmap of posts that walked players from the first teaser through every qualifying moment to the live broadcast. By the time the broadcast aired, players weren't just watching. They were already invested in the outcome.</p>
          ),
          caption: "The 2022 World Championship brand reveal. A new visual world dropped before a single date or reward was announced.",
          imagePlaceholder: "2022 Brand Reveal",
          imageContent: <YouTubeEmbed videoId="fYSSB_XmrwU" />,
          reverse: true,
        },
        {
          number: "02",
          label: "The Esports YouTube Channel",
          title: "A Home For The Right Content and The Right Audience",
          body: (
            <p>As the program grew I identified a problem. The Esports Player needed content built specifically for them but putting it on the main COD: Mobile channel meant competing with seasonal launches and monetization posts. The messaging would get lost and the main channel's cadence would get cluttered.</p>
          ),
          caption: "The final stop in the social funnel, providing content for players who made COD:M part of their lifestyle.",
          imagePlaceholder: "Esports YouTube Channel",
          imageSrc: "/Esports/Social/ESSocial-001.jpg",
        },
        {
          number: "02",
          label: "The Esports YouTube Channel",
          body: (
            <>
              <p>The channel ran a full programming slate built around community voices and what the Esports Player actually wanted to watch. Talk shows, tips and tricks series, player profiles, mini-documentaries, team interviews, and more tournaments provided a reason to show up every week.</p>
              <p>The channel's following guaranteed year over year the World Championship would have an audience to bring back into the game and secure viewership.</p>
            </>
          ),
          caption: "The content that kept the Esports Player coming back between World Championship seasons.",
          imagePlaceholder: "Channel Programming",
          imageSrc: "/Esports/Social/ESSocial-002.jpg",
          reverse: true,
        },
      ]}
      prevSlug={{ href: "/work/codm-esports", label: "The Story" }}
      nextSlug={{ href: "/#work", label: "Back to Case Studies" }}
    />
  );
}
