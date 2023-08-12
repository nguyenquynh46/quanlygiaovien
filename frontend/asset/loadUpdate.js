function loadUpdate(id){
    axios.get(`http://localhost:3000/teachers/${id}`).then(res=>{
       let data=res.data

    let str=`
<div class="container-fluid " style="width: 800px">
     <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">
       <h2>Form Sửa Thông Tin</h2>
</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><label for="">Tên của giáo viên</label></th>
     
     </tr>
     <tr>
      <th scope="row">
      <input type="text" class="input" id="name" style="border: none; width: 100%; outline: none" value="${data[0].name}">  
    </th>
  
    </tr>
    <tr>
      <th scope="row"><label for="" >Tuổi của giáo viên</label></th>
     
     </tr>
     <tr>
      <th scope="row">
      <input type="text" class="input" id="age" style="border: none; width: 100%; outline: none" value="${data[0].age}">  
    </th>
  
    </tr>
    <tr>
      <th scope="row"><label for="">Lương của giáo viên </label></th>
     
     </tr>
     <tr>
      <th scope="row">
      <input type="text" class="input" id="salary" style="border: none; width: 100%; outline: none" value="${data[0].salary}">  
    </th>
  
    </tr>
     <tr>
      <th scope="row">
      <button type="button" class="btn btn-success" onclick="update(${data[0].id})">Sửa thông tin giáo viên</button>
       <button type="button" class="btn btn-danger" onclick="loadHome()">Quay lại</button>
</th>
     
     </tr>
   
  </tbody>
  </div>
</table>
     `
    document.getElementById('display').innerHTML= str
    })
}
function update(id){
    let data={
        id:id,
        name:document.getElementById('name').value,
        age:document.getElementById('age').value,
        salary:document.getElementById('salary').value,
    }
    axios.put(`http://localhost:3000/teachers/${id}`,data).then(res=>{
        loadHome()
    })

}