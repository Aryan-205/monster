import React from "react";
import { FizziLogo } from "./FizziLogo";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-gradient-to-t from-[#90ED27]/20 to-black">
      <div className="mx-auto flex w-full max-w-4xl justify-center px-4 py-10">
        <img src="/logo.png" className="z-10 h-20 corsor-pointer" alt="" />
      </div>
    </footer>
  );
}