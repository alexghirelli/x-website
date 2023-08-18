export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Cartier e-commerce",
    techs: ["JS", "C#", ".NET", "Algolia", "SASS", "IBM Websphere Commerce"],
    link: "https://cartier.com",
  },
  {
    title: "Balmain e-commerce",
    techs: ["JS", "C#", ".NET", "SASS"],
    link: "https://www.balmain.com/",
  },
  {
    title: "Karl Lagerfeld e-commerce",
    techs: ["Vanilla JS", "C#", ".NET", "SASS"],
    link: "https://www.karllagerfeld.com/",
  },
  // {
  //   title: "Musixmatch",
  //   techs: ["PHP", "Symfony", "Mezzio", "Elasticsearch", "Terraform", "NodeJS", "ECS", "EKS", "SNS", "S3", "CloudFront", "CloudWatch", "DynamoDB", "Lambda"],
  //   link: "https://www.musixmatch.com/",
  // },
  {
    title: "Technogym e-commerce",
    techs: ["JS", "React", "PHP", "Magento", "Wordpress", "SASS"],
    link: "https://www.technogym.com/",
  },
];

export default projects;
