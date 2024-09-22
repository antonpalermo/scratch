import Image from "next/image";
import Link from "next/link";

export default function Planning() {
  const meta = {
    heading: "Plan on your own phase!",
    subHeading:
      "Experience a new level of productivity with our intuitive interface and powerful features. From task management to document creation, we've got you covered."
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4 lg:order-last">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {meta.heading}
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {meta.subHeading}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Learn More
              </Link>
            </div>
          </div>
          <Image
            src="/51-Planning.svg"
            width={550}
            height={550}
            alt="Product illustration"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full "
          />
        </div>
      </div>
    </section>
  );
}
