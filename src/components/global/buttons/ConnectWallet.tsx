import { useWalletStore } from "@/context/WalletContextProvider";

import React from "react";

type Props = {};

const ConnectWallet = (props: Props) => {
  const { connectWallet, injectiveAddress } = useWalletStore();
  const btnText = injectiveAddress
    ? `${injectiveAddress.slice(0, 5)}...${injectiveAddress.slice(-3)}`
    : "Connect Wallet";
  return (
    <button
      onClick={connectWallet}
      className={` border text-white px-5 py-2 text-sm hover:bg-slate-400 hover:text-zinc-800`}
    >
      {btnText}
    </button>
  );
};

export default ConnectWallet;
