 const conf = {
    appwriteUrl: string(import.meta.env.VITE_APPWRITE_KEY), 
    appwriteProjectId: string(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: string(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteTodoCollectionId: string(import.meta.env.VITE_APPWRITE_TODO_COLLECTION_ID),
    appwriteBucketId: string(import.meta.env.VITE_APPWRITE_BUCKET_ID)
 }

 export default conf