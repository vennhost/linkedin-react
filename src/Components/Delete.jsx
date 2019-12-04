import React from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';



class Remove extends React.Component {
    state = {
        experience: []
    }

    render() {
        return(
            <div>
                <MaterialIcon id="plus" icon="delete" size={30} onClick={() => this.remove()} />
            </div>
        )
    }

    remove = async (experience, _id) => {
        let res = await fetch("https://strive-school-testing-apis.herokuapp.com/api/profile/user20/experiences/" + _id,{
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
        console.log(Remove)

        this.setState ({
            experience: experience
        })
        
    }
}





 
export default Remove; 