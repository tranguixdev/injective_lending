import {LendSectionType, NavbarSectionType} from '../types/section';
import {NFTImageSectionType} from '../types/section'
import {TopTitleSectionType} from '../types/section';
import {FooterSectionType} from '../types/section';
import {LoanSectionType} from '../types/section';
import {StatisticSectionType} from "../types/section";
import {tableSectionType} from "../types/section";
import {BorrowSectionType} from "../types/section";

export const NavbarSection:NavbarSectionType = {
  logo: '/images/logo.png',
  navigation: [
    {name: 'Lend', href: '/lend'},
    {name: 'Borrow', href: '/borrow'},
    {name: 'Statistics', href: '/statistics'},
    {name: 'Loans', href: '/loans'},
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

export const StatisticSection:StatisticSectionType = {
  title: ['My', 'Lending', 'statistics'],
  description: 'On this page, you can view your total interest earned along with other relevant statistics.'
}

export const LoanSection: LoanSectionType = {
  title: ['My', 'Loan'],
  description: 'These are the NFTs you have used as collateral for loans (borrowed against). To retain ownership of your NFT, you must fully repay these loans before the expiration date. Failure to repay the loans by the expiration date will result in the loss of your NFT.'
}

export const LendTableFieldSection: tableSectionType = {
  columns: ['Collection', 'Available Pool', 'Best Offer', 'APY', 'Duration']
}

export const LendSection:LendSectionType = {
  title: ['Offer loans on', 'NFT Collections'],
  description: 'Explore the collections below and set your price. The best current offer will be displayed to potential borrowers. If they accept your offer, they must lock in an NFT from that collection as collateral. You will receive repayment at the end of the loan term, including interest. Should the borrower default, you retain ownership of the NFT.'
}

export const BorrowSection:BorrowSectionType = {
  title: ['Borrow', 'against my NFTs'],
  description: 'Instantly secure a loan using your NFTs. Accepting a loan offer results in the creation of a secure contract, which sends the NFT from your wallet into a smart contract until the loan is completed. Failure to repay by the due date allows the lender to repossess your NFT. Complete repayment of the loan by the expiration date will automatically send back the NFT to your wallet.'
}