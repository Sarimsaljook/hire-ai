import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const storage = getStorage();

export async function getAllResumes() {
  const resumesRef = ref(storage, "resumes");
  const result = await listAll(resumesRef);
  
  const resumeList = await Promise.all(
    result.items.map(async (itemRef) => {
      const url = await getDownloadURL(itemRef);
      return { name: itemRef.name, url };
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