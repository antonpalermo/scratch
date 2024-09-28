import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-background">
      <div className="container flex flex-col items-center justify-between space-y-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center space-x-2">
          <Image width={100} height={80} src="/scratch-dark.svg" alt="logo" />
        </div>
        <nav className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-6">
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Products
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <div className="flex flex-wrap items-center justify-center space-x-4 text-sm text-muted-foreground">
          <Link href="#" className="hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline underline-offset-4">
            Cookie Policy
          </Link>
        </div>
      </div>
      <div className="container py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} effectiveCoding Inc. All rights reserved.
      </div>
    </footer>
  );
}
