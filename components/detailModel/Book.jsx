
export default function Book({param}) {

  return (
    <div className="flex flex-col gap-3 mt-5">
      <h2 className="text-sm md:text-lg">Author: {param.Author}</h2>
      <h2 className="text-sm md:text-lg">Publisher: {param.Publisher}</h2>
      <h2 className="text-sm md:text-lg">Page: {param.Page}</h2>
    </div>
  )
}