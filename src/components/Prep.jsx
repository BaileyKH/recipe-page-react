

export const Prep = () => {
    return(
        <section class="bg-roseFive w-full my-4 p-5 rounded-md">
          <h2 className='font-outfit font-semibold text-roseEight text-sm mb-2.5'>Preparation time</h2>
          <ul className='text-stoneSix font-outfit text-[10px] pl-4 list-disc my-[6px] marker:text-rose-800 marker:text-[8px]'>
            <li className='prep-list'><span>Total</span>: Approximately 10 minutes</li>
            <li className='prep-list'><span>Preparation</span>: 5 minutes</li>
            <li className='prep-list'><span>Cooking</span>: 5 minutes</li>
          </ul>
        </section>
    );
}