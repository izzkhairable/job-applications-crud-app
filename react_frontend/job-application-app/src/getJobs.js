import jobs_data from "./jobs_data"

const GetJobs=(from,size,sort)=>{
    let modified_jobs_data=[]
    sort==="asc"?
    modified_jobs_data=jobs_data.slice(from, from+size).sort():
    modified_jobs_data=jobs_data.slice(from, from+size).sort().reverse()
    
    return modified_jobs_data
}

export default GetJobs