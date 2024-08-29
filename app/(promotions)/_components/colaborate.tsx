import Image from "next/image";

export default function Colaborate() {
  return (
    <div className="overflow-hidden sm:grid sm:grid-cols-2">
      <div className="relative inset-0">
        <Image fill src={"/58-Teamwork.svg"} alt="image that shows teamwork" />
      </div>
      <div className="text-left space-y-5">
        <h2 className="text-2xl font-bold">
          Colaborate and organize <br />
          important things!
        </h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor
          nunc, ornare eget neque non, elementum pretium lacus.
        </p>
      </div>
    </div>
  );
}
