import { useEffect, useState } from "react";
import data from "@/data/Collection/Featured/FeaturedBookData.json";

export default function Page() {
  const [filterdata, setData] = useState<typeof data>([]);
  useEffect(() => {
    setData(data);
  }, []);

  return (
    <div>
      {Array.isArray(filterdata) && filterdata.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <p>Items: {Array.isArray(filterdata) ? filterdata.length : 0}</p>
      )}
    </div>
  );
}
