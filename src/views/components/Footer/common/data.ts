import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

interface iSocialMediaData {
  id: number;
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<unknown, "svg">>;
  link: string;
}

interface iFooterMenuData {
  id: number;
  title: string;
  link: string;
}

export const footerSocialData: iSocialMediaData[] = [
  {
    id: 1,
    title: 'youtube',
    icon:  YouTubeIcon,
    link: 'http://youtube.com'
  },
  {
    id: 2,
    title: 'facebook',
    icon:  FacebookIcon,
    link: 'http://facebook.com',
  },
  {
    id: 3,
    title: 'twitter',
    icon:  TwitterIcon,
    link: 'http://twitter.com'
  }
];

export const footerMenuData: iFooterMenuData [] = [
  {
    id: 1,
    title: 'Home',
    link: '/home'
  },
  {
    id: 2,
    title: 'Testing',
    link: '/test'
  },
  {
    id: 3,
    title: 'About us',
    link: '/about'
  },
  {
    id: 4,
    title: 'Business enquires',
    link: '/enquires'
  },
  {
    id: 5,
    title: 'Privacy policy',
    link: '/privacy'
  }
];