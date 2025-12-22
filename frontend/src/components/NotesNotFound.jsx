import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 max-w-md mx-auto text-center space-y-6">
      <div className="bg-primary/10 rounded-full p-10 shadow-sm animate-fade-in">
        <NotebookIcon className="size-12 text-primary" />
      </div>

      <h3 className="text-3xl font-extrabold tracking-tight">No Notes Yet</h3>

      <p className="text-base-content/70 leading-relaxed">
        It looks a little quiet here. Start capturing your ideas, thoughts, and
        plans by creating your first note.
      </p>

      <Link
        to="/create"
        className="btn btn-primary btn-wide shadow-md hover:shadow-lg transition-all"
      >
        Create Your First Note
      </Link>
    </div>
  );
};

export default NotesNotFound;
