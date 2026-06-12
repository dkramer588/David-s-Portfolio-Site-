import CaseStudyBlocks from "@/components/CaseStudyBlocks";

export const metadata = {
  title: "COD:M Esports — Strategy / Brand / Community · David Kramer",
  description: "Built Activision's first mobile esports program from scratch — 15M+ players annually, 3B+ impressions, a licensed global franchise.",
};

export default function EsportsPage() {
  return (
    <CaseStudyBlocks
      blocks={[
        {
          number: "01",
          label: "The Decision",
          title: "Esports as a Marketing Pillar, Not a Revenue Stream",
          body: (
            <p>When I was brought on to build COD: Mobile's esports program, the industry was treating esports as a business unit yet no league had made it profitable, regardless of popularity. I positioned it differently. A marketing lever built for the game's highest-engaged and highest-monetizing players. Every decision came from that positioning: who we were building for, what they responded to, and how competitive gaming could create moments that grew the game.</p>
          ),
          caption: "The first COD: Mobile World Championship logo and Sony Mobile sponsorship lockup. Where it all started.",
          imagePlaceholder: "Year One Logo",
          imageSrc: "/Esports/The%20Story/ES-01.jpg",
        },
        {
          number: "02",
          label: "The Foundation",
          title: "Built From Zero. Launched to Scale.",
          body: (
            <>
              <p>The only starting point was an interest from Sony Mobile. I negotiated the marketing terms and deliverables for a title sponsorship that gave the program its first major brand partner and funding.</p>
              <p>Year one was the COD: Mobile World Championships. An in-game qualification event drove retention through sign-ups and free rewards, feeding into four regional live broadcasts made up of real players whose teams qualified in-game. I defined the brand, building the visual identity, the in-game look and feel, and the social strategy to drive sign-ups and viewership.</p>
            </>
          ),
          caption: "Year over year, this screen was the gateway. Sign up, compete, earn. The in-game experience I designed to bring every player into the program.",
          imagePlaceholder: "In-Game Sign-Up",
          imageSrc: "/Esports/The%20Story/ES-02.jpg",
          reverse: true,
        },
        {
          number: "02",
          label: "The Foundation",
          body: (
            <p>The first broadcasts aired on the COD: Mobile YouTube channel alongside simultaneous multi-language streams on all-new regional channels, starting the launch strategy I developed for COD: Mobile's first Mexico, Brazil, and Japan social presences.</p>
          ),
          caption: "The first COD: Mobile World Championship broadcast. Watched from my living room at 5am alongside my first team hire and broadcast producer.",
          imagePlaceholder: "First Broadcast",
          imageSrc: "/Esports/The%20Story/ES-03.jpg",
        },
        {
          number: "03",
          label: "The Brand",
          title: "A New Story from In-Game to Global Broadcasts",
          body: (
            <p>Year one proved the marketing model earning high-monetizing player retention, esports press coverage, and broadcast viewership exceeding competitor titles. That secured the World Championships as a permanent yearly beat. Each year I rebuilt the World Championship wrapper and theme with new creative direction, branding, and its social strategy. The identity I developed defined the in-game event, the rewards, and the live broadcasts end to end.</p>
          ),
          caption: "Three years of World Championship branding, each one designed to make the program feel like a new cultural moment, not a recurring calendar event.",
          imagePlaceholder: "World Championship Branding",
          imageSrc: "/Esports/The%20Story/ES-04.jpg",
          reverse: true,
        },
        {
          number: "03",
          label: "The Brand",
          body: (
            <p>I grew my team, oversaw broadcast productions, and embedded the World Championships into the Live Service calendar as an unmissable moment. Players didn't just watch. They anticipated the new narrative, chased the rewards, and followed the teams. A new player cohort formed around it: the Esports Player, the game's highest average revenue spenders.</p>
          ),
          caption: "The fandom made real. Pro players and influencers side by side at the 2022 live event.",
          imagePlaceholder: "2022 Live Event",
          imageSrc: "/Esports/The%20Story/ES-05.jpg",
        },
        {
          number: "04",
          label: "The Community",
          title: "Expanding the Voices That Made the Fandom Real",
          body: (
            <p>As the program grew I launched dedicated esports social channels with a year-round content cadence that gave fans a reason to show up between World Championship events. Those channels became a creator incubation pipeline as fans rallied behind featured players, growing their followings organically.</p>
          ),
          caption: "Home base for the world's most engaged mobile esports community.",
          imagePlaceholder: "Esports Social Channels",
          imageSrc: "/Esports/The%20Story/ES-06.gif",
          reverse: true,
        },
        {
          number: "04",
          label: "The Community",
          body: (
            <p>Its popularity drove regional expansion. North America, Europe, LATAM, MENA, Japan, India, China, and the Philippines each earned their own live broadcasted regional playoff, feeding into a live in-person grand finals.</p>
          ),
          caption: "Raleigh, North Carolina. The first live in-person World Championship stage. Empty before the storm.",
          imagePlaceholder: "Raleigh Stage",
          imageSrc: "/Esports/The%20Story/ES-07.jpg",
        },
        {
          number: "05",
          label: "The Payoff",
          title: "What Started in a Living Room Became a Licensed Franchise",
          body: (
            <>
              <p>The program grew into a fully realized esports organization with its own fandom, content pipeline, creator ecosystem, and cultural identity inside the game. The community outlasted the moments that created it.</p>
              <p>The COD: Mobile World Championship earned two Tempest Awards and three Esports Awards nominations. Eventually the World Championship was licensed out. What began as a marketing investment had become a property valuable enough to stand on its own, continuing to keep the game's highest-monetizing players long after I built it.</p>
            </>
          ),
          caption: "The 2022 World Championship Grand Finals, live in person and broadcast around the world.",
          imagePlaceholder: "2022 Grand Finals",
          imageSrc: "/Esports/The%20Story/ES-08.jpg",
          reverse: true,
        },
      ]}
      videoPanel={{
        label: "Watch the 2022 Finals",
        image: "/Esports/The%20Story/ES-Video.jpg",
        url: "https://www.youtube.com/live/MJBdVcb17Jk?si=w0ZQceZITmLN_Zdd&t=20055",
      }}
      prevSlug={{ href: "/#work", label: "Back to Case Studies" }}
      nextSlug={{ href: "/work/brwi", label: "BRWI" }}
    />
  );
}
