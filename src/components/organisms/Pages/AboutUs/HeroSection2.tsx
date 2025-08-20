import AboutSection from "@/components/molecules/Pages/AboutUs/AbouUsSection2";
export default function AboutSection2() {
  const aboutHeroData = {
  imgSrc: "/assets/ceo.png",
  headline:
    "“Dunki Are Such Joy To Be Cherished Handled With Pleasure”",
  paragraphs: [
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  ],
    founder: "- JOHN SMITH / FOUNDER",
};
  return (
    <section className="container-fluid mb-14">
      <AboutSection {...aboutHeroData} />
    </section>
  );
}