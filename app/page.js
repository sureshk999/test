import Image from "next/image";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to My Next.js App</h1>
      <Image
        src="/default.jpg"
        alt="Default Image"
        width={400}
        height={300}
        priority
      />

<Image
        src="/uploads/default.jpg"
        alt="Default Image"
        width={400}
        height={300}
        priority
      />


    </div>
  );
}
