import {NavbarSectionType} from '../types/section';
import {NFTImageSectionType} from '../types/section'
import {TopTitleSectionType} from '../types/section';
import {FooterSectionType} from '../types/section';

export const NavbarSection:NavbarSectionType = {
  logo: '/images/logo.png',
  navigation: [
    {name: 'Lend', href: '/#/lend'},
    {name: 'Borrow', href: '/#/borrow'},
    {name: 'Statistics', href: '/#/statistics'},
    {name: 'Loans', href: '/#/loans'},
  ]
}

export const NFTImageSection:NFTImageSectionType = {
  paths: ['/images/nft/1.png', '/images/nft/2.png', '/images/nft/3.png', '/images/nft/4.png']
}


export const TopTitleSection:TopTitleSectionType = {
  title: ['BORROW & LEND AGAINST', 'YOUR NFTS, INSTANTLY'],
  buttons: ['Lend', 'Borrow']
}

export const FooterSection:FooterSectionType = {
  title: 'INJLENDING.IO',
  description: 'Make money as a lender. Get cash as a borrower.',
  buttonTxt: 'Read the Document'
}
