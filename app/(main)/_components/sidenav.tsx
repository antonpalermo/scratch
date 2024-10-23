import dynamicIconImports from "lucide-react/dynamicIconImports";
import SidenavItem from "./sidenav-item";
import prisma from "@/lib/prisma";
import { auth } from "@/app/api/auth/auth";
import options from "@/app/api/auth/options";
import { Button } from "@/components/ui/button";
import Icon from "@/components/icon";
import CreatePage from "@/app/(main)/_components/CreatePage";

type Item = {
  href: string;
  label: string;
  icon: keyof typeof dynamicIconImports;
};

export default async function Sidenav() {
  const session = await auth();
  const pages = await prisma.pages.findMany({
    where: {
      owner: { email: session?.user?.email! }
    }
  });

  const items: Item[] = [
    {
      href: "/home",
      label: "Home",
      icon: "house"
    },
    {
      href: "#",
      label: "Explore",
      icon: "compass"
    },
    {
      href: "#",
      label: "Archives",
      icon: "archive"
    }
  ];

  return (
    <nav className="grid items-start gap-5 px-2 text-sm font-medium lg:px-4">
      <div>
        {items.map(item => (
          <SidenavItem
            key={item.label}
            label={item.label}
            href={item.href}
            icon={item.icon}
          />
        ))}
        <CreatePage />
      </div>
      <div>
        <span className="mb-2 block px-3 text-sm font-semibold text-muted-foreground">
          Privates
        </span>
        {pages.map(page => (
          <SidenavItem
            key={page.id}
            label={page.title}
            href={`/${page.id}`}
            icon="file"
          />
        ))}
      </div>
    </nav>
  );
}
