import CaseStudyLayout from "@/components/CaseStudyLayout";
import BRWIAudienceVisual from "@/components/BRWIAudienceVisual";

export const metadata = {
  title: "BRWI — Battle Royale Worlds Invitational · David Kramer",
  description: "Cross-community influencer architecture. +30% DAU, 12M+ organic impressions.",
};

export default function BRWIPage() {
  return (
    <CaseStudyLayout
      tags={["Influencer", "Community", "Social"]}
      title="Battle Royale Worlds Invitational"
      subtitle="A global creator tournament built for COD: Mobile's second anniversary — 200 creators across 4 regions, pairing our talent with top names from competing titles. No paid media. Pure organic reach that converted competitor audiences into COD: Mobile players at scale."
      meta="COD: Mobile"
      heroBg="linear-gradient(135deg, #180808 0%, #2e0e0e 50%, #120404 100%)"
      metrics={[
        { value: "+30%", label: "DAU Increase",         accent: true },
        { value: "12M+", label: "Organic Impressions",  accent: true },
        { value: "200",  label: "Creators",             accent: true },
        { value: "4",    label: "Global Regions",       accent: true },
      ]}
      blocks={[
        {
          number: "01",
          label: "The Moment",
          title: "More than a content drop",
          body: "COD: Mobile's second anniversary needed to be more than a content drop. I set out to build a cultural moment in mobile gaming that would re-engage lapsed players and pull high-value audiences in from competing titles.",
          caption: "Branded in red — a deliberate shift away from COD: Mobile's signature yellow to signal this was a mobile gaming moment, not just a COD campaign.",
          imagePlaceholder: "Campaign Key Art",
          imageBg: "linear-gradient(145deg, #0e0a06 0%, #1e140a 60%, #120c06 100%)",
          imageIcon: "image",
          reverse: true,
        },
        {
          number: "02",
          label: "The Audience",
          title: "One audience across four titles",
          body: "I identified that mobile shooter fans already moved fluidly between titles — watching creators across COD, PUBG, Free Fire, and Apex, and running multiple games simultaneously. This wasn't four separate communities. It was one audience waiting to be spoken to directly.",
          caption: "Creator loyalty crossed title lines. The audience was already there — I just needed to meet them where they lived.",
          imagePlaceholder: "Creator Roster",
          imageContent: <BRWIAudienceVisual />,
          altBg: true,
        },
        {
          number: "03",
          label: "The Program",
          title: "200 creators. Four regions. One format.",
          body: "I designed and built a global creator tournament pairing COD: Mobile talent with top creators from competing titles across four regions. No paid amplification. No overt call to action. Organic gameplay content dropped into feeds I'd never otherwise reach — through voices those audiences already trusted.",
          caption: "200 creators. Four regions. One format built entirely around organic content and creator chemistry.",
          imagePlaceholder: "Tournament Broadcast Still",
          imageBg: "linear-gradient(145deg, #100808 0%, #220f0f 60%, #140606 100%)",
          imageIcon: "video",
          reverse: true,
        },
        {
          number: "04",
          label: "The Result",
          title: "Converting competitors into players",
          body: "The event drove a 30% DAU increase and generated 12M+ organic impressions — converting competitor title audiences into COD: Mobile players at scale.",
          caption: "A marketing beat that paid for itself in player acquisition from audiences outside our own ecosystem.",
          imagePlaceholder: "Results Broadcast Highlight",
          imageBg: "linear-gradient(145deg, #080e06 0%, #142010 60%, #081008 100%)",
          imageIcon: "chart",
          altBg: true,
        },
      ]}
      prevSlug={{ href: "/#work", label: "Back to Case Studies" }}
      nextSlug={{ href: "/work/codm-esports", label: "COD:M Esports" }}
    />
  );
}
