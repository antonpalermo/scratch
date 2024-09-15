import { DetailedHTMLProps, HTMLAttributes } from "react";

type MainShellProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {};

function MainShell(props: MainShellProps) {
  return <section className="w-full space-y-5" {...props} />;
}

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {};

function Heading(props: HeadingProps) {
  return <h1 className="text-lg font-semibold md:text-2xl" {...props} />;
}

const Shell = Object.assign(MainShell, { Heading });

export default Shell;
