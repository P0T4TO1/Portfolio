import { Link } from '@heroui/link';
import { Button } from '@heroui/button';
import { Image } from '@heroui/image';
import { button as buttonStyles } from '@heroui/theme';

import { ProjectCard } from '@/components/card';
import { SkillArea } from '@/components/skillItem';

import { siteConfig, skillsURLs } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import { GithubIcon, LinkedinIcon } from '@/components/icons';

import { FileUser, PanelsTopLeft, MailPlus } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl justify-center">
          <span className={title()}>Jaret&nbsp;</span>
          <span className={title({ color: 'blue' })}>Garcia &nbsp;</span>
          <br />
          <span className={subtitle()}>
            Desarrollador fullstack y analista de datos
          </span>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            aria-label="Twitter"
            href={siteConfig.links.linkedin}
          >
            <LinkedinIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <Link
            isExternal
            aria-label="Correo"
            href="mailto:jaretgarciagomez@gmail.com"
          >
            <MailPlus className="text-default-500" />
          </Link>
        </div>

        <div className="flex gap-3 mt-4 -ml-1">
          <Button
            as={Link}
            className={buttonStyles({
              color: 'primary',
              radius: 'full',
              variant: 'shadow',
            })}
            size="lg"
            href={'#projects'}
            endContent={<PanelsTopLeft />}
          >
            Proyectos
          </Button>
          <Button
            className={buttonStyles({
              color: 'primary',
              radius: 'full',
              variant: 'ghost',
            })}
            size="lg"
            endContent={<FileUser />}
          >
            Descargar CV
          </Button>
        </div>
      </section>

      <section
        id="projects"
        className="flex flex-col justify-center gap-4 py-8 md:py-10"
      >
        <div className="inline-block max-w-xl justify-center">
          <span className="font-semibold text-4xl">Proyectos</span>
          <br />
          <span className={subtitle()}>
            Algunos de los proyectos en los que he trabajado
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ProjectCard
            project={{
              title: 'Harvest Reborn',
              description:
                'Aplicación web para la gestión de los inventarios de pequeñas y medianas recauderias, con enfoque en la reducción de desperdicios y la optimización de los procesos de compra y venta asi como la posibilidad de realizar donaciones a organizaciones benéficas o interesados. Diseño, implementación y mantenimiento de la aplicación realizado completamente por mi.',
              image: '/HR_screen0.png',
              link: 'https://harvestreborn.me',
            }}
            techs={['TypeScript', 'Next.js', 'HeroUI', 'PostgreSQL', 'Prisma']}
          />
          <ProjectCard
            project={{
              title: 'ReserVita',
              description:
                'Aplicación web para la gestión de reservaciones en restaurantes, con enfoque en la reducción de tiempos de espera y la optimización de la gestión de mesas y reservaciones. Desarrollado por mi, con el fin de aprender y mejorar mis habilidades sobre el entendimeinto de las necesidades de los usuarios y la creación de soluciones tecnológicas, como también para practicar el uso de tecnologías como Laravel.',
              image: '/HR_screen0.png',
              link: 'https://harvestreborn.me',
            }}
            techs={[
              'TypeScript',
              'Next.js',
              'HeroUI',
              'PostgreSQL',
              'Prisma',
              'Laravel',
            ]}
          />
          <ProjectCard
            project={{
              title: 'Tetris 1v1',
              description:
                'Juego de Tetris multijugador en tiempo real, con salas de juego y chat. Desarrollado en un equipo de 2 personas, mi responsabilidad fue el desarrollo del frontend de la aplicación, utilizando React, Socket.io, Node y Express para la comunicación en tiempo real y la gestión de las salas de juego.',
              image: '/tetris1v1_screen.png',
              link: 'https://harvestreborn.me',
            }}
            techs={['JavaScript', 'Node.js', 'Express']}
          />
        </div>
      </section>

      <section
        className="flex flex-col justify-center gap-4 py-8 md:py-10"
        id="skills"
      >
        <div className="inline-block max-w-xl justify-center">
          <span className="font-semibold text-4xl">Skills</span>
          <br />
          <span className={subtitle()}>
            Algunas de las tecnologías con las que trabajo
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 text-center">
          {Object.entries(skillsURLs).map(([area, skills]) => (
            <SkillArea key={area} area={area} skills={skills} />
          ))}
        </div>
      </section>

      <section
        className="flex flex-col justify-center gap-4 py-8 md:py-10"
        id="about"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="inline-block justify-center">
            <span className="font-semibold text-4xl">Sobre mi</span>
            <br />
            <p className="lg:text-lg text-md text-default-700 my-2">
              Soy un desarrollador de 20 años, con experiencia en el desarrollo
              de aplicaciones web y móviles, interesado en la optimización de
              procesos y la creación de soluciones tecnológicas innovadoras.
              Egresado del CECyT 9 "Juan de Dios Bátiz" en la carrera de Técnico
              en Programación y actualmente estudiante de la carrera de
              Licenciatura en Informática en la Universidad Nacional Autónoma de
              México (UNAM). Me apasiona la tecnología y la programación, y
              busco siempre aprender y mejorar mis habilidades. Desde temprano
              en mi formacion técnica he trabajado en proyectos de desarrollo de
              software, adquiriendo bases sólidas en el desarrollo de
              aplicaciones web y móviles, así como en la gestión de bases de
              datos y el análisis de datos. Actualmente me encuentro en la
              búsqueda de oportunidades laborales que me permitan seguir
              creciendo y desarrollándome como profesional.
            </p>
          </div>
          <div className="inline-block justify-center">
            <Image
              alt="Jaret Garcia"
              width={300}
              radius="full"
              src="/jaret.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
