function loadListSearch(){
    let data= {
        minAge: document.getElementById('minAge').value,
        maxAge: document.getElementById('maxAge').value,
        minSalary: document.getElementById('minSalary').value,
        maxSalary: document.getElementById('maxSalary').value,
        name: document.getElementById('name').value
    }
    console.log(data)
   axios.get('http://localhost:3000/teachers?'+'minAge='+data.minAge+'&maxAge='+data.maxAge +'&minSalary='+data.minSalary+'&maxSalary='+data.maxSalary+'&name='+data.name).then(res=>{
       let str=
           `
<div class="container-fluid">

         <h1 >Danh sách giáo viên </h1>
         <button type="button" class="btn btn-success" onclick="loadAdd()">Thêm giáo viên</button>
          <button type="button" class="btn btn-danger" onclick="loadHome()">Trang chủ</button>
    
        <div class="container">
                <div class="bg-white shadow" style="padding: 35px;">
                    <div class="row g-2">
                        <div class="col-md-10">
                            <div class="row g-2">
                                <div class="col-md-2">
                                    <div  data-target-input="nearest">
                                        <input id ='minAge' type="text" class="form-control datetimepicker-input" placeholder=" Tuổi Thấp" data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div  data-target-input="nearest">
                                        <input id ='maxAge' type="text" class="form-control datetimepicker-input" placeholder=" Tuổi Cao" data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                                 <div class="col-md-2">
                                    <div  data-target-input="nearest">
                                        <input  id = 'minSalary' type="text" class="form-control datetimepicker-input" placeholder="Lương thấp" data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                                 <div class="col-md-2">
                                    <div data-target-input="nearest">
                                        <input  id = 'maxSalary' type="text" class="form-control datetimepicker-input" placeholder="Lương cao" data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                 </div>
                                 <div class="col-md-2">
                                    <div  data-target-input="nearest">
                                        <input  id = 'name' type="text" class="form-control datetimepicker-input" placeholder="Tên giáo viên" data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                 </div>
                             
                                 <div class="col-md-2" id="timkiem">
                                   <button class="btn btn-primary w-100" onclick="loadListSearch()">Tìm kiếm</button>
                                 </div>
                           </div>
                        
                    </div>
                </div>
            </div>
          <table class="table table-striped">
          <thead>
           <tr>
           <th scope="col">STT</th>
           <th scope="col">Tên</th>
           <th scope="col">Tuổi</th>
           <th scope="col">Lương</th>
           <th scope="col"></th>
         </tr>
       </thead>
        <tbody>
         `
       let data=res.data;
       for (let i = 0; i < data.length; i++) {
           str+=` <tr>
                  <th scope="row">${i+1}</th>
                  <td>${data[i].name}</td>
                  <td>${data[i].age}</td>
                  <td>${data[i].salary}</td>
                  <td>
                  <button type="button" class="btn btn-warning" onclick="loadEdit(${data[i].id})">Sửa</button>
                  <button type="button" class="btn btn-info" onclick="loadDelete(${data[i].id})">Xoá</button>
                      </td>
                  </tr>`
       }
       document.getElementById('display').innerHTML=str+`</tbody>
                                                                   </table>`
   })
}