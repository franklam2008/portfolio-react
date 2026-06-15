import resumePdf from '../assets/images/Frank_Lam.pdf'
import frankAvatar from '../assets/images/frank.png'
import showcaseImage from '../assets/images/wtFrontPage.png'
import topWave from '../assets/images/wave/topWave.svg'

import clIcon from '../assets/images/projectIcons/cl.png'
import expressProjectIcon from '../assets/images/projectIcons/express.png'
import gardenIcon from '../assets/images/projectIcons/garden.png'
import gatsbyProjectIcon from '../assets/images/projectIcons/gatsby.png'
import hnbIcon from '../assets/images/projectIcons/hnb.png'
import reactProjectIcon from '../assets/images/projectIcons/react1.png'
import wordpressProjectIcon from '../assets/images/projectIcons/wordPress1.png'

import angularIcon from '../assets/images/skillIcons/angular.png'
import bootstrapIcon from '../assets/images/skillIcons/bootstrap.png'
import contentfulIcon from '../assets/images/skillIcons/contentful.png'
import expressIcon from '../assets/images/skillIcons/express.png'
import firebaseIcon from '../assets/images/skillIcons/firebase.png'
import gatsbyIcon from '../assets/images/skillIcons/gatsby.png'
import gitIcon from '../assets/images/skillIcons/git.png'
import graphqlIcon from '../assets/images/skillIcons/graphql.png'
import htmlIcon from '../assets/images/skillIcons/html.png'
import javascriptIcon from '../assets/images/skillIcons/javaS.png'
import jestIcon from '../assets/images/skillIcons/jest.png'
import ngrxIcon from '../assets/images/skillIcons/ngrx.png'
import nodeIcon from '../assets/images/skillIcons/node.png'
import reactIcon from '../assets/images/skillIcons/react.png'
import rxjsIcon from '../assets/images/skillIcons/rxjs.png'
import scssIcon from '../assets/images/skillIcons/scss.png'
import typescriptIcon from '../assets/images/skillIcons/typescript.png'
import vscodeIcon from '../assets/images/skillIcons/vs.png'
import wordpressIcon from '../assets/images/skillIcons/wordPress.png'
import xdIcon from '../assets/images/skillIcons/xd.png'

export const ownerName = 'Frank Lam'

export const siteMetadata = {
  title: 'Frank Lam Portfolio',
  description: 'Frank Lam Portfolio',
  author: 'github@franklam2008',
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'My Work', href: '/projects' },
  { label: 'Skill Set', href: '/skills' },
  { label: 'Contact', href: '/contact' },
]

export const homeContent = {
  greeting: "Hi, I'm Frank!",
  title: 'I build amazing experiences',
  subtitle: 'Web Developer from Redmond, WA',
  intro:
    "I'm a software developer who enjoys building practical products for businesses and everyday users. I focus on Angular and the MERN stack, and I care about turning real problems into simple, reliable solutions. I'm always excited to keep learning and creating better software.",
  wave: topWave,
}

