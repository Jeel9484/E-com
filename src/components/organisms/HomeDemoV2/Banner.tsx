import Image from "next/image";

export default function Banner() {
    return (
        <section className="container-fluid mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="col-span-8">
                    <Image 
                        src="/assets/banner-1.jpg" 
                        alt="Banner 1" 
                        width={1140} 
                        height={337} 
                        className="w-full h-full object-cover" 
                    />
                </div>
                <div className="col-span-4">
                    <Image 
                        src="/assets/banner-2.jpg" 
                        alt="Banner 2" 
                        width={447} 
                        height={336} 
                        className="w-full h-full object-cover" 
                    />
                </div>
            </div>
        </section>
    );
}