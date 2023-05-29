import { FiLayout, FiServer } from "react-icons/fi";

export type ServicesList = keyof typeof servicesListIcons;

export const servicesListIcons = {
  "Front End": (
    <FiLayout className="text-3xl fill-indigo-500 stroke-blackText" />
  ),
  "Back End": (
    <FiServer className="text-3xl fill-indigo-500 stroke-blackText" />
  ),
};

export const servicesList = Object.keys(
  servicesListIcons
) as unknown as ServicesList[];
