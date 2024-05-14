import { Button } from "antd";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen grainy from-yellow-100 to-orange-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-4xl font-bold text-slate-800 font-mono">
          Web Writing Tool
        </h1>
      

      <div className="flex justify-center mt-5">
          <Link href="/sign-up">
            <Button type="primary" className="bg-slate-700 hover:bg-slate-600 mt-2 w-[150px] h-10">Get Started 
            <ArrowRight className="mt-[-17px] ml-[100px] w-4 h-4"/>
            </Button>
          </Link>
      </div>

      </div>
    </div>
  );
}
