"use client";

import React, { createContext, useContext, useMemo, useState, PropsWithChildren } from "react";

export type UIState = {
  connectOpen: boolean;
  signOpen: boolean;
  wrongNetworkOpen: boolean;
  openConnect: () => void;
  closeConnect: () => void;
  openSign: () => void;
  closeSign: () => void;
  openWrongNetwork: () => void;
  closeWrongNetwork: () => void;
};

const UIContext = createContext<UIState | undefined>(undefined);

export default function UIProvider({ children }: PropsWithChildren<Record<string, unknown>>) {
  const [connectOpen, setConnectOpen] = useState(false);
  const [signOpen, setSignOpen] = useState(false);
  const [wrongNetworkOpen, setWrongNetworkOpen] = useState(false);

  const value = useMemo<UIState>(() => ({
    connectOpen,
    signOpen,
    wrongNetworkOpen,
    openConnect: () => setConnectOpen(true),
    closeConnect: () => setConnectOpen(false),
    openSign: () => setSignOpen(true),
    closeSign: () => setSignOpen(false),
    openWrongNetwork: () => setWrongNetworkOpen(true),
    closeWrongNetwork: () => setWrongNetworkOpen(false),
  }), [connectOpen, signOpen, wrongNetworkOpen]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
}
