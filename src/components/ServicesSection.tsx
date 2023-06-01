import { ServicesList } from "../../mock/servicesList";
import { AboveTitle } from "./AboveTitle";
import { SectionContainer } from "./SectionContainer";
import { SectionTitle } from "./SectionTitle";
import { Service } from "./Service";

interface IServicesSection {
  servicesList: ServicesList;
}

export const ServicesSection: React.FC<IServicesSection> = ({
  servicesList,
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-16">
      <div>
        <AboveTitle text="Atuação" />
        <SectionTitle title="Full Stack" />
      </div>
      <div className="flex justify-center items-start gap-12 flex-wrap">
        {servicesList.map((service) => {
          return (
            <div className="md:basis-2/5" key={service.name}>
              <Service
                name={service.name}
                description={service.description}
                icon={service.icon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
