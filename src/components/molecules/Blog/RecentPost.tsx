import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/Blog/BlogData.json";

export default function RecentPosts() {
  const recentPosts = blogData.slice(0, 4);

  return (
    <div className="mt-8">
      <h3 className="text-2xl mb-5">Recent Post</h3>
      <div className="space-y-4">
        {recentPosts.map((post) => (
          <div key={post.id} className="flex items-center space-x-3 border-b border-gray-200 pb-2">
            {/* Image */}
            <div className="w-20 h-20 relative flex-shrink-0">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded"
              />
            </div>

            {/* Title & Date */}
            <div className="flex flex-col">
              <span className="text-base text-gray-500">{post.date}</span>
              <Link
                href={`/blog/news/${post.slug}`}
                className="text-base font-medium hover:text-[#e9452e] truncate max-w-[180px]"
              >
                {post.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
