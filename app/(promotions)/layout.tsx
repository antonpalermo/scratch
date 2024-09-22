import React from "react";
import Navbar from "@/app/(promotions)/_components/navbar";

export type PromotionLayoutProps = {
  children: React.ReactNode;
};

export default function PromotionLayout({ children }: PromotionLayoutProps) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
