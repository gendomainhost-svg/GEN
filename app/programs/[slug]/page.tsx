import { PROGRAM_SLUGS } from "@/app/data/programSlugs";
import ProgramDetailClient from "./ProgramDetailClient";

export function generateStaticParams() {
  return PROGRAM_SLUGS.map((slug) => ({ slug }));
}

export default function ProgramDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return <ProgramDetailClient slug={params.slug} />;
}
