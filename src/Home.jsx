export default function Home() {
  return (
    <section className='font-sans'>
      <div className='relative flex flex-col md:flex-row justify-between items-center px-16'>
        <h2 className='text-white text-2xl pb-4 md:pb-0 text-center md:text-left lg:text-5xl font-bold leading-loose'>
          ¿Qué son los README Components?
        </h2>
        <p className='text-lg lg:text-3xl text-center md:text-left text-white/80 font-sans leading-loose'>
          Se trata de una compilación de diferentes componentes que puedes
          agregar a tus archivos readme, desde estáticos hasta dinámicos para
          darles un toque de vida y tengan un diseño más atractivo.
        </p>
      </div>
    </section>
  )
}
