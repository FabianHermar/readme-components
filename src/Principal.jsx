const Home = () => {
  const socialMedia = [
    { name: 'logo-linkedin', link: 'https://www.linkedin.com/in/fabianhmz/' },
    { name: 'logo-github', link: 'https://github.com/FabianHMzz/readme-components' },
    { name: 'logo-twitter', link: 'https://www.twitter.com/fabianhmz_/' }
  ]
  return (
    <section className='min-h-screen'>
      <div className='font-sans flex justify-center items-center flex-col select-none'>
        <h1 className='absolute text-white drop-shadow-2xl text-3xl lg:text-8xl font-extrabold top-[40%]'>
          {' '}
          README Components
        </h1>
        <p className='absolute top-[46%] lg:top-[57%] font-semibold text-[13px] text-white lg:text-3xl'>
          Dale un toque de vida a tus archivos <code>markdown.md</code>
        </p>
        <div className='absolute mt-8 text-2xl lg:text-3xl flex items-center justify-center gap-6 top-[50%] lg:top-[60%]'>
          {socialMedia?.map((social, icon) => (
            <div
              key={icon}
              className='text-gray-200 hover:text-white ease-in duration-100 cursor-pointer'
            >
              <a href={social?.link} target='_blank' rel='noreferrer noopener'>
                <ion-icon name={social?.name}>...</ion-icon>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className='absolute animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center flex-col top-[90%] right-[45%] lg:right-[50%]'>
        <svg
          className='w-6 h-6 text-violet-500'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path d='M19 14l-7 7m0 0l-7-7m7 7V3' />
        </svg>
      </div>
    </section>
  )
}

export default Home
