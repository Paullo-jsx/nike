
const Button = ({ label, iconURL }) => {
  return (

    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat tect-lg leading-none bg-coral-red text-white border-2 border-coral-red rounded-full ">{label}

      {iconURL && <img src={iconURL} alt="Botão para prosseguir à tela de compras"
      className="ml-2 rounded-full w-5 h-5 "
      />}
    </button>
  )
}

export default Button