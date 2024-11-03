import { ReactNode } from "react";

export interface default_interface {
  className: string | unknown;
}

export interface pages_interface {
  className: string | unknown;
  id: string;
}

export interface children_required {
  children: string;
  className: string | unknown;
}

export interface link_interface {
  link: string;
  children: string | ReactNode;
  className: string | unknown;
}
