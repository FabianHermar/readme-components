const Home = () => {
  const socialMedia = [
      { name: 'logo-linkedin', link: 'https://www.linkedin.com/in/fabianhmz/' },
      { name: 'logo-github', link: 'https://github.com/FabianHMzz/readme-components' },
      { name: 'logo-twitter', link: 'https://www.twitter.com/fabianhmz_/' }
    ]
  return(
    <section>
        <div className='font-sans flex justify-center items-center flex-col select-none'>
          <h1 className='absolute drop-shadow-2xl text-3xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 top-[40%]'>README Components</h1>
          <p className="absolute top-[46%] lg:top-[57%] font-semibold text-[13px] lg:text-2xl">Dale un toque de vida a tus archivos <code>markdown.md</code></p>
          <div className='absolute mt-8 text-2xl lg:text-3xl flex items-center justify-center gap-6 top-[50%] lg:top-[59%]'>
            {
              socialMedia?.map((social, icon) => (
                <div key={icon} className='text-gray-600 hover:text-gray-800 ease-in duration-100 cursor-pointer'>
                  <a href={social?.link} target='_blank' rel='noreferrer noopener'>
                    <ion-icon name={social?.name}>...</ion-icon>
                  </a>
                </div>
              ))
            }
          </div>
        </div>
    </section>
  )
}

export default Home
