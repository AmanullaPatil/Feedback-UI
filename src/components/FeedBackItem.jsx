import Card from './shared/card';
import { FaTimes } from 'react-icons/fa';

function FeedBackitem({ item, handleDelete }) {





    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className='close' onClick={() => handleDelete(item.id)}>
                <FaTimes color='purple' />
            </button>
            <div className="text-display">{item.txt}</div>
        </Card>
    )
}

export default FeedBackitem;