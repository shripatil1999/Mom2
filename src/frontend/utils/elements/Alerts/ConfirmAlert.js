import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';

const TransitionAlert = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
function ConfirmAlert() {
    const [openSaveAlert, setOpenSaveAlert] = useState(false);


    const openAlert = () => {
        setOpenSaveAlert(true);
    };
    // openAlert()

    const closeAlert = () => {
        setOpenSaveAlert(false);
    };

    return (
        <>
            <Dialog
                open={openSaveAlert}
                TransitionComponent={TransitionAlert}
                keepMounted
                onClose={closeAlert}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Are you sure you want to save the Meeting???"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        If you save
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeAlert}>Disagree</Button>
                    {/* <Button onClick={submitMeeting}>Agree</Button> */}
                </DialogActions>
            </Dialog>
        </>

    )
}

export default ConfirmAlert
