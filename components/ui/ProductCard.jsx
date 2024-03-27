import Image from "next/image"

export default function ProductCard( {attribute, onClick} ) {

  function currencyFormat(num) {
    return '$ ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <div className="bg-orange-200 flex gap-3 p-3 m-3 h-24 md:h-28 lg:h-32 rounded cursor-pointer" onClick={onClick}>
      <img className="bg-orange-50 h-full w-16 md:w-20 lg:w-24 rounded object-cover bg-center bg-cover"
        src={attribute.ImageUrl}
        alt="product image"
        loading="lazy"
        onError={event => {
          event.target.src = "https://icons.veryicon.com/png/o/application/applet-1/product-17.png"
          event.onerror = null
        }}/>

      <div className="flex flex-col justify-between p-2 bg-orange-50 rounded w-full">
        <h2 className="text-xs md:text-sm lg:text-base font-bold p-1">{attribute.Title}</h2>
        <div className="flex justify-between text-xs md:text-sm lg:text-base p-1">
          <h3>{currencyFormat(attribute.Price)}</h3>
          <h3 className="bg-orange-300 p-1 rounded-lg text-xs md:text-sm">{attribute.Tag}</h3>
        </div>
      </div>
    </div>
  )
}