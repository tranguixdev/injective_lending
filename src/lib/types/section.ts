import {NavLinkType} from '.';


export type section = {
  title: string
}

export type NavbarSectionType = {
  logo: string,
  navigation: NavLinkType[];
};

export type TopTitleSectionType = {
  title: string[],
  buttons: string[]
}

export type NFTImageSectionType = {
  paths: string[]
}
export interface FooterSectionType extends section  {
  description: string, 
  buttonTxt:  string
}

export type StatisticSectionType = {
  title: string[],
  description: string
}

export type LoanSectionType = {
  title: string[],
  description: string
}

export type LendSectionType = {
  title: string[],
  description: string,
}

export type tableSectionType = {
  columns: string[]
}

export type BorrowSectionType = {
  title: string[],
  description: string
}
