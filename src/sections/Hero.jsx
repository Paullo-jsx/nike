import {useState} from 'react'

import { arrowRight } from "../assets/icons"
import Button from "../components/Button"

import { shoes, statistics } from "../constants"

import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"

const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section
      id='home'
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="padding-x relative xl:w-1/2 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Nossa coleção de feriado</p>
        <h1 className="mt-10 font-palanquin text-8xl leading-[115px] max-sm:-[72px] max-sm:leading-[90px] font-bold">
          <span className='xl:bg-transparent xl:whitespace-nowrap relative z-10 pr-1'>Nova era dos sapatos <br />da</span>
          <span className="text-coral-red inline-block mt-4">Nike</span>
        </h1>
        <p className="w-4/1 font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-4 sm:max-w-sm">Explore os novos estilos da Nike, qualidade, conforto e inovação para sua vida corrida.</p>
        <Button label="Compre agora"
          iconURL={arrowRight} />
        <div className="w-full flex mt-20 gap-16 flex-wrap">
          {statistics.map((stats, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stats.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray ">{stats.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center relative">
        <img src={bigShoeImg}
          alt="Sapato da coleção"
          width={610}
          height={500}
          className='object-contain relative z-10'
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero