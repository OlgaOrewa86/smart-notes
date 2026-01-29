import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";

const NoteCard = ({ note, setNotes }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note deleted successfully");
      setShowConfirm(false);
    } catch (error) {
      console.log("Error in handle delete", error);
      toast.error("Faile to delete note");
    }
  };

  return (
    <>
      <Link
        to={`/note/${note._id}`}
        className="card bg-base-200 hover:bg-base-300 transition-all duration-200 border-t-4 border-solid border-[#8c6e54]"
      >
        <div className="card-body">
          <h3 className="card-title text-base-content">{note.title}</h3>
          <p className="text-base-content/70 line-clamp-3">{note.content}</p>

          <div className="card-actions justify-between items-center mt-4">
            <span className="text-sm text-base-content/60">
              {formatDate(new Date(note.createdAt))}
            </span>

            <div className="flex items-center gap-1">
              <PenSquareIcon className="size-4" />

              <button
                className="btn btn-ghost btn-xs text-error"
                onClick={(e) => {
                  e.preventDefault();
                  setShowConfirm(true);
                }}
              >
                <Trash2Icon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </Link>

      <ConfirmModal
        open={showConfirm}
        title="Delete Note?"
        message="This action cannot be undone."
        onConfirm={(e) => handleDelete(e, note._id)}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  );
};

export default NoteCard;
