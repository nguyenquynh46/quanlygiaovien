function loadAdd(){
    let str=`
<div class="container-fluid " style="width: 800px">
     <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">
       <h2>Form thêm giáo viên mới</h2>
</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><label for="">Tên của giáo viên</label></th>
     
     </tr>
     <tr>
      <th scope="row">
      <input type="text" class="input" id="name" style="border: none; width: 100%; outline: none">  
    </th>
  
    </tr>
    <tr>
      <th scope="row"><label for="" >Tuổi của giáo viên</label></th>
     
     </tr>
     <tr>
      <th scope="row">
      <input type="text" class="input" id="age" style="border: none; width: 100%; outline: none">  
    </th>
  
    </tr>
    <tr>
      <th scope="row"><label for="">Lương của giáo viên </label></th>
     
     </tr>
     <tr>
      <th scope="row">
      <input type="text" class="input" id="salary" style="border: none; width: 100%; outline: none">  
    </th>
  
    </tr>
     <tr>
      <th scope="row">
      <button type="button" class="btn btn-success" onclick="save()">Thêm giáo viên</button>
       <button type="button" class="btn btn-danger" onclick="loadHome()">Quay lại</button>
</th>
     
     </tr>
   
  </tbody>
  </div>
</table>
     `
    document.getElementById('display').innerHTML=str
}
function save(){
    let data={
        name:document.getElementById('name').value,
        age:document.getElementById('age').value,
        salary:document.getElementById('salary').value
    }
    axios.post('http://localhost:3000/teachers',data).then(res=>{
        loadHome()
    })
}