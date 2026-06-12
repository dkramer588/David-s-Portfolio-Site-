import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata = {
  title: "Coeur Sports — Content Strategy · David Kramer",
  description: "Direct response video + community content strategy. 8.48x ROAS, 10.28% profit lift.",
};

export default function CoeurSportsPage() {
  return (
    <CaseStudyLayout
      tags={["Content Strategy", "Paid Media", "Social"]}
      title="Coeur Sports"
      subtitle="Coeur Sports had a product worth buying and a message worth believing in. I built the strategy that turned both into a campaign, starting with direct response video that proved the product, then evolving into a community of real women who carried the brand forward on their own terms."
      meta="Coeur Sports"
      heroBg="linear-gradient(135deg, #0a0a14 0%, #1a0a1a 50%, #0a0814 100%)"
      heroImage="/Coeur%20Sports/SC-banner.jpg"
      metrics={[
        { value: "8.48x",   label: "Return on Ad Spend",  accent: true },
        { value: "10.28%",  label: "Profit Lift",         accent: true },
        { value: "2",       label: "Phase Campaign",      accent: true },
      ]}
      blocks={[
        {
          number: "01",
          label: "The Brief",
          title: "A Great Product Wasn't Enough to Drive Sales",
          body: (
            <p>Coeur Sports releases a new line of women's cycling and triathlon apparel every season. The audience was defined but there was no strategy that drove awareness. They needed a campaign that would drive awareness and retain customers from season to season.</p>
          ),
          caption: "A brand with a loyal following and a product that performed. The missing piece was a campaign built to convert.",
          imagePlaceholder: "Brand Overview",
          imageSrc: "/Coeur%20Sports/CS-001.jpg",
          reverse: true,
        },
        {
          number: "02",
          label: "The Strategy",
          title: "Prove the Product + Build the Community",
          body: (
            <p>I identified two distinct jobs the campaign needed to do. Phase one, prove the product through direct response video built to convert. Phase two, shift to something longer lasting: real women who found the brand organically and believed in what it stood for.</p>
          ),
          caption: "Direct response to build the top of funnel awareness.",
          imagePlaceholder: "Strategy",
          imageSrc: "/Coeur%20Sports/CS-02.jpg",
        },
        {
          number: "03",
          label: "The Creative",
          title: "Individual Garments. Real Women. No Filler.",
          body: (
            <>
              <p>I led the development of a direct response video series where each asset built around a single garment, styled with intention. Quick cuts, bold lighting, movement. Every frame is designed to stop the scroll and make the product impossible to ignore.</p>
              <p>Once purchase intent was established I shifted the strategy toward loyalty. I developed a content series built around real Coeur Sports customers, women who had discovered the brand on their own and loved what it stood for. They were invited to share why they showed up, what they trained for, and why this brand felt like theirs.</p>
            </>
          ),
          caption: "Community voices delivered brand trust and loyalty.",
          imagePlaceholder: "Creative",
          imageSrc: "/Coeur%20Sports/CS-03.jpg",
          reverse: true,
        },
        {
          number: "04",
          label: "The Result",
          title: "A Campaign That Paid Back and a Community That Stayed",
          body: (
            <>
              <p>The product earned the click. But what kept women coming back season after season was the story behind it. By building a funnel that moved from direct response into genuine human narrative, the campaign created an emotional investment in a brand.</p>
              <p>Women saw the ad, bought the product, then saw themselves in the content that followed.</p>
            </>
          ),
          imagePlaceholder: "Result",
          imageSrc: "/Coeur%20Sports/CS-gif.gif",
        },
      ]}
      prevSlug={{ href: "/work/seasons", label: "Train To Nowhere" }}
      nextSlug={{ href: "/#work", label: "Back to Case Studies" }}
    />
  );
}
