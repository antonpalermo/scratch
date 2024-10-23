import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/app/api/auth/auth";

import Hero from "./_components/hero";
import Footer from "./_components/footer";
import Planning from "./_components/Planing";
import Features from "./_components/feature";
import Colaborate from "./_components/colaborate";
import CallToActionSignUp from "./_components/call-to-action";

import options from "@/app/api/auth/options";

export default async function PromotionPage() {
  const session = await auth();

  if (session) {
    return redirect("/home");
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col">
      <Hero />
      <Features />
      <Colaborate />
      <Planning />
      <CallToActionSignUp />
      <div>
        <Footer />
      </div>
    </div>
  );
}
