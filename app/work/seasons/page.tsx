import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata = {
  title: "Train To Nowhere — COD: Mobile Season 8 · David Kramer",
  description: "A Bond-inspired spy universe unifying a seasonal game theme and a new subscription product. COD: Mobile's first Clio Award.",
};

export default function SeasonsPage() {
  return (
    <CaseStudyLayout
      tags={["Creative", "Social", "Product Marketing"]}
      title="Train To Nowhere"
      subtitle="While leading 30+ season launches, developing this Bond-inspired spy universe was my favorite. My positioning and creative unified a game theme and a new subscription model to build a world players showed up for."
      meta="COD: Mobile · Season 8"
      metaColor="rgba(255, 198, 0, 0.65)"
      heroBg="linear-gradient(135deg, #080c18 0%, #0e1a2e 50%, #04080f 100%)"
      heroImage="/Train%20To%20Nowhere/TTN-Banner.jpg"
      metrics={[
        { value: "+15%", label: "Battle Pass Conversion", accent: true },
        { value: "+30%", label: "Revenue",                accent: true },
        { value: "Clio", label: "Award Winner",           accent: true },
      ]}
      blocks={[
        {
          number: "01",
          label: "The Moment",
          title: "Monetization Needed a Better Story",
          body: (
            <>
              <p>Season 8's new features were built to increase the average player spend. Yet, social data showed a loss in followers when overly pushing monetization features.</p>
              <p>I identified an opportunity to reward current spending player loyalty by building something they'd want to be part of, an exclusive world that felt made for them, brought to life on our social channels and in-game, where this audience consumes content.</p>
            </>
          ),
          caption: "The season wrapper all originated from the positioning I wrote before a single asset was made.",
          imagePlaceholder: "Season Key Art",
          imageSrc: "/Train%20To%20Nowhere/TTN-01.jpg",
        },
        {
          number: "02",
          label: "The Wrapper",
          title: "Built to Provide Value From Exclusivity",
          body: (
            <>
              <p>The content team had a spy theme. The product team had a new Battle Pass subscription model. Neither was talking to the other.</p>
              <p>I built the world that made them one. Starting with the spy theme, I developed a Bond-inspired gala universe defining the aesthetic, the narrative, and the identity that would run through every touchpoint. The spies needed a name. I called them the Ground Forces. The Battle Pass subscription became your ticket into the coveted club.</p>
            </>
          ),
          caption: "In game Battle Pass subscription purchase page.",
          captionOverlay: 52,
          imagePlaceholder: "Creative Brief",
          imageSrc: "/Train%20To%20Nowhere/TTN-02.jpg",
          imagePosition: "top",
          reverse: true,
        },
        {
          number: "02",
          label: "The Wrapper",
          body: (
            <p>Then came the season name. A COD fan-favorite train map was added in. I took that content, ran it through the Bond lens, and named the season Train to Nowhere, a classic spy movie-like title rooted in something players were already excited about.</p>
          ),
          caption: "A creative brief built to make every element of the season feel like it belonged to the same world.",
          imagePlaceholder: "Season Name Creative",
          imageSrc: "/Train%20To%20Nowhere/TTN-03.jpg",
        },
        {
          number: "03",
          label: "The Creative",
          title: "Every Asset Lived Inside the Same World",
          body: (
            <p>Every asset I built, from the season trailer, key art, app store, social, and in-game creative, lived inside the same narrative world. The Ground Forces identity ran from the out-of-game assets through to the in-game store, creating a cohesive experience players moved through rather than marketing they scrolled past.</p>
          ),
          caption: "In-game Battle Pass subscription purchase page.",
          imagePlaceholder: "In-Game Creative",
          imageSrc: "/Train%20To%20Nowhere/TTN-04.gif",
          reverse: true,
        },
        {
          number: "04",
          label: "The Result",
          title: "The Creative Platform That Set the Standard",
          body: (
            <p>Players showed up for the world, followed the narrative, and spent because the monetization mechanic became the best way to experience the lore. The season trailer set the bench mark for highest organic views.</p>
          ),
          caption: "The Ground Forces continued on as the Battle Pass subscription branding permanently.",
          captionOverlay: 52,
          imagePlaceholder: "Result",
          imageSrc: "/Train%20To%20Nowhere/TTN-07.jpg",
        },
      ]}
      videoPanel={{ label: "Watch the trailer", image: "/Train%20To%20Nowhere/TTN-08.jpg", url: "https://youtu.be/TFRxIPfMXyI?si=WdQQXl5H6UB3bsz0" }}
      prevSlug={{ href: "/work/brwi", label: "BRWI" }}
      nextSlug={{ href: "/work/codm-esports", label: "COD:M Esports" }}
    />
  );
}
