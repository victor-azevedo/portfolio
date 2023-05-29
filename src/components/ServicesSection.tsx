import { ServicesList } from "../../mock/servicesList";
import { AboveTitle } from "./AboveTitle";
import { SectionTitle } from "./SectionTitle";
import { Service } from "./Service";

interface IServicesSection {
  servicesList: ServicesList;
}

export const ServicesSection: React.FC<IServicesSection> = ({
  servicesList,
}) => {
  return (
    <section
      className="w-full py-20 flex flex-col justify-center items-center gap-10"
      id="services"
    >
      <div className="">
        <AboveTitle text="Atuação" />
        <SectionTitle title="Full Stack" />
      </div>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {servicesList.map((service) => {
          return (
            <div className="basis-1/3" key={service.name}>
              <Service
                name={service.name}
                description={service.description}
                icon={service.icon}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
