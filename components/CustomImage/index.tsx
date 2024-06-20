import Image from 'next/legacy/image';

function CustomImage({ src, alt, ...props }: any) {
  return (
    <div className="w-[10rem] p-10 mx-auto">
      <Image
        src={src}
        width={300}
        height={100}
        layout="responsive"
        alt={alt}
        {...props}
      />
    </div>
  );
}
export default CustomImage;