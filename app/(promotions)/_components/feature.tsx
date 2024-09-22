import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Features() {
  const features = [
    {
      heading: "All-in-One Workspace",
      subHeading:
        "Write, plan, collaborate, and get organized. Notion is all youneed — in one tool."
    },
    {
      heading: "Infinite Flexibility",
      subHeading:
        "Customize Notion to work the way you do. It's easy to adapt asyour needs change."
    },
    {
      heading: "Built for Collaboration",
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
              <CheckCircle2 className="h-10 w-10 text-primary" />
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
