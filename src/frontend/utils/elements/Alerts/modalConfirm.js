import React, { useRef, useEffect } from 'react';

// for Modal reusability
// https://deadsimplechat.com/blog/creating-a-reusable-pop-up-modal-in-react-from-scratch/

function Modal({ children, onClose, saveMeet }) {

    const btnRef = useRef();

    useEffect(() => {
        btnRef.current.focus();
    }, [])

    return (
        <div className='z-[115]' style={styles.overlay}>
            <div style={styles.modal}>

                <div className="row mb-4">
                    <h2 className="text-lg font-bold mb-2">Confirm</h2>
                    {children}

                </div>
                <div className="row">
                    <div className="col-sm-6 text-left">
                        <button className='btn btn-success' style={styles.saveButton} onClick={saveMeet}>Yes</button>
                    </div>
                    <div className="col-sm-6 text-right">
                        <button className='btn btn-danger' style={styles.noButton} onClick={onClose} ref={btnRef}>No</button>
                    </div>
                </div>


            </div>
        </div>
    );
}

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '100'
    },
    modal: {
        backgroundColor: 'white',
        padding: '2%',
        borderRadius: '8px',
        position: 'relative',
        width: '100%',
        maxWidth: '500px'
    },
};

export default Modal;