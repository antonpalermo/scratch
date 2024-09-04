import dynamicIconImports from "lucide-react/dynamicIconImports";
import SidenavItem from "./sidenav-item";

type Item = {
  href: string;
  label: string;
  icon: keyof typeof dynamicIconImports;
};

export default function Sidenav() {
  const items: Item[] = [
    {
      href: "#",
      label: "Dashboard",
      icon: "layout-dashboard"
    },
    {
      href: "#",
      label: "Drafts",
      icon: "drafting-compass"
    }
  ];

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {items.map(item => (
        <SidenavItem
          key={item.label}
          label={item.label}
          href={item.href}
          icon={item.icon}
        />
      ))}
    </nav>
  );
}
