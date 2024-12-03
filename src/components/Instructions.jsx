

export const Instructions = () => {
    return(
        <section class="instructions my-4">
            <h2 className='header'>Instructions</h2>
            <ol className='text-stoneSix pl-3 font-outfit text-[10px] list-decimal marker:text-mainBrown marker:text-[8px] marker:font-bold leading-normal'>
                <li className='instruct-list'><span>Beat the eggs</span>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
                    You can add a tablespoon of water or milk for a fluffier texture.</li>
                <li className='instruct-list'><span>Heat the pan</span>: Place a non-stick frying pan over medium heat and add butter or oil.</li>
                <li className='instruct-list'><span>Cook the omelette</span>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
                    the eggs evenly coat the surface.</li>
                <li className='instruct-list'><span>Add fillings (optional)</span>: When the eggs begin to set at the edges but are still slightly runny in the 
                    middle, sprinkle your chosen fillings over one half of the omelette.</li>
                <li className='instruct-list'><span>Fold and serve</span>: As the omelette continues to cook, carefully lift one edge and fold it over the 
                    fillings. Let it cook for another minute, then slide it onto a plate.</li>
                <li className='instruct-list'><span>Enjoy</span>: Serve hot, with additional salt and pepper if needed.</li>
            </ol>
        </section>
    );
}