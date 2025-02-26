import { Image } from "@heroui/image";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { GraduationCap } from "lucide-react";

export const Timeline = () => {
  return (
    <div className="relative flex flex-col gap-4 my-4 w-full">
      <div className="flex flex-col gap-8">
        <div className="flex gap-12 relative z-10">
          <div className="min-w-16 h-16 rounded-full flex items-center justify-center border-1 border-primary-500/60 gap-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <Image
              alt="UNAM"
              height={40}
              src="https://res.cloudinary.com/dugkzbxjh/image/upload/c_pad,w_1052,h_1052/v1740592572/2023-04-12T14-10-_noe.chirino_cetys.mx_-Fwd_-Petici_n-Marca-unam_zkjqav.png"
              width={40}
            />
          </div>
          <Card className="flex flex-col bg-transparent p-4 gap-2 border-1 border-primary-500/60 gap-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <CardHeader className="flex flex-col items-start gap-2">
              <h3 className="text-lg font-bold">
                UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO
              </h3>
              <div className="flex items-center gap-2">
                <GraduationCap className="text-primary-500" />
                <span className="text-sm">
                  Licenciatura en Informática • 2024 - actualidad
                </span>
              </div>
            </CardHeader>
            <CardBody>
              <div className="flex items-center gap-2">
                <p className="text-sm">
                  Desarrollo de habilidades para realizar algoritmos,
                  estructuras de datos. Adquiriendo conocimientos de sistemas
                  operativos y analisis de requisitos.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="flex gap-12 relative z-10">
          <div className="min-w-16 h-16 rounded-full flex items-center justify-center border-1 border-primary-500/60 gap-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <Image
              alt="cecyt"
              height={40}
              src="https://res.cloudinary.com/dugkzbxjh/image/upload/c_pad,w_1052,h_1052/v1740592598/cecyt-9-logo-1F6A5DDBFF-seeklogo.com_c3as5c.png"
              width={40}
            />
          </div>
          <Card className="flex flex-col p-4 bg-transparent border-1 border-primary-500/60 gap-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <CardHeader className="flex flex-col items-start gap-2">
              <h3 className="text-lg font-bold">
                Centro de Estudios Científicos y Tecnológicos No. 9 "Juan de
                Dios Bátiz"
              </h3>
              <div className="flex items-center gap-2">
                <GraduationCap className="text-primary-500" />
                <span className="text-sm">
                  Técnico en Programación • 2020 - 2024
                </span>
              </div>
            </CardHeader>
            <CardBody>
              <div className="flex items-center gap-2">
                <p className="text-sm">
                  Desarrollé habilidades en programación, bases de datos y
                  análisis de datos. Participé en proyectos de desarrollo de
                  software y adquirí conocimientos en el desarrollo de
                  aplicaciones web y móviles.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
