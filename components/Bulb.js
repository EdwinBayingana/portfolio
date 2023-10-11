import Image from 'next/image';

const Bulb = () => {
  return (
    <div className="absolute z-10 w-[200px] xl:w-[260px] -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75">
      <Image
        src={'/bulb.png'}
        width={260}
        height={200}
        className="w-full h-full"
      />
    </div>
  );
};

export default Bulb;
