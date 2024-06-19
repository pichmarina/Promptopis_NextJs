import Loader from "@components/svg/Loader";

const Loading = () => {
  return (
    <div className="w-full flex-center">
      <Loader className="object-contain" width={50} height={50} />
    </div>
  );
};

export default Loading;
