import Header from "@/components/Header";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="w-full">
      <Header />
      <div className="w-screen h-screen flex mx-auto my-auto justify-center items-center">
        <SignIn />
      </div>
    </main>
  );
}
