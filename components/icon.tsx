import dynamic from "next/dynamic";
import dynamicIconImports from "lucide-react/dynamicIconImports";

import { LucideProps } from "lucide-react";

export type IconProps = LucideProps & {
  name: keyof typeof dynamicIconImports;
};

export default function Icon({ name, ...props }: IconProps) {
  const Lucide = dynamic(dynamicIconImports[name]);

  return <Lucide {...props} />;
}
