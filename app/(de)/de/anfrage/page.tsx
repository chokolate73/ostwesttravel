import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import Footer from "@/components/sections/Footer";
import Process from "@/components/sections/Process";
import Deposit from "@/components/sections/Deposit";
import FAQ from "@/components/sections/FAQ";
import RequestFormClient from "./RequestFormClient";

export const metadata: Metadata = {
  title: "Reiseanfrage — OST-West Travel",
  description:
    "Füllen Sie das ausführliche Anfrageformular aus. Ich melde mich in Kürze bei Ihnen.",
  robots: { index: false, follow: false },
};

export default function AnfragePage({
  searchParams,
}: {
  searchParams?: { from?: string };
}) {
  const fromLanding = searchParams?.from === "landing";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-ocean-deep text-white">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            href="/de/"
            className="text-xl font-serif hover:text-gold transition-colors"
          >
            OST-West <span className="text-gold">Travel</span>
          </Link>
          <Link
            href="/de/"
            className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Zur Startseite
          </Link>
        </div>
      </div>

      {!fromLanding && (
        <>
          <Process lang="de" />
          <Deposit lang="de" />
          <FAQ lang="de" onlyCategory="deposit" />
        </>
      )}

      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-10 md:py-16">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-3">
            Reiseanfrage
          </h1>
          <p className="text-gray-500">
            Je mehr Details Sie angeben, desto genauer kann ich Ihre Reise
            planen. Pflichtfelder sind mit * markiert.
          </p>
        </div>

        <Suspense fallback={null}>
          <RequestFormClient lang="de" />
        </Suspense>
      </main>

      <Footer lang="de" />
    </div>
  );
}
