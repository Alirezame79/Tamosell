
export default function Button({children, type}) {

  return (
    <>
      { type === 'primary' && 
      <button className="bg-orange-400 py-1.5 px-3 rounded-xl hover:bg-orange-300 text-gray-900">{children}</button> }

      { type === 'secondary' && 
      <button className="outline outline-2 outline-orange-400 py-1.5 px-3 rounded-xl bg-gray-100 hover:bg-orange-400">{children}</button> }
    </>
  )
}