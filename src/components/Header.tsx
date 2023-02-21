const Header = () => {
  return (
    <header>
      <div className='relative z-20 border-b bg-white'>
        <div className='px-6 md:px-12 lg:px-6 lg:py-4'>
          <div className='flex items-center justify-between'>
            <div className='relative z-20'>
              <a href="#" className='flex items-center justify-center'>
                <img src="/RCL.webp" alt="README Components" className='w-10 md:w-12 mr-3'/>
                <p className='font-sans font-bold drop-shadow'>README Components</p>
              </a>
            </div>
            <div className='flex items-center justify-end lg:border-l-0'>
              <input type="checkbox" name="VTX" id="VTX" className='peer' hidden />
              <label htmlFor='VTX' className='peer-checked:VTX block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden'>
                <div aria-hidden='true' className='m-auto h-0.5 w-6 rounded bg-black transition duration-300'></div>
                <div aria-hidden='true' className='m-auto mt-2 h-0.5 w-6 rounded bg-black transition duration-300'></div>
              </label>
              <div className='peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white shadow-x transition duration-300 lg:shadow-none lg:border-l-0 lg:w-auto lg:static lg:translate-x-0'>
                <div className="flex flex-col h-full lg:flex-row jusfify-between lg:items-center">
                  <ul className='px-6 pt-32 text-black font-sans font-semibold space-y-8 lg:space-y-0 md:px-12 lg:flex lg:space-x-12 lg:pt-0 font-xl'>
                    <li>
                      <a href="#" className='group relative before:absolute before:inset-x-0 before:bottom-0 hover:underline hover:decoration-purple-300 hover:decoration-4 before:h-2 before:origin-right before:scale-x-0 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100'>
                        <span className='relative group-hover:text-gray-900 ease-in duration-200'>Inicio</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className='group relative before:absolute before:inset-x-0 before:bottom-0 hover:underline hover:decoration-purple-300 hover:decoration-4 before:h-2 before:origin-right before:scale-x-0 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100'>
                        <span className='relative group-hover:text-gray-900 ease-in duration-200'>Componentes</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/FabianHMzz/readme-components" target="_blank" rel="noopener noreferrer" className='group relative before:absolute before:inset-x-0 before:bottom-0 hover:underline hover:decoration-purple-300 hover:decoration-4 before:h-2 before:origin-right before:scale-x-0 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100'>
                        <span className='relative group-hover:text-gray-900 ease-in duration-200'>Github</span>
                      </a>
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