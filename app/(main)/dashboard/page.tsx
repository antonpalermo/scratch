import CreateNote from "@/app/(main)/_components/create-note";

export default function Dashboard() {
  return (
    <div>
      <div className="w-full flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
        <CreateNote />
      </div>
    </div>
  );
}
