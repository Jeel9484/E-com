"use client"
import DealCard from "@/components/molecules/HomeDemoV1/Cards/DealsWeekCard";
import SylviaPlath from "@/data/Collection/CollectionData.json";

export default function SylviaPlathSection(){
    return(
        <section className="container-fluid mb-14">
            <div className="text-center mb-8">
                <h2 className="text-5xl mb-2.5">Sylvia Plath</h2>
                <span className="text-xl hover:text-[#DD321E] text-black">
                    More Sylvia Plath Books
                </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-14">
                {SylviaPlath.sylviaPlath.map((book, idx) => (
                    <div key={book.title + idx}>
                        <DealCard {...book} />
                    </div>
                ))}
            </div>
        </section>
    )
}