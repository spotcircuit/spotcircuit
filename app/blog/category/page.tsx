import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaFolder } from "react-icons/fa";
import { categories, blogPosts } from "../lib/blog-data"; // Updated import path

export const revalidate = 60;

export default function CategoryIndexPage() {
  // Count posts per category
  const categoriesWithCounts = categories.map((category) => {
    const postCount = blogPosts.filter((post) =>
      post.categories.some(
        (cat) => cat.toLowerCase().replace(/\s+/g, "-") === category.slug
      )
    ).length;

    return {
      ...category,
      postCount,
    };
  });

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoriesWithCounts.map((category) => (
            <div
              key={category.slug}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <Link href={`/blog/category/${category.slug}`}>
                <a className="flex flex-col items-center">
                  <div className="text-6xl mb-2">
                    <FaFolder />
                  </div>
                  <h2 className="text-2xl font-semibold">{category.name}</h2>
                  <p className="text-gray-500">{category.postCount} posts</p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
