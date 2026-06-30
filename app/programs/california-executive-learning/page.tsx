import type { Metadata } from "next";
import CaliforniaExecutiveLearningPage from "./CaliforniaExecutiveLearningPage";
import { FLAGSHIP_PROGRAM } from "@/app/data/flagshipProgram";

export const metadata: Metadata = {
  title: FLAGSHIP_PROGRAM.shortTitle,
  description: FLAGSHIP_PROGRAM.heroDescription,
  openGraph: {
    title: FLAGSHIP_PROGRAM.title,
    description: FLAGSHIP_PROGRAM.heroDescription,
  },
};

export default function Page() {
  return <CaliforniaExecutiveLearningPage />;
}
