import Link from "next/link";
import dynamicIconImports from "lucide-react/dynamicIconImports";

import Icon from "@/components/icon";

export type SidenavItemProps = {
  href: string;
  label: string;
  icon: keyof typeof dynamicIconImports;
};

export default function SidenavItem({ href, icon, label }: SidenavItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-slate-200 hover:text-primary"
    >
      <Icon name={icon} className="h-4 w-4" />
      {label}
    </Link>
  );
}
