const Header = () => {
  return (
    <header>
      <div className='relative z-20 bg-gray-100/10'>
        <div className='px-6 md:px-12 lg:px-6 lg:py-4'>
          <div className='flex items-center justify-between'>
            <div className='relative z-20'>
              <a href='#' className='flex items-center justify-center'>
                <img src='../assets/RCL.webp' alt='README Components' className='w-10 md:w-12 mr-3' />
                <p className='font-sans font-bold drop-shadow'>RC.md</p>
              </a>
            </div>
            <div className='flex items-center justify-end lg:border-l-0'>
              <input type='checkbox' name='VTX' id='VTX' className='peer' hidden />
              <label htmlFor='VTX' className='peer-checked:VTX block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden'>
                <div aria-hidden='true' className='m-auto h-0.5 w-6 rounded bg-black transition duration-300'>...</div>
                <div aria-hidden='true' className='m-auto mt-2 h-0.5 w-6 rounded bg-black transition duration-300'>...</div>
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
                        <span className='relative text-black lg:text-white ease-in duration-200'>Componentes</span>
                      </a>
                    </li>
                    <li>
                      <a href='https://github.com/FabianHMzz/readme-components' target='_blank' rel='noopener noreferrer' className='group relative before:absolute before:inset-x-0 before:bottom-0 hover:underline hover:decoration-purple-300 hover:decoration-4 before:h-2 before:origin-right before:scale-x-0 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100'>
                        <span className='relative text-black lg:text-white ease-in duration-200'>Github</span>
                      </a>
                    </li>
                    <li>
                      <button className='relative flex justify-center items-center transition ease-out duration-100 focus:outline-none text-black rounded focus:ring ring-gray-200 group'>
                        <p className='text-black lg:text-white'>Más Opciones</p>
                        <span className='pl-1'>
                          <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'>...</path></svg>
                        </span>
                        <div className='absolute hidden top-full min-w-full w-max bg-white shadow-md mt-1 rounded group-focus:block'>
                          <ul className='text-left border rounded'>
                            <li className='px-4 py-1 hover:bg-gray-100 border-b'><a href='http://fabianhmz.dev/' target='_blank' rel='noopener noreferrer'>Web Personal</a></li>
                            <li className='px-4 py-1 hover:bg-gray-100 border-b'><a href='http://visual-tradex.com/' target='_blank' rel='noopener noreferrer'>Web Empresarial</a></li>
                          </ul>
                        </div>
                      </button>
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
