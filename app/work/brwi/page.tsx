import CaseStudyLayout from "@/components/CaseStudyLayout";
import BRWICreatorCards from "@/components/BRWICreatorCards";

export const metadata = {
  title: "BRWI — Battle Royale Worlds Invitational · David Kramer",
  description: "Cross-community influencer architecture. +30% DAU, 12M+ organic impressions.",
};

export default function BRWIPage() {
  return (
    <CaseStudyLayout
      tags={["Influencer", "Community", "Social"]}
      title="Battle Royale Worlds Invitational"
      subtitle="A global creator tournament built for COD: Mobile's second anniversary. 200 creators across 4 regions, pairing our talent with top names from competing titles. No paid media. Pure organic reach that converted competitor audiences into COD: Mobile players at scale."
      meta="COD: Mobile · 2021"
      metaColor="rgba(255, 198, 0, 0.65)"
      heroBg="linear-gradient(135deg, #180808 0%, #2e0e0e 50%, #120404 100%)"
      heroImage="/brwi-hero.jpg"
      metrics={[
        { value: "+30%", label: "DAU Increase",        accent: true },
        { value: "12M+", label: "Organic Impressions", accent: true },
        { value: "200",  label: "Creators",            accent: true },
        { value: "4",    label: "Global Regions",      accent: true },
      ]}
      blocks={[
        {
          number: "01",
          label: "The Moment",
          title: "A Business Goal Became a Cultural Moment",
          body: (
            <p>COD: Mobile's second anniversary needed to drive DAU. I quickly realized promoting new features and cosmetics alone wouldn't move the needle. This was an opportunity to create a moment that mobile shooter fans would want to be a part of regardless of what game they played.</p>
          ),
          caption: "A new map and cosmetics were the product. This helped shape the campaign wrapper.",
          imagePlaceholder: "Campaign Key Art",
          imageSrc: "/brwi-01.jpg",
          reverse: true,
        },
        {
          number: "02",
          label: "The Audience",
          title: "The App Store Pointed the Way. The Creators Were the Destination.",
          body: (
            <>
              <p>Player data from Google showed that mobile shooter players weren't loyal. 34% of shooter players played multiple games in the genre compared to 19% of comparable genres. That told me there was an audience of current mobile players ready to convert or return to COD: Mobile.</p>
              <p>I went to the creators. To replicate the pattern I saw I needed to meet them in the environment where that fluidity already existed. The opportunity was to give competitor title creators a COD: Mobile story worth telling, not a paid promotion.</p>
            </>
          ),
          imagePlaceholder: "Audience Insight",
          imageContent: <BRWICreatorCards />,
          caption: "Creator spotlight",
        },
        {
          number: "03",
          label: "The Campaign",
          title: "I Gave Every Creator a Story Worth Following",
          body: (
            <>
              <p>I built a program where the journey was the campaign, and COD: Mobile was the playground. No overt CTAs, just a story to follow.</p>
              <p>200 creators selected across NA, LATAM, EMEA, APAC. Massive creators from PUBG, Apex, FreeFire, Fortnite, Console/PC COD were paired with a COD:M creator to compete in the event. A 30-day preheat window generated hundreds of hours of content as teams practiced for their shot at a $100k prize.</p>
            </>
          ),
          caption: "The preheat wasn't support for the campaign. It was the campaign.",
          imagePlaceholder: "Tournament Still",
          imageSrc: "/brwi-03.jpg",
          reverse: true,
        },
        {
          number: "04",
          label: "The Program",
          title: "The Battle Royale Worlds Invitational Weekend",
          body: (
            <p>Four broadcasts, four regions. One massive live weekend on COD: Mobile's social and YouTube channels. Local language streams on COD: Mobile regional YouTube channels. Creator channels ran concurrent streams to their own audiences.</p>
          ),
          caption: "Every region had its own moment. Every creator brought their own audience to it.",
          imagePlaceholder: "Broadcast Highlight",
          imageSrc: "/brwi-04.jpg",
        },
        {
          number: "05",
          label: "The Results",
          title: "Audiences That Were Never Ours Became Ours",
          body: (
            <p>Competitor title audiences converted into COD: Mobile players at scale. Dozens of non-endemic creators gained significant COD: Mobile followings as a direct result of the event, making them activatable for future campaigns. The 2nd anniversary season became the highest monetizing season to date.</p>
          ),
          caption: "A marketing beat that found an audience that were never ours to begin with and left behind a creator pipeline we could use again.",
          imagePlaceholder: "End Result",
          imageSrc: "/brwi-05.gif",
          reverse: true,
        },
      ]}
      videoPanel={{ label: "Watch the event", image: "/brwi-video.jpg", url: "https://www.youtube.com/live/GVOHAVcMTlc?si=kL5maLVwIGmafFgF&t=789" }}
      prevSlug={{ href: "/#work", label: "Back to Case Studies" }}
      nextSlug={{ href: "/work/codm-esports", label: "COD:M Esports" }}
    />
  );
}
