import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { get, ref as dbRef } from "firebase/database";
import { db } from "../firebase";

const storage = getStorage();

export async function getAllResumes() {
  const resumesRef = ref(storage, "resumes");
  const result = await listAll(resumesRef);

  const getResumeName = async (resumeId) => {
    const snapshot = await get(dbRef(db, `resumes/${resumeId}`));
    return snapshot.val().name;
  };

  const getResumeMatchScore = async (resumeId) => {
    const snapshot = await get(dbRef(db, `resumes/${resumeId}`));
    return snapshot.val().match;
  };

  const getResumeSkills = async (resumeId) => {
    const snapshot = await get(dbRef(db, `resumes/${resumeId}`));
    return snapshot.val().skills;
  };

  const resumeList = await Promise.all(
    result.items.map(async (itemRef) => {
      const url = await getDownloadURL(itemRef);
      const name = await getResumeName(itemRef.name);
      const match = await getResumeMatchScore(itemRef.name);
      const skills = await getResumeSkills(itemRef.name);
      return { name, url, match, skills };
    })
  );

  return resumeList;
}

export async function getResumeById(resumeId) {
  try {
    const resumeRef = ref(storage, `resumes/${resumeId}`);
    const url = await getDownloadURL(resumeRef);
    
    return { id: resumeId, resumeUrl: url };
  } catch (error) {
    console.error(`Error fetching resume (${resumeId}):`, error);
    return null;
  }
}