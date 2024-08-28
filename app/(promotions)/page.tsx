import React from "react";
import Landing from "./_components/landing";

export default function PromotionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-y-10 flex-1">
        <div className="px-5 md:px-10">
          <Landing />
        </div>
      </div>
    </div>
  );
}
