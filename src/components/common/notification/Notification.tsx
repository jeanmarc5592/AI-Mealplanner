import { useAppDispatch, useAppSelector } from "@/hooks/store"
import { hideNotification } from "@/store/slices/notificationSlice"
import { Alert, Snackbar } from "@mui/material"

const Notification = () => {
  const { isOpen, severity, text } = useAppSelector((state) => state.notifications);
  const dispatch = useAppDispatch();

  const closeNotification = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(hideNotification());
  }

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={5000}
      onClose={closeNotification}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert 
        severity={severity}
        sx={{ width: "100%", color: "white" }}
        onClose={closeNotification}
        variant="filled"
      >
        {text}
      </Alert>
    </Snackbar>
  )
}

export default Notification
