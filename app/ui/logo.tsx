import { GlobeAltIcon } from "@heroicons/react/24/outline";
import {  geistMono } from '../layout';

export default function DiamondLogo() {
  return (
    <div
      className={`${geistMono.className} geistMono flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Diamond</p>
    </div>
  );
}
