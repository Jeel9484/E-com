import DealCard from "@/components/molecules/HomeDemoV1/Cards/DealsWeekCard";
import DailyDeals from "@/data/Collection/CollectionData.json";
export default function DailyDealsSection(){
    return(
        <section className="container-fluid mb-14">
            <div className="text-center mb-8">
                <h2 className="text-5xl mb-2.5">Daily Deals</h2>
                <span className="text-xl hover:text-[#DD321E] text-black">
                    More Daily Deals
                </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-14">
                {DailyDeals.dailyDeals.map((book, idx) => (
                    <div key={book.title + idx}>
                        <DealCard {...book} />
                    </div>
                ))}
            </div>

            <hr className="text-gray-200" />
        </section>
    )
}