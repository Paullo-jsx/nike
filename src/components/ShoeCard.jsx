import React from 'react'

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe)
    }
  }

  return (
    <div className={`border-2 rounded-xl cursor:pointer max-sm:flex-1 ${bigShoeImage === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'}`}
      onClick={handleClick}
    >
      <div className='cursor:pointer flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img src={imgURL.thumbnail} alt="Sapato da coleção"
          width={127}
          height={103}
        />
      </div>
    </div>
  )
}

export default ShoeCard