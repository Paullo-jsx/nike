import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img className="rounded-full object-cover w-[120px] h-[120px]" src={imgURL} alt="Foto do cliente" />
      <p className="mt-6 max--w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5"> 
        <img src={star} alt="Ícone de estrela que ilustra o símbolo de avaliação do usuário"
          width={24}
          height={24}
          className="object-contain ,-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-left font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard