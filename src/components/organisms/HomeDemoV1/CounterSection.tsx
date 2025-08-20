import CounterCard from "@/components/molecules/HomeDemoV1/Cards/CounterCard";
import counters from "@/data/HomeDemoV1/Counter.json";

const CountersSection = () => (
  <section className="container-fluid w-full mb-20">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-10">
      {(counters as any[]).map((counter, i) => (
        <CounterCard key={counter.label + i} {...counter} />
      ))}
    </div>
  </section>
);

export default CountersSection;
