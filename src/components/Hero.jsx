import omelette from '/src/assets/images/image-omelette.jpeg'

export const Hero = () => {
    return(
        <section>
          <img src={omelette} alt="image of a delicious omelette" className='w-full rounded-md'/>
          <h1 className='text-2xl font-youngSerif text-stoneNine my-4'>Simple Omelette Recipe</h1>
          <p className='p-style'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
          to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
        </section>
    );
}