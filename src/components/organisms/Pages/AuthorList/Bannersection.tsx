import Banner from "@/components/molecules/Pages/Author/Banner";

export default function BannerSection() {
    return(
        <section className="container-fluid mb-14">
            <Banner
            imageSrc="/assets/book-mockup.png"
            ctaHref="/collections"
            />
        </section>
    )
}