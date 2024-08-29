import Image from "next/image";

export default function Planning() {
  return (
    <div className="overflow-hidden sm:grid sm:grid-cols-2">
      <div className="text-left space-y-5">
        <h2 className="text-2xl font-bold">Plan on your own phase!</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor
          nunc, ornare eget neque non, elementum pretium lacus.
        </p>
      </div>
      <div className="relative inset-0">
        <Image fill src={"/51-Planning.svg"} alt="image that shows planning" />
      </div>
    </div>
  );
}
