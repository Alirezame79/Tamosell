
export default function Electronic({param}) {

  return (
    <div className="flex flex-col gap-3 mt-5">
      <h2 className="text-sm md:text-lg">Brand: {param.Brand}</h2>
      <h2 className="text-sm md:text-lg">Device: {param.Device}</h2>
    </div>
  )
}