import axios from 'axios';

const axi = async (url)=>{
    let data = await axios.get(url)
    .then(res=>{
        return res.data
    })
    .catch(err=>{
        return err
    })
    
    return data
}

export default axi