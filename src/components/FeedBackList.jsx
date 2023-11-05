import FeedBackItem from "./FeedBackItem";
import { motion, AnimatePresence } from 'framer-motion'


function FeedBackList({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) {
        return (<p>No Feed Back recieved</p>)
    }



    return (

        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>

    )
}
export default FeedBackList;