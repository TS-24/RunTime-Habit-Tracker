import {
    Dialog, 
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "../../app/components/ui/dialog"

export function addNewHabit() {
    return <>
        <Dialog>
            <DialogTrigger className="h-14 text-lg">New Habit</DialogTrigger>
        </Dialog>
    </>
} 