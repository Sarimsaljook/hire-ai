import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function uploadResume(file, id) {
  const fileRef = ref(storage, `resumes/${id}`);
  await uploadBytes(fileRef, file);
  return getDownloadURL(fileRef);
}
