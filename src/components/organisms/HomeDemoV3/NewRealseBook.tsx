import NewCard from "@/components/molecules/HomeDemoV3/NewCard";
import data from "@/data/HomeDemoV3/NewBookdata.json";

export default function NewRealseBookSection() {
  return (
    <section className="container-fluid mb-16">
      <h3 className="text-center text-4xl md:text-5xl font-medium mb-10">
        New Release Books
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((book, idx) => (
          <NewCard
            key={`${book?.title ?? "book"}-${idx}`}
            {...book}
          />
        ))}
      </div>
    </section>
  );
}
