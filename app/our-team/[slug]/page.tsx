import { notFound } from "next/navigation";
import { TEAM_SLUGS, getMemberBySlug, teamMembers } from "@/app/data/team";
import TeamMemberClient from "./TeamMemberClient";

export function generateStaticParams() {
  return TEAM_SLUGS.map((slug) => ({ slug }));
}

export default function TeamMemberPage({
  params,
}: {
  params: { slug: string };
}) {
  const member = getMemberBySlug(params.slug);
  if (!member) notFound();

  const others = teamMembers
    .filter((m) => m.slug !== member.slug)
    .slice(0, 3);

  return <TeamMemberClient member={member} others={others} />;
}
