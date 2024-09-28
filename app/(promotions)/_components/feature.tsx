import Icon from "@/components/icon";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
type Feature = {
  heading: string;
  subHeading: string;
  icon: keyof typeof dynamicIconImports;
};

export default function Features() {
  const features: Feature[] = [
    {
      heading: "All-in-One Workspace",
      icon: "file-code",
      subHeading:
        "Write, plan, collaborate, and get organized. Notion is all youneed — in one tool."
    },
    {
      heading: "Infinite Flexibility",
      icon: "infinity",
      subHeading:
        "Customize Notion to work the way you do. It's easy to adapt asyour needs change."
    },
    {
      heading: "Built for Collaboration",
      icon: "layout-panel-left",
      subHeading:
        "Share, comment, and work together. Notion keeps everyone on the same page."
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(feat => (
            <div
              key={feat.heading}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="bg-gray-100 p-5 rounded-full">
                <Icon name={feat.icon} className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-xl font-bold">{feat.heading}</h2>
              <p className="text-gray-500 dark:text-gray-400">
                {feat.subHeading}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
