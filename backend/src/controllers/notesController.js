import Note from "../models/Note.js";

// Helper for consistent error logging
function logError(controller, error) {
  console.error(`Error in ${controller} controller:`, error);
}

// GET all notes
export async function getAllNotes(_, res) {
  try {
    //-1 will sort in desc. order (newest first)
    const notes = await Note.find().sort({ createdAt: -1 }).lean(); // faster reads;
    res.status(200).json(notes);
  } catch (error) {
    logError("getAllNotes", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// GET note by ID
export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });

    res.status(200).json(note);
  } catch (error) {
    logError("getNoteById", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// CREATE note
export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    // Basic validation
    if (!title?.trim() || !content?.trim()) {
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }
    const note = new Note({ title, content });
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    logError("createNote", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// UPDATE note
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      {
        new: true,
        runValidators: true, // ensures schema validation applies
      }
    );
    if (!updatedNote)
      return res.status(404).json({ message: "Note not found" });

    res.status(200).json(updatedNote);
  } catch (error) {
    logError("updateNote", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// DELETE note
export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Note not found" });

    res.status(200).json({ message: "Note deleted successfully!" });
  } catch (error) {
    logError("deleteNote", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
