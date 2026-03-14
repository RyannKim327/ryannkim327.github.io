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
  img?: string;
}

export interface blogs {
  id: number;
  title: string;
  content: string;
  tags: string[];
  imgs?: string[];
  time: number | string;
}

export interface feedback {
  application: string;
  message: string;
  userId?: string | number;
  date: string;
}

export interface exp_interface {
  title: string;
  year: number;
  children: string[];
  icon: string;
  even: boolean;
}

export interface experience {
  title: string;
  year: number;
  icon: string;
  content?: string[];
}

export interface certificates {
  url: string;
  source: string;
  category: string;
}

export type json = Record<string, any>;
