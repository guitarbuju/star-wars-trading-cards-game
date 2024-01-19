/* eslint-disable react/prop-types */



const Card = ({img, name, id }) => {
  return (
    <div className="mt-6  border-8 border-double border-gray-200  p-2 rounded-xl shadow-2xl bg-gray-900 text-yellow-400 w-40 h-60 md:w-32 md:h-56 lg:w-80 lg:h-96 xl:w-full ">
     <span className="text-xs">{id}</span>
     
      <img src={img} className="object-cover object-center w-full h-40 lg:h-80 rounded-md  " />
      
      
	
	<div className=" mb-2 w-full">
   
		<h2 className="md:text-xs font-semibold tracki truncate  text-wrap">{name}</h2>
	</div>
	
</div>
  )
}

export default Card