

const Remove = async (experience, _id) => {
        let res = await fetch("https://strive-school-testing-apis.herokuapp.com/api/profile/user4/experiences/" + _id,{
            headers:{
                "Authorization":"basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc=",
                "Content-type": "application/json"
            },
            method: "DELETE",
            body: JSON.stringify(experience)
            
        })

        if (res.ok) {
            return await res.json()
        }
        
    }

 
export default Remove;