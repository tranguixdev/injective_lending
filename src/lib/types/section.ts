import {NavLinkType} from '.';

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

export type FooterSectionType = {
  title: string, 
  description: string, 
  buttonTxt:  string
}