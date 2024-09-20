/* eslint-disable react/prop-types */

const Card2= ({ img, name, id, face }) => {
  return (
    <div className=" border-8 border-double  border-gray-200   rounded-xl shadow-2xl bg-gray-900 text-yellow-400">
      <span className="text-xs sm:text-sm">{id}</span>
      <div className="flex justify-center align-middle ">
        {face ? (
          <img
            src={img}
            alt=""
            className="object-fit object-center w-full rounded-md h-40 sm:h-52 sm:w-40"
          />
        ) : (
          <img
            src={img}
            alt=""
            className="object-fit object-center w-full rounded-md h-40 sm:h-52 sm:w-40 opacity-5"
          />
        )}
      </div>

      <div className="mt-6 mb-2">
        {face ? (
          <h2 className="text-xs sm:text-sm font-semibold tracki truncate max-w-xs">
            {name}
          </h2>
        ) : (
          <h2 className=" text-gray-600 text-xs sm:text-sm font-semibold tracki truncate max-w-xs">
            {name}
          </h2>
        )}
      </div>
    </div>
  );
};

export default Card2;
