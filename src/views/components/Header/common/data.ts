import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

interface iPartOfLogo {
  AUTO: string;
  EXPERT: string;
}

export const partOfLogo: iPartOfLogo = {
  AUTO: 'Auto',
  EXPERT: 'Expert'
};

interface iSocialMediaData {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<unknown, "svg">>;
  link: string;
}

interface iNavigatorLink {
  title: string;
  link: string;
}

export const socialMediaData: iSocialMediaData[] = [
  {
    title: 'facebook',
    icon:  FacebookIcon,
    link: 'http://facebook.com',
  },
  {
    title: 'instagram',
    icon:  InstagramIcon,
    link: 'http://instagram.com'
  },
  {
    title: 'Linkedin',
    icon:  LinkedInIcon,
    link: 'http://linkedin.com'
  },
  {
    title: 'twitter',
    icon:  TwitterIcon,
    link: 'http://twitter.com'
  }
];

export const navigatorLinks: iNavigatorLink[] = [
  {
    title: 'Media Info',
    link: '/media'
  },
  {
    title: 'Contact',
    link: '/contact'
  }
];