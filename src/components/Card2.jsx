/* eslint-disable react/prop-types */



const Card = ({img, name, id , face}) => {
  return (
    <div className=" border-8 border-double  border-gray-200 max-w-xs p-6 rounded-xl shadow-2xl bg-gray-900 text-yellow-400">
     <span className="">{id}</span>
     <div>
     {face ? <img src={img} alt=""
      className="object-cover object-center w-full rounded-md h-20 sm:h-52" />
      :
      <img src={img} alt=""
      className="object-cover object-center w-full rounded-md h-20 sm:h-52  opacity-5" />}
      
     </div>
	
	<div className="mt-6 mb-2">
   {face ? <h2 className="text-xl font-semibold tracki truncate max-w-xs">{name}</h2>
   : 
   <h2 className=" text-gray-600 text-xl font-semibold tracki truncate max-w-xs">{name}</h2>}
		
	</div>
	
</div>
  )
}

export default Card