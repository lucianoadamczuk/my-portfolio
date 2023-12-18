import { ProviderDevice } from "@/contexts";
import React, { type ReactNode } from "react";
interface Props {
  children: ReactNode;
}
export const Providers = ({ children }: Props): React.ReactNode => {
  return <ProviderDevice>{children}</ProviderDevice>;
};
