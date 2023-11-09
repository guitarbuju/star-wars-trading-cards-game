/* eslint-disable react/prop-types */



const Card = ({img, name, id }) => {
  return (
    <div className=" border-8 border-double border-gray-200 max-w-xs p-6 rounded-xl shadow-2xl bg-gray-900 text-yellow-400">
     <span className="">{id}</span>
     
      <img src={img} alt=""className="object-cover object-center w-full rounded-md h-52 dark:bg-gray-500" />
      
      
	
	<div className="mt-6 mb-2">
   
		<h2 className="text-xl font-semibold tracki truncate max-w-xs">{name}</h2>
	</div>
	
</div>
  )
}

export default Card