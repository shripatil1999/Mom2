import React from 'react';

function Modal({ children, onClose, saveMeet }) {
    return (
        <div className='z-[115]' style={styles.overlay}>
            <div style={styles.modal}>

                <div className="row mb-4">
                    <h2 className="text-lg font-bold mb-2">Confirm</h2>
                    {children}

                </div>
                <div className="row">
                    <div className="col-sm-6 text-left">
                        <button className='btn btn-danger' style={styles.noButton} onClick={onClose}>No</button>
                    </div>
                    <div className="col-sm-6 text-right">
                        <button className='btn btn-success' style={styles.saveButton} onClick={saveMeet}>Yes</button>
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
    // closeButton: {
    //     position: 'absolute',
    //     top: '10px',
    //     right: '10px',
    //     background: 'red',
    //     border: 'none',
    //     fontSize: '18px',
    //     cursor: 'pointer'
    // },
    // saveButton: {
    //     position: 'absolute',
    //     bottom: '10px',
    //     right: '10px',
    //     // background: 'green',
    //     border: 'none',
    //     fontSize: '18px',
    //     cursor: 'pointer'
    // },
    // noButton: {
    //     position: 'absolute',
    //     bottom: '5px',
    //     left: '10px',
    //     // background: 'red',
    //     border: 'none',
    //     fontSize: '18px',
    //     cursor: 'pointer'
    // }
};

export default Modal;