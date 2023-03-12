import RCL from '../assets/RCL.webp'

const Header = () => {
  return (
    <header>
      <div className='relative z-20 lg:backdrop-blur bg-gray-100/10'>
        <div className='px-6 md:px-12 lg:px-6 lg:py-4'>
          <div className='flex items-center justify-between'>
            <div className='relative z-20'>
              <a href='#' className='flex items-center justify-center'>
                <img src={RCL} alt='README Components' className='w-10 md:w-12 mr-3' />
                <p className='font-sans lg:text-white font-bold drop-shadow'>RC.md</p>
              </a>
            </div>
            <div className='flex items-center justify-end lg:border-l-0'>
              <input type='checkbox' name='VTX' id='VTX' className='peer' hidden />
              <label htmlFor='VTX' className='peer-checked:VTX block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden'>
                <div aria-hidden='true' className='m-auto h-0.5 w-6 rounded bg-black transition duration-300'></div>
                <div aria-hidden='true' className='m-auto mt-2 h-0.5 w-6 rounded bg-black transition duration-300'></div>
              </label>
              <div className='peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white lg:bg-transparent shadow-x transition duration-300 lg:shadow-none lg:border-l-0 lg:w-auto lg:static lg:translate-x-0'>
                <div className='flex flex-col h-full lg:flex-row jusfify-between lg:items-center'>
                  <ul className='px-6 pt-32 text-black font-sans font-semibold space-y-8 lg:space-y-0 md:px-12 lg:flex lg:space-x-12 lg:pt-0 font-xl'>
                    <li>
                      <a href='#' className='group relative before:absolute before:inset-x-0 before:bottom-0 hover:underline hover:decoration-purple-300 hover:decoration-4 before:h-2 before:origin-right before:scale-x-0 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100'>
                        <span className='relative text-black lg:text-white ease-in duration-200'>Inicio</span>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='group relative before:absolute before:inset-x-0 before:bottom-0 hover:underline hover:decoration-purple-300 hover:decoration-4 before:h-2 before:origin-right before:scale-x-0 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100'>
                        <span className='relative text-black lg:text-white ease-in duration-200'>C-Estáticos</span>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='group relative before:absolute before:inset-x-0 before:bottom-0 hover:underline hover:decoration-purple-300 hover:decoration-4 before:h-2 before:origin-right before:scale-x-0 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100'>
                        <span className='relative text-black lg:text-white ease-in duration-200'>C-Dinámicos</span>
                      </a>
                    </li>
                    <li>
                      <a href='https://github.com/FabianHMzz/readme-components' target='_blank' rel='noopener noreferrer' className='group relative before:absolute before:inset-x-0 before:bottom-0 hover:underline hover:decoration-purple-300 hover:decoration-4 before:h-2 before:origin-right before:scale-x-0 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100'>
                        <span className='relative text-black lg:text-white ease-in duration-200'>GitHub</span>
                      </a>
                    </li>
                    <li>
                      <details className='group relative'>
                        <summary className='flex cursor-pointer list-none items-center justify-between lg:text-white'>Más Opciones
                          <svg data-hk='0-0' width='18' height='13' viewBox='0 0 22 13' fill='none' xmlns='http://www.w3.org/2000/svg' className='inline-block rotate-0 transition-transform group-open:-rotate-180 ml-2 lg:text-white'><path d='M1 1L11 11L21 1' stroke='currentColor' strokeWidth='2'></path></svg>
                        </summary>
                        <div className='mt-[25px] flex flex-col gap-4 text-md font-sans absolute lg:backdrop-blur lg:bg-white/50 px-6 py-2 lg:text-center lg:text-white'>
                          <a href='https://fabianhmz.dev' target='_blank' rel='noopener noreferrer' className='flex items-center gap-4 lg:hover:underline hover:decoration-2'>Web Personal</a>
                          <a href='https://visual-tradex.com' target='_blank' rel='noopener noreferrer' className='flex items-center gap-4 lg:hover:underline hover:decoration-2'>Web Empresarial</a>
                        </div>
                      </details>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
