export const VideoCard = (props: any) => {
  return (
    <div>
      <img src={props.thubImage} className="rounded-xl " />

      <div className="grid grid-cols-12 gap-2 mt-2 ">
        <div className="col-span-2">
          <img src={props.image} className="rounded-full" />
        </div>
        <div className="col-span-10 flex-col">
          <h5 className="font-semibold mb-1">{props.title}</h5>
          <div className="text-gray-300 text-sm font-light">
            {props.channel}
          </div>
          <div className="flex gap-4 text-gray-300 text-sm font-light ">
            <div>{props.views}</div>
            <div>{props.upload}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
