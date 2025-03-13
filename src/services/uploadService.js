import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function uploadResume(file) {
  const fileRef = ref(storage, `resumes/${file.name}`);
  await uploadBytes(fileRef, file);
  return getDownloadURL(fileRef);
}
