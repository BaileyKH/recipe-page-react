

export const Nutrition = () => {
    return(
        <section class="nutrition">
            <h2 className='header'>Nutrition</h2>
            <p className='p-style'>The table below shows nutritional values per serving without the additional fillings.</p>
            <table className='mt-4 text-left border-collapse w-full'>
                <tbody>
                    <tr className='row'>
                        <td>Calories</td>
                        <td class="amount">277kcal</td>
                    </tr>
                    <tr className='row'>
                        <td>Carbs</td>
                        <td class="amount">0g</td>
                    </tr>
                    <tr className='row'>
                        <td>Protein</td>
                        <td class="amount">20g</td>
                    </tr>
                    <tr>
                        <td>Fat</td>
                        <td class="amount">22g</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}