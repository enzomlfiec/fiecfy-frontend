import React from 'react'
import { X } from 'lucide-react'
import { images } from '../../assets/js/assets'
import { icons } from '../../assets/js/icons'

function Popup({ moreInfoPopup, setMoreInfoPopup }) {

  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && moreInfoPopup) {
        setMoreInfoPopup(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [moreInfoPopup, setMoreInfoPopup]);

  return (
    <div className={`absolute inset-0 w-screen bg-black/20
      h-screen justify-center items-center backdrop-blur-lg z-50 flex ${moreInfoPopup ? "opacity-100 pointer-events-auto select-auto" : "opacity-0 pointer-events-none select-none"} transition-all duration-300`}
      onClick={() => { setMoreInfoPopup(false) }}
    >
      <div className={`relative w-105 rounded-2xl border backdrop-blur-none mask-subtract bg-fg_0/25
        ${moreInfoPopup ? "opacity-100 blur-none pointer-events-auto select-auto" : "opacity-0 blur-3xl pointer-events-none select-none"}
        border-white/10 shadow-2xl overflow-hidden transition-all duration-400`}
        onClick={(e) => e.stopPropagation()}
      >

        <button
          onClick={() => { setMoreInfoPopup(false) }}
          className="absolute cursor-pointer top-4 right-4 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center px-8 py-10">

          <div className='flex flex-row justify-center items-center gap-2  mt-2 mb-4 select-none'>
            <img draggable="false" draggable="false" src={images.logoIcon} alt="Logotipo" className='w-16 h-16' />
            <h2 className="text-4xl font-normal text-p_0">
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
              draggable="false"
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

            {/* React Color: 61dafb, Tailwind Color: 00FFC6, Laravel Color: ff2d20, PHP Color: 777bb3 */}

            <span className=''>
              <a target="_blank" rel="noreferrer" href="https://react.dev/" className='text-[#61dafb]/50 font-bold hover:text-[#61dafb] underline hover:no-underline transition-all duration-200'>
                ReactJS
              </a>
              , <a target="_blank" rel="noreferrer" href="https://tailwindcss.com/" className='text-[#00FFC6]/50 font-bold hover:text-[#00FFC6] underline hover:no-underline transition-all duration-200'>
                TailwindCSS
              </a>, e <a target="_blank" rel="noreferrer" href="https://www.php.net/" className='text-[#777bb3]/50 font-bold hover:text-[#777bb3] underline hover:no-underline transition-all duration-200'>
                PHP
              </a> com <a target="_blank" rel="noreferrer" href="https://laravel.com/" className='text-[#ff2d20]/50 font-bold hover:text-[#ff2d20] underline hover:no-underline transition-all duration-200'>
                Laravel
              </a>
            </span>
          </p>

          <div className="flex gap-3 mt-7">
            <a
              href="https://github.com/enzomlfiec"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-1 w-16 h-16 rounded-full border-p_0/0 hover:border-p_0 border-2 hover:text-white hover:bg-p_0/20 transition-all duration-300"
            >
              <img draggable="false" src={icons.github_icon} alt="GitHub" />
            </a>

            <a
              href="https://www.linkedin.com/in/enzo-meneghin-8790b2323"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-1 w-17 h-17 rounded-full border-p_0/0 hover:border-p_0 border-2 hover:text-white hover:bg-p_0/20 transition-all duration-300"
            >
              <img draggable="false" src={icons.linkedIn_icon} alt="LinkedIn" />
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

