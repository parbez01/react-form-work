import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Dad = () => {
    return (
        <div>
            <h1>Dad</h1>
            <section className='flex'>
            <MySelf></MySelf>
            <Brother></Brother>
            <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;