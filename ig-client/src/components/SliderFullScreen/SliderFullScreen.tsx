export const SliderFullScreen = ({
  isTrue,
  children,
  className,
}: {
  isTrue: boolean;
  children: React.ReactNode;
  className?: string;
}): JSX.Element => {
  return (
    <div
      className={`flex items-start justify-start flex-col bg-white w-screen h-screen fixed z-[999999999] overflow-x-hidden overflow-y-scroll transition transform ${
        isTrue ? "translate-x-0" : "translate-x-full"
      } ${className}`}
    >
      {children}
    </div>
  );
};
