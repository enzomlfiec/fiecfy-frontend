import React from 'react'
import { ExternalLink, X } from 'lucide-react'
import { images } from '../../assets/js/assets'
import { icons } from '../../assets/js/icons'

function Popup({ moreInfoPopup, setMoreInfoPopup }) {
  return (
    <div className={`absolute inset-0 w-screen h-screen justify-center items-center backdrop-blur-lg bg-black/50 z-50 flex ${moreInfoPopup ? "opacity-100 pointer-events-auto select-auto" : "opacity-0 pointer-events-none select-none"} transition-all duration-300`}>
      <div className="animate-fade-in delay-300 relative w-105 rounded-2xl bg-bg_03 border border-white/10 shadow-2xl overflow-hidden">

        <button
          onClick={() => { setMoreInfoPopup(false) }}
          className="absolute cursor-pointer top-4 right-4 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center px-8 py-10">

          <div className='flex flex-row justify-center items-center gap-2 align-middle mt-2 mb-4'>
            <img src={images.logoIcon} alt="LogoTipo" className='w-16 h-16' />
            <h2 className="text-4xl font-bold text-p_0">
              Fiecfy
            </h2>
          </div>

          <span className="text-sm text-white/40 uppercase tracking-widest">
            Créditos
          </span>
          <p className="text-white/60 mt-2 m-0 p-0">
            Projeto desenvolvido por
          </p>

          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#F80C40]/50 shadow-lg mt-5">
            <img
              src={images.creditsIcon}
              alt="Enzo Meneghin"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-[#F80C40] font-semibold mt-1">
            Enzo Meneghin
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-75">
            Um projeto desenvolvido usando
            <br />
            <span className=''>
              <a target="_blank" rel="noreferrer" href="https://react.dev/" className='text-p_0/50 font-bold hover:text-p_0 underline hover:no-underline'>
                ReactJS
              </a>
              , <a target="_blank" rel="noreferrer" href="https://tailwindcss.com/" className='text-p_0/50 font-bold hover:text-p_0 underline hover:no-underline'>
                TailwindCSS
              </a>, <a target="_blank" rel="noreferrer" href="https://www.php.net/" className='text-p_0/50 font-bold hover:text-p_0 underline hover:no-underline'>
                PHP
              </a> com <a target="_blank" rel="noreferrer" href="https://laravel.com/" className='text-p_0/50 font-bold hover:text-p_0 underline hover:no-underline'>
                Laravel
              </a>
            </span>
          </p>

          <div className="flex gap-3 mt-7">
            <a
              href="https://github.com/enzomlfiec"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-1 w-16 h-16 rounded-full border-[#F80C40]/0 hover:border-[#F80C40] border-2 hover:text-white hover:bg-[#F80C40]/20 transition"
            >
              <img src={icons.github_icon}></img>
            </a>

            {/* <a
              href="#"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F80C40]/10 border border-[#F80C40]/20 text-pink-400 hover:bg-[#F80C40]/20 transition"
            >
              <ExternalLink size={18} />
              Fiecfy
            </a> */}

          </div>
        </div>
        <div className="border-t border-white/5 px-6 py-3 text-center">
          <span className="text-xs text-white/30">
            Feito para FIEC Indaiatuba
          </span>
        </div>
      </div>
    </div>
  )
}
export default Popup

