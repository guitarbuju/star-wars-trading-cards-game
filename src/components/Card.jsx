/* eslint-disable react/prop-types */



const Card = ({img, name, id }) => {
  return (
    <div className=" border-8 border-double border-gray-200  p-6 rounded-xl shadow-2xl bg-gray-900 text-yellow-400">
     <span className="">{id}</span>
     
      <img src={img} className="object-cover object-center w-full h-44 rounded-md sm:h-52 dark:bg-gray-500" />
      
      
	
	<div className="mt-6 mb-2 w-full">
   
		<h2 className="sm:text-xl font-semibold tracki truncate  text-wrap">{name}</h2>
	</div>
	
</div>
  )
}

export default Card