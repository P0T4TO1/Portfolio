import { Chip } from '@heroui/chip';
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card';
import { Image } from '@heroui/image';
import { Link } from '@heroui/link';

import { techsIcons } from '@/config/techs';
import React from 'react';

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
  techs: (keyof typeof techsIcons)[];
};



export const ProjectCard = ({ project, techs }: ProjectCardProps) => {
  return (
    <Card className="flex flex-col gap-2" isHoverable>
      <CardHeader>
        <Image
          alt={project.title}
          className="rounded-t-lg"
          src={project.image}
        />
      </CardHeader>
      <CardBody>
        <Link className="text-primary-500" href={project.link} isExternal>
          <h3 className="text-lg font-bold">{project.title}</h3>
        </Link>
        <p className="text-sm">{project.description}</p>
      </CardBody>
      <CardFooter className="flex flex-wrap gap-1">
        {techs.map((tech) => (
          <Chip
            key={tech}
            variant="flat"
            color="primary"
            size="sm"
            startContent={React.createElement(techsIcons[tech])}
          >
            {tech}
          </Chip>
        ))}
      </CardFooter>
    </Card>
  );
};
