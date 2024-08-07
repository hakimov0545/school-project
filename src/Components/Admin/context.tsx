import React from "react";
export const RouteContext = React.createContext({
  activePage: "Dashboard",
  SetActivePage: (value: string) => {},
});
