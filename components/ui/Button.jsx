
export default function Button({children, type, className, onClick}) {

  return (
    <>
      { type === 'primary' && 
      <button onClick={onClick} className={`font-bold bg-orange-400 py-1.5 px-3 rounded-xl hover:bg-orange-300 text-gray-900 ${className}`}>{children}</button> }

      { type === 'secondary' && 
      <button onClick={onClick} className={`font-bold outline outline-2 outline-orange-400 py-1.5 md:px-3 rounded-xl bg-gray-100 hover:bg-orange-300 ${className}`}>{children}</button> }
    </>
  )
}