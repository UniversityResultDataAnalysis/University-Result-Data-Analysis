import {GrCertificate} from "react-icons/gr";

const CreditsPopup = ({dialogRef, onClose}) => {
    return (
        <dialog ref={dialogRef}>
            <article>
                <header>
                    <button onClick={onClose} aria-label="Close" rel="prev"></button>
                    <p>
                        <strong>
                            <GrCertificate/> Credits</strong>
                    </p>
                </header>
                <p>
                    <strong>Project Group Name : P04</strong>
                </p>
                <ul>
                    <li>Dept : Information Science & Engineering,CEC</li>
                </ul>

                <p>
                    <strong>Under the Guidance of :</strong>
                </p>
                <ul>
                    <li>Prof Mrs. Geethalaxmi (Assistant Professor, ISE Dept)</li>
                </ul>

                <p>
                    <strong>Members :</strong>
                </p>
                <ul>
                    <li>Mr. Alwyn Jacob (4CB20IS005)</li>
                    <li>Ms. Jeevitha G S (4CB20IS024)</li>
                    <li>Mr. Mahesh Mohandas (4CB20IS028)</li>
                    <li>Ms. Mithali R Gatty (4CB20IS029)</li>

                </ul>

                <p>
                    <strong>Special Thanks To :</strong>
                </p>
                <ul>
                    <li>Prof Mr. Ramesh Nayak (Assistant Professor, ISE Dept)</li>
                    <li>Prof Mrs. Sadhana B (Assistant Professor, ISE Dept)</li>
                    <li>Dr. Jagadisha N (HOD, ISE Dept)</li>
                    <li>Mr. Rohan Nayak K (4CB19IS047, Alumni, ISE Dept 2023 Passout)</li>
                </ul>
            </article>
        </dialog>
    )
}

export default CreditsPopup;