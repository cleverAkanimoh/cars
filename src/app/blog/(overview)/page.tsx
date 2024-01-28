import { BlogSection, Main } from "@/components";
import { metadata } from "../../layout";

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    currentPage?: string;
  };
}) {
  
  const searchQuery = searchParams?.search || "";
  const page = Number(searchParams?.currentPage) || 1;
  
  metadata.title = `carsinn Blog - ${searchQuery} || blogging from wordpress`;

  return (
    <Main>
      <BlogSection query={searchQuery} currentPage={page} />
    </Main>
  );
}
