import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { ReactNode } from "react";

export interface default_interface {
  className?: string;
}

export interface pages_interface {
  className?: string;
  id: string;
}

export interface children_required {
  children: string;
  className?: string;
  classTxt?: string;
}

export interface link_interface {
  link: string;
  children: string | ReactNode;
  className?: string;
  icon: IconDefinition;
}

export interface gist {
  categories: string[];
  projects: projects[];
}

export interface projects {
  name: string;
  description?: string;
  link: string;
  category: string[];
  src?: string;
}

export interface feedback {
  application: string;
  message: string;
  userId?: string | number;
}

export type json = Record<string, any>;
