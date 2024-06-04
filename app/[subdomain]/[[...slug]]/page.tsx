
type RouteParams = {
  slug?: string[];
  subdomain: string;
}

type Props = {
  params: RouteParams;
}

export default function Page({ params }: Props) {
  const slug = "/" + (!params.slug ? "" : params.slug.join("/"));
  return (
    <div>
      {params.subdomain} <br />
      {slug}
    </div>
  )
}