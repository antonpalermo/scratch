import React from "react";
import Landing from "./_components/landing";
import Colaborate from "./_components/colaborate";
import Planning from "./_components/Planing";

export default function PromotionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-y-10 flex-1">
        <Landing />
        <Colaborate />
        <Planning />
      </div>
    </div>
  );
}
