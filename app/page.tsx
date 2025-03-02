import { Link } from '@heroui/link';
import { Button } from '@heroui/button';
import { Image } from '@heroui/image';
import { button as buttonStyles } from '@heroui/theme';
import { FileUser, PanelsTopLeft } from 'lucide-react';

import { ProjectCard, ContactCard } from '@/components/card';
import { SkillArea } from '@/components/skillItem';
import { Timeline } from '@/components/timeline';
import { title, subtitle } from '@/components/primitives';
import { GithubIcon, LinkedinIcon } from '@/components/icons';

import { siteConfig, skillsURLs, projects } from '@/config/site';
import type { Techs } from '@/types';

export default function Home() {
  return (
    <>
      <section
        className="flex flex-col justify-center gap-4 py-12 md:py-16"
        id="home"
      >
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
        </div>

        <div className="flex gap-3 mt-4 -ml-1">
          <Button
            as={Link}
            className={buttonStyles({
              color: 'primary',
              radius: 'full',
              variant: 'shadow',
            })}
            endContent={<PanelsTopLeft />}
            href={'#projects'}
            size="lg"
          >
            Proyectos
          </Button>
          <Button
            as={Link}
            className={buttonStyles({
              color: 'primary',
              radius: 'full',
              variant: 'ghost',
            })}
            endContent={<FileUser />}
            size="lg"
            href="/CV.pdf"
            isExternal
          >
            Ver CV
          </Button>
        </div>
      </section>

      <section
        className="flex flex-col justify-center gap-4 py-20 md:py-16"
        id="projects"
      >
        <div className="inline-block max-w-xl justify-center">
          <span className="font-semibold text-4xl">Proyectos</span>
          <br />
          <span className={subtitle()}>
            Algunos de los proyectos en los que he trabajado
          </span>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              techs={project.techs as Techs[]}
            />
          ))}
        </div>
      </section>

      <section
        className="flex flex-col justify-center gap-4 py-20 md:py-16"
        id="skills"
      >
        <div className="inline-block max-w-xl justify-center">
          <span className="font-semibold text-4xl">Skills</span>
          <br />
          <span className={subtitle()}>
            Algunas de las tecnologías con las que trabajo
          </span>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 text-center">
          {Object.entries(skillsURLs).map(([area, skills]) => (
            <SkillArea key={area} area={area} skills={skills} />
          ))}
        </div>
      </section>

      <section
        className="flex flex-col justify-center gap-4 py-20 md:py-16"
        id="about"
      >
        <div className="my-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="inline-block justify-center">
              <span className="font-semibold text-3xl">Sobre mi</span>
              <br />
              <p className="text-md text-default-700 my-2">
                Soy un desarrollador de 19 años, con{' '}
                <span className="font-bold">
                  experiencia en el desarrollo de aplicaciones web y móviles
                </span>
                , interesado en la optimización de procesos y la creación de
                soluciones tecnológicas innovadoras. Egresado del CECyT 9
                &quot;Juan de Dios Bátiz&quot; en la carrera de{' '}
                <span className="font-bold">Técnico en Programación</span> y
                actualmente estudiante de la carrera de Licenciatura en
                Informática en la Universidad Nacional Autónoma de México
                (UNAM). Me apasiona la tecnología y la programación, y busco
                siempre aprender y mejorar mis habilidades. Desde temprano en mi
                formacion técnica he trabajado en proyectos de desarrollo de
                software, adquiriendo{' '}
                <span className="font-bold">bases sólidas</span> en el
                desarrollo de aplicaciones web y móviles, así como en la gestión
                de{' '}
                <span className="font-bold">
                  bases de datos y el análisis de datos
                </span>
                . Actualmente me encuentro en la búsqueda de oportunidades
                laborales que me permitan seguir creciendo y desarrollándome
                como profesional.
              </p>
            </div>
            <div className="flex inline-block items-center justify-center">
              <Image
                alt="Jaret Garcia"
                className="bg-stone-500"
                radius="full"
                src="/perfil.jpeg"
                width={300}
              />
            </div>
          </div>
        </div>
        <div className="my-4">
          <span className="font-semibold text-3xl">Educación</span>
          <br />
          <Timeline />
        </div>
      </section>

      <section
        className="flex flex-col justify-center gap-4 py-12 md:py-16"
        id="contact"
      >
        <div className="inline-block max-w-xl justify-center">
          <span className="font-semibold text-4xl">Contacto</span>
        </div>
        <div className="flex gap-3 md:px-8">
          {Object.entries(siteConfig.contacts).map(([index, contact]) => (
            <div key={index} className="md:w-1/3">
              <ContactCard
                name={contact.name}
                link={contact.link}
                type={contact.type as 'Linkedin' | 'Mail' | 'Whatsapp'}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
