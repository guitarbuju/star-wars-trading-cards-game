/* eslint-disable react/prop-types */

const Card = ({ img, name, id }) => {
  return (
    <div className=" border-8 border-double border-gray-200  p-2 rounded-xl shadow-2xl bg-gray-900 text-yellow-400 flex flex-col items-center w-full h-70   lg:h-70 lg:w-60 ">
      <span className="text-xs">{id}</span>

      <img
        src={img}
        className=" object-center w-40 h-40 lg:h-60 lg:w-50 rounded-md  "
      />

      <div className=" mb-2 w-full">
        <h2 className="md:text-xs font-semibold tracki truncate  text-wrap">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default Card;
