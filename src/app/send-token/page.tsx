import Image from "next/image";
import Header from "@/components/Header";
import SendToken from "@/components/send-token/send-token"


export default function Home() {
  return (
    <div>
      <Header />
      <SendToken/>
    </div>
  );
}