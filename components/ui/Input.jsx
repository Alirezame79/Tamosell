
export default function Input({className, id, type, onBlur, innerRef}) {

  return (
    <input onBlur={onBlur} ref={innerRef} className={`text-sm lg:text-base shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-orange-200 focus:shadow-outline ${className}`} id={id} type={type} />
  )
}