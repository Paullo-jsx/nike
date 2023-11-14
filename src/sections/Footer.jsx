import { footerLinks } from "../constants"
import { socialMedia } from "../constants"

import { footerLogo } from "../assets/images"
import { copyrightSign } from "../assets/icons"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href='/'>
            <img src={footerLogo} alt="Logo da nike no rodapé da página"
              width={150}
              height={46}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Prepare os calçados para o novo período na loja Nike mais próxima. Encontre o tamanho perfeito na loja. Obter recompensas</p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6 ">{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray curdor-pointer" key={link.name}>
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="Icone que ilustra o símbolo de direitos autorais"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. Todos os direitos reservados.</p>
        </div>
        <p className="font-montserrat cursor-pointer"></p>
      </div>
    </footer>
  )
}

export default Footer