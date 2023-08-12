function loadDelete(id){
    axios.delete(`http://localhost:3000/teachers/${id}`).then(res=>{
        loadHome()
    })
}