import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Chapter } from "../Fatawajat/ChaptersList"


interface AlertModalProps {
  deleteChapter: DeleteChapter,
  setDeleteChapter: (prevState : DeleteChapter) => void,
}

interface DeleteChapter{
  state : boolean,
  chapter : Chapter | null
}

export function AlertModal({ deleteChapter : {state, chapter}, setDeleteChapter }: AlertModalProps) {

  // get necessary props




  //handler to handle cancel modal
  // function cancelAlertModal(e : any){
  //   setDeleteChapter({
  //     ...deleteChapter,
  //     state : false,
  //   });
  // }



  return (
    <AlertDialog open={state}>
      {/* <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger> */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this data
            and remove from servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* <AlertDialogCancel onClick={(e) => cancelAlertModal(e)}>Cancel</AlertDialogCancel> */}
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
