"use client";

import React from "react";
import dynamic from "next/dynamic";

const ConnectModal = dynamic(() => import("./modals/ConnectModal"), { ssr: false });
const SignModal = dynamic(() => import("./modals/SignModal"), { ssr: false });
const WrongNetworkModal = dynamic(() => import("./modals/WrongNetworkModal"), { ssr: false });

export default function ModalsHost() {
  return (
    <>
      <ConnectModal />
      <SignModal />
      <WrongNetworkModal />
    </>
  );
}
