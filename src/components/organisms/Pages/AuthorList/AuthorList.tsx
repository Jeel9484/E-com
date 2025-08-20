import authors from "@/data/Pages/Author/Authordata.json";
import AuthorCard from "@/components/molecules/HomeDemoV1/Cards/Authorcard";

const AuthorSection = () => (
  <section className="container-fluid my-10">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      {(authors as any[]).map((author, idx) => (
        <AuthorCard key={author.name + idx} {...author} />
      ))}
    </div>
  </section>
);

export default AuthorSection;
