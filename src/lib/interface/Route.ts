import { ComponentClass } from "react";

export interface Route {
  component: ComponentClass;
  path: string;
  exact: boolean;
}