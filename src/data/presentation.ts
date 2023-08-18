type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "alex@1gh.dev",
  title: "Hi, I’m Alex 👋",
  description:
    "Hello, I'm A NERDY MAN who love to code, travel the world, listen to music and take some shot of unforgettable moments!",
  socials: [
    {
      label: "X",
      link: "https://x.com/alexGhirelli",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/alexghirelli",
    },
    {
      label: "Github",
      link: "https://github.com/alexghirelli",
    },
  ],
};

export default presentation;
