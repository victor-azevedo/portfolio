import { ServicesList, servicesListIcons } from "../../mock/servicesList";

interface IService {
  name: ServicesList;
  description: string;
}

export const Service: React.FC<IService> = ({ name, description }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="w-14 h-14 bg-zinc-300 rounded-2xl flex items-center justify-center ">
        {servicesListIcons[name]}
      </div>
      <h5 className="font-Jakarta text-lg font-medium text-center min-w-[110px]">
        {name}
      </h5>
      <p className="text-center min-w-[350px]">{description}</p>
    </div>
  );
};
