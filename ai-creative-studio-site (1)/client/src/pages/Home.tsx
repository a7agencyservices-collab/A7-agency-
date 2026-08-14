import { ArrowDown, ArrowUp, CirclePlay, Sparkles } from "lucide-react";
import { useState } from "react";
import BorderGlow from "@/components/BorderGlow";
import LiquidEther from "@/components/LiquidEther";
import GradualBlur from "@/components/GradualBlur";
import StarBorder from "@/components/StarBorder";

const coverRing = "/manus-storage/animo-cover-ring-720p_87a178cd.mp4";
const verticalVideos = [
  { label: "Red-bag product video", src: "/manus-storage/vertical-red-bag_85830bfa.mp4" },
  { label: "Blender creator video", src: "/manus-storage/vertical-blender_8444cb61.mp4" },
];
const landscapeVideos = [
  { label: "Apex & Summit campaign", src: "/manus-storage/landscape-01_ef923918.mp4" },
  { label: "Landscape example 02", src: "/manus-storage/landscape-02_290471e1.mp4" },
  { label: "Landscape example 03", src: "/manus-storage/landscape-03_ad676340.mp4" },
];
const formats = [
  ["01", "Testimonial-style", "A creator-led point of view that makes the product feel useful, specific, and lived-in."],
  ["02", "Selling video", "A direct-response format built around the product, benefit, and action."],
  ["03", "Website creative", "Hero visuals, product loops, and web-ready sections for the brand."],
  ["04", "Cinematic commercial", "A polished, atmospheric direction for launches and campaigns."],
  ["05", "Product placement", "Your product placed into a chosen avatar, setting, and tone."],
  ["06", "Social / UGC", "Fast, native-looking short-form content for feeds, ads, and testing."],
];
const asset = {
  template: "/manus-storage/Screenshot2026-08-14at14.49.26_77a179e3.png",
  placement: "/manus-storage/Screenshot2026-08-14at14.49.32_7bab14c1.png",
  comment: "/manus-storage/IMG_5097_d7f9fb68.webp",
  workflowA: "/manus-storage/ScreenRecording2026-08-14at15.07.42_9e40b595.mov",
  workflowB: "/manus-storage/ScreenRecording2026-08-14at15.08.12copy_62534bb7.mov",
};

function VideoLabel({ children }: { children: React.ReactNode }) {
  return <div className="media-label"><CirclePlay size={12} /> {children}</div>;
}

function Card({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return <BorderGlow className={`flat-card ${className}`} id={id} glowIntensity={0.38} colors={["#2b2a3b", "#4b4862", "#272632"]} backgroundColor="rgba(13,13,20,.68)">{children}</BorderGlow>;
}

export default function Home() {
  const [, setActive] = useState(0);

  return <main className="flat-site">
    <div className="flat-background"><LiquidEther colors={["#141525", "#242044", "#1a2034"]} mouseForce={12} cursorSize={75} autoSpeed={0.22} autoIntensity={0.55} resolution={0.34} /></div>
    <GradualBlur preset="footer" target="page" animated="scroll" position="bottom" strength={2} height="6rem" divCount={5} opacity={0.34} />
    <header className="flat-header"><div className="flat-brand"><Sparkles size={16} /> AI CREATIVE STUDIO</div><nav><a href="#formats">Formats</a><a href="#workflow">Process</a><StarBorder as="a" className="header-cta" href="#contact" color="#ffffff" speed="6s" thickness={1}>Let’s talk <ArrowDown size={13} /></StarBorder></nav></header>
    <section className="flat-grid">
      <Card className="hero-card" id="top"><div className="hero-copy"><div className="card-visual-strip"><span>UGC</span><span>PRODUCT</span><span>WEB</span><span>CAMPAIGN</span></div><h1>This is what<br /><em>we can do</em><br />for your business.</h1><p>AI-assisted creative production for UGC, product videos, campaign visuals, websites, and more.</p></div><div className="hero-ring"><video src={coverRing} autoPlay muted loop playsInline preload="metadata" /></div><a href="#examples" className="quiet-cta hero-cta">See the examples <ArrowDown size={14} /></a></Card>

      <Card className="examples-card" id="examples"><div className="card-top"><div><small>01 / EXAMPLES</small><h2>Press play.</h2></div><p className="card-subtext">A few directions we can create from one product brief.</p></div><div className="media-grid"><div className="vertical-pair">{verticalVideos.map((video, index) => <div className="vertical-video" key={video.src}><video src={video.src} controls playsInline preload="metadata" onPlay={() => setActive(index)} /><VideoLabel>{video.label}</VideoLabel></div>)}</div><div className="horizontal-videos">{landscapeVideos.map((video, index) => <div className="video-tile" key={video.src}><video src={video.src} controls playsInline preload="metadata" onPlay={() => setActive(verticalVideos.length + index)} /><span>{video.label}</span></div>)}</div></div></Card>

      <Card className="formats-card" id="formats"><div className="card-top"><div><small>02 / WHAT WE MAKE</small><h2>Six creative formats.</h2></div><p className="card-subtext">Different angles for different channels, audiences, markets, and messages.</p></div><div className="format-proof"><img src={asset.template} alt="Creative system template selection interface" /><span>Choose the direction. Then build the asset.</span></div><div className="format-grid">{formats.map(([number, title, body]) => <div className="format-item" key={number}><b>{number}</b><h3>{title}</h3><p>{body}</p></div>)}</div></Card>

      <Card className="context-card" id="context"><div className="card-top"><div><small>03 / THE CONTEXT</small><h2>One expensive bet.</h2></div><p className="card-subtext">Real comments from real people.</p></div><img src={asset.comment} alt="Screenshot of an individual YouTube comment discussing influencer marketing reliability" /><p className="source-note">One public comment can start the conversation. The point is not that influencers never work; it is that brands benefit from more control and more directions to test.</p></Card>

      <Card className="control-card" id="control"><div className="card-top"><div><small>04 / THE ADVANTAGE</small><h2>Control is the product.</h2></div><p className="card-subtext">We only need three things to start.</p></div><div className="control-layout"><img src={asset.placement} alt="UGC Factory product placement workflow screen" /><div className="control-copy"><div className="control-row"><b>YOUR PRODUCT</b><span>The product and the message.</span></div><div className="control-row"><b>YOUR BRIEF</b><span>The audience, tone, references, and action.</span></div><div className="control-row"><b>OUR AVATAR</b><span>We create the scene, placement, captions, and finished creative.</span></div></div></div></Card>

      <Card className="workflow-card" id="workflow"><div className="card-top"><div><small>05 / THE WORKFLOW</small><h2>From idea to asset.</h2></div><p>Website design and UGC content, built from the same clear brief.</p></div><div className="workflow-grid workflow-two"><div className="workflow-video"><video src={asset.workflowA} autoPlay muted loop playsInline preload="metadata" /><VideoLabel>Website design workflow</VideoLabel></div><div className="workflow-video"><video src={asset.workflowB} autoPlay muted loop playsInline preload="metadata" /><VideoLabel>UGC content workflow</VideoLabel></div></div></Card>

      <div className="simple-footer-cta" id="contact"><StarBorder as="a" className="top-star-cta" href="#top" color="#ffffff" speed="6s" thickness={1} onClick={(event: React.MouseEvent<HTMLAnchorElement>) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Take me to the top <ArrowUp size={14} /></StarBorder></div>
    </section>
    <footer className="flat-footer"><span>CREATOR-STYLE CONTENT · PRODUCT ADS · CINEMATIC VISUALS · WEB-READY CREATIVE</span><span>AI CREATIVE STUDIO</span></footer>
  </main>;
}
