export function OverviewBlock({
  children,
  imgPlacement,
  title,
  description,
  brightSpan,
  spanLocation = 'left',
}: React.PropsWithChildren<{
  imgPlacement: 'left' | 'right';
  title: string;
  description: string;
  brightSpan: string;
  spanLocation?: 'left' | 'right';
}>) {
  return (
    <div className=" container flex justify-between gap-10 items-start pt-5 rounded-md max-h-[350px] overflow-hidden border-2">
      {imgPlacement === 'left' && children}
      <div className="space-y-2 min-w-[50%]">
        <h3 className="text-5xl">
          {spanLocation === 'left' && (
            <span className="bg-clip-text bg-gradient-to-r from-[#f46b45]  to-[#eea849] text-transparent">
              {brightSpan}{' '}
            </span>
          )}
          {title}
          {spanLocation === 'right' && (
            <span className="bg-clip-text bg-gradient-to-r from-[#f46b45]  to-[#eea849] text-transparent">
              {' '}
              {brightSpan}
            </span>
          )}
        </h3>
        <p className="text-xl">{description}</p>
      </div>
      {imgPlacement === 'right' && children}
    </div>
  );
}
