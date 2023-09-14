import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center ">
      <Image src="spinner.svg" alt="loading..." height={400} width={400} />
    </div>
  );
}
