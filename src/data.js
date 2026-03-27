import servicePlaceholder from "./assets/services/service-placeholder.svg";
import blogCoverDesign from "./assets/f1.jpeg";
import blogCover3d from "./assets/b1.png";
import blogCoverUi from "./assets/ui.png";
import blogCoverpic from "./assets/p24.jpeg";
import blogCoverrend from "./assets/mr3.jpeg";
import blogCovercafe from "./assets/a3.jpeg";

/**
 * ============================================================================
 * CENTRAL DATA CONFIGURATION - Graphic Designer Portfolio
 * ============================================================================
 * Edit this file to update all portfolio content. No hardcoding in components.
 * Structure: Each section has its own object; components import and map over it.
 * ============================================================================
 */

export const siteConfig = {
  // Site title for browser tab and meta
  title: "Anurag Pandey's Portfolio",
  // Logo - editable: text displays in navbar, icon can be image path or emoji
  logo: {
    text: "AP",
     // Replace with image path: "/logo.svg" or use emoji/character
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
   { label: "Skills", href: "#skills" },
    { label: "Software", href: "#software" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
];

// CTA button in navbar (e.g., "Hire Me", "Book Now")
export const navCta = { label: "Contact", href: "#contact" };

// ============================================================================
// HERO / HOME SECTION (Profile with background video)
// ============================================================================
export const heroData = {
  // Video: place file in public/videos/ and set path
  backgroundVideo: "./assets/videos/final.mp4",
  // Fallback image if video fails to load
  // Use placeholder if no image: "https://placehold.co/1920x1080/1e1e1e/666"
  // fallbackImage: "https://placehold.co/1920x1080/1e1e1e/666?text=Your+Background",
  greeting: "HELLO!",
  name: "I'M    Anurag Pandey",
  // title: "Graphic Designer",
  socialLinks: [
    // { name: "ArtStation", url: "https://www.artstation.com/", icon: "FaArtstation" },
    { name: "Instagram", url: "https://www.instagram.com/anuragpanddey", icon: "FaInstagram" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/anurag-pandey-a713493b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", icon: "FaLinkedin" },
    { name: "Twitter", url: "https://x.com/anuragpandeydz", icon: "FaXTwitter" },
    { name: "Behance", url: "https://www.behance.net/anuragpandey97", icon: "FaBehance" },
    { name: "Email", url: "mailto:anuragpandeydz@gmail.com", icon: "FaEnvelope" },
     { name: "Blog", url: "https://anuragdz.blogspot.com/", icon: "FaBloggerB" },
  ],
  ctaButton: { label: "Contact Me", href: "#contact" },
};

// ============================================================================
// ABOUT ME - Centered image layout
// ============================================================================
export const aboutData = {

  image: "./assets/images/profile.jpeg",
  heading: "About Me",
  text: "I’m a passionate and creative multidisciplinary designer and visual artist. With a strong blend of technical knowledge and visual storytelling, I specialize in UI/UX design, 3D modelling, VFX, graphic design, motion graphics, and environment design. I have hands-on experience with industry-standard tools including Photoshop, Illustrator, Premiere Pro, After Effects, Blender, Figma, Unreal Engine, DaVinci Resolve, Unity, and Nuke, allowing me to bring ideas to life from concept to final production. I have been recognized as a Gold Medalist and First Runner-Up in the Reliance Animagination Challenge for my creativity and execution in short film, VFX and design. My work spans photography, videography, cinematic production, game and environment design, rendering, and advertising visuals, where I focus on creating impactful, engaging, and story-driven experiences. I believe great design is a combination of creativity, emotion, and functionality, and I continuously strive to push boundaries, learn new skills, and contribute to innovative projects that merge technology with art.",
   stats: [
    { value: "18+", label: "Real Projects Completed" },
    { value: "1+", label: "Years Experience" },
  ],
};

// ============================================================================
// SKILLS - List of professional skills
// ============================================================================
export const skillsData = [
  "Photography",
  "Videography",
  "3D Modelling",
  "VFX",
  "UI/UX Design",
  "Graphic Design",
  "Game Design",
  "Environment Design",
  "Movie",
  "Rendering",
  "Motion Graphics",
];

// ============================================================================
// SOFTWARE - dark card grid with icon, title and progress bar
// ============================================================================
export const softwareData = [
  {
    name: "Photoshop",
    shortCode: "Ps",
    level: 100,
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-original.svg",
  },
  {
    name: "Illustrator",
    shortCode: "Ai",
    level: 90,
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-original.svg",
  },
  {
    name: "Premiere Pro",
    shortCode: "Pr",
    level: 100,
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/premierepro/premierepro-original.svg",
  },
  {
    name: "After Effects",
    shortCode: "Ae",
    level: 88,
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/aftereffects/aftereffects-original.svg",
  },
  {
    name: "Blender",
    shortCode: "Bl",
    level: 95,
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/blender/blender-original.svg",
  },
  {
    name: "Figma",
    shortCode: "Fi",
    level: 92,
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
  },
  {
    name: "Unreal Engine",
    shortCode: "UE5",
    level: 100,
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/unrealengine/unrealengine-original.svg",
  },
  {
    name: "DaVinci Resolve",
    shortCode: "DR",
    level: 92,
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/DaVinci_Resolve_17_logo.svg",
  },
  {
    name: "Unity",
    shortCode: "U3D",
    level: 70,
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original.svg",
  },
   {
    name: "Nuke",
    shortCode: "NK",
    level: 70,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/The_Foundry_logo.svg/512px-The_Foundry_logo.svg.png",
  },
];

// ============================================================================
// SERVICES / CONTENT - Photography, videography, etc. (card layout)
// ============================================================================
// export const servicesData = [
//   { id: "photography", title: "Photography", description: "Professional photography for portraits, products, and events.", image: servicePlaceholder, url: "https://www.behance.net/search/projects?search=photography" },
//   { id: "videography", title: "Videography", description: "Cinematic video production and storytelling.", image: servicePlaceholder, url: "https://www.behance.net/search/projects?search=videography" },
//   { id: "movie", title: "Movie", description: "Film production and cinematic direction.", image: servicePlaceholder, url: "https://www.behance.net/search/projects?search=cinematic%20film" },
//   { id: "rendering", title: "Rendering", description: "3D rendering and photorealistic visualization.", image: servicePlaceholder, url: "https://www.behance.net/search/projects?search=3d%20rendering" },
//   { id: "ui-templates", title: "UI Templates", description: "Modern UI/UX design and template creation.", image: servicePlaceholder, url: "https://www.behance.net/search/projects?search=ui%20templates" },
//   { id: "advertisement", title: "Advertisement Templates", description: "Creative ad designs and marketing collateral.", image: servicePlaceholder, url: "https://www.behance.net/search/projects?search=advertisement%20design" },
//   { id: "bts", title: "BTS", description: "Behind-the-scenes content and documentary style.", image: servicePlaceholder, url: "https://www.behance.net/search/projects?search=behind%20the%20scenes" },
//   { id: "3d-modelling", title: "3D Modelling", description: "Character and environment 3D modelling.", image: servicePlaceholder, url: "https://www.behance.net/search/projects?search=3d%20modelling" },
//   { id: "graphics", title: "Graphics", description: "Graphic design and visual identity,Graphic design and visual identity.", image: servicePlaceholder, url: "https://www.behance.net/search/projects?search=graphic%20design" },
//   { id: "game/environment-design", title: "Game/Environment Designing", description: "Game assets, environments, level design, Architectural and environment visualization.", image: servicePlaceholder, url: "https://www.behance.net/search/projects?search=game%20design" },
//   { id: "vfx", title: "VFX", description: "Visual effects and post-production,Graphic design and visual identity.", image: servicePlaceholder, url: "https://www.behance.net/search/projects?search=vfx" },
// ];

// ============================================================================
// CERTIFICATIONS & ACHIEVEMENTS
// ============================================================================
export const certificationsData = [
  {
    title: "3D Animation Video",
    issuer: "Certification",
    year: "Aug 2025",
    url: "https://www.instagram.com/p/DIawJYqMPNa/?igsh=MTVmYzRwdmNvN2h6bQ%3D%3D",
  },
  {
    title: "Short-Film Production",
    issuer: "Certification",
    year: "Dec 2025",
    url: "https://www.instagram.com/p/DIio07WMm8l/?img_index=2&igsh=MTFtd3IxNXN2aWowZA%3D%3D",
  },
  {
    title: "Advertisement",
    issuer: "Certification",
    year: "Dec 2025",
    url: "#",
  },
  {
    title: "Participation – 2D Motion Graphics",
    issuer: "Certificate Program",
    year: "2025",
    url: "#",
    description: "Earned a participation certificate in 2D Motion Graphics and animation.",
  },
  {
    title: "Director – Short Film",
    issuer: "Independent Film Project",
    year: "2025",
    description: "Led full creative direction of an independent short film from concept to final cut.",
  },
  {
    title: "Brand Creator – Cafevert",
    issuer: "Self-Initiated Product",
    year: "2025",
    description: "Self-launched a café product brand, handling identity, design, and strategy end-to-end.",
  },
  {
    title: "Event Photographer – Government Project",
    issuer: "Government Event (First Official)",
    year: "July 2025",
    description: "Covered a government-organised Sales Tax meeting as first official government project.",
  },
  {
    title: "Event Photographer – Government Projects",
    issuer: "Government Events (Ongoing)",
    year: "2025",
    description: "Trusted with multiple government event coverages in the public sector on an ongoing basis.",
  },
];

// ============================================================================
// SCHOOLING / EDUCATION
// ============================================================================
export const educationData = [
  { degree: "BCA", school: "Amity University ", year: "2024-2026" },
  { degree: " Advance Program in VFX", school: "Reliance Animation academy Diploma", year: "2024-2025" },
];

// ============================================================================
// WORK EXPERIENCE (Timeline style)
// ============================================================================
export const experienceData = [
  {
    title: "Graphic Designer",
    company: "Freelance",
    period: "Early 2024 · ~2 months",
    description: "Created visual assets and brand materials, building a foundation in design principles.",
  },
  {
    title: "Graphic Reviewer",
    company: "Freelance",
    period: "2024 · ~2 months",
    description: "Reviewed design work and provided quality feedback to ensure brand consistency.",
  },
  {
    title: "3D Environment Artist",
    company: "Freelance",
    period: "Dec 2024",
    description: "Crafted immersive 3D environment assets for first freelance project.",
  },
  {
    title: "3D Lighting & Rendering Artist",
    company: "Freelance",
    period: "Dec 2024-March 2025",
    description: "Delivered cinematic lighting and photorealistic rendering for client 3D scenes.",
  },
  {
    title: "Photographer – Dharvi Coverage",
    company: "Freelance",
    period: "June 2025",
    description: "Captured compelling imagery documenting the Dharvi environment.",
  },
];

// ============================================================================
// GALLERY - Masonry grid (filterable by category)
// Categories must match: photography, videography, 3d, vfx, ui, graphics, game, etc.
// ============================================================================
export const galleryData = [
  { id: 1, image: "./assets/images/a1.jpeg", category: "advertisement" },
  { id: 2, image: "./assets/images/a2.jpeg", category: "advertisement" },
  { id: 3, image: "./assets/images/a3.jpeg", category: "advertisement" },
  { id: 4, image: "./assets/images/a4.jpeg", category: "advertisement" },
  { id: 5, image: "./assets/images/a5.jpeg", category: "advertisement" },
  { id: 6, image: "./assets/images/a6.png", category: "advertisement" },
  { id: 7, image: "./assets/images/a7.jpeg", category: "advertisement" },
  { id: 8, video: "./assets/videos/CAFEVERT.mp4", category: "advertisement" },
  { id: 9, video: "./assets/videos/video2.mp4", category: "advertisement" },
  { id: 10, image: "./assets/videos/nature2.mp4", category: "bts" },

  { id: 11, image: "./assets/images/f1.jpeg", category: "photoshoot" },

  { id: 12, image: "./assets/images/g1.png", category: "graphics" },
  { id: 13, image: "./assets/images/g2.png", category: "graphics" },
  { id: 14, image: "./assets/images/g3.png", category: "graphics" },
  { id: 15, image: "./assets/images/g4.png", category: "graphics" },
  { id: 16, image: "./assets/images/g5.png", category: "graphics" },

  { id: 17, image: "./assets/images/b1.png", category: "3d" },
  { id: 18, image: "./assets/images/b2.png", category: "3d" },

  { id: 19, image: "./assets/videos/mrend.mp4", category: "movie rendenering" },

  { id: 20, image: "./assets/videos/video1.mp4", category: "movie" },
  { id: 21, image: "./assets/videos/bts7.mp4", category: "bts" },

  { id: 22, image: "./assets/videos/bts1.mp4", category: "bts" },
  { id: 23, image: "./assets/videos/2bts.mp4", category: "bts" },
  { id: 24, image: "./assets/videos/C1568.mp4", category: "bts" },
  { id: 25, image: "./assets/videos/3bts.mp4", category: "bts" },

  { id: 26, image: "./assets/images/p1.jpeg", category: "photography" },
  { id: 27, image: "./assets/images/p2.jpeg", category: "photography" },
  { id: 28, image: "./assets/images/p3.jpeg", category: "photography" },
  { id: 29, image: "./assets/images/p4.jpeg", category: "nature" },
  { id: 30, image: "./assets/images/p5.jpeg", category: "nature" },
  { id: 31, image: "./assets/images/p6.jpeg", category: "photography" },
  { id: 32, image: "./assets/images/p7.png", category: "nature" },
  { id: 33, image: "./assets/images/p8.png", category: "nature" },
  { id: 34, image: "./assets/images/p9.png", category: "nature" },
  { id: 35, image: "./assets/images/p10.jpeg", category: "photography" },
  { id: 36, image: "./assets/images/p11.jpeg", category: "photography" },
  { id: 37, image: "./assets/images/p12.jpeg", category: "photography" },
  { id: 38, image: "./assets/images/p13.jpeg", category: "photography" },
  { id: 39, image: "./assets/images/p14.jpeg", category: "nature" },
  { id: 40, image: "./assets/images/p15.jpeg", category: "nature" },
  { id: 41, image: "./assets/images/p16.jpeg", category: "photography" },
  { id: 42, image: "./assets/images/p17.jpeg", category: "nature" },
  { id: 43, image: "./assets/images/p18.jpeg", category: "nature" },
  { id: 44, image: "./assets/images/p19.jpeg", category: "nature" },
  { id: 45, image: "./assets/images/p20.jpeg", category: "photography" },
  { id: 46, image: "./assets/images/p21.jpeg", category: "photography" },
  { id: 47, image: "./assets/images/p22.jpeg", category: "photography" },
  { id: 48, image: "./assets/images/p23.jpeg", category: "photography" },
  { id: 49, image: "./assets/images/p24.jpeg", category: "nature" },
  { id: 50, image: "./assets/images/p25.jpeg", category: "nature" },
  { id: 51, image: "./assets/images/p26.jpeg", category: "photography" },
  { id: 52, image: "./assets/images/p27.jpeg", category: "nature" },
  { id: 53, image: "./assets/images/p28.jpeg", category: "nature" },

  { id: 54, image: "./assets/images/f2.jpeg", category: "photoshoot" },
  { id: 55, image: "./assets/images/f3.jpeg", category: "photoshoot" },
  { id: 56, image: "./assets/images/f4.jpeg", category: "photoshoot" },
  { id: 57, image: "./assets/images/f5.jpeg", category: "photoshoot" },
  { id: 58, image: "./assets/images/f6.jpeg", category: "photoshoot" },
  { id: 59, image: "./assets/images/f7.jpeg", category: "photoshoot" },

  { id: 60, image: "./assets/videos/mrend2.mp4", category: "movie rendenering" },
    { id: 61, image: "./assets/videos/nature.mp4", category: "nature" },
  { id: 62, image: "./assets/images/mr2.jpeg", category: "movie rendenering" },
  { id: 63, image: "./assets/videos/bts4.mp4", category: "bts" },
  { id: 64, image: "./assets/videos/bts6.mp4", category: "bts" },
  { id: 65, image: "./assets/videos/bts5.mp4", category: "bts" },
  { id: 66, image: "./assets/images/mr4.jpeg", category: "movie rendenering" },
  { id: 67, video: "./assets/videos/video4.mp4", category: "advertisement" },
];

// Gallery filter tabs (first = "ALL" shows everything)
export const galleryFilters = ["all", "photography", "nature", "3d", "graphics", "advertisement", "photoshoot","movie", "movie rendenering"];

// ============================================================================
// BLOG - From fourth image reference
// ============================================================================
export const blogData = [
 {
    id: 1,
    title: "Designing the Future: The Making of Fate Encased",
    category: "Rendering",
    date: "March 26, 2025",
    author: "Anurag Pandey",
    image: blogCoverrend,
    url: "https://verticesvirtual.blogspot.com/2025/03/designing-future-making-of-fate-encased.html",
  },
  {
    id: 2,
    title: " Vertices and Virtual Reality: Crafting a Robotic Companion",
    category: "3D",
    date: "September 21, 2025",
    author: "Anurag Pandey",
    image: blogCover3d,
    url: "https://verticesvirtual.blogspot.com/2025/09/title-vertices-and-virtual-reality.html",
  },
  {
    id: 3,
    title: " From Bean to Brand: The Making of Cafevert",
    category: "Product",
    date: "October 18, 2025",
    author: "Anurag Pandey",
    image: blogCovercafe,
    url: "https://anuragdz.blogspot.com/2025/10/from-bean-to-brand-making-of-cafevert.html",
  },
  {
    id: 4,
    title: "Capturing the Craft: My Day Behind the Lens at Dharvi",
    category: "Photoshoot",
    date: "October 25, 2025",
    author: "Anurag Pandey",
    image: blogCoverDesign,
    url: "https://anuragdz.blogspot.com/2025/10/capturing-craft-my-day-behind-lens-at.html",
  },
  {
    id: 5,
    title: "From Vision to Video: The Gritty Reality of Indie Filmmaking",
    category: "Movie",
    date: "December 15, 2025",
    author: "Anurag Pandey",
    image: blogCoverUi,
    url: "https://anuragdz.blogspot.com/2025/12/from-vision-to-video-gritty-reality-of.html",
  },

   {
    id: 6,
    title: " The Art of the Unseen: Finding the Narrative in Nature",
    category: "Photography",
    date: "January 1, 2026",
    author: "Anurag Pandey",
    image: blogCoverpic,
    url: "https://anuragdz.blogspot.com/2025/12/the-art-of-unseen-finding-narrative-in.html",
  },
];

// ============================================================================
// CONTACT & FOOTER
// ============================================================================
export const contactData = {
  heading: "Have An Awesome Project Idea? Let's Discuss",
  placeholder: "Enter your email",
  buttonText: "Submit",
  email: "anuragpandeydz@gmail.com",
  phone: "+91 9555177274",
  address: "Delhi, India",
 social: [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/anurag-pandey-a713493b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", icon: "FaLinkedin" },
  { name: "Twitter", url: "https://x.com/anuragpandeydz", icon: "FaXTwitter" },
  { name: "Behance", url: "https://www.behance.net/anuragpandey97", icon: "FaBehance" },
  { name: "Email", url: "mailto:anuragpandeydz@gmail.com", icon: "FaEnvelope" },

  // Blogger Link Added
  { name: "Blog", url: "https://www.blogger.com/profile/17618574266269936791", icon: "FaBloggerB" },
],
};

export const footerLinks = {
  resources: [
     { label: "Home", href: "#home" },
     { label: "Skills", href: "#skills" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Blog", href: "#blog" },
  ],
  support: [
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};