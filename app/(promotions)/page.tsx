import React from "react";
import Hero from "./_components/hero";
import Colaborate from "./_components/colaborate";
import Planning from "./_components/Planing";
import Footer from "./_components/footer";
import Features from "./_components/feature";
import CallToActionSignUp from "./_components/call-to-action";

export default function PromotionPage() {
  return (
    <div className="max-w-6xl mx-auto min-h-screen flex flex-col">
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
