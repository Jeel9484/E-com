import { CreditCard, Truck, BookOpen } from "lucide-react";

const features = [
  {
    icon: <CreditCard size={48} className="mr-4" />,
    title: "Easy Payment",
    subtitle: "Have 100% Secure Payments",
  },
  {
    icon: <Truck size={48} className="mr-4" />,
    title: "Free Delivery",
    subtitle: "Order over $300 More",
  },
  {
    icon: <BookOpen size={48} className="mr-4" />,
    title: "Availabley",
    subtitle: "6 Million Books Available",
  },
];

const TemplateSection = () => (
  <section className=" container-fluid flex justify-center mb-10">
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((f) => (
        <div
          key={f.title}
          className="bg-[#faf5ed] flex items-center py-[30px] px-5 justify-center"
        >
          <div>{f.icon}</div>
          <div>
            <h3 className="text-2xl font-normal mb-2 tracking-wide">{f.title}</h3>
            <div className="text-lg">{f.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TemplateSection;
