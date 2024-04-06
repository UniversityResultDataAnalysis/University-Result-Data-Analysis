import {useState} from "react";

const Modal = ({ isOpenState, title, message }) => {

    const [isOpen, setIsOpen] = useState(isOpenState);

    const closeModal = () => {
        // Close the modal
        setIsOpen(false)
    }
    return (
        <dialog open={isOpen}>
            <article>
                <h2>{title}</h2>
                <p>
                    {message}
                </p>
                <footer>
                    <button
                        onClick={closeModal}
                        className="secondary">
                        Cancel
                    </button>
                </footer>
            </article>
        </dialog>
    )
}

export default Modal