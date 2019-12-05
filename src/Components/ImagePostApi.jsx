const imagePost = async () => {
    let URL = "https://striveschool.herokuapp.com/api/profile/user20/picture/"
    try {
        let response = await fetch(URL, {
            method: "POST",
            headers: {
                "Authorization": "Basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc=" ,
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
        if (response.ok) {
            return await response.json()
        }
    } catch (error) {
        console.log(error);
    }
}

export default imagePost;