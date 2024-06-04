import { notFound } from "next/navigation";
import { getArticle } from "./methods";
import { Metadata } from "next";

type RouteParams = {
  slug?: string[];
  subdomain: string;
}

type Props = {
  params: RouteParams;
}

export const metadata: Metadata = {
  title: "",
};

export default async function Page({ params }: Props) {
  const slug = "/" + (!params.slug ? "" : params.slug.join("/"));
  const article = await getArticle({
    slug,
    subdomain: params.subdomain
  });

  if (!article) {
    notFound();
  }
  metadata.title = article.title;

  return (
    <div>
      <h1>{article.title}</h1>
      {article.content}
    </div>
  )
}