import { Chip } from '@heroui/chip';
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card';
import { Image } from '@heroui/image';
import { Link } from '@heroui/link';
import { Button } from '@heroui/button';
import { Link as URLIcon } from 'lucide-react';

import { techsIcons, contactTypes } from '@/config/techs';
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

type ContactCardProps = {
  name: string;
  link: string;
  type: keyof typeof contactTypes;
};

export const ProjectCard = ({ project, techs }: ProjectCardProps) => {
  return (
    <Card className="flex flex-col gap-2 shadow-2xl shadow-blue-500/20">
      <CardHeader>
        <Image
          alt={project.title}
          className="rounded-t-lg"
          src={project.image}
        />
      </CardHeader>
      <CardBody className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-primary-500">
            {project.title}
          </h3>
          <Button
            as={Link}
            href={project.link}
            isExternal
            size="sm"
            variant="light"
            startContent={<URLIcon />}
          >
            Demo
          </Button>
        </div>
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

export const ContactCard = ({ name, link, type }: ContactCardProps) => {
  const Icon = contactTypes[type];
  return (
    <Card
      className="flex flex-col shadow-2xl p-4 shadow-blue-500/20"
      as={Link}
      aria-label={name}
      href={link}
      isExternal
    >
      <CardHeader className="flex items-center justify-center">
        <Icon className="text-primary-500 text-center" />
      </CardHeader>
      <CardBody className="flex items-center justify-center">{name}</CardBody>
    </Card>
  );
};
