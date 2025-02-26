import { Image } from '@heroui/image';
import { Card } from '@heroui/card';

interface SkillItemProps {
  alt: string;
  src: string;
  label: string;
}

type SkillAreaProps = {
  area: string;
  skills: SkillItemProps[];
};

export const SkillItem: React.FC<SkillItemProps> = ({ alt, src, label }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <Image alt={alt} src={src} width={50} height={50} />
      <p
        className="text-default-700 font-semibold"
        style={{ fontFamily: 'Inter' }}
      >
        {label}
      </p>
    </div>
  );
};

export const SkillArea: React.FC<SkillAreaProps> = ({ area, skills }) => {
  return (
    <Card className="p-4">
      <div className="flex flex-col gap-4">
        <span className="font-semibold text-2xl">{area}</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {skills.map((skill, index) => (
            <SkillItem
              key={index}
              alt={skill.label}
              src={skill.src}
              label={skill.label}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};