export const projects = [
  {
    title: 'Carnegie Learning',
    meta: 'Angular, TypeScript, Ngrx, RxJS',
    text: 'Experienced in building and maintaining Angular applications utilized by thousands of customers daily. Collaborated with a diverse group of educational professionals to design and deploy educational software across the K-12 curriculum in the U.S. Improved structural layout, implemented strict-typing, and developed legacy applications to enhance functionality and user experience',
    image: clIcon,
    links: [
      { label: 'GitHub', href: 'https://github.com/CarnegieLearningWeb/passport-frontend-v2' },
      { label: 'Live Site', href: 'https://www.carnegielearning.com/login/#/' },
    ],
  },
  {
    title: 'Huntington Bank BAO',
    meta: 'Angular, TypeScript, Ngrx, RxJS',
    text: "Involved in Angular projects for Huntington Bank's Business Online Account Opening flow, utilizing Agile Scrum methodologies. Expertise in using TypeScript, Ngrx, and RxJS for app state management and component implementation. Improved code unit test coverage from 11% to 80% with the use of Jest testing framework, ensuring the quality of the release branch",
    image: hnbIcon,
    links: [
      {
        label: 'Live Site',
        href: 'https://apply.huntington.com/new/business/welcome?product=PT',
      },
    ],
  },
  {
    title: 'this.Portfolio',
    meta: 'React, Gatsby, Semantic UI',
    text: 'Built a portfolio utilizing React and Gatsby JS, incorporating a design inspired by Semantic UI. The portfolio is hosted on a serverless Netlify platform for optimized performance and reliability.',
    image: gatsbyProjectIcon,
    links: [{ label: 'GitHub', href: 'https://github.com/franklam2008/Portfolio' }],
  },
  {
    title: 'Professional Banking Dashboard',
    meta: 'React, Create-React-App, Material UI',
    text: 'Developed a professional banking dashboard using React and Redux for state management, with a user-friendly design based on Material UI.',
    image: gardenIcon,
    links: [
      { label: 'GitHub', href: 'https://github.com/franklam2008/banking-dashboard' },
      { label: 'Live Site', href: 'https://banking-dashboard.netlify.com' },
    ],
  },
  {
    title: 'Media Application',
    meta: 'React, FireBase, Bootstrap',
    text: 'Media-focused single page React application, featuring FireBase authentication. Customized the user experience with a unique UX/UI design using Bootstrap. Hosted the application on a serverless Netlify platform for efficient and scalable performance.',
    image: reactProjectIcon,
    links: [
      { label: 'GitHub', href: 'https://github.com/franklam2008/Media-Application' },
      { label: 'Live Site', href: 'https://kflam.netlify.app/' },
    ],
  },
  {
    title: 'Business E-commerce',
    meta: 'WordPress, PHP',
    text: 'Developed an E-commerce website using WordPress, which has generated over hundred thousand sales through the integration of Getresponse and Pipedrive for custom HTML email marketing campaigns and CRM. The website also includes live chat functionality powered by Tidio and a support ticket system using Zendesk.',
    image: wordpressProjectIcon,
    links: [{ label: 'Showcase', href: showcaseImage }],
  },
  {
    title: 'Node Js App',
    meta: 'Node, Express, MongoDB',
    text: 'Manages API requests and submits them to Airtable, Twilio, and SendGrid. Also performs web scraping with Puppeteer to gather information from other websites.',
    image: expressProjectIcon,
    links: [{ label: 'GitHub', href: 'https://github.com/franklam2008/WebScrapingAPI' }],
  },
]

export const skillSections = [
  {
    title: 'Front-End',
    skills: [
      { name: 'TypeScript', image: typescriptIcon },
      { name: 'Angular2', image: angularIcon },
      { name: 'React', image: reactIcon },
      { name: 'Ngrx', image: ngrxIcon },
      { name: 'RxJS', image: rxjsIcon },
      { name: 'Jest', image: jestIcon },
      { name: 'Gatsby', image: gatsbyIcon },
      { name: 'JS ES6', image: javascriptIcon },
      { name: 'SCSS', image: scssIcon },
      { name: 'Bootstrap 5', image: bootstrapIcon },
      { name: 'Adobe XD', image: xdIcon },
      { name: 'HTML 5', image: htmlIcon },
      { name: 'WordPress', image: wordpressIcon },
    ],
  },
  {
    title: 'Back-End',
    skills: [
      { name: 'Node JS', image: nodeIcon },
      { name: 'Graphql', image: graphqlIcon },
      { name: 'Firebase', image: firebaseIcon },
      { name: 'ExpressJS', image: expressIcon },
    ],
  },
  {
    title: 'Others',
    skills: [
      { name: 'Contentful', image: contentfulIcon },
      { name: 'Git', image: gitIcon },
      { name: 'VS Code', image: vscodeIcon },
    ],
  },
]

export const languageContent =
  'I can also read and write chinese, and speak fluent Cantonese and Mandarin.'

export const contactLinks = {
  resume: {
    label: 'Resume',
    href: resumePdf,
    icon: frankAvatar,
  },
  github: {
    label: 'GitHub',
    href: 'https://github.com/franklam2008',
  },
  email: {
    label: 'E-mail',
    href: 'mailto:franklam2008@gmail.com',
  },
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/frank-lam-010a9253',
  },
}

export const contactForm = {
  endpoint: 'https://secure-peak-92770.herokuapp.com/submit',
  heading: 'Contact Me',
  text: "Let's talk! I would love to hear your project idea, I'll get the beer.",
  disclaimer:
    "I'll never share your information with anyone else. It saves in Airtable securely and sends you a SMS and email via Twilio and SendGrid API.",
}
