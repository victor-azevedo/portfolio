import Image from "next/image";

export const Logo = () => {
  return (
    <div className="hidden pr-5 sm:block">
      <Image
        src="/assets/logo-light.png"
        width={50}
        height={50}
        alt="Victor Azevedo logo"
      />
    </div>
  );
};
