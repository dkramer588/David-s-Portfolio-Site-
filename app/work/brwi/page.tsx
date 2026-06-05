import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata = {
  title: "BRWI — Battle Royale Worlds Invitational · David Kramer",
  description: "Cross-community influencer architecture. +30% DAU, 12M+ organic impressions.",
};

export default function BRWIPage() {
  return (
    <CaseStudyLayout
      tags={["Community", "Influencer"]}
      title="Battle Royale Worlds Invitational"
      meta="COD: Mobile · 2021"
      heroBg="linear-gradient(160deg, #180808 0%, #300f0f 55%, #110404 100%)"
      metrics={[
        { value: "+30%", label: "DAU Increase" },
        { value: "12M+", label: "Organic Impressions" },
        { value: "200",  label: "Creators Activated" },
        { value: "4",    label: "Global Regions" },
      ]}
      blocks={[
        {
          number: "01",
          label: "The Moment",
          title: "An anniversary worth showing up for",
          body: "COD: Mobile's second anniversary needed to be more than a content drop. I set out to build a cultural moment in mobile gaming that would re-engage lapsed players and pull high-value audiences in from competing titles.",
          imagePlaceholder: "BRWI Key Art",
          imageIcon: "image",
        },
        {
          number: "02",
          label: "The Audience",
          title: "One community, four games",
          body: "I identified that mobile shooter fans already moved fluidly between titles — watching creators across COD, PUBG, Free Fire, and Apex, and running multiple games simultaneously. This wasn't four separate communities. It was one audience waiting to be spoken to directly.",
          caption: "Creator loyalty crossed title lines. The audience was already there — I just needed to meet them where they lived.",
          imagePlaceholder: "Audience Insight Graphic",
          imageIcon: "chart",
          reverse: true,
        },
        {
          number: "03",
          label: "The Program",
          title: "Built for organic, designed for reach",
          body: "I designed and built a global creator tournament pairing COD: Mobile talent with top creators from competing titles across four regions. No paid amplification. No overt call to action. Organic gameplay content dropped into feeds I'd never otherwise reach.",
          caption: "200 creators. Four regions. One format built entirely around organic content and creator chemistry.",
          imagePlaceholder: "Broadcast Still",
          imageIcon: "video",
        },
        {
          number: "04",
          label: "The Result",
          title: "Competitor audiences converted at scale",
          body: "The event drove a 30% DAU increase and generated 12M+ organic impressions — converting competitor title audiences into COD: Mobile players at scale.",
          caption: "A marketing beat that paid for itself in player acquisition from audiences outside our own ecosystem.",
          imagePlaceholder: "Results Graphic",
          imageIcon: "chart",
          reverse: true,
        },
      ]}
      prevSlug={{ href: "/#work", label: "All Work" }}
      nextSlug={{ href: "/work/codm-esports", label: "COD:M Esports" }}
    />
  );
}
