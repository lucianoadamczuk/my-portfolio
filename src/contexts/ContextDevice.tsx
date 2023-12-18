"use client";

import React, {
  type ReactNode,
  createContext,
  useState,
  useEffect,
} from "react";

export const ContextDevice = createContext({ device: "mobile" });

interface PropsProvider {
  children: ReactNode;
}
export const ProviderDevice = ({ children }: PropsProvider): ReactNode => {
  const [device, setDevice] = useState<string>("mobile");

  function detectDevice(): void {
    const width = window.innerWidth;
    if (width < 1024) {
      setDevice("mobile");
    } else if (width >= 1024 && width <= 1500) {
      setDevice("desktop");
    } else {
      setDevice("tv");
    }
  }

  useEffect(() => {
    detectDevice();
    window.addEventListener("resize", detectDevice);
    return () => {
      window.removeEventListener("resize", detectDevice);
    };
  }, []);

  return (
    <ContextDevice.Provider value={{ device }}>
      {children}
    </ContextDevice.Provider>
  );
};
