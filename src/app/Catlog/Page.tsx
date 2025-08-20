import { useEffect, useState } from "react";
import data from "@/data/Collection/Featured/FeaturedBookData.json";

export default async function Page() {
  const [filterdata,setData] = useState<typeof data>([]);
  useEffect(() => {
    setData(filterdata);
  }, []);

}
