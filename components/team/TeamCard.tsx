import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TeamPortrait from "./TeamPortrait";
import type { TeamMember } from "@/app/data/team";

type Variant = "default" | "featured";

interface TeamCardProps {
  member: TeamMember;
  variant?: Variant;
}

export default function TeamCard({ member, variant = "default" }: TeamCardProps) {
  const href = `/our-team/${member.slug}`;

  if (variant === "featured") {
    return (
      <Link
        href={href}
        className="group block bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 md:p-8 border-2 border-primary-200 shadow-lg hover:shadow-xl hover:border-primary-300 transition-all"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">
          <div className="md:col-span-1 max-w-[280px] mx-auto md:mx-0 w-full">
            <TeamPortrait
              initials={member.initials}
              name={member.name}
              imageSrc={member.imageSrc}
              size="lg"
            />
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-1">
              {member.name}
            </h3>
            <p className="text-accent-700 font-semibold mb-4">
              {member.title}
            </p>
            {(member.bioSummary ?? member.bio[0]) && (
              <p className="text-secondary-DEFAULT leading-relaxed text-base md:text-lg">
                {member.bioSummary ?? member.bio[0]}
              </p>
            )}
            {member.expertise && member.expertise.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2 justify-center md:justify-start">
                {member.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <span className="mt-6 inline-flex items-center gap-2 text-accent-700 group-hover:text-accent-600 font-medium text-sm">
              View profile
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl border border-primary-200 hover:border-primary-300 hover:shadow-xl transition-all p-4 hover:-translate-y-0.5"
    >
      <TeamPortrait
        initials={member.initials}
        name={member.name}
        imageSrc={member.imageSrc}
        size="md"
      />
      <div className="mt-4">
        <h3 className="font-serif text-lg font-bold text-primary-900 leading-snug">
          {member.name}
        </h3>
        <p className="text-accent-700 text-sm font-semibold mt-1">
          {member.title}
        </p>
      </div>
    </Link>
  );
}
