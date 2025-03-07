const Loading = () => {
  return (
    <div
      className="grid place-items-center"
      style={{ minHeight: "calc(100vh - 30rem)" }}
    >
      <span className="loading loading-ring loading-xl text-red-500"></span>
    </div>
  );
};

export default Loading;
